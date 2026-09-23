<?php
require 'config.php';

// Auth admin basique
if (!isset($_SESSION['admin'])) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['password'] ?? '') === ADMIN_PASSWORD) {
        $_SESSION['admin'] = true;
    } else {
        ?>
        <!DOCTYPE html>
        <html><head><meta charset="UTF-8"><title>Admin</title>
        <link rel="stylesheet" href="assets/style.css"></head><body>
        <main class="container" style="max-width:400px;margin-top:100px">
            <h1>🔒 Admin</h1>
            <form method="POST" class="message" style="margin-top:20px">
                <input type="password" name="password" placeholder="Mot de passe" 
                       style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px" required>
                <button class="btn-refresh" style="width:100%;margin-top:12px">Connexion</button>
            </form>
        </main></body></html>
        <?php
        exit;
    }
}

$message = '';

// Achat d'un numéro
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['pays'])) {
    $pays = $_POST['pays']; // ex: 'FR', 'US', 'GB'
    
    try {
        // Recherche des numéros disponibles
        $dispos = $twilio->availablePhoneNumbers($pays)
                         ->local
                         ->read(['smsEnabled' => true], 1);

        if (empty($dispos)) {
            $message = "❌ Aucun numéro disponible pour $pays";
        } else {
            $numeroTrouve = $dispos[0]->phoneNumber;
            
            // Achat du numéro
            $achat = $twilio->incomingPhoneNumbers->create([
                'phoneNumber' => $numeroTrouve,
                'smsUrl'      => 'https://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/webhook.php',
                'smsMethod'   => 'POST'
            ]);

            // Insertion en BDD
            $stmt = $pdo->prepare(
                "INSERT INTO numeros (numero, pays, operateur, twilio_sid) 
                 VALUES (?, ?, 'Twilio', ?)"
            );
            $stmt->execute([$numeroTrouve, $pays, $achat->sid]);

            $message = "✅ Numéro acheté : $numeroTrouve";
        }
    } catch (Exception $e) {
        $message = "❌ Erreur : " . $e->getMessage();
    }
}

// Suppression d'un numéro (libère chez Twilio + supprime en BDD)
if (isset($_GET['delete'])) {
    $id = (int)$_GET['delete'];
    $stmt = $pdo->prepare("SELECT twilio_sid FROM numeros WHERE id = ?");
    $stmt->execute([$id]);
    $n = $stmt->fetch();
    if ($n && $n['twilio_sid']) {
        try {
            $twilio->incomingPhoneNumbers($n['twilio_sid'])->delete();
        } catch (Exception $e) {}
    }
    $pdo->prepare("DELETE FROM numeros WHERE id = ?")->execute([$id]);
    header('Location: acheter_numero.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Admin - Numéros</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header><div class="container header-inner">
    <a href="index.php" class="logo">📱 iVASMS<span>Clone</span></a>
</div></header>

<main class="container">
    <h1 style="margin:30px 0 20px">Panneau Admin</h1>

    <?php if ($message): ?>
        <div class="message" style="margin-bottom:20px"><?= htmlspecialchars($message) ?></div>
    <?php endif; ?>

    <div class="sms-header">
        <div>
            <h2 style="font-size:18px">Acheter un numéro Twilio</h2>
            <p style="color:#7f8c8d;font-size:13px">Coût : ~1-2$ /mois selon le pays</p>
        </div>
    </div>

    <form method="POST" class="message" style="display:flex;gap:10px;align-items:center;margin-bottom:30px">
        <select name="pays" style="padding:10px;border:1px solid #ddd;border-radius:8px;flex:1" required>
            <option value="">-- Choisir un pays --</option>
            <option value="FR">🇫🇷 France</option>
            <option value="US">🇺🇸 USA</option>
            <option value="GB">🇬🇧 Royaume-Uni</option>
            <option value="DE">🇩🇪 Allemagne</option>
            <option value="BE">🇧🇪 Belgique</option>
            <option value="CA">🇨🇦 Canada</option>
            <option value="ES">🇪🇸 Espagne</option>
        </select>
        <button class="btn-refresh">Acheter</button>
    </form>

    <h2>Mes numéros</h2>
    <div class="messages">
        <?php
        $numeros = $pdo->query("SELECT * FROM numeros ORDER BY created_at DESC")->fetchAll();
        foreach ($numeros as $n): ?>
            <div class="message" style="display:flex;justify-content:space-between;align-items:center">
                <div>
                    <strong><?= htmlspecialchars($n['numero']) ?></strong> 
                    <span style="color:#7f8c8d"> — <?= htmlspecialchars($n['pays']) ?></span>
                </div>
                <a href="?delete=<?= $n['id'] ?>" 
                   onclick="return confirm('Supprimer ce numéro ?')"
                   style="color:#e74c3c;text-decoration:none;font-weight:600">🗑 Supprimer</a>
            </div>
        <?php endforeach; ?>
    </div>

    <div style="background:#fff3cd;padding:16px;border-radius:8px;margin:30px 0;border-left:4px solid #ffc107">
        <strong>⚠️ Configurer le webhook</strong><br>
        Ton URL webhook doit être accessible publiquement :<br>
        <code style="background:#fff;padding:4px 8px;border-radius:4px;display:inline-block;margin-top:6px">
        https://TON-DOMAINE.com/webhook.php
        </code>
    </div>
</main>
</body>
</html>
