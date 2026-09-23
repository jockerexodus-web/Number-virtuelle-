// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.webhook = functions.https.onRequest(async (req, res) => {
    const { From, To, Body } = req.body;

    // Trouve le numéro dans Firebase
    const numerosSnap = await admin.database()
        .ref('numeros')
        .orderByChild('numero')
        .equalTo(To)
        .once('value');

    if (!numerosSnap.exists()) {
        return res.status(404).send('Numéro inconnu');
    }

    const [numeroId] = Object.keys(numerosSnap.val());

    // Ajoute le message
    await admin.database().ref(`messages/${numeroId}`).push({
        expediteur: From,
        contenu: Body,
        recu_at: Date.now()
    });

    // Incrémente le compteur
    const countRef = admin.database().ref(`numeros/${numeroId}/nb_sms`);
    await countRef.transaction(n => (n || 0) + 1);

    res.set('Content-Type', 'text/xml');
    res.send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
});
