
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PatientRegistration.css';

const PatientRegister = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const patientData = {
        fullName,
        username,
        password,
      };

      const response = await axios.post('http://localhost:9096/api/auth/patient/register', patientData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Patient Registration successfully:', response.data);
      alert('Patient Registration successfully!');
      window.location.href = '/patientlogin';
    } catch (error) {
      console.error('Error creating Patient Registration:', error);
      alert('Error creating Patient Registration. Please try again.');
    }
  };

  return (
    <div className="patient-registration-form-container">
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form className="patient-registration-form" onSubmit={handleSubmit}>
      <h2>Patient Registration</h2>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        {/* Username */}
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
        {/* Password */}
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
        <button type="submit">Register</button>
         <p>Don't have an account? <a href="/patientlogin">Patient Login</a></p>
      </form>
    </div>
  );
};

export default PatientRegister;
