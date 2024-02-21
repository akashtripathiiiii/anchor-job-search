const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const profileController = require('../controllers/profileController');

// Protected route to fetch user profile
router.get('/protected-route', authMiddleware, profileController.getProfile);

module.exports = router;
