import React from 'react';
import './Footer.css';

const Footer = () => {
     return (

    <footer className="footer">
         <h1>Welcome to Your Doctor Appointment App</h1>
        <p>Book appointments with ease and manage your health care</p>
        <a href="/patientregister" className="btn">Book an Appointment</a>
      <p>&copy; 2023 Doctor Appointments. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
