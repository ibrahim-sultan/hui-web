import "./acadhero.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaFlickr, FaLinkedinIn, FaChevronDown, FaChevronUp  } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";




function AcadHero() {

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);return (
    <div>
      <div className="overlay2">
        <div>
          <div className="acadtitle">ACADEMICS</div>
          <div className="main-heading">
            YOU WILL <span className="highlight">SUCCEED.</span>
          </div>
        </div>
      </div>

      <div className="slant">
        <p>
          At HUI, you’ll receive an education that is personalized, hands-on and
          focused on developing your strengths in learning, leadership, faith
          and service.
        </p>
        <button className="cta-button">GET STARTED. VISIT TODAY</button>
      </div>
        {/* QUICK LINK SECTION */}
         <div className="quick-links">
      <button className="quick-links-toggle" onClick={toggleDropdown}>
        Quick Links {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {open && (
        <ul className="quick-links-list">
          <li><Link to="/programs">Academic Calendar</Link></li>
          <li><Link to="/campus">Campus Map</Link></li>
          <li><Link to="/library">HUI Library</Link></li>
          <li><Link to="/programs">Academic Catalog</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/about-us">COVID-19 Information</Link></li>
        </ul>
      )}
    </div>
      <div className="program">
        <div className="ug">
          Undergraduate and Graduate <br /> Program at HUI
        </div>
        <div className="offer">
          We offer more than 40 undergeaduate and graduate programs on campus
          and online.
        </div>
      </div>

      {/* CARD SECTION */}

    
        <div className="programs-grid1">
          <div className="program-card1 program1">
            <div className="program-content1">
              <h3>Undergraduate Programs</h3>
            <p>
              
              We offer more than 40 majours & minors
              </p>
              <Link to="/programs" className="learn-more-btn">
                EXPLORE PROGRAMS <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="program-card1 program2">
            <div className="program-content1">
              <h3>Graduate & Online</h3>
              <p>
                Complete your courses  100% online - anytime, anywhere.
              </p>
              <Link to="/programs" className="learn-more-btn">
                EXPLORE PROGRAMS <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
    

    <div className="vv">
         <div className="visit-card">
        <h2><span className="gray-text">VISIT</span> <span className="blue-text">HUI</span></h2>
        <p>The best way to determine whether HUI is the place for you is to visit.</p>
        <Link to="/campus" className="visit-link">PLAN MY VISIT NOW →</Link>
      </div>
    </div>

    {/* SOCIAL MEDIA ICON  */}
  
      <div className="social-bar">
      <button type="button"><FaFacebookF /></button>
      <button type="button"><FaTwitter /></button>
      <button type="button"><FaInstagram /></button>
      <button type="button"><FaYoutube /></button>
      <button type="button"><FaFlickr /></button>
      <button type="button"><FaLinkedinIn /></button>
    </div>
    </div>
  );
}

export default AcadHero;
