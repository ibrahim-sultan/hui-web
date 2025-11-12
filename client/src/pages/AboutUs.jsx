import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaGlobe, FaAward, FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import './aboutUs.css';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <FaGraduationCap /> },
    { id: 'vision', title: 'Vision & Mission', icon: <FaEye /> },
    { id: 'history', title: 'Our History', icon: <FaBullseye /> },
    { id: 'values', title: 'Core Values', icon: <FaHeart /> }
  ];

  const achievements = [
    {
      number: '23+',
      label: 'Years of Excellence',
      description: 'Serving the community since 2005'
    },
    {
      number: '8,500+',
      label: 'Students',
      description: 'Active learners from diverse backgrounds'
    },
    {
      number: '350+',
      label: 'Faculty Members',
      description: 'Qualified and experienced educators'
    },
    {
      number: '75+',
      label: 'Programs',
      description: 'Undergraduate and postgraduate offerings'
    },
    {
      number: '9',
      label: 'Faculties',
      description: 'Comprehensive academic divisions'
    },
    {
      number: '15,000+',
      label: 'Alumni',
      description: 'Graduates making impact globally'
    }
  ];

  const coreValues = [
    {
      title: 'Wisdom (Hikmah)',
      description: 'We pursue knowledge that leads to understanding and wise decision-making.',
      icon: '🧠'
    },
    {
      title: 'Morality',
      description: 'We uphold the highest ethical standards in all our endeavors.',
      icon: '⚖️'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in education, research, and service.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches to learning.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'We maintain honesty and transparency in all our interactions.',
      icon: '🤝'
    },
    {
      title: 'Service',
      description: 'We are committed to serving our community and society at large.',
      icon: '🌟'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="content-section">
            <h3>About Al-Hikmah University</h3>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  Al-Hikmah University, Ilorin, is a private university in Nigeria that was established in 2005. 
                  The university is dedicated to "Learning for Wisdom and Morality" - a motto that reflects our 
                  commitment to producing graduates who are not only academically excellent but also morally upright.
                </p>
                <p>
                  Located in Ilorin, Kwara State, Nigeria, Al-Hikmah University has grown to become one of the 
                  leading private universities in the North-Central region of Nigeria. We are proud to be ranked 
                  as the 1st Private University in Kwara State and 3rd in North-Central Nigeria according to the 
                  2025 Times Higher Education Impact Rankings.
                </p>
                <p>
                  Our university offers a wide range of undergraduate and postgraduate programs across nine faculties, 
                  providing quality education that meets international standards while maintaining our cultural and 
                  religious values.
                </p>
                <div className="quick-facts">
                  <div className="fact-item">
                    <FaGraduationCap className="fact-icon" />
                    <div>
                      <h4>Academic Excellence</h4>
                      <p>NUC approved programs with international recognition</p>
                    </div>
                  </div>
                  <div className="fact-item">
                    <FaUsers className="fact-icon" />
                    <div>
                      <h4>Diverse Community</h4>
                      <p>Students from all over Nigeria and beyond</p>
                    </div>
                  </div>
                  <div className="fact-item">
                    <FaGlobe className="fact-icon" />
                    <div>
                      <h4>Global Perspective</h4>
                      <p>International partnerships and collaborations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-image">
                <div className="stats-showcase">
                  <h4>Our Achievements</h4>
                  <div className="mini-stats">
                    {achievements.slice(0, 3).map((stat, index) => (
                      <div key={index} className="mini-stat">
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="content-section">
            <h3>Vision & Mission</h3>
            <div className="vision-mission-grid">
              <div className="vision-card">
                <div className="card-header">
                  <FaEye className="card-icon" />
                  <h4>Our Vision</h4>
                </div>
                <p>
                  To serve as a forerunner in providing quality university education of international standard.
                </p>
              </div>
              <div className="mission-card">
                <div className="card-header">
                  <FaBullseye className="card-icon" />
                  <h4>Our Mission</h4>
                </div>
                <ul>
                  To be an educational institution where sound academic knowledge blends with moral and spiritual excellence.
                  <li>To provide quality education that integrates academic excellence with moral values</li>
                  <li>To promote research and innovation for societal development</li>
                  <li>To foster critical thinking and problem-solving skills</li>
                  <li>To prepare graduates for leadership roles in their chosen fields</li>
                  <li>To contribute to national development through community service</li>
                  <li>To maintain an environment conducive to learning and character development</li>
                </ul>
              </div>
            </div>
            <div className="motto-section">
              <h4>University Motto</h4>
              <div className="motto-card">
                <h2>"Learning for Wisdom and Morality"</h2>
                <p>
                  This motto encapsulates our educational philosophy - that true learning should lead to 
                  both intellectual wisdom and moral character. We believe that education should not only 
                  equip students with knowledge and skills but also instill in them the values needed 
                  to make positive contributions to society.
                </p>
              </div>
            </div>
          </div>
        );

      case 'values':
        return (
          <div className="content-section">
            <h3>Core Values</h3>
            <p className="values-intro">
              Our core values guide everything we do at Al-Hikmah University. They shape our culture, 
              inform our decisions, and define our character as an institution.
            </p>
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="content-section">
            <h3>Our History</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2005</div>
                <div className="timeline-content">
                  <h4>Foundation</h4>
                  <p>Al-Hikmah University was established by the Abdul-Raheem Oladimeji Islamic Foundation (AROIF).</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2006</div>
                <div className="timeline-content">
                  <h4>First Students</h4>
                  <p>The university welcomed its first batch of students with three faculties.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h4>First Graduation</h4>
                  <p>The first set of graduates were conferred with degrees.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h4>Recognition</h4>
                  <p>Achieved top ranking as 1st Private University in Kwara State.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>About Al-Hikmah University</h1>
            <p>Learning for Wisdom and Morality</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">23+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">8.5K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">350+</span>
                <span className="stat-label">Faculty Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="about-navigation">
        <div className="container">
          <div className="nav-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          {renderContent()}
        </div>
      </section>

          {/* Achievements Section */}
          <section className="achievements-section">
            <div className="container">
              <h2>Our Achievements in Numbers</h2>
              <div className="achievements-grid" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', gap: '20px', alignItems: 'stretch'}}>
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="achievement-item" style={{flex: '1', minWidth: '0', backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                    <div className="achievement-number" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#157646'}}>{achievement.number}</div>
                    <div className="achievement-label" style={{fontSize: '1.1rem', fontWeight: '600', marginTop: '10px'}}>{achievement.label}</div>
                    <div className="achievement-description" style={{fontSize: '0.9rem', color: '#555', marginTop: '5px'}}>{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Community?</h2>
            <p>Discover the opportunities that await you at Al-Hikmah University</p>
            <div className="cta-buttons">
              <Link to="/admission" className="cta-button primary">
                <FaGraduationCap />
                Apply Now
              </Link>
              <Link to="/programs" className="cta-button secondary">
                <FaUsers />
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;