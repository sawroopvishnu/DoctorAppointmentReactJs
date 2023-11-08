import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './DoctorDashboard.css';
import DoctorProfile from './DoctorProfile';
import AppointmentList from './AppointmentList';
import AppointmentCard from './AppointmentCard';
import AppointmentDetails from './AppointmentDetails';
import LogoutButton from './LogoutButton';

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState();
  const [username, setUsername] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState();


  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    window.location.href = '/doctorlogin';
  };

  useEffect(() => {
    // Fetch doctor profile data from the backend
    const authToken = 'secret'; 
    const fetchUsername = localStorage.getItem("username");
    const id = localStorage.getItem("id"); 
      fetch(`http://localhost:9096/api/doctors/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': authToken,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
   /*    console.log('Doctor data......................');
        console.log(JSON.stringify(data));
        console.log('user name ......................');
        console.log(data.username);*/
        setDoctor(data);
        setUsername(data.username);
      })
      .catch(error => {
        console.error('Error fetching doctor profile:', error);
      });

    // Fetch doctor's appointments from the backend
    axios.get(`http://localhost:9096/api/appointments/doctor/${id}`)
      .then(response => {
    /*   console.log('Appointment data.......................');
        console.log(JSON.stringify(response.data));*/
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleAppointmentUpdate = (appointmentId, status) => {
    // Update the appointment status in the frontend state
    const updatedAppointments = appointments.map(appointment => {
      if (appointment.id === appointmentId) {
        return { ...appointment, status };
      }
      return appointment;
    });

    setAppointments(updatedAppointments);
  };

  return (
     <Router>
      <div className="patient-dashboard">
        <header>
          <h1>Doctor Dashboard</h1>
          <div className="username">
            Doctor Username: {username}
          </div>
          <div>
            { doctor && <p>Doctor Name: {doctor.fullName}</p>}
            {/* Add other patient details as needed */}
          </div>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/doctorprofile">DoctorProfile</Link>
            </li>
            <li>
              <Link to="/appointmentlist">AppointmentList</Link>
            </li>
           
            <li>
              <Link to="/appointment/:id">Appointment Details</Link>
            </li>
            <li>
            <LogoutButton onLogout={handleLogout} />
               </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/doctorprofile" component={DoctorProfile} />
          <Route path="/appointmentlist" component={AppointmentList} />
          <Route path="/appointmentcard" component={AppointmentCard} />
          //<Route path="/appointmentdetails" component={AppointmentDetails} />
           <Route path="/appointment/:id" component={AppointmentDetails} />
        </Switch>
      </div>
    </Router>
  );
}
export default DoctorDashboard;
