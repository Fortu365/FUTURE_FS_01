// components/HomePage.js
import './HomePage.css';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from './profile-placeholder.png'; // Add your image

export default function HomePage() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">👋 Welcome to my portfolio</span>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-gradient">Mahlodi Fortube</span>
            </h1>
            <p className="hero-subtitle">Front-End Developer | Java Enthusiast</p>
            <p className="hero-description">
              A passionate developer creating modern, responsive, and user-friendly web applications.
              I specialize in building exceptional digital experiences that are fast, accessible, and beautiful.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-primary">
                <FaDownload /> Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                <FaEnvelope /> Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={profileImg} 
              alt="Mahlodi Fortube" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
