import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './DoctorDashboard.css';
import DoctorProfile from './DoctorProfile';
import AppointmentList from './AppointmentList';
import AppointmentCard from './AppointmentCard';
import AppointmentDetails from './AppointmentDetails';
import AppointmentActions from './AppointmentActions';

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    // Fetch doctor profile data from the backend
    axios.get('http://localhost:9096/api/doctors/2')
      .then(response => {
        setDoctor(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctor profile:', error);
      });

    // Fetch doctor's appointments from the backend
    axios.get('http://localhost:9096/api/appointments/doctor/2')
      .then(response => {
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
        <nav>
          <ul>
            <li>
              <Link to="/doctorprofile">DoctorProfile</Link>
            </li>
            <li>
              <Link to="/appointmentlist">AppointmentList</Link>
            </li>
            <li>
              <Link to="/appointmentcard">Appointment Card</Link>
            </li>
            <li>
              <Link to="/appointmentdetails">Appointment Details</Link>
            </li>
            <li>
              <Link to="/appointmentactions">Appointment Actions</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/doctorprofile" component={DoctorProfile} />
          <Route path="/appointmentlist" component={AppointmentList} />
          <Route path="/appointmentcard" component={AppointmentCard} />
          <Route path="/appointmentdetails" component={AppointmentDetails} />
          <Route path="/appointmentactions" component={AppointmentActions} />
        </Switch>
      </div>
    </Router>
  );
}
export default DoctorDashboard;
