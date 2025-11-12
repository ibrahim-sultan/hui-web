import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/logo11.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePortalDropdown = () => {
    setIsPortalOpen(!isPortalOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <div className="navbar-brand">
            <img src={logo} alt="Al-Hikmah University Logo" className="logo-img" />
            <div className="university-text">
              <span className="university-name">Al-Hikmah University</span>
              <span className="university-motto">Learning for Wisdom and Morality</span>
            </div>
          </div> 
        </Link>

        <div className="navbar-spacer"></div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {/* The University Dropdown */}
          <li className="dropdown">
            <Link to="/about-us" className="nav-link dropdown-toggle">The University</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about-us" className="dropdown-item">About Al-Hikmah University</Link></li>
              <li><Link to="/vice-chancellor" className="dropdown-item">Vice Chancellor</Link></li>
              <li><Link to="/leadership" className="dropdown-item">Leadership Team</Link></li>
              <li><Link to="/campus" className="dropdown-item">Our Campus</Link></li>
            </ul>
          </li>

          {/* Academics Dropdown */}
          <li className="dropdown">
            <Link to="/programs" className="nav-link dropdown-toggle">Academics</Link>
            <ul className="dropdown-menu">
              <li><Link to="/programs" className="dropdown-item">Programs</Link></li>
              <li><Link to="/faculties" className="dropdown-item">Faculties</Link></li>
              <li><Link to="/research" className="dropdown-item">Research</Link></li>
              <li><Link to="/library" className="dropdown-item">Library</Link></li>
              <li><Link to="/academic" className="dropdown-item">Academic Calendar</Link></li>
            </ul>
          </li>

          {/* Admissions Dropdown */}
          <li className="dropdown">
            <Link to="/admission" className="nav-link dropdown-toggle">Admissions</Link>
            <ul className="dropdown-menu">
              <li><Link to="/admission-requirements" className="dropdown-item">Admission Requirements</Link></li>
              <li><Link to="/application-process" className="dropdown-item">Application Process</Link></li>
              <li><Link to="/international-students" className="dropdown-item">International Students</Link></li>
              <li><Link to="/admission" className="dropdown-item">Apply Now</Link></li>
            </ul>
          </li>

          {/* Student Life */}
          <li><Link to="/student-services" className="nav-link">Student Life</Link></li>

          {/* News & Events */}
          <li><Link to="/news" className="nav-link">News & Events</Link></li>

          {/* Portal with dropdown */}
          <li className={`dropdown ${isPortalOpen ? 'show' : ''}`} onClick={togglePortalDropdown}>
            <span className="nav-link dropdown-toggle">Portal</span>
            <ul className="dropdown-menu">
              <li><a href="https://ecampus.alhikmahuniversity.edu.ng/portal/" className="dropdown-item" target="_blank" rel="noopener noreferrer">Student Portal</a></li>
              <li><a href="https://portal.alhikmah.edu.ng/students/" className="dropdown-item" target="_blank" rel="noopener noreferrer">Result Portal</a></li>
              <li><a href="http://topup.alhikmah.edu.ng/students/" className="dropdown-item" target="_blank" rel="noopener noreferrer">Top-up Portal</a></li>
              <li><a href="https://sandwich.alhikmah.edu.ng/students/" className="dropdown-item" target="_blank" rel="noopener noreferrer">Sandwich Portal</a></li>
            </ul>
          </li>

          {/* Contact */}
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
