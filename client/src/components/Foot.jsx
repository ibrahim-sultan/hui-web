import React from 'react';
import "./foot.css"
import { FaArrowRight, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

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
            <a href="#" className="foot-button foot-button-primary">
              <FaArrowRight className="foot-button-icon" /> APPLY NOW
            </a>
            <a href="#" className="foot-button foot-button-secondary">
              <FaMapMarkerAlt className="foot-button-icon" /> VISIT CAMPUS
            </a>
            <a href="#" className="foot-button foot-button-secondary">
              <FaInfoCircle className="foot-button-icon" /> REQUEST INFO
            </a>
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
          <a href="#" className="foot-policy-link">TERMS OF SERVICE</a>
          <a href="#" className="foot-policy-link">PRIVACY POLICY</a>
          <a href="#" className="foot-policy-link">NON-DISCRIMINATION POLICY</a>
        </div>
      </div>
    </section>
  );
};

export default FootSection;