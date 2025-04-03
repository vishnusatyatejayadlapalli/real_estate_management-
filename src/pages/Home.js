import React from "react";
//import { Link } from "react-router-dom";
import "../styles/Home.css"; // Ensure you have a CSS file for styling

// Importing social media icons
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import youtubeIcon from "../assets/youtube.png";
import phoneIcon from "../assets/phone.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <p>Your trusted partner for buying, selling, and renting properties.</p>
        <p>Find Your Dream Home With Us</p>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <h2>About Us</h2>
        <p>
          Yadlapalli Real Estates is committed to providing top-notch real estate services.
          Our experienced team ensures smooth property transactions for buyers, sellers & renters.
        </p>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
          </a>
          <a href="tel:+91 9346101489">
            <img src={phoneIcon} alt="Call Us" className="social-icon" />
          </a>
        </div>

        <p>Call us at: <a href="tel:+91 9346101489" className="phone-link">+91 9346101489</a></p>
      </div>
    </div>
  );
};

export default Home;
