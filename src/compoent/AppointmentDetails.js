import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentDetails.css';

const AppointmentDetails = ({ match }) => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    // Fetch appointment details based on the appointment ID from the URL
    const appointmentId = match.params.appointmentId;

    axios.get(`http://localhost:9096/api/appointments/getAllAppointments${appointmentId}`)
      .then(response => {
        setAppointment(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointment details:', error);
      });
  }, [match.params.appointmentId]);

  if (!appointment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="appointment-details-container">
      <h2>Appointment Details</h2>
      <div className="appointment-details">
        <div>
          <h3>Patient Name</h3>
          <p>{appointment.patientName}</p>
        </div>
        <div>
          <h3>Doctor Name</h3>
          <p>{appointment.doctorName}</p>
        </div>
        <div>
          <h3>Appointment Date & Time</h3>
          <p>{appointment.appointmentDateTime}</p>
        </div>
        <div>
          <h3>Age</h3>
          <p>{appointment.age}</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>{appointment.address}</p>
        </div>
        <div>
          <h3>Contact No</h3>
          <p>{appointment.contactNo}</p>
        </div>
        <div>
          <h3>Notes</h3>
          <p>{appointment.notes}</p>
        </div>
        {/* You can add more appointment details here */}
      </div>
    </div>
  );
};

export default AppointmentDetails;
