import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DoctorLogin.css";

const Doctorlogin= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a POST request to the backend to authenticate the doctor
      const response = await axios.post('http://localhost:9096/api/auth/doctor/login', {
        username,
        password,
      });
     console.log('Doctor Login successful:', response.data);
      alert('Doctor Login successful');
      window.location.href = '/doctordashboard';
    } catch (error) {
      console.error('Error creating Doctor Login:', error);
      alert('Error creating Login. Please try again.');
    }
  };

  return (
    <div className="doctor-registration-form-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className="doctor-registration-form" onSubmit={handleSubmit}>
      <h2>Doctor Login</h2>
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
        <p>Don't have an account? <a href="/doctorregister">Register</a></p>
      </form>
    </div>
  );
};
export default Doctorlogin
