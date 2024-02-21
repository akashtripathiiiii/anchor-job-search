const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to register a new user
router.post('/register', authController.register);

// Route to login an existing user
router.post('/login', authController.login);

// Route to logout a user (optional, depending on your application requirements)
router.get('/logout', authController.logout);

module.exports = router;
