// src/components/Login.js
import React, { useState } from 'react';
import { login } from '../services/api';
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            setMessage('Login successful!');
            localStorage.setItem('token', response.data.token); // Save the token for authenticated routes
        } catch (error) {
            setMessage('Error: Unable to log in. Please try again.');
        }
    };
 
    return (
        <div>
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};
 
export default Login;
