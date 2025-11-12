import React from 'react';
import { FaFlask, FaBookOpen, FaUsers, FaLightbulb, FaTrophy, FaGlobe, FaChartLine, FaUniversity } from 'react-icons/fa';
import './research.css';

const Research = () => {
  const researchAreas = [
    {
      icon: <FaFlask />,
      title: "Health Sciences Research",
      description: "Advanced research in medical laboratory science, public health, and healthcare innovation.",
      projects: [
        "Disease diagnostics and biomarkers",
        "Public health policy analysis",
        "Healthcare technology development",
        "Epidemiological studies"
      ]
    },
    {
      icon: <FaLightbulb />,
      title: "Islamic Studies & Humanities",
      description: "Scholarly research in Islamic jurisprudence, theology, and contemporary Islamic thought.",
      projects: [
        "Contemporary Islamic jurisprudence",
        "Quranic studies and interpretation",
        "Islamic finance and economics",
        "Interfaith dialogue research"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Management & Economics",
      description: "Research in business management, economics, and entrepreneurship development.",
      projects: [
        "SME development strategies",
        "Financial market analysis",
        "Organizational behavior studies",
        "Economic policy research"
      ]
    },
    {
      icon: <FaBookOpen />,
      title: "Education & Pedagogy",
      description: "Educational research focusing on teaching methodologies and curriculum development.",
      projects: [
        "Digital learning technologies",
        "Curriculum innovation",
        "Teacher training methodologies",
        "Educational assessment tools"
      ]
    }
  ];

  const researchCenters = [
    {
      name: "Center for Islamic Research",
      description: "Dedicated to advancing Islamic scholarship and contemporary Islamic thought",
      focus: "Islamic Studies, Jurisprudence, Theology",
      director: "Prof. Abdul-Rahman Al-Mansouri"
    },
    {
      name: "Health Research Institute",
      description: "Pioneering research in health sciences and medical technology",
      focus: "Medical Laboratory Science, Public Health",
      director: "Dr. Fatima Abdullahi"
    },
    {
      name: "Center for Entrepreneurship Studies",
      description: "Research and development in business innovation and entrepreneurship",
      focus: "Business Development, Innovation, SME Growth",
      director: "Prof. Ibrahim Suleiman"
    },
    {
      name: "Educational Innovation Center",
      description: "Advancing teaching and learning methodologies in higher education",
      focus: "Pedagogy, Curriculum Development, EdTech",
      director: "Dr. Aminah Yusuf"
    }
  ];

  const publications = [
    {
      title: "Journal of Islamic Finance and Economics",
      type: "Peer-reviewed Journal",
      frequency: "Quarterly",
      scope: "Islamic finance, banking, and economic systems"
    },
    {
      title: "Al-Hikmah Health Sciences Review",
      type: "Medical Journal",
      frequency: "Bi-annual",
      scope: "Medical laboratory science, public health research"
    },
    {
      title: "Contemporary Islamic Thought Quarterly",
      type: "Academic Journal",
      frequency: "Quarterly",
      scope: "Islamic studies, theology, contemporary issues"
    },
    {
      title: "Educational Innovation Review",
      type: "Educational Journal",
      frequency: "Bi-annual",
      scope: "Pedagogy, curriculum development, educational technology"
    }
  ];

  const researchStats = [
    { number: "150+", label: "Active Research Projects" },
    { number: "45", label: "Published Papers (2024)" },
    { number: "12", label: "Research Centers" },
    { number: "85", label: "Research Faculty" }
  ];

  return (
    <div className="research-page">
      {/* Hero Section */}
      <section className="research-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Research Excellence</h1>
            <p>Advancing knowledge through innovative research and scholarly inquiry</p>
            <div className="hero-stats">
              {researchStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Vision */}
      <section className="research-vision">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <h2>Our Research Vision</h2>
              <p>Al-Hikmah University is committed to fostering a culture of research excellence that addresses contemporary challenges while upholding Islamic values and principles.</p>
              
              <div className="vision-goals">
                <div className="goal-item">
                  <FaTrophy className="goal-icon" />
                  <div>
                    <h4>Excellence in Scholarship</h4>
                    <p>Promoting high-quality research that contributes to global knowledge</p>
                  </div>
                </div>
                
                <div className="goal-item">
                  <FaGlobe className="goal-icon" />
                  <div>
                    <h4>Global Impact</h4>
                    <p>Research that addresses local needs with global relevance</p>
                  </div>
                </div>
                
                <div className="goal-item">
                  <FaUsers className="goal-icon" />
                  <div>
                    <h4>Collaborative Research</h4>
                    <p>Fostering partnerships with national and international institutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="vision-visual">
              <div className="research-graphic">
                <FaUniversity className="university-icon" />
                <div className="orbiting-elements">
                  <div className="orbit-item"><FaFlask /></div>
                  <div className="orbit-item"><FaBookOpen /></div>
                  <div className="orbit-item"><FaLightbulb /></div>
                  <div className="orbit-item"><FaChartLine /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="research-areas">
        <div className="container">
          <div className="section-header">
            <h2>Research Areas</h2>
            <p>Our research spans multiple disciplines, addressing contemporary challenges</p>
          </div>

          <div className="areas-grid">
            {researchAreas.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-header">
                  <div className="area-icon">{area.icon}</div>
                  <h3>{area.title}</h3>
                </div>
                
                <p className="area-description">{area.description}</p>
                
                <div className="area-projects">
                  <h4>Key Projects:</h4>
                  <ul>
                    {area.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="research-centers">
        <div className="container">
          <div className="section-header">
            <h2>Research Centers & Institutes</h2>
            <p>Specialized centers driving innovation and scholarly research</p>
          </div>

          <div className="centers-list">
            {researchCenters.map((center, index) => (
              <div key={index} className="center-card">
                <div className="center-content">
                  <h3>{center.name}</h3>
                  <p className="center-description">{center.description}</p>
                  
                  <div className="center-details">
                    <div className="detail-row">
                      <span className="detail-label">Research Focus:</span>
                      <span className="detail-value">{center.focus}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Director:</span>
                      <span className="detail-value">{center.director}</span>
                    </div>
                  </div>
                </div>
                
                <div className="center-action">
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="publications">
        <div className="container">
          <div className="section-header">
            <h2>Research Publications</h2>
            <p>Our scholarly journals and publications contribute to academic discourse</p>
          </div>

          <div className="publications-grid">
            {publications.map((publication, index) => (
              <div key={index} className="publication-card">
                <div className="publication-header">
                  <h3>{publication.title}</h3>
                  <span className="publication-type">{publication.type}</span>
                </div>
                
                <div className="publication-info">
                  <p><strong>Frequency:</strong> {publication.frequency}</p>
                  <p><strong>Scope:</strong> {publication.scope}</p>
                </div>
                
                <div className="publication-actions">
                  <button className="btn-secondary">View Latest Issue</button>
                  <button className="btn-outline">Submit Paper</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Opportunities */}
      <section className="research-opportunities">
        <div className="container">
          <div className="opportunities-content">
            <h2>Research Opportunities</h2>
            <p>Join our research community and contribute to advancing knowledge</p>
            
            <div className="opportunities-grid">
              <div className="opportunity-card">
                <h3>For Students</h3>
                <ul>
                  <li>Undergraduate research programs</li>
                  <li>Graduate research assistantships</li>
                  <li>Research methodology training</li>
                  <li>Conference presentation opportunities</li>
                  <li>Publication support and mentoring</li>
                </ul>
              </div>
              
              <div className="opportunity-card">
                <h3>For Faculty</h3>
                <ul>
                  <li>Research grants and funding</li>
                  <li>Sabbatical leave programs</li>
                  <li>International collaboration support</li>
                  <li>Research equipment and facilities</li>
                  <li>Publication and dissemination support</li>
                </ul>
              </div>
              
              <div className="opportunity-card">
                <h3>For Partners</h3>
                <ul>
                  <li>Industry collaboration projects</li>
                  <li>Contract research services</li>
                  <li>Joint research initiatives</li>
                  <li>Technology transfer programs</li>
                  <li>Consultancy services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Contact */}
      <section className="research-contact">
        <div className="container">
          <div className="contact-content">
            <h2>Get Involved in Research</h2>
            <p>Explore research opportunities and collaborate with our academic community</p>
            
            <div className="contact-grid">
              <div className="contact-card">
                <h4>Research Office</h4>
                <p>📞 +234 (0) 803 XXX XXXX</p>
                <p>✉️ research@alhikmahuniversity.edu.ng</p>
                <p>🏢 Research Building, 2nd Floor</p>
              </div>
              
              <div className="contact-card">
                <h4>Graduate School</h4>
                <p>📞 +234 (0) 805 XXX XXXX</p>
                <p>✉️ gradschool@alhikmahuniversity.edu.ng</p>
                <p>🏢 Academic Complex, 1st Floor</p>
              </div>
              
              <div className="contact-card">
                <h4>Innovation Hub</h4>
                <p>📞 +234 (0) 807 XXX XXXX</p>
                <p>✉️ innovation@alhikmahuniversity.edu.ng</p>
                <p>🏢 Technology Center</p>
              </div>
            </div>
            
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">Contact Research Office</a>
              <a href="#" className="cta-btn secondary">Research Proposals</a>
              <a href="#" className="cta-btn secondary">Funding Opportunities</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;