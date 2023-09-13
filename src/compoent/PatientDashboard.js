import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './PatientDashboard.css';
import CreateAppointment from './CreateAppointment';
import PatientProfile from './PatientProfile';
import AppointmentStatus from './AppointmentStatus';
import UploadAppointments from './UploadAppointments';

function PatientDashboard() {
  const [patientData, setPatientData] = useState(null);
  const [patientUsername, setPatientUsername] = useState('');

  useEffect(() => {
    // Fetch patient data from the backend
    fetch('http://localhost:9096/api/auth/patient/login/1', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer your-auth-token', // Replace with your authentication token
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientData(data);
        // Assuming 'username' is the field in the data that contains the username
        setPatientUsername(data.username);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  return (
    <Router>
      <div className="patient-dashboard">
        <header>
          <div className="username">
            Patient Username: {patientUsername}
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
