// src/routes/authRoutes.js - Rotas de autenticação
const express = require('express');
const path = require('path');
const router = express.Router();
const authController = require('../controllers/authControllers'); // Corrigido: authControllers em vez de authController

// Rota para registro de usuário
router.post('/register', authController.register);

// Rota para login de usuário
router.post('/login', authController.login);

// Rota para a página de dashboard (movida para app.js)
// Esta rota não deve estar aqui pois 'app' não está definido neste arquivo

module.exports = router;