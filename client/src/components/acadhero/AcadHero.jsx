import "./acadhero.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaFlickr, FaLinkedinIn, FaChevronDown, FaChevronUp  } from "react-icons/fa";
import { useState } from "react";




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
          <li><a href="#">Academic Calendar</a></li>
          <li><a href="#">Campus Map</a></li>
          <li><a href="#">HUI Library</a></li>
          <li><a href="#">Academic Catalog</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">COVID-19 Information</a></li>
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

    
        <div class="programs-grid1">
          <div class="program-card1 program1">
            <div class="program-content1">
              <h3>Undergraduate Programs</h3>
            <p>
              
              We offer more than 40 majours & minors
              </p>
              <a href="#" class="learn-more-btn">
                EXPLORE PROGRAMS <span class="arrow">→</span>
              </a>
            </div>
          </div>

          <div class="program-card1 program2">
            <div class="program-content1">
              <h3>Graduate & Online</h3>
              <p>
                Complete your courses  100% online - anytime, anywhere.
              </p>
              <a href="#" class="learn-more-btn">
                EXPLORE PROGRAMS <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
    

    <div className="vv">
         <div className="visit-card">
        <h2><span className="gray-text">VISIT</span> <span className="blue-text">HUI</span></h2>
        <p>The best way to determine whether HUI is the place for you is to visit.</p>
        <a href="#" className="visit-link">PLAN MY VISIT NOW →</a>
      </div>
    </div>

    {/* SOCIAL MEDIA ICON  */}
  
      <div className="social-bar">
      <a href="#"><FaFacebookF /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaYoutube /></a>
      <a href="#"><FaFlickr /></a>
      <a href="#"><FaLinkedinIn /></a>
    </div>
    </div>
  );
}

export default AcadHero;
