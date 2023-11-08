import React, { useState, useEffect } from 'react';


const AppointmentCard = ({ appointment, onAccept, onReject }) => {
  return (
    <div className="card">
      <h1>Appointment Card</h1>
      <h3>Patient Name: {appointment.patientName}</h3>
      <p>Appointment Date & Time: {appointment.appointmentDateTime}</p>
      <p>Status: {appointment.status}</p>
      <button onClick={onAccept}>Accept</button> {/* Add an accept button */}
      <button onClick={onReject}>Reject</button> {/* Add a reject button */}
    </div>
  );
};

export default AppointmentCard;
