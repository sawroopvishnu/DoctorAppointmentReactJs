import React from "react"
import './Home.css';

const Home = () => {
 return (
   <div className="home-container">
      <header className="hero">
        <h1>Welcome to Your Doctor Appointment App</h1>
        <p>Book appointments with ease and manage your health care</p>
        <a href="/patientregister" className="btn">Book an Appointment</a>
      </header>

      <section className="features">
        <div className="feature">
          <i className="fas fa-calendar-alt"></i>
          <h2>Easy Scheduling</h2>
          <p>Quickly schedule appointments online.</p>
        </div>

        <div className="feature">
          <i className="fas fa-user-md"></i>
          <h2>Qualified Doctors</h2>
          <p>Choose from a network of experienced doctors.</p>
        </div>

        <div className="feature">
          <i className="fas fa-notes-medical"></i>
          <h2>Access Medical Records</h2>
          <p>View your medical history and records anytime.</p>
        </div>

        <div className="feature">
          <i className="fas fa-comments"></i>
          <h2>Chat with Doctors</h2>
          <p>Get medical advice through secure messaging.</p>
        </div>

        <div className="feature">
          <i className="fas fa-history"></i>
          <h2>Appointment History</h2>
          <p>Track your past and upcoming appointments.</p>
        </div>

        <div className="feature">
          <i className="fas fa-clock"></i>
          <h2>24/7 Availability</h2>
          <p>Book appointments at any time of the day.</p>
        </div>
      </section>
    </div>
  );
};
export default Home
