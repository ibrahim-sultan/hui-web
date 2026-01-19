import React from 'react';
import "./foot.css"
import { FaArrowRight, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FootSection = () => {
  return (
    <section className="foot-section">
      {/* Background overlay */}
      <div className="foot-background-overlay"></div>
      <div className="foot-container">
        {/* Call to Action */}
        <div className="foot-cta">
          <h2 className="foot-cta-title">TAKE THE NEXT STEP</h2>
          <div className="foot-cta-buttons">
            <Link to="/application-process" className="foot-button foot-button-primary">
              <FaArrowRight className="foot-button-icon" /> APPLY NOW
            </Link>
            <Link to="/campus" className="foot-button foot-button-secondary">
              <FaMapMarkerAlt className="foot-button-icon" /> VISIT CAMPUS
            </Link>
            <Link to="/contact" className="foot-button foot-button-secondary">
              <FaInfoCircle className="foot-button-icon" /> REQUEST INFO
            </Link>
          </div>
        </div>

        {/* Address and Copyright */}
        <div className="foot-info">
          <p className="foot-address">
            Adewole Estate, Adeta Road, Ilerin, Kwara State
          </p>
          <p className="foot-copyright">© {new Date().getFullYear()} AI-Hikmah University</p>
        </div>

        {/* Policies */}
        <div className="foot-policies">
          <Link to="/about-us" className="foot-policy-link">TERMS OF SERVICE</Link>
          <Link to="/about-us" className="foot-policy-link">PRIVACY POLICY</Link>
          <Link to="/about-us" className="foot-policy-link">NON-DISCRIMINATION POLICY</Link>
        </div>
      </div>
    </section>
  );
};

export default FootSection;
