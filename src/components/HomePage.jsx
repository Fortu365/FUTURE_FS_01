// components/HomePage.js
import './HomePage.css';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


export default function HomePage() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">👋🏽 Welcome to my portfolio</span>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-gradient">Mahlodi Fortunate Malatji</span>
            </h1>
            <p className="hero-subtitle">Front-End Developer | Java Enthusiast</p>
            <p className="hero-description">
              I am a Diploma in Computer Science graduate from Tshwane University of Technology with a strong foundation in application development and problem-solving. Organized, punctual, and a team player with good communication skills. Eager to learn, grow, and take on new challenges in the tech field.
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="Fortu-portfolio.jpeg"
              alt="Mahlodi Fortube" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
