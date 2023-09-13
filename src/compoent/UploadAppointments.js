import React, { useState } from 'react';
import './UploadAppointments.css';
import axios from 'axios';

function UploadAppointments() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    setLoading(true);

    // Create a FormData object and append the file to it
    const formData = new FormData();
    formData.append('file', file);

    // Send the file to your backend for processing
    axios.post('/api/upload', formData)
      .then((response) => {
        console.log('File uploaded successfully:', response.data);
        setLoading(false);
        // Add any success handling here
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        setLoading(false);
        // Handle errors here
      });
  };

  return (
    <div className="upload-appointments">
      <h2>Upload Appointments</h2>
      <div className="form-group">
        <label htmlFor="file">Select File:</label>
        <input
          type="file"
          id="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </div>
      <button onClick={handleUpload} disabled={loading}>Upload File</button>
    </div>
  );
}

export default UploadAppointments;
