const Internship = require('../models/Internship');

// Function to get all internships
const getInternships = async (req, res) => {
    try {
        const internships = await Internship.find();
        res.json(internships);
    } catch (err) {
        console.error('Error fetching internships:', err.message);
        res.status(500).send('Server Error');
    }
};

// Function to apply for an internship
const applyForInternship = async (req, res) => {
    try {
        const { userId, internshipId } = req.body;

        // Check if the user is applying for the same internship again
        const existingApplication = await Internship.findOne({ _id: internshipId, applicants: userId });
        if (existingApplication) {
            return res.status(400).json({ msg: 'You have already applied for this internship' });
        }

        // Update internship document to add the user as an applicant
        const updatedInternship = await Internship.findByIdAndUpdate(
            internshipId,
            { $push: { applicants: userId } },
            { new: true }
        );

        res.json(updatedInternship);
    } catch (err) {
        console.error('Error applying for internship:', err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = { getInternships, applyForInternship };