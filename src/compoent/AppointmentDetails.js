import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AppointmentDetails.css';
import axios from 'axios';

const AppointmentDetails = ({ match }) => {
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    const appointmentId = match.params.id; // Get the appointment ID from the route parameter
    axios
      .get(`http://localhost:9096/api/appointments/${appointmentId}`) // Fetch appointment by ID
      .then((response) => {
        setAppointment(response.data);
      })
      .catch((error) => {
        console.error('Error fetching appointment:', error);
      });
  }, [match.params.id]);

  const handleDownloadReport = () => {
    // You can trigger the download of the report using this function
    const downloadLink = document.createElement('a');
    downloadLink.href = appointment.reportPath; // The URL of the report
    downloadLink.download = 'patient_report.pdf'; // Set the desired filename
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="appointment-details-container">
      <h2>Appointment Details</h2>
      <div className="appointment-details">
        <div>
          <h3>Patient Name</h3>
          <p>{appointment.patientName}</p>
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
        <div>
          <h3>PatientReport</h3>
          <p>PatientReport: {appointment.reportPath}</p>
          <button onClick={handleDownloadReport}>Download Report</button>
        </div>
      </div>
      <Link to="/appointmentlist">Back to Appointments</Link>
    </div>
  );
};

export default AppointmentDetails;
