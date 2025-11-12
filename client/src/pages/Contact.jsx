import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaPaperPlane, FaUser, FaGraduationCap } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: [
        'Km 5, Ilorin-Ajasse-Ipo Road',
        'P.M.B 1601, Ilorin',
        'Kwara State, Nigeria'
      ]
    },
    {
      icon: <FaPhone />,
      title: 'Phone Numbers',
      details: [
        '+234 803 123 4567',
        '+234 807 123 4567',
        '+234 809 123 4567'
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Addresses',
      details: [
        'info@alhikmah.edu.ng',
        'admissions@alhikmah.edu.ng',
        'registrar@alhikmah.edu.ng'
      ]
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      phone: '+234 803 123 4567',
      email: 'admissions@alhikmah.edu.ng',
      description: 'Application processes, admission requirements, entrance exams'
    },
    {
      name: 'Academic Registry',
      phone: '+234 807 123 4567',
      email: 'registry@alhikmah.edu.ng',
      description: 'Student records, transcripts, academic matters'
    },
    {
      name: 'Student Affairs',
      phone: '+234 809 123 4567',
      email: 'studentaffairs@alhikmah.edu.ng',
      description: 'Student welfare, accommodation, campus life'
    },
    {
      name: 'Bursary Department',
      phone: '+234 806 123 4567',
      email: 'bursary@alhikmah.edu.ng',
      description: 'School fees, payments, financial matters'
    },
    {
      name: 'ICT Department',
      phone: '+234 805 123 4567',
      email: 'ict@alhikmah.edu.ng',
      description: 'Portal issues, online services, technical support'
    },
    {
      name: 'Public Relations',
      phone: '+234 804 123 4567',
      email: 'pr@alhikmah.edu.ng',
      description: 'Media inquiries, partnerships, public information'
    }
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: <FaFacebook />, url: '#', color: '#3b5998' },
    { platform: 'Twitter', icon: <FaTwitter />, url: '#', color: '#1da1f2' },
    { platform: 'LinkedIn', icon: <FaLinkedin />, url: '#', color: '#0077b5' },
    { platform: 'Instagram', icon: <FaInstagram />, url: '#', color: '#e4405f' },
    { platform: 'WhatsApp', icon: <FaWhatsapp />, url: '#', color: '#25d366' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with Al-Hikmah University</p>
            <div className="hero-highlights">
              <div className="highlight-item">
                <FaPhone className="highlight-icon" />
                <span>24/7 Support</span>
              </div>
              <div className="highlight-item">
                <FaEnvelope className="highlight-icon" />
                <span>Quick Response</span>
              </div>
              <div className="highlight-item">
                <FaMapMarkerAlt className="highlight-icon" />
                <span>Easy Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="quick-contact">
        <div className="container">
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <div className="input-wrapper">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <div className="input-wrapper">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="input-wrapper">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Inquiry Category</label>
                    <div className="input-wrapper">
                      <FaGraduationCap className="input-icon" />
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a category</option>
                        <option value="admissions">Admissions</option>
                        <option value="academic">Academic Programs</option>
                        <option value="student-services">Student Services</option>
                        <option value="fees">Fees and Payments</option>
                        <option value="technical">Technical Support</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter the subject of your inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Departments List */}
            <div className="departments-section">
              <h2>Contact Departments</h2>
              <p>Reach out directly to specific departments for faster assistance</p>
              
              <div className="departments-list">
                {departments.map((dept, index) => (
                  <div key={index} className="department-card">
                    <h3>{dept.name}</h3>
                    <p className="department-description">{dept.description}</p>
                    <div className="department-contacts">
                      <a href={`tel:${dept.phone}`} className="contact-link">
                        <FaPhone />
                        {dept.phone}
                      </a>
                      <a href={`mailto:${dept.email}`} className="contact-link">
                        <FaEnvelope />
                        {dept.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="social-media-section">
                <h3>Follow Us</h3>
                <p>Stay connected with us on social media</p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      style={{ '--hover-color': social.color }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                      <span>{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Directions */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <div className="map-info">
              <h2>Visit Our Campus</h2>
              <p>Al-Hikmah University is conveniently located in Ilorin, Kwara State, with easy access to major transportation routes.</p>
              
              <div className="directions">
                <h3>Directions</h3>
                <ul>
                  <li>From Ilorin city center, take the Ajasse-Ipo Road</li>
                  <li>Drive for approximately 5 kilometers</li>
                  <li>The university is on your right-hand side</li>
                  <li>Look for the distinctive Al-Hikmah University signage</li>
                </ul>
              </div>

              <div className="transportation">
                <h3>Transportation Options</h3>
                <ul>
                  <li><strong>By Car:</strong> Ample parking available on campus</li>
                  <li><strong>By Bus:</strong> Regular bus services from Ilorin city</li>
                  <li><strong>By Taxi:</strong> Available from all parts of Ilorin</li>
                  <li><strong>Airport:</strong> 30 minutes from Ilorin Airport</li>
                </ul>
              </div>
            </div>
            
            {/* Placeholder for map - in a real application, you would integrate Google Maps */}
            <div className="map-placeholder">
              <div className="map-overlay">
                <FaMapMarkerAlt className="map-icon" />
                <h3>Interactive Map</h3>
                <p>Al-Hikmah University Campus</p>
                <p>Km 5, Ilorin-Ajasse-Ipo Road</p>
                <button className="map-btn">View on Google Maps</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-info">
            <h2>Emergency Contacts</h2>
            <div className="emergency-grid">
              <div className="emergency-item">
                <h3>Campus Security</h3>
                <p><FaPhone /> +234 803 000 0001</p>
              </div>
              <div className="emergency-item">
                <h3>Medical Centre</h3>
                <p><FaPhone /> +234 803 000 0002</p>
              </div>
              <div className="emergency-item">
                <h3>Fire Emergency</h3>
                <p><FaPhone /> +234 803 000 0003</p>
              </div>
              <div className="emergency-item">
                <h3>General Emergency</h3>
                <p><FaPhone /> 199 / 911</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;