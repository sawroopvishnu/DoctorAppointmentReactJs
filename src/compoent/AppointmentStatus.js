import React, { useState, useEffect } from 'react';
import './AppointmentStatus.css';
import axios from 'axios';

function AppointmentStatus() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch appointment status data from your backend
    axios.get('http://localhost:9096/api/appointments/appointments/status/5')
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
                <p>Appointment Date: {appointment.appointmentDateTime}</p>
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
