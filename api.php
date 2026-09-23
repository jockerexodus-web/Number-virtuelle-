<?php
require 'config.php';
header('Content-Type: application/json');

$id = (int)($_GET['id'] ?? 0);

if (!$id) {
    echo json_encode(['error' => 'ID manquant']);
    exit;
}

// Vérifie que le numéro existe
$check = $pdo->prepare("SELECT numero FROM numeros WHERE id = ?");
$check->execute([$id]);
if (!$check->fetch()) {
    echo json_encode(['error' => 'Numéro inconnu']);
    exit;
}

$stmt = $pdo->prepare(
    "SELECT id, expediteur, contenu, recu_at 
     FROM messages 
     WHERE numero_id = ? 
     ORDER BY recu_at DESC 
     LIMIT 50"
);
$stmt->execute([$id]);
$messages = $stmt->fetchAll();

foreach ($messages as &$msg) {
    // Détection de code (4 à 8 chiffres)
    preg_match('/\b\d{4,8}\b/', $msg['contenu'], $matches);
    $msg['code'] = $matches[0] ?? null;

    $msg['time_ago'] = timeAgo($msg['recu_at']);
    $msg['contenu']  = htmlspecialchars($msg['contenu']);
    $msg['expediteur'] = htmlspecialchars($msg['expediteur']);
}

echo json_encode([
    'messages' => $messages,
    'count'    => count($messages),
    'server_time' => date('H:i:s')
]);
