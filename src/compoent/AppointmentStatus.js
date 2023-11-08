import React, { useState, useEffect } from 'react';
import './AppointmentStatus.css';
import axios from 'axios';

function AppointmentStatus() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const authToken = 'secret'; 
    //const fetchUsername = localStorage.getItem("username");
    const id = localStorage.getItem('id');
    axios.get(`http://localhost:9096/api/appointments/appointments/status/${id}`)
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching appointment status data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="appointment-status">
      <h2>Appointment Status</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>

                <h3>Patient Name: {appointment.patientName}</h3>
                <p>Appointment Date & Time: {appointment.appointmentDateTime}</p>
                <p>Status: {appointment.status}</p>
                {/* Add more appointment details */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AppointmentStatus;
