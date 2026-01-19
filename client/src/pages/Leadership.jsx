import React from 'react';
import { FaEnvelope, FaPhone, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import './leadership.css';

const Leadership = () => {
  const managementTeam = [
    {
      name: "Prof. Noah Yusuf",
      position: "Vice-Chancellor",
      email: "vc@alhikmah.edu.ng",
      phone: "+234 803 123 4567",
      education: "Ph.D in Educational Administration",
      image: "/api/placeholder/300/300",
      bio: "Distinguished academic and administrator with over three decades of experience in higher education."
    },
    {
      name: "Prof. Abdulkareem A. Alabi",
      position: "Deputy Vice-Chancellor",
      email: "dvc@alhikmah.edu.ng",
      phone: "+234 807 123 4567",
      education: "Ph.D in Management Sciences",
      image: "/api/placeholder/300/300",
      bio: "Experienced academic administrator with expertise in management and organizational development."
    },
    {
      name: "Mrs. Fatimah O. Abdulraheem",
      position: "Registrar",
      email: "registrar@alhikmah.edu.ng",
      phone: "+234 809 123 4567",
      education: "M.A in Public Administration",
      image: "/api/placeholder/300/300",
      bio: "Seasoned administrator with extensive experience in university registry operations."
    },
    {
      name: "Mr. Abdulwahab S. Oladipo",
      position: "Bursar",
      email: "bursar@alhikmah.edu.ng",
      phone: "+234 806 123 4567",
      education: "M.Sc in Accounting & Finance",
      image: "/api/placeholder/300/300",
      bio: "Financial management expert with deep understanding of university financial operations."
    },
    {
      name: "Dr. Mariam K. Salaudeen",
      position: "University Librarian",
      email: "librarian@alhikmah.edu.ng",
      phone: "+234 805 123 4567",
      education: "Ph.D in Library & Information Science",
      image: "/api/placeholder/300/300",
      bio: "Information science expert dedicated to advancing digital library services."
    }
  ];

  const boardMembers = [
    {
      name: "Alhaji Abdur-Raheem Oladimeji",
      position: "Chairman, Board of Trustees",
      organization: "Founder & Chairman"
    },
    {
      name: "Prof. Ishaq Oloyede",
      position: "Member, Board of Trustees",
      organization: "Former JAMB Registrar"
    },
    {
      name: "Justice Mustapha Akanbi (Rtd.)",
      position: "Member, Board of Trustees",
      organization: "Former ICPC Chairman"
    },
    {
      name: "Alhaji Lai Mohammed",
      position: "Member, Board of Trustees",
      organization: "Former Minister of Information"
    }
  ];

  return (
    <div className="leadership-page">
      {/* Hero Section */}
      <section className="leadership-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>University Leadership</h1>
            <p>Meet the dedicated leaders guiding Al-Hikmah University towards excellence</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Senior Executives</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Board Members</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">23+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="management-team">
        <div className="container">
          <div className="section-header">
            <h2>Senior Management Team</h2>
            <p>Experienced leaders committed to academic excellence and institutional growth</p>
          </div>
          
          <div className="leadership-grid">
            {managementTeam.map((leader, index) => (
              <div key={index} className="leadership-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                  <div className="leader-overlay">
                    <div className="contact-info">
                      <a href={`mailto:${leader.email}`} className="contact-link">
                        <FaEnvelope />
                      </a>
                      <a href={`tel:${leader.phone}`} className="contact-link">
                        <FaPhone />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="leader-content">
                  <h3>{leader.name}</h3>
                  <h4 className="position">{leader.position}</h4>
                  <p className="education">
                    <FaGraduationCap className="edu-icon" />
                    {leader.education}
                  </p>
                  <p className="bio">{leader.bio}</p>
                  
                  <div className="leader-contact">
                    <div className="contact-item">
                      <FaEnvelope />
                      <span>{leader.email}</span>
                    </div>
                    <div className="contact-item">
                      <FaPhone />
                      <span>{leader.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="board-of-trustees">
        <div className="container">
          <div className="section-header">
            <h2>Board of Trustees</h2>
            <p>Distinguished individuals providing strategic guidance and oversight</p>
          </div>
          
          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="board-card">
                <div className="board-content">
                  <FaBuilding className="board-icon" />
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p>{member.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="governance-structure">
        <div className="container">
          <div className="section-header">
            <h2>Governance Structure</h2>
            <p>Al-Hikmah University operates under a well-defined governance structure</p>
          </div>
          
          <div className="governance-content">
            <div className="governance-level">
              <h3>Board of Trustees</h3>
              <p>The highest governing body responsible for strategic direction and policy formulation.</p>
              <ul>
                <li>Strategic planning and policy development</li>
                <li>Financial oversight and resource allocation</li>
                <li>Appointment of senior management</li>
                <li>Quality assurance and institutional evaluation</li>
              </ul>
            </div>
            
            <div className="governance-level">
              <h3>University Management</h3>
              <p>Day-to-day administration and implementation of board policies.</p>
              <ul>
                <li>Academic program management</li>
                <li>Student affairs and services</li>
                <li>Human resource management</li>
                <li>Financial administration</li>
              </ul>
            </div>
            
            <div className="governance-level">
              <h3>Academic Senate</h3>
              <p>Academic governance body responsible for academic standards and policies.</p>
              <ul>
                <li>Curriculum development and approval</li>
                <li>Academic quality assurance</li>
                <li>Research policy and coordination</li>
                <li>Faculty development and promotion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="contact-leadership">
        <div className="container">
          <div className="contact-content">
            <h2>Contact University Leadership</h2>
            <p>Reach out to our leadership team for important matters and inquiries</p>
            
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Office of the Vice-Chancellor</h3>
                <p>For strategic matters and university-wide concerns</p>
                <div className="contact-details">
                  <span><FaEnvelope /> vc@alhikmah.edu.ng</span>
                  <span><FaPhone /> +234 803 123 4567</span>
                </div>
              </div>
              
              <div className="contact-card">
                <h3>Office of the Registrar</h3>
                <p>For academic records and administrative matters</p>
                <div className="contact-details">
                  <span><FaEnvelope /> registrar@alhikmah.edu.ng</span>
                  <span><FaPhone /> +234 809 123 4567</span>
                </div>
              </div>
              
              <div className="contact-card">
                <h3>Office of the Bursar</h3>
                <p>For financial matters and fee-related inquiries</p>
                <div className="contact-details">
                  <span><FaEnvelope /> bursar@alhikmah.edu.ng</span>
                  <span><FaPhone /> +234 806 123 4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
