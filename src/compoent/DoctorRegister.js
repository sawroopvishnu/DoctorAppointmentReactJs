import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DoctorRegistration.css"

const DoctorRegister= () => {
  const [fullName, setFullName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
   const [ErrorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create an object with the doctor's registration data
      const doctorData = {
        fullName,
        specialization,
        qualification,
        experience,
        profileImageUrl,
        username,
        password,
      };

      // Send a POST request to the server to register the doctor
      const response = await axios.post('http://localhost:9096/api/auth/doctor/register', doctorData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Doctor Registration successfully:', response.data);
      alert('Doctor Registration successfully!');
      window.location.href = '/doctorlogin';
    } catch (error) {
      console.error('Error creating Doctor Registration:', error);
      alert('Error creating Doctor Registration. Please try again.');

    }
  };


    return (
           <div className="doctor-registration-form-container">
      
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form className="doctor-registration-form" onSubmit={handleSubmit}>
      <h2>Doctor Registration</h2>
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
        <div className="form-group">
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profileImageUrl">Profile Image URL:</label>
          <input
            type="text"
            id="profileImageUrl"
            value={profileImageUrl}
            onChange={(e) => setProfileImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
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
        <button type="submit">Register</button>
        <p>Don't have an account? <a href="/doctorlogin">Doctor Login</a></p>
      </form>
      
    </div>
  );
};
export default DoctorRegister
