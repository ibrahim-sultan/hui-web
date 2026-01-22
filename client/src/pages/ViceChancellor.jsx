import React from 'react';
import { FaGraduationCap, FaBook, FaUsers, FaGlobe, FaQuoteLeft } from 'react-icons/fa';
import './viceChancellor.css';
import vcPhoto from '../assets/vc.jpg';

const ViceChancellor = () => {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "6th Substantive Vice-Chancellor",
      description: "Appointed July 2025, leading institutional growth and excellence"
    },
    {
      icon: <FaBook />,
      title: "Distinguished Professor",
      description: "Professor of Islamic Studies since 2018"
    },
    {
      icon: <FaUsers />,
      title: "Foundational Member",
      description: "Joined Al-Hikmah University in 2006 as pioneer staff"
    },
    {
      icon: <FaGlobe />,
      title: "Service & Partnerships",
      description: "Consultant to educational and religious bodies"
    }
  ];

  const qualifications = [
    "B.A. (Hons) Islamic Studies, University of Ilorin (1987)",
    "M.A. Islamic Studies, University of Ilorin (1990)",
    "Master of Public Administration (MPA), University of Ilorin (1995)",
    "Postgraduate Diploma in Education (PGDE), University of Ilorin (2000)",
    "Ph.D. Islamic Studies, University of Ilorin (2005)",
    "Professor of Islamic Studies (2018)",
    "Fellow, Chartered Institute of Personnel Management of Nigeria (2016)",
    "Fellow, Chartered Public Administrators of England and Wales (2006)",
    "Member, Nigerian Association of Teachers of Arabic and Islamic Studies (NATAIS)"
  ];

  const researchInterests = [
    "Da'wah and Contemporary Islamic Studies",
    "Peace and Conflict Studies",
    "Public Administration",
    "Islamic Education and Pedagogy",
    "Interreligious Dialogue"
  ];

  const externalService = [
    "Executive Secretary, Kwara State Muslim Pilgrims Welfare Board (1995–1998, 2002–2003)",
    "Pioneer staff at Al-Hikmah University (from 2006)",
    "Consultant to various educational and religious bodies"
  ];

  const timeline = [
    { year: "1987", detail: "B.A. (Hons) Islamic Studies, University of Ilorin" },
    { year: "1990", detail: "M.A. Islamic Studies, University of Ilorin" },
    { year: "1995", detail: "Master of Public Administration (MPA), University of Ilorin" },
    { year: "2000", detail: "Postgraduate Diploma in Education (PGDE), University of Ilorin" },
    { year: "2005", detail: "Ph.D. Islamic Studies, University of Ilorin" },
    { year: "2006", detail: "Fellow, Chartered Public Administrators, England and Wales" },
    { year: "2016", detail: "Fellow, Chartered Institute of Personnel Management of Nigeria" },
    { year: "2018", detail: "Attained rank of Professor of Islamic Studies" },
    { year: "2025", detail: "Appointed Vice-Chancellor, Al-Hikmah University" }
  ];

  return (
    <div className="vice-chancellor-page">
      <section className="vc-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="vc-hero-grid">
              <img src={vcPhoto} alt="Professor Lateef Folorunsho Oladimeji" className="vc-photo" />
              <div className="vc-intro">
                <h1>Professor Lateef Folorunsho Oladimeji</h1>
                <h2>Vice-Chancellor</h2>
                <p>Al-Hikmah University, Ilorin, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc-main-content">
        <div className="container">
          <div className="content-grid">
            <div className="biography-section">
              <div className="section-header">
                <h3>Biography</h3>
                <div className="section-line"></div>
              </div>

              <div className="quote-section">
                <FaQuoteLeft className="quote-icon" />
                <blockquote>
                  Visionary leadership rooted in wisdom, morality, and service to society.
                </blockquote>
                <cite>Professor L. F. Oladimeji</cite>
              </div>

              <div className="bio-text">
                <p>
                  Professor Lateef Folorunsho Oladimeji is the 6th substantive Vice-Chancellor of
                  Al-Hikmah University, Ilorin, Nigeria. A distinguished Professor of Islamic Studies,
                  he is a foundational member of the University and has consistently championed
                  academic excellence and institutional development since his appointment in July 2025.
                </p>
                <p>
                  Born on April 9, 1963, he hails from Oko-Ode in Ifelodun Local Government Area of
                  Kwara State. He is married to Hajia Balqees Modupe Oladimeji and blessed with three children.
                  He maintains deep ties with the Islamic community and has extensive records of service.
                </p>
                <p>
                  His academic journey reflects dedication to Islamic scholarship and public administration,
                  complemented by pedagogical expertise and leadership in educational management.
                </p>
              </div>

              <div className="qualifications">
                <h4>Academic Qualifications & Fellowships</h4>
                <ul>
                  {qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              <div className="qualifications">
                <h4>Research Interests</h4>
                <ul>
                  {researchInterests.map((ri, i) => (
                    <li key={i}>{ri}</li>
                  ))}
                </ul>
              </div>

              <div className="qualifications">
                <h4>External Service</h4>
                <ul>
                  {externalService.map((es, i) => (
                    <li key={i}>{es}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="achievements-sidebar">
              <h3>Highlights</h3>
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
            </div>
          </div>
        </div>
      </section>

      <section className="initiatives-section">
        <div className="container">
          <div className="section-header center">
            <h2>Milestones Timeline</h2>
            <p>Academic journey and professional recognitions</p>
          </div>
          <div className="initiatives-grid">
            {timeline.map((item, idx) => (
              <div key={idx} className="initiative-card">
                <h3>{item.year}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>Leadership Focus</h2>
            <div className="goals-grid">
              <div className="goal-item">
                <h4>Academic Excellence</h4>
                <p>Strengthening programs and scholarship in Islamic Studies and beyond</p>
              </div>
              <div className="goal-item">
                <h4>Institutional Growth</h4>
                <p>Advancing infrastructure, governance, and stakeholder engagement</p>
              </div>
              <div className="goal-item">
                <h4>Community Service</h4>
                <p>Deepening impact through faith-based and societal initiatives</p>
              </div>
              <div className="goal-item">
                <h4>Global Collaboration</h4>
                <p>Building strategic partnerships across academia and civil society</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViceChancellor;
