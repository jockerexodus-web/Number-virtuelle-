<?php
require 'config.php';

// Récupération des données POST envoyées par Twilio
$from    = $_POST['From']      ?? '';
$to      = $_POST['To']        ?? '';
$body    = $_POST['Body']      ?? '';
$msgSid  = $_POST['MessageSid'] ?? '';

// Vérification de la signature Twilio (sécurité — évite les faux POST)
$signature = $_SERVER['HTTP_X_TWILIO_SIGNATURE'] ?? '';
$url = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

$validator = new \Twilio\Security\RequestValidator(TWILIO_TOKEN);
if (!$validator->validate($signature, $url, $_POST)) {
    http_response_code(403);
    error_log("Webhook Twilio : signature invalide");
    exit('Forbidden');
}

// Vérifie qu'on connaît le numéro destinataire
$stmt = $pdo->prepare("SELECT id FROM numeros WHERE numero = ?");
$stmt->execute([$to]);
$numero = $stmt->fetch();

if (!$numero) {
    http_response_code(404);
    exit('Numéro inconnu');
}

// Anti-doublon (Twilio peut renvoyer plusieurs fois en cas de timeout)
$check = $pdo->prepare("SELECT id FROM messages WHERE twilio_sid = ?");
$check->execute([$msgSid]);
if ($check->fetch()) {
    http_response_code(200);
    exit('Déjà enregistré');
}

// Insertion du message en base
$insert = $pdo->prepare(
    "INSERT INTO messages (numero_id, expediteur, contenu, twilio_sid) 
     VALUES (?, ?, ?, ?)"
);
$insert->execute([$numero['id'], $from, $body, $msgSid]);

// Réponse TwiML (Twilio attend une réponse valide)
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?><Response></Response>';
