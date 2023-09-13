import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentForm.css';

const CreateAppointment = () => {
  const [doctor, setdoctor] = useState([]);
  const [selecteddoctor, setSelecteddoctor] = useState('');
  const [patient, setpatient] = useState([]);
  const [selectedpatient, setSelectedpatient] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [age, setage] = useState('');
  const [address, setaddress] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [notes, setNotes] = useState('');
  //const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    // Fetch doctors data and update the state
    axios.get('http://localhost:9096/api/doctors/getalldoctor') // Adjust the API endpoint accordingly
      .then(response => {
        setdoctor(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });


        // Fetch patients data and update the state
    axios.get('http://localhost:9096/api/patients/getAllPatient') // Adjust the API endpoint accordingly
      .then(response => {
      console.log('Fetched patients:', response.data);
      setpatient(response.data);
    })
    .catch(error => {
      console.error('Error fetching patients:', error);
    });

  }, []); // Empty dependency array to execute the effect only once

  const handlePatientChange = (event) => {
    setSelectedpatient(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelecteddoctor(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleageChange = (event) => {
    setage(event.target.value);
  };

  const handleaddressChange = (event) => {
    setaddress(event.target.value);
  };

  const handlePatientContactNoChange = (event) => {
    setcontactNo(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

 // const handleReportChange = (event) => {
    //setSelectedReport(event.target.files[0]);
  //};

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('selecteddoctor', selecteddoctor);
      formData.append('selectedpatient', selectedpatient);
      formData.append('appointmentDateTime', `${selectedDate} ${selectedTime}`);
      formData.append('patientName', patientName);
      formData.append('age', age);
      formData.append('address', address);
      formData.append('contactNo', contactNo);
      formData.append('notes', notes);
     // formData.append('patientReport', selectedReport);
console.log("appointment creating" ,formData )
      // Make API call to send formData to the backend API for appointment scheduling
      //const response = await axios.post('http://localhost:9096/api/appointments/createAppointment', formData);
      const response = await axios.post('http://localhost:9096/api/appointments/createAppointment', formData, {
  headers: {
    'Content-Type': 'application/json',
  },
});
      console.log('Appointment created:', response.data);
      alert('Appointment scheduled successfully!');
      // Redirect logic to dashboard or other page
      // For example, you can use window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Error creating appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>Schedule an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor:</label>
          <select id="doctor" value={selecteddoctor} onChange={handleDoctorChange} required>
            <option value={selecteddoctor}>Select a doctor</option>
            {doctor.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.fullName}
              </option>
            ))}
          </select>
        </div>
       <div className="form-group">
          <label htmlFor="patient">Select Patient:</label>
          <select id="patient" value={selectedpatient} onChange={handlePatientChange}>
            <option value={selectedpatient}>Select a patient</option>
            {patient.map(patient => (
              <option key={patient.id} value={patient.id}>
                {patient.fullName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time:</label>
          <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes (optional):</label>
          <textarea id="notes" value={notes} onChange={handleNotesChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={handlePatientNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Patient Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleageChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Patient Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleaddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patientContactNo">Patient Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            value={contactNo}
            onChange={handlePatientContactNoChange}
            required
          />
        </div>
      
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default CreateAppointment;
