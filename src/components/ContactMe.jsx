// components/ContactMe.js
import './ContactMe.css';
import { FaWhatsapp, FaPhone, FaEnvelope, FaRocket, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - integrate with email service
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's collaborate and build something amazing together</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's Talk</h2>
            <p>I'm currently available for freelance work, collaborations, or just a friendly chat about tech.</p>
            <div className="contact-details">
              <a href="https://wa.me/27659258037" className="contact-item">
                <div className="contact-icon"><FaWhatsapp /></div>
                <div className="contact-detail">
                  <h4>WhatsApp</h4>
                  <p>+27 65 925 8037</p>
                </div>
              </a>
              <a href="tel:+27797999278" className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-detail">
                  <h4>Phone</h4>
                  <p>+27 79 799 9278</p>
                </div>
              </a>
              <a href="mailto:fortubelogift@gmail.com" className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-detail">
                  <h4>Email</h4>
                  <p>fortubelogift@gmail.com</p>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-detail">
                  <h4>Location</h4>
                  <p>South Africa</p>
                </div>
              </div>
            </div>
            <div className="availability">
              <div className="availability-icon"><FaRocket /></div>
              <p><span>Available immediately</span> for new opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
