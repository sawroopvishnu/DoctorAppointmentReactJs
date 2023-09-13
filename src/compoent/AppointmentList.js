import React from 'react';
import AppointmentCard from './AppointmentCard';

const AppointmentList = () => {
  const appointments = [
    {
      id: 1,
      patientName: 'John Smith',
      date: '2023-07-20',
      time: '10:00 AM',
      status: 'Pending',
    },
    // Add more appointment data here
  ];

  return (
    <div>
      <h2>Appointments</h2>
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default AppointmentList;
