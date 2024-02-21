const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to fetch all internships
router.get('/', internshipController.getInternships);

// Route to apply for an internship (protected route)
router.post('/apply', authMiddleware, internshipController.applyForInternship);

module.exports = router;
