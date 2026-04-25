// components/Projects.js
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "EduNexa",
      icon: <FaGraduationCap />,
      description: "EduNexa is an online platform designed for students by a student. It is a free online platform that has access to most SA private/public institutions and bursaries. It protects student data with transparency and responsibility. A modern, fully connected, and 99.99% free digital platform designed to simplify the tertiary application process for South African students.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      icon: <FaExternalLinkAlt />,
      description: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React and modern CSS techniques for an optimal user experience.",
      tags: ["React", "CSS3", "Framer Motion"],
      github: "#",
      demo: "#"
    },
    {
      title: "Coming Soon",
      icon: <FaGithub />,
      description: "More exciting projects are in development. Stay tuned for innovative solutions and cutting-edge web applications.",
      tags: ["In Progress", "Innovation"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Featured Projects</h1>
          <p className="page-subtitle">Some of my best work and what I'm currently building</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.icon}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
