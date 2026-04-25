// components/Skills.js
import './Skills.css';
import { 
  FaCode, FaDatabase, FaServer, FaCloud, 
  FaBrain, FaUsers, FaMicrosoft, FaLanguage 
} from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End Development",
      icon: <FaCode />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"]
    },
    {
      title: "Back-End Development",
      icon: <FaServer />,
      skills: ["Java", "Node.js", "Express.js", "Python (Learning)"]
    },
    {
      title: "Database & Data",
      icon: <FaDatabase />,
      skills: ["PL/SQL (Oracle)", "SQLite3", "MySQL/MariaDB", "Nodemailer"]
    },
    {
      title: "Deployment & Tools",
      icon: <FaCloud />,
      skills: ["GitHub", "Render", "VS Code", "Postman"]
    },
    {
      title: "Analytical Skills",
      icon: <FaBrain />,
      skills: ["Problem Solving", "Critical Thinking", "Strategic Planning", "Debugging"]
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      skills: ["Communication", "Teamwork", "Attention to Detail", "Diversity Awareness"]
    },
    {
      title: "Microsoft Office",
      icon: <FaMicrosoft />,
      skills: ["Word", "Excel", "PowerPoint", "Outlook", "OneDrive", "Teams"]
    },
    {
      title: "Languages",
      icon: <FaLanguage />,
      skills: ["Sepedi (Home)", "English (Fluent)", "IsiZulu (Moderate)"]
    }
  ];

  return (
    <div className="skills-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">Technologies and competencies I bring to the table</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h2>{category.title}</h2>
              </div>
              <ul className="skill-items">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>
                    <span className="skill-bullet">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
