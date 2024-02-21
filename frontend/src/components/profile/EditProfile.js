import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [linkedinLink, setLinkedinLink] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [resume, setResume] = useState(null);

    useEffect(() => {
        // Fetch user's profile data and populate the form
        axios.get('API_ENDPOINT_URL')
            .then(response => {
                const profileData = response.data;
                setName(profileData.name);
                setMobile(profileData.mobile);
                setProfilePic(profileData.profilePic);
                setLinkedinLink(profileData.linkedinLink);
                setGithubLink(profileData.githubLink);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare form data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('mobile', mobile);
        formData.append('profilePic', profilePic);
        formData.append('linkedinLink', linkedinLink);
        formData.append('githubLink', githubLink);
        if (resume) {
            formData.append('resume', resume);
        }

        try {
            // Submit the form data to update the profile
            const response = await axios.post('API_ENDPOINT_URL', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); // Handle successful profile update
        } catch (error) {
            console.error('Error updating profile:', error); // Handle profile update error
        }
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} />
                </div>
                <div>
                    <label>LinkedIn Link:</label>
                    <input type="text" value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} />
                </div>
                <div>
                    <label>GitHub Link:</label>
                    <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
                </div>
                <div>
                    <label>Resume:</label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditProfile;
