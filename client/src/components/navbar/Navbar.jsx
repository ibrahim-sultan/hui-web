import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assest/logo11.png'; // Import your logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* University Logo/Name - Left side */}
        <div className="navbar-brand">
          <img src={logo} alt="Al-Hikmah University Logo" className="logo-img" />
          <div className="university-text">
            <span className="university-name">Al-Hikmah University</span>
            <span className="university-motto">Learning for Wisdom and Morality</span>
          </div>
        </div>

        {/* Spacer - pushes navigation to right */}
        <div className="navbar-spacer"></div>

        {/* Navigation Links - Right side */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#academics" className="nav-link">Academics</a></li>
          <li><a href="#admission" className="nav-link">Admission</a></li>
          <li><a href="#faculties" className="nav-link">Faculties</a></li>
          <li><a href="#portal" className="nav-link">Portal</a></li>
        </ul>

        {/* Mobile Menu Button */}
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