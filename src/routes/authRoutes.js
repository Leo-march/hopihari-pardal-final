// src/routes/authRoutes.js - Rotas de autenticação
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para registro de usuário
router.post('/register', authController.register);

// Rota para login de usuário
router.post('/login', authController.login);

// Rota para a página de dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});


module.exports = router;

// ==============================================================