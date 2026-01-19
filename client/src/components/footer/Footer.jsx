import React from "react";
import "./footer.css"
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>AL-HIKMAH</h2>
          <div className="footer-links">
            <Link to="/campus">PLAN A VISIT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
          <p>+234 703 275 4666</p>
        </div>

        <div className="footer-connect">
          <p>CONNECT WITH US</p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaGoogle />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <Link to="/about-us">DIRECTORY</Link>
        <Link to="/campus">OFFICES & RESOURCES</Link>
        <Link to="/">COLLEGE STORE</Link>
        <Link to="/contact">EMPLOYMENT</Link>
        <Link to="/campus">VIRTUAL TOUR</Link>
      </div>
    </footer>
  );
};

export default Footer;
