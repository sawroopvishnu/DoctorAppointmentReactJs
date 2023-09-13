import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PatientLogin.css';

const PatientLogin = () => {
     const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend for authentication
      const response = await axios.post('http://localhost:9096/api/auth/patient/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      alert('Patient Login successfully!');
      window.location.href = '/patientdashboard';
    } catch (error) {
      console.error('Invalid credentials. Please try again:', error);
      alert('An error occurred. Please try again later');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
       
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
         <h2>Patient Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username (Email):</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/patientregister">Register</a>
        </p>
      </div>
    </div>
  );
};


export default PatientLogin;
