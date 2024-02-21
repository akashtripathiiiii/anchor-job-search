import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('API_ENDPOINT_URL', { email, otp });
            console.log(response.data); // Handle successful login
        } catch (error) {
            console.error('Error logging in:', error); // Handle login error
        }
    };

    const handleSendOTP = async () => {
        try {
            await axios.post('SEND_OTP_ENDPOINT_URL', { email });
            console.log('OTP sent successfully'); // Handle successful OTP send
        } catch (error) {
            console.error('Error sending OTP:', error); // Handle OTP send error
        }
    };

    return (
        <div>
            <h2>Login via OTP</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>OTP:</label>
                    <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={handleSendOTP}>Send OTP</button>
        </div>
    );
};

export default Login;
