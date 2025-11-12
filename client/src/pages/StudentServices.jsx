import React from 'react';
import { FaUserGraduate, FaHome, FaHeartbeat, FaBook, FaBriefcase, FaUsers, FaLaptop, FaCoffee, FaBus, FaShieldAlt, FaHandsHelping, FaPrayingHands } from 'react-icons/fa';
import './studentServices.css';

const StudentServices = () => {
  const services = [
    {
      icon: <FaHome />,
      title: "Accommodation Services",
      description: "Comfortable on-campus housing with modern facilities and security",
      features: [
        "Modern dormitory facilities",
        "24/7 security and surveillance",
        "High-speed internet access",
        "Study rooms and common areas",
        "Laundry and cleaning services"
      ],
      contact: "housing@alhikmahuniversity.edu.ng"
    },
    {
      icon: <FaHeartbeat />,
      title: "Health & Medical Services",
      description: "Comprehensive healthcare services for all students",
      features: [
        "On-campus medical clinic",
        "Emergency medical services",
        "Health insurance assistance",
        "Mental health counseling",
        "Wellness programs"
      ],
      contact: "health@alhikmahuniversity.edu.ng"
    },
    {
      icon: <FaBriefcase />,
      title: "Career Services",
      description: "Preparing students for successful careers after graduation",
      features: [
        "Career counseling and guidance",
        "Resume and interview preparation",
        "Job placement assistance",
        "Internship programs",
        "Industry networking events"
      ],
      contact: "careers@alhikmahuniversity.edu.ng"
    },
    {
      icon: <FaBook />,
      title: "Academic Support",
      description: "Comprehensive support for academic excellence",
      features: [
        "Tutoring and mentoring programs",
        "Study skills workshops",
        "Academic advising",
        "Research assistance",
        "Exam preparation support"
      ],
      contact: "academic@alhikmahuniversity.edu.ng"
    },
    {
      icon: <FaLaptop />,
      title: "ICT Services",
      description: "Modern technology support for digital learning",
      features: [
        "Campus-wide Wi-Fi access",
        "Computer labs and facilities",
        "Software and hardware support",
        "Online learning platforms",
        "Digital literacy training"
      ],
      contact: "ict@alhikmahuniversity.edu.ng"
    },
    {
      icon: <FaUsers />,
      title: "Student Affairs",
      description: "Supporting student life and campus community",
      features: [
        "Student clubs and organizations",
        "Cultural and social events",
        "Leadership development programs",
        "Conflict resolution services",
        "Community engagement opportunities"
      ],
      contact: "studentaffairs@alhikmahuniversity.edu.ng"
    }
  ];

  const facilities = [
    { icon: <FaBook />, title: "Modern Library", description: "Extensive collection of books, journals, and digital resources" },
    { icon: <FaCoffee />, title: "Student Cafeteria", description: "Affordable meals and refreshments in a comfortable setting" },
    { icon: <FaBus />, title: "Transportation", description: "Shuttle services connecting campus to major city locations" },
    { icon: <FaPrayingHands />, title: "Prayer Facilities", description: "Well-equipped mosque and prayer rooms for spiritual needs" },
    { icon: <FaShieldAlt />, title: "Security Services", description: "24/7 campus security ensuring student safety" },
    { icon: <FaHandsHelping />, title: "Counseling Services", description: "Professional counseling for academic and personal challenges" }
  ];

  const supportPrograms = [
    {
      title: "First-Year Experience Program",
      description: "Comprehensive orientation and support for new students to ease transition into university life.",
      duration: "Full Academic Year",
      eligibility: "All first-year students"
    },
    {
      title: "Peer Mentoring Program",
      description: "Connecting new students with experienced upperclassmen for guidance and support.",
      duration: "Ongoing",
      eligibility: "All students"
    },
    {
      title: "Academic Skills Development",
      description: "Workshops and training sessions on study skills, research methods, and academic writing.",
      duration: "Semester-based",
      eligibility: "All students"
    },
    {
      title: "Financial Aid Assistance",
      description: "Guidance and support for scholarship applications, financial planning, and emergency funding.",
      duration: "Year-round",
      eligibility: "Students in financial need"
    }
  ];

  return (
    <div className="student-services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Student Services</h1>
            <p>Comprehensive support services designed to enhance your university experience</p>
            <div className="hero-highlights">
              <div className="highlight">
                <FaUserGraduate className="highlight-icon" />
                <span>Student-Centered</span>
              </div>
              <div className="highlight">
                <FaHandsHelping className="highlight-icon" />
                <span>Comprehensive Support</span>
              </div>
              <div className="highlight">
                <FaShieldAlt className="highlight-icon" />
                <span>Safe Environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>Essential services to support your academic journey and personal development</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-contact">
                  <strong>Contact:</strong> {service.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="campus-facilities">
        <div className="container">
          <div className="section-header">
            <h2>Campus Facilities</h2>
            <p>Modern facilities designed to support your learning and lifestyle needs</p>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">
                  {facility.icon}
                </div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Programs */}
      <section className="support-programs">
        <div className="container">
          <div className="section-header">
            <h2>Student Support Programs</h2>
            <p>Specialized programs to help you succeed academically and personally</p>
          </div>

          <div className="programs-list">
            {supportPrograms.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  
                  <div className="program-details">
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{program.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Eligibility:</span>
                      <span className="detail-value">{program.eligibility}</span>
                    </div>
                  </div>
                </div>
                
                <div className="program-action">
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="emergency-services">
        <div className="container">
          <div className="emergency-content">
            <h2>Emergency Services & Safety</h2>
            <p>Your safety and well-being are our top priorities</p>
            
            <div className="emergency-grid">
              <div className="emergency-card urgent">
                <h3>Emergency Contacts</h3>
                <div className="contact-list">
                  <div className="contact-item">
                    <span className="contact-label">Campus Security:</span>
                    <span className="contact-number">+234 (0) 803 XXX XXXX</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Medical Emergency:</span>
                    <span className="contact-number">+234 (0) 805 XXX XXXX</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Crisis Hotline:</span>
                    <span className="contact-number">+234 (0) 807 XXX XXXX</span>
                  </div>
                </div>
              </div>
              
              <div className="emergency-card">
                <h3>Safety Measures</h3>
                <ul className="safety-list">
                  <li>24/7 campus security patrol</li>
                  <li>CCTV surveillance system</li>
                  <li>Emergency call boxes</li>
                  <li>Well-lit pathways and buildings</li>
                  <li>Regular safety drills and training</li>
                </ul>
              </div>
              
              <div className="emergency-card">
                <h3>Health & Wellness</h3>
                <ul className="wellness-list">
                  <li>On-campus health clinic</li>
                  <li>Mental health counseling</li>
                  <li>Wellness workshops</li>
                  <li>Fitness and recreational facilities</li>
                  <li>Nutrition and dietary support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="service-hours">
        <div className="container">
          <div className="section-header">
            <h2>Service Hours & Locations</h2>
            <p>Find when and where you can access our services</p>
          </div>

          <div className="hours-grid">
            <div className="hours-card">
              <h3>Student Affairs Office</h3>
              <div className="hours-info">
                <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
                <p><strong>Location:</strong> Administration Building, Ground Floor</p>
              </div>
            </div>

            <div className="hours-card">
              <h3>Health Services</h3>
              <div className="hours-info">
                <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Emergency:</strong> 24/7 On-call service</p>
                <p><strong>Location:</strong> Health Center Building</p>
              </div>
            </div>

            <div className="hours-card">
              <h3>ICT Help Desk</h3>
              <div className="hours-info">
                <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> 2:00 PM - 6:00 PM</p>
                <p><strong>Location:</strong> ICT Center, 1st Floor</p>
              </div>
            </div>

            <div className="hours-card">
              <h3>Career Services</h3>
              <div className="hours-info">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Appointments:</strong> By schedule only</p>
                <p><strong>Walk-ins:</strong> Tuesday & Thursday 2-4 PM</p>
                <p><strong>Location:</strong> Student Services Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Assistance?</h2>
            <p>Our dedicated student services team is here to help you succeed</p>
            
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">
                Contact Student Services
              </a>
              <a href="mailto:studentservices@alhikmahuniversity.edu.ng" className="cta-btn secondary">
                Send Email
              </a>
              <a href="tel:+2348030000000" className="cta-btn secondary">
                Call Now
              </a>
            </div>
            
            <div className="office-info">
              <p><strong>Main Office:</strong> Student Services Building, 1st Floor</p>
              <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentServices;