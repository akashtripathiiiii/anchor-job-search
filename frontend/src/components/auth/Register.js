import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('API_ENDPOINT_URL', { email, otp });
            console.log(response.data); // Handle successful registration
            setRegistered(true);
        } catch (error) {
            console.error('Error registering:', error); // Handle registration error
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
            <h2>Register via OTP</h2>
            {registered ? (
                <div>
                    <p>Registration successful!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>OTP:</label>
                        <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} required />
                    </div>
                    <button type="submit">Register</button>
                </form>
            )}
            {!registered && <button onClick={handleSendOTP}>Send OTP</button>}
        </div>
    );
};

export default Register;
