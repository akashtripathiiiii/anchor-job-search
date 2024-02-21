const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Registration
router.post('/register', async (req, res) => {
    try {
        const { email, otp } = req.body;
        // Check if OTP is valid (not implemented in this code)
        // Generate password hash (for demo purposes, we're not using passwords)
        const passwordHash = await bcrypt.hash(otp, 10);
        // Create new user
        const newUser = new User({ email, password: passwordHash });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// User Login
router.post('/login', async (req, res) => {
    try {
        const { email, otp } = req.body;
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        // Compare OTP (for demo purposes, we're not using passwords)
        const validOTP = await bcrypt.compare(otp, user.password);
        if (!validOTP) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
