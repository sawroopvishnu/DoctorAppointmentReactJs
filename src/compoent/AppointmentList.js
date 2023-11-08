import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppointmentCard from './AppointmentCard';
import './AppointmentList.css';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('id');
    axios
      .get(`http://localhost:9096/api/appointments/doctor/${id}`)
      .then((response) => {
        console.log('Appointment data.......................')
        console.log(JSON.stringify(response.data))
        setAppointments(response.data)
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error)
      })
  }, [])

  const handleAccept = (id) => {
    console.log('Accepting appointment with ID:', id)
    axios
      .put(`http://localhost:9096/api/doctors/appointments/accept/${id}`)
      .then((response) => {
        console.log('Appointment accepted:', response.data)
        // Simulate accepting an appointment (update the status)
        const updatedAppointments = appointments.map((appointment) => {
          if (appointment.id === id) {
            return { ...appointment, status: 'accepted' }
          }
          return appointment
        })

        setAppointments(updatedAppointments)
      })
      .catch((error) => {
        console.error('Error accepting appointment:', error)
      })
  }

  const handleReject = (id) => {
    console.log('Rejecting appointment with ID:', id)
    axios
      .put(`http://localhost:9096/api/doctors/appointments/reject/${id}`)
      .then((response) => {
        console.log('Appointment rejected:', response.data)
        // Simulate rejecting an appointment (update the status)
        const updatedAppointments = appointments.map((appointment) => {
          if (appointment.id === id) {
            return { ...appointment, status: 'rejected' }
          }
          return appointment
        })

        setAppointments(updatedAppointments)
      })
      .catch((error) => {
        console.error('Error rejecting appointment:', error)
      })
  }

  return (
    <div>
      <h2>Appointments</h2>

      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <AppointmentCard
            appointment={appointment}
            onAccept={() => handleAccept(appointment.id)}
            onReject={() => handleReject(appointment.id)}
          />
          <Link to={`/appointment/${appointment.id}`}>
            <button className="view-button">View Patient Details</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AppointmentList;
