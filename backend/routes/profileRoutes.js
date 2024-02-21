const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');

// Create or update user profile
router.post('/update', auth, async (req, res) => {
    try {
        const profileData = req.body;
        const userId = req.userId; // Extracted from JWT token in auth middleware
        let profile = await Profile.findOne({ user: userId });
        if (!profile) {
            // Create new profile
            profile = new Profile({ user: userId, ...profileData });
        } else {
            // Update existing profile
            profile = await Profile.findOneAndUpdate({ user: userId }, profileData, { new: true });
        }
        await profile.save();
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
