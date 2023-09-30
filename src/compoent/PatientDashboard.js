import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './PatientDashboard.css';
import CreateAppointment from './CreateAppointment';
import PatientProfile from './PatientProfile';
import AppointmentStatus from './AppointmentStatus';
import UploadAppointments from './UploadAppointments';

function PatientDashboard() {
  const [patient, setPatient] = useState({});
  const [username, setUsername] = useState('');

  useEffect(() => {
    const authToken = 'secret'; 
    const fetchUsername = localStorage.getItem("username"); 

    fetch(`http://localhost:9096/api/patients/find/${fetchUsername}`, {
      method: 'GET',
      headers: {
        'Authorization': authToken,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPatient(data);
        setUsername(data.username);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  return (
    <Router>
      <div className="patient-dashboard">
        <header>
        <h1>Patient Dashboard</h1>
          <div className="username">
            Patient Username: {username}
          </div>

          <div>
            
            <p>Patient Name: {patient.fullName}</p>
            {/* Add other patient details as needed */}
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/profile">Patient Profile</Link>
              </li>
              <li>
                <Link to="/appointments">Appointment Status</Link>
              </li>
              <li>
                <Link to="/createappointment">Create Appointment</Link>
              </li>
              <li>
                <Link to="/upload-appointments">Upload Appointments</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/profile" component={PatientProfile} />
          <Route path="/appointments" component={AppointmentStatus} />
          <Route path="/createappointment" component={CreateAppointment} />
          <Route path="/upload-appointments" component={UploadAppointments} />
        </Switch>
      </div>
    </Router>
  );
}

export default PatientDashboard;
