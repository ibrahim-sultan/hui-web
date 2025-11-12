import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBookOpen, FaUsers, FaCalendarAlt, FaFileAlt, FaPhone } from 'react-icons/fa';
import './quickActions.css';

const QuickActions = () => {
  const quickLinks = [
    {
      icon: <FaGraduationCap />,
      title: "Apply Now",
      description: "Start your application",
      link: "/admission",
      color: "#157646",
      external: false
    },
    {
      icon: <FaBookOpen />,
      title: "Portal",
      description: "Student portal access",
      link: "http://portal.alhikmah.edu.ng/students/",
      color: "#2196F3",
      external: true
    },
    {
      icon: <FaUsers />,
      title: "Faculties",
      description: "Our academic faculties",
      link: "/faculties",
      color: "#FF9800",
      external: false
    },
    {
      icon: <FaCalendarAlt />,
      title: "Events",
      description: "Upcoming events",
      link: "/news",
      color: "#9C27B0",
      external: false
    },
    {
      icon: <FaFileAlt />,
      title: "Programs",
      description: "Academic programs",
      link: "/programs",
      color: "#4CAF50",
      external: false
    },
    {
      icon: <FaPhone />,
      title: "Contact",
      description: "Get in touch",
      link: "/contact",
      color: "#F44336",
      external: false
    }
  ];

  return (
    <section className="quick-actions">
      <div className="container">
        <div className="quick-actions-grid">
          {quickLinks.map((item, index) => (
            <div key={index} className="quick-action-item" style={{"--accent-color": item.color}}>
              {item.external ? (
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-action-link"
                >
                  <div className="quick-action-icon">
                    {item.icon}
                  </div>
                  <div className="quick-action-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              ) : (
                <Link to={item.link} className="quick-action-link">
                  <div className="quick-action-icon">
                    {item.icon}
                  </div>
                  <div className="quick-action-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;