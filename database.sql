CREATE DATABASE IF NOT EXISTS ivasms_clone CHARACTER SET utf8mb4;
USE ivasms_clone;

CREATE TABLE numeros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(20) NOT NULL UNIQUE,      -- +33612345678
    pays VARCHAR(50) NOT NULL,
    operateur VARCHAR(50) DEFAULT 'Inconnu',
    twilio_sid VARCHAR(50) DEFAULT NULL,     -- SID Twilio du numéro
    disponible TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_id INT NOT NULL,
    expediteur VARCHAR(50) NOT NULL,
    contenu TEXT NOT NULL,
    twilio_sid VARCHAR(50) DEFAULT NULL,      -- SID du message (anti-doublon)
    recu_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (numero_id) REFERENCES numeros(id) ON DELETE CASCADE,
    UNIQUE KEY uniq_twilio (twilio_sid)
);

-- Exemple de données locales (seront remplacées par les vrais SMS)
INSERT INTO numeros (numero, pays, operateur) VALUES
('+33612345678', 'France', 'Orange'),
('+14155552671', 'USA', 'T-Mobile');
