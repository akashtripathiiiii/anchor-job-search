import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        // Fetch user's profile data
        axios.get('API_ENDPOINT_URL')
            .then(response => {
                setProfileData(response.data);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    if (!profileData) {
        return <div>Loading...</div>; // Render loading indicator while fetching data
    }

    return (
        <div>
            <h2>Profile</h2>
            <div>
                <p><strong>Name:</strong> {profileData.name}</p>
                <p><strong>Mobile:</strong> {profileData.mobile}</p>
                <p><strong>Profile Picture:</strong> {profileData.profilePic}</p>
                <p><strong>LinkedIn:</strong> <a href={profileData.linkedinLink}>{profileData.linkedinLink}</a></p>
                <p><strong>GitHub:</strong> <a href={profileData.githubLink}>{profileData.githubLink}</a></p>
                <p><strong>Resume:</strong> <a href={profileData.resumeLink}>Download Resume</a></p>
                {/* Education Details */}
                <h3>Education Details</h3>
                <p><strong>Type (School/College):</strong> {profileData.education.type}</p>
                <p><strong>School / College Name:</strong> {profileData.education.schoolCollege}</p>
                <p><strong>Start Date:</strong> {profileData.education.startDate}</p>
                <p><strong>End Date:</strong> {profileData.education.endDate}</p>
                {/* Project Details */}
                <h3>Project Details</h3>
                <p><strong>Project Name:</strong> {profileData.project.projectName}</p>
                <p><strong>Project Description:</strong> {profileData.project.projectDescription}</p>
                <p><strong>Solo Project / Group Project:</strong> {profileData.project.projectType}</p>
                <p><strong>Project Link:</strong> <a href={profileData.project.projectLink}>{profileData.project.projectLink}</a></p>
                {/* Past Experience details */}
                <h3>Past Experience details</h3>
                {profileData.experience.map((exp, index) => (
                    <div key={index}>
                        <p><strong>Type (Internship / Job):</strong> {exp.type}</p>
                        <p><strong>Company Name:</strong> {exp.companyName}</p>
                        <p><strong>Company Website:</strong> <a href={exp.companyWebsite}>{exp.companyWebsite}</a></p>
                        <p><strong>Role:</strong> {exp.role}</p>
                        <p><strong>Start Date:</strong> {exp.startDate}</p>
                        <p><strong>End Date:</strong> {exp.endDate}</p>
                        <p><strong>Cover Letter:</strong> {exp.coverLetter}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
