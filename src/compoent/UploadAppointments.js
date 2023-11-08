import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './UploadAppointments.css';
import axios from 'axios';
import { useAppointment } from './AppointmentContext';

function UploadAppointments() {
  const { appointmentId } = useAppointment();
  const [reportPath, setReportPath] = useState(null);

  const handleReportPathChange = (event) => {
    setReportPath(event.target.files[0]);
  };

  const handleReportUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', reportPath);

      const response = await axios.post(
        `http://localhost:9096/api/appointments/${appointmentId}/upload-report`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Report uploaded successfully:', response.data);
      alert('Patient report uploaded successfully!');
    } catch (error) {
      console.error('Error uploading patient report:', error);
      alert('Error uploading patient report. Please try again.');
    }
  };

  return (
    <div>
      <h2>Report Upload for Appointment ID: {appointmentId}</h2>
      <div className="form-group">
        <label htmlFor="reportPath">Upload Patient Report (PDF, Doc, etc.):</label>
        <input
          type="file"
          id="reportPath"
          accept=".pdf,.doc,.docx"
          onChange={handleReportPathChange}
          required
        />
        <button type="button" onClick={handleReportUpload}>
          Upload Report
        </button>
      </div>
      <Link to="/appointments">Back to Appointments</Link>
    </div>
  );
}

export default UploadAppointments;
