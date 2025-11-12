import React from 'react';
import { FaGraduationCap, FaAward, FaBook, FaUsers, FaGlobe, FaQuoteLeft } from 'react-icons/fa';
import './viceChancellor.css';

const ViceChancellor = () => {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Leadership",
      description: "Leading Al-Hikmah University to top rankings in Nigeria"
    },
    {
      icon: <FaBook />,
      title: "Research Excellence",
      description: "Published numerous research papers in international journals"
    },
    {
      icon: <FaUsers />,
      title: "Community Impact",
      description: "Championing community development initiatives"
    },
    {
      icon: <FaGlobe />,
      title: "Global Recognition",
      description: "International collaborations and partnerships"
    }
  ];

  const qualifications = [
    "Ph.D in Educational Administration (University of Ilorin)",
    "M.Ed in Educational Management (University of Lagos)", 
    "B.Ed in Education (Ahmadu Bello University)",
    "Fellow, Nigerian Academy of Education",
    "Member, Association of Commonwealth Universities"
  ];

  const keyInitiatives = [
    {
      title: "Digital Transformation",
      description: "Leading the university's transition to digital learning platforms and smart campus initiatives."
    },
    {
      title: "Research & Innovation Hub",
      description: "Establishing cutting-edge research centers to foster innovation and entrepreneurship."
    },
    {
      title: "Global Partnerships",
      description: "Forging strategic partnerships with international universities and organizations."
    },
    {
      title: "Student Excellence Program",
      description: "Implementing comprehensive programs to ensure holistic student development."
    }
  ];

  return (
    <div className="vice-chancellor-page">
      {/* Hero Section */}
      <section className="vc-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="vc-intro">
              <h1>Prof. Noah Yusuf</h1>
              <h2>Vice-Chancellor</h2>
              <p>Al-Hikmah University, Ilorin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="vc-main-content">
        <div className="container">
          <div className="content-grid">
            {/* Biography */}
            <div className="biography-section">
              <div className="section-header">
                <h3>Biography</h3>
                <div className="section-line"></div>
              </div>
              
              <div className="quote-section">
                <FaQuoteLeft className="quote-icon" />
                <blockquote>
                  "Education is not just about acquiring knowledge, but about developing wisdom and moral character 
                  that enables one to make positive contributions to society."
                </blockquote>
                <cite>- Prof. Noah Yusuf</cite>
              </div>

              <div className="bio-text">
                <p>
                  Professor Noah Yusuf is a distinguished academic and administrator who has dedicated his career 
                  to advancing higher education in Nigeria. With over three decades of experience in academia, 
                  he brings a wealth of knowledge and vision to his role as Vice-Chancellor of Al-Hikmah University.
                </p>
                
                <p>
                  Under his leadership, Al-Hikmah University has achieved remarkable milestones, including being 
                  ranked as the 1st Private University in Kwara State and 3rd in North-Central Nigeria according 
                  to the 2025 Times Higher Education Impact Rankings. His commitment to excellence and innovation 
                  has positioned the university as a leading institution in the region.
                </p>

                <p>
                  Professor Yusuf is known for his visionary leadership style, emphasis on quality education, 
                  and commitment to the university's motto of "Learning for Wisdom and Morality." He has 
                  spearheaded numerous initiatives aimed at enhancing the academic experience, research output, 
                  and global competitiveness of the university.
                </p>
              </div>

              {/* Qualifications */}
              <div className="qualifications">
                <h4>Academic Qualifications & Professional Memberships</h4>
                <ul>
                  {qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <div className="achievements-sidebar">
              <h3>Key Achievements</h3>
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* University Rankings */}
              <div className="rankings-highlight">
                <h4>University Rankings Under His Leadership</h4>
                <div className="ranking-item">
                  <span className="rank-badge">1st</span>
                  <span>Private University in Kwara State</span>
                </div>
                <div className="ranking-item">
                  <span className="rank-badge">2nd</span>
                  <span>Overall University in Kwara State</span>
                </div>
                <div className="ranking-item">
                  <span className="rank-badge">3rd</span>
                  <span>University in North-Central Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="initiatives-section">
        <div className="container">
          <div className="section-header center">
            <h2>Strategic Initiatives</h2>
            <p>Transformative programs shaping the future of Al-Hikmah University</p>
          </div>
          
          <div className="initiatives-grid">
            {keyInitiatives.map((initiative, index) => (
              <div key={index} className="initiative-card">
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>Leadership Vision</h2>
            <div className="vision-text">
              <p>
                "My vision for Al-Hikmah University is to establish it as a world-class institution 
                that not only provides excellent education but also produces graduates who are morally 
                grounded and ready to tackle the challenges of the 21st century. We are committed to 
                fostering innovation, promoting research excellence, and building partnerships that 
                will benefit our students and the wider community."
              </p>
            </div>
            
            <div className="goals-grid">
              <div className="goal-item">
                <h4>Academic Excellence</h4>
                <p>Maintaining the highest standards in teaching, learning, and research</p>
              </div>
              <div className="goal-item">
                <h4>Global Competitiveness</h4>
                <p>Preparing students to compete and excel in the global marketplace</p>
              </div>
              <div className="goal-item">
                <h4>Innovation & Research</h4>
                <p>Fostering a culture of innovation and cutting-edge research</p>
              </div>
              <div className="goal-item">
                <h4>Community Impact</h4>
                <p>Contributing meaningfully to societal development and progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViceChancellor;