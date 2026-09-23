<?php require 'config.php'; ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iVASMS Clone - Numéros virtuels</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <header><div class="container header-inner">
        <a href="index.php" class="logo">📱 iVASMS<span>Clone</span></a>
        <nav>
            <a href="index.php" class="active">Numéros</a>
            <a href="acheter_numero.php">⚙️ Admin</a>
        </nav>
    </div></header>

    <main class="container">
        <section class="hero">
            <h1>Recevez de vrais SMS en ligne</h1>
            <p>Numéros virtuels connectés à Twilio — réception instantanée.</p>
        </section>

        <h2>Numéros disponibles</h2>
        <div class="numeros-grid">
            <?php
            $stmt = $pdo->query("SELECT n.*, 
                (SELECT COUNT(*) FROM messages m WHERE m.numero_id = n.id) as nb_sms
                FROM numeros n WHERE n.disponible = 1 
                ORDER BY n.created_at DESC");
            while ($row = $stmt->fetch()):
            ?>
            <a href="sms.php?id=<?= $row['id'] ?>" class="numero-card">
                <div class="pays"><?= htmlspecialchars($row['pays']) ?></div>
                <div class="numero"><?= htmlspecialchars($row['numero']) ?></div>
                <div class="meta">
                    <span class="badge"><?= htmlspecialchars($row['operateur']) ?></span>
                    <span class="sms-count"><?= $row['nb_sms'] ?> SMS</span>
                </div>
            </a>
            <?php endwhile; ?>
        </div>
    </main>
    <footer><div class="container"><p>&copy; <?= date('Y') ?> iVASMS Clone</p></div></footer>
</body>
</html>
