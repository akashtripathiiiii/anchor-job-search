const mongoose = require('mongoose');

// Profile Schema
const profileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String },
    mobile: { type: String },
    profilePic: { type: String },
    linkedIn: { type: String },
    gitHub: { type: String },
    resume: { type: String },
    education: [{
        type: {
            type: String,
            enum: ['School', 'College'],
            required: true
        },
        name: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true }
    }],
    projects: [{
        projectName: { type: String, required: true },
        projectDescription: { type: String, required: true },
        soloProject: { type: Boolean, default: false },
        projectLink: { type: String }
    }],
    experiences: [{
        type: {
            type: String,
            enum: ['Internship', 'Job'],
            required: true
        },
        companyName: { type: String, required: true },
        companyWebsite: { type: String },
        role: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        coverLetter: { type: String }
    }]
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
