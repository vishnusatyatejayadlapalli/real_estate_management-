import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background1.jpg";

function ContactForm() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "",
    subject: "general" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Message Sent:", formData);
    setSubmitted(true);
    setIsLoading(false);
    setFormData({ name: "", email: "", message: "", subject: "general" });
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay"></div>
      
      <div className="contact-card">
        <div className="contact-header">
          <svg className="contact-icon" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you</p>
        </div>

        {submitted ? (
          <div className="success-message">
            <svg className="success-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully.</p>
            <button 
              onClick={() => navigate("/")}
              className="home-button"
            >
              Return Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>
                <svg className="input-icon" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 3.5V20h16v-2.5c0-2.16-5.33-3.5-8-3.5z"/>
                </svg>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label>
                <svg className="input-icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>
                <svg className="input-icon" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                </svg>
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="subject-select"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Support Request</option>
                <option value="feedback">Feedback</option>
                <option value="business">Business Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                <svg className="input-icon" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                </svg>
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="submit-button"
            >
              {isLoading ? (
                <span className="button-loading">
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url(${backgroundImage}) no-repeat center center;
          background-size: cover;
          position: relative;
          padding: 20px;
        }
        
        .contact-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }
        
        .contact-card {
          position: relative;
          width: 100%;
          max-width: 500px;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(0);
          transition: all 0.3s ease;
          z-index: 1;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        
        .contact-header {
          background: linear-gradient(135deg, #4a6cf7, #2541b2);
          color: white;
          padding: 30px;
          text-align: center;
        }
        
        .contact-icon {
          width: 48px;
          height: 48px;
          fill: white;
          margin-bottom: 15px;
        }
        
        .contact-header h2 {
          margin: 0;
          font-size: 1.8rem;
        }
        
        .contact-header p {
          margin: 8px 0 0;
          opacity: 0.9;
          font-size: 1rem;
        }
        
        .contact-form {
          padding: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #555;
          font-weight: 500;
        }
        
        .input-icon {
          width: 18px;
          height: 18px;
          fill: #4a6cf7;
          margin-right: 8px;
        }
        
        input, textarea, .subject-select {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.2s;
        }
        
        input:focus, textarea:focus, .subject-select:focus {
          outline: none;
          border-color: #4a6cf7;
          box-shadow: 0 0 0 2px rgba(74, 108, 247, 0.2);
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .subject-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23555'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 18px;
        }
        
        .submit-button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #4a6cf7, #2541b2);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 10px;
        }
        
        .submit-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #2541b2, #4a6cf7);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .button-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .spinner {
          animation: rotate 2s linear infinite;
          width: 20px;
          height: 20px;
        }
        
        .spinner .path {
          stroke: white;
          stroke-linecap: round;
          animation: dash 1.5s ease-in-out infinite;
        }
        
        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }
        
        @keyframes dash {
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }
        
        .success-message {
          padding: 30px;
          text-align: center;
        }
        
        .success-icon {
          width: 60px;
          height: 60px;
          fill: #4CAF50;
          margin-bottom: 20px;
        }
        
        .success-message h3 {
          margin: 0 0 10px;
          color: #333;
          font-size: 1.5rem;
        }
        
        .success-message p {
          color: #666;
          margin-bottom: 25px;
        }
        
        .home-button {
          padding: 12px 25px;
          background: #4a6cf7;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .home-button:hover {
          background: #2541b2;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 600px) {
          .contact-header {
            padding: 25px 20px;
          }
          
          .contact-form, .success-message {
            padding: 25px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactForm;