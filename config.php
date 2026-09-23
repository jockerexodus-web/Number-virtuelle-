<?php
session_start();

// ⚙️ Base de données
define('DB_HOST', 'localhost');
define('DB_NAME', 'ivasms_clone');
define('DB_USER', 'root');
define('DB_PASS', '');

// 🔑 Twilio — récupère sur https://console.twilio.com
define('TWILIO_SID',   'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
define('TWILIO_TOKEN', 'your_auth_token_here');

// 🛡️ Mot de passe pour accéder à la page admin (achat de numéros)
define('ADMIN_PASSWORD', 'change_me_please');

// Chargement de Composer (SDK Twilio)
require __DIR__ . '/vendor/autoload.php';

use Twilio\Rest\Client;

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    die("Erreur BDD : " . $e->getMessage());
}

// Client Twilio global
$twilio = new Client(TWILIO_SID, TWILIO_TOKEN);

// Utilitaire : temps écoulé
function timeAgo($datetime) {
    $diff = time() - strtotime($datetime);
    if ($diff < 60) return "à l'instant";
    if ($diff < 3600) return floor($diff / 60) . " min";
    if ($diff < 86400) return floor($diff / 3600) . " h";
    return floor($diff / 86400) . " j";
}
