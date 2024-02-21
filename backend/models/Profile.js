const mongoose = require('mongoose');

// Profile Schema
const profileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // Add other profile fields here (e.g., name, mobile, education, experience)
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
