import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentForm.css';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { useAppointment } from './AppointmentContext';//first chnage

const CreateAppointment = () => {
  const [doctor, setDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [notes, setNotes] = useState('');
  //const [appointmentId, setAppointmentId] = useState(null);
  const { setAppointmentId } = useAppointment();

  useEffect(() => {
    axios.get('http://localhost:9096/api/doctors/getalldoctor')
      .then(response => {
        setDoctor(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const history = useHistory(); // Initialize the history object

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
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

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleContactNoChange = (event) => {
    setContactNo(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const id = localStorage.getItem('id');
      const doctorObj = {
        id: selectedDoctor,
      };

      const patientObj = {
        id: id,
      };

      const formData = {
        doctor: doctorObj,
        patient: patientObj,
        appointmentDateTime: `${selectedDate} ${selectedTime}`,
        patientName: patientName,
        age: age,
        address: address,
        contactNo: contactNo,
        notes: notes,
      };

      const response = await axios.post('http://localhost:9096/api/appointments/createAppointment', formData);

      setAppointmentId(response.data.id);

      console.log('Appointment created:', response.data);
      alert('Appointment scheduled successfully!');

      // Redirect to the report upload page with the newly created appointment ID
      history.push(`/upload-appointments`);
       //window.location.href = '/upload-appointments';
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
          <select id="doctor" value={selectedDoctor} onChange={handleDoctorChange} required>
            <option value="">Select a doctor</option>
            {doctor.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.fullName}
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
            onChange={handleAgeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Patient Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Patient Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            value={contactNo}
            onChange={handleContactNoChange}
            required
          />
        </div>
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default CreateAppointment;
