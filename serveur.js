require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const coursRoutes = require('./routes/cours');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Limite les tentatives de connexion
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { erreur: 'Trop de tentatives. Réessayez dans 15 minutes.' }
});
app.use('/api/auth/connexion', limiter);
app.use('/api/auth/inscription', limiter);

app.use('/api/auth', authRoutes);
app.use('/api', coursRoutes);

// Pages HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/bac', (req, res) => res.sendFile(path.join(__dirname, 'public/bac.html')));
app.get('/exercices', (req, res) => res.sendFile(path.join(__dirname, 'public/exercices.html')));
app.get('/inscription', (req, res) => res.sendFile(path.join(__dirname, 'public/inscription.html')));
app.get('/connexion', (req, res) => res.sendFile(path.join(__dirname, 'public/connexion.html')));
app.get('/verifier', (req, res) => res.sendFile(path.join(__dirname, 'public/verifier.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public/dashboard.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ TCHATCHIBARA-WEB School en ligne sur ${process.env.BASE_URL}`));
