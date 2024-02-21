import React from 'react';
import axios from 'axios';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await axios.get('LOGOUT_ENDPOINT_URL');
            console.log('Logout successful'); // Handle successful logout
        } catch (error) {
            console.error('Error logging out:', error); // Handle logout error
        }
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
