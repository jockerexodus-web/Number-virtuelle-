const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const router = express.Router();

function authOptionnel(req, res, next) {
    const token = req.cookies?.token;
    if (token) {
        try { req.user = jwt.verify(token, process.env.JWT_SECRET); } catch {}
    }
    next();
}

// Liste des cours (filtré par classe)
router.get('/cours', authOptionnel, (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data/cours.json'), 'utf-8'));
    const { classe } = req.query;
    let resultat = data;
    if (classe) resultat = data.filter(c => c.classe.toLowerCase() === classe.toLowerCase());
    res.json(resultat);
});

// Détail d'un cours (protégé)
router.get('/cours/:id', authOptionnel, (req, res) => {
    if (!req.user) return res.status(401).json({ erreur: 'Connectez-vous pour accéder au cours complet.' });
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data/cours.json'), 'utf-8'));
    const cours = data.find(c => c.id === req.params.id);
    if (!cours) return res.status(404).json({ erreur: 'Cours introuvable.' });
    res.json(cours);
});

// Liste des exercices (filtré par matière/classe)
router.get('/exercices', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data/exercices.json'), 'utf-8'));
    const { matiere, classe } = req.query;
    let resultat = data;
    if (matiere) resultat = resultat.filter(e => e.matiere.toLowerCase() === matiere.toLowerCase());
    if (classe) resultat = resultat.filter(e => e.classe.toLowerCase() === classe.toLowerCase());
    res.json(resultat);
});

module.exports = router;
