import React, { useState, useEffect } from 'react';
import './PatientProfile.css';
import axios from 'axios';

function PatientProfile() {
  const [patientData, setPatientData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch patient data from your backend
    axios.get('/api/patient/profile')
      .then((response) => {
        setPatientData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="patient-profile">
      <h2>Patient Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {patientData.name}</p>
          <p>Email: {patientData.email}</p>
          {/* Add more patient profile information */}
        </div>
      )}
    </div>
  );
}

export default PatientProfile;
