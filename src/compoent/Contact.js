import React from "react"
import './ContactPage.css';

const Contact = () => {
  return (

    <div className="contact-container">

    <header className="hero">
        <h1>Welcome to Your Doctor Appointment App</h1>
        <p>Book appointments with ease and manage your health care</p>
        <a href="/patientregister" className="btn">Book an Appointment</a>
      </header>
      
      <div className="contact-info">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions or inquiries, feel free to contact us. Our team will be happy to assist you.
          </p>
          <div className="address">
            <p>Address: Register Office:- Chandigarh Mohali, Punjab, Pin-Code :- 00000 , City:- Chandigarh, Country:- India</p>
            <p>Email For support: vishnu.sawroop@hdlctech.com</p>
            <p>Email For complain: vishnu.sawroop@hdlctech.com</p>
            <p>Email For account: vishnu.sawroop@hdlctech.com</p>
            <p>Email For hiring : vishnu.sawroop@hdlctech.com</p>
            <p>Phone: 91-9565507532</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact
