import React from "react"
import './AboutPage.css';

const About = () => {
 return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Our App</h2>
          <p>
            Welcome to our Doctor Appointment App! We're on a mission to make
            healthcare accessible and convenient for everyone.
          </p>
          <p>
            At our core, we believe that everyone deserves quality healthcare
            without the hassle. Our platform allows you to book appointments with
            ease, eliminating the long waiting times and scheduling conflicts.
          </p>
          <p>
            We're dedicated to enhancing your healthcare experience. Your health
            is our priority, and we're here to ensure you receive the care you
            need when you need it.
          </p>

           <p>
        Welcome to our Doctor Appointment App! We are committed to simplifying
        the process of scheduling and managing doctor appointments.
      </p>
      <p>
        Our mission is to provide patients with convenient access to healthcare
        providers, making sure you receive the care you need, when you need it.
      </p>
      <p>
        We understand the importance of your time and well-being, and that's
        why we've developed this platform. Our team of dedicated professionals
        is working tirelessly to improve your healthcare experience.
      </p>
      <p>
        If you have any questions, feedback, or would like to get in touch, don't
        hesitate to
        <a href="/contact"> contact us</a>.
      </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Medical Professionals"
          />
        </div>
      </div>
    </div>
  );
};
export default About
