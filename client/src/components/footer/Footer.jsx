import React from "react";
import "./footer.css"
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>AL-HIKMAH</h2>
          <div className="footer-links">
            <a href="#">PLAN A VISIT</a>
            <a href="#">CONTACT</a>
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
        <a href="#">DIRECTORY</a>
        <a href="#">OFFICES & RESOURCES</a>
        <a href="#">COLLEGE STORE</a>
        <a href="#">EMPLOYMENT</a>
        <a href="#">VIRTUAL TOUR</a>
      </div>
    </footer>
  );
};

export default Footer;
