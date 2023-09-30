import React, { useState, useEffect } from 'react';
import './PatientProfile.css';
import axios from 'axios';

function PatientProfile() {
  const [id, setid] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch patient data from your backend
      const id = localStorage.getItem("id"); 
            console.log('patient call..................................');
            console.log(id);
    
    axios.get(`http://localhost:9096/api/patients/getpatient/${id}`)
      .then((response) => {
        console.log('PatientProfile Data fetching..................................');
        console.log(JSON.stringify(response.data));
        setid(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
        setLoading(false);
      });
  }, []);

  
  // const [loading, setLoading] = useState(true);
  // const [patient, setPatient] = useState("");
  // const [id, setid] = useState({});

  // useEffect(() => {
  //   const id = localStorage.getItem("id");

  //   fetch(`${process.env.REACT_APP_BASE}/api/patients/getpatient/${id}`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setPatient(data.fullName);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, [patient]);


  return (
    <div className="patient-profile">
      <h2>Patient Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {id.fullName}</p>
          <p>Email: {id.username}</p>
          {/* Add more patient profile information */}
        </div>
      )}
    </div>
  );
}

export default PatientProfile;
