import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Update with your API base URL

const api = axios.create({
    baseURL,
});

// Function to fetch user profile data
export const fetchUserProfile = () => {
    return api.get('/profile');
};

// Function to update user profile data
export const updateProfile = (formData) => {
    return api.post('/profile/update', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default api;
