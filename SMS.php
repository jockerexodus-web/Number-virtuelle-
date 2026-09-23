<?php 
require 'config.php';

$id = (int)($_GET['id'] ?? 0);
$stmt = $pdo->prepare("SELECT * FROM numeros WHERE id = ?");
$stmt->execute([$id]);
$numero = $stmt->fetch();

if (!$numero) {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMS - <?= htmlspecialchars($numero['numero']) ?></title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <header>
        <div class="container header-inner">
            <a href="index.php" class="logo">📱 iVASMS<span>Clone</span></a>
            <nav>
                <a href="index.php">Numéros</a>
                <a href="acheter_numero.php">⚙️ Admin</a>
            </nav>
        </div>
    </header>

    <main class="container">
        <a href="index.php" class="back-link">← Retour aux numéros</a>

        <div class="sms-header">
            <div>
                <h1><?= htmlspecialchars($numero['numero']) ?></h1>
                <p>
                    <?= htmlspecialchars($numero['pays']) ?> · 
                    <?= htmlspecialchars($numero['operateur']) ?>
                    <span class="live-dot"></span>
                    <span class="live-text">En direct</span>
                </p>
            </div>
            <button id="refresh-btn" class="btn-refresh" data-id="<?= $numero['id'] ?>">
                🔄 Actualiser
            </button>
        </div>

        <div class="copy-hint">
            💡 Le numéro se copie en un clic — colle-le sur le site où tu veux recevoir un code.
        </div>

        <div id="messages-container" class="messages">
            <?php
            $stmt = $pdo->prepare("SELECT * FROM messages WHERE numero_id = ? ORDER BY recu_at DESC");
            $stmt->execute([$id]);
            $messages = $stmt->fetchAll();
            
            if (empty($messages)):
            ?>
                <div class="empty">
                    <div class="empty-icon">📭</div>
                    <p>Aucun message pour le moment...</p>
                    <small>En attente de nouveaux SMS (mise à jour auto toutes les 5s)</small>
                </div>
            <?php else: foreach ($messages as $msg):
                // Détection de code de vérification
                preg_match('/\b\d{4,8}\b/', $msg['contenu'], $matches);
                $code = $matches[0] ?? null;
            ?>
                <div class="message">
                    <div class="msg-header">
                        <strong><?= htmlspecialchars($msg['expediteur']) ?></strong>
                        <span class="time"><?= timeAgo($msg['recu_at']) ?></span>
                    </div>
                    <div class="msg-body"><?= nl2br(htmlspecialchars($msg['contenu'])) ?></div>
                    <?php if ($code): ?>
                        <div class="code-box">
                            <span class="code-label">Code détecté :</span>
                            <span class="code-value" data-code="<?= $code ?>"><?= $code ?></span>
                            <button class="btn-copy" data-code="<?= $code ?>">Copier</button>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endforeach; endif; ?>
        </div>
    </main>

    <script src="assets/script.js"></script>
</body>
</html>
