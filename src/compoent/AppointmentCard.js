import React from 'react';

const AppointmentCard = ({ appointment }) => {
  return (
    <div>
    <h1>AppointmentCard </h1>
      <h3>{appointment.patientName}</h3>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
      <p>Status: {appointment.status}</p>
      {/* Add buttons to accept or reject the appointment */}
    </div>
  );
};

export default AppointmentCard;
