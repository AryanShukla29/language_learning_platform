// src/components/Register.js
import React, { useState } from 'react';
import { register } from '../services/api';
 
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            setMessage('Registration successful! You can now log in.');
        } catch (error) {
            setMessage('Error: Unable to register. Please try again.');
        }
    };
 
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
};
 
export default Register;