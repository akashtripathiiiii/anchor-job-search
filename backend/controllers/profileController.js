const Profile = require('../models/Profile');

// Function to create a new profile
const createProfile = async (req, res) => {
    const { userId, name, mobile, profilePic, linkedIn, github, resume, education, projects, experiences } = req.body;

    try {
        // Check if profile already exists for the user
        let existingProfile = await Profile.findOne({ user: userId });

        if (existingProfile) {
            return res.status(400).json({ msg: 'Profile already exists for this user' });
        }

        // Create new profile
        const newProfile = new Profile({
            user: userId,
            name,
            mobile,
            profilePic,
            linkedIn,
            github,
            resume,
            education,
            projects,
            experiences
        });

        // Save profile to database
        await newProfile.save();

        res.status(201).json({ msg: 'Profile created successfully', profile: newProfile });
    } catch (err) {
        console.error('Error creating profile:', err.message);
        res.status(500).send('Server Error');
    }
};

// Function to update an existing profile
const updateProfile = async (req, res) => {
    const { userId, name, mobile, profilePic, linkedIn, github, resume, education, projects, experiences } = req.body;

    try {
        // Find and update profile
        let profile = await Profile.findOne({ user: userId });

        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }

        profile.name = name;
        profile.mobile = mobile;
        profile.profilePic = profilePic;
        profile.linkedIn = linkedIn;
        profile.github = github;
        profile.resume = resume;
        profile.education = education;
        profile.projects = projects;
        profile.experiences = experiences;

        await profile.save();

        res.json({ msg: 'Profile updated successfully', profile });
    } catch (err) {
        console.error('Error updating profile:', err.message);
        res.status(500).send('Server Error');
    }
};

// Function to get profile by user ID
const getProfile = async (req, res) => {
    const userId = req.params.userId;

    try {
        const profile = await Profile.findOne({ user: userId });

        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }

        res.json(profile);
    } catch (err) {
        console.error('Error fetching profile:', err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = { createProfile, updateProfile, getProfile };
