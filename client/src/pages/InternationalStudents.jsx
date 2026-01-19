import React from 'react';
import { FaGlobe, FaPassport, FaGraduationCap, FaHome, FaPlane, FaFileAlt, FaUsers, FaHeart } from 'react-icons/fa';
import './internationalStudents.css';

const InternationalStudents = () => {
  const requirements = [
    "Valid international passport",
    "Academic transcripts (certified and translated)",
    "English proficiency test results (IELTS/TOEFL)",
    "Student visa application",
    "Medical examination certificate",
    "Financial support documentation",
    "Letter of sponsorship (if applicable)",
    "Passport photographs"
  ];

  const services = [
    {
      icon: <FaPassport />,
      title: "Visa Support",
      description: "Assistance with student visa applications and documentation"
    },
    {
      icon: <FaHome />,
      title: "Accommodation",
      description: "On-campus housing and off-campus housing recommendations"
    },
    {
      icon: <FaPlane />,
      title: "Airport Pickup",
      description: "Welcome service and transportation from the airport"
    },
    {
      icon: <FaUsers />,
      title: "Orientation Program",
      description: "Special orientation for international students"
    }
  ];

  const countries = [
    { name: "Ghana", count: "45", flag: "🇬🇭" },
    { name: "Cameroon", count: "32", flag: "🇨🇲" },
    { name: "Chad", count: "28", flag: "🇹🇩" },
    { name: "Niger", count: "25", flag: "🇳🇪" },
    { name: "Benin", count: "22", flag: "🇧🇯" },
    { name: "Togo", count: "18", flag: "🇹🇬" },
    { name: "Mali", count: "15", flag: "🇲🇱" },
    { name: "Others", count: "35", flag: "🌍" }
  ];

  return (
    <div className="international-students-page">
      {/* Hero Section */}
      <section className="international-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Welcome International Students</h1>
            <p>Join our diverse global community at Al-Hikmah University</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">220+</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Countries Represented</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Visa Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Al-Hikmah University?</h2>
            <p>Experience world-class education in a multicultural environment</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaGraduationCap />
              </div>
              <h3>Quality Education</h3>
              <p>Internationally recognized programs with experienced faculty and modern facilities</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FaUsers />
              </div>
              <h3>Diverse Community</h3>
              <p>Learn alongside students from over 15 countries in a multicultural environment</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FaHeart />
              </div>
              <h3>Islamic Values</h3>
              <p>Education grounded in Islamic principles with respect for all faiths and cultures</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FaGlobe />
              </div>
              <h3>Global Recognition</h3>
              <p>Degrees recognized internationally with opportunities for global careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="admission-requirements">
        <div className="container">
          <div className="requirements-content">
            <div className="requirements-text">
              <h2>Admission Requirements</h2>
              <p>We welcome applications from qualified international students who meet our academic standards.</p>
              
              <h3>General Requirements:</h3>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index}>
                    <FaFileAlt className="req-icon" />
                    {req}
                  </li>
                ))}
              </ul>

              <div className="important-note">
                <h4>Important Notes:</h4>
                <ul>
                  <li>All documents must be authenticated by relevant authorities</li>
                  <li>Non-English documents require certified translations</li>
                  <li>Application deadlines vary by program</li>
                  <li>Early application is recommended for visa processing</li>
                </ul>
              </div>
            </div>

            <div className="requirements-visual">
              <div className="globe-container">
                <FaGlobe className="globe-icon" />
                <div className="orbit">
                  <div className="student-icon">👨‍🎓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="support-services">
        <div className="container">
          <div className="section-header">
            <h2>International Student Services</h2>
            <p>Comprehensive support to ensure your success at Al-Hikmah University</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="additional-services">
            <h3>Additional Support Services:</h3>
            <div className="services-list">
              <div className="service-item">
                <span>Academic Advising</span>
                <p>Personalized guidance for course selection and academic planning</p>
              </div>
              <div className="service-item">
                <span>Cultural Integration</span>
                <p>Programs to help you adapt to Nigerian culture and university life</p>
              </div>
              <div className="service-item">
                <span>Language Support</span>
                <p>English language support classes and tutoring if needed</p>
              </div>
              <div className="service-item">
                <span>Career Services</span>
                <p>Job placement assistance and career counseling services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Community */}
      <section className="international-community">
        <div className="container">
          <div className="section-header">
            <h2>Our International Community</h2>
            <p>Students from around the world call Al-Hikmah University home</p>
          </div>

          <div className="countries-representation">
            <div className="countries-grid">
              {countries.map((country, index) => (
                <div key={index} className="country-card">
                  <div className="country-flag">{country.flag}</div>
                  <div className="country-info">
                    <h4>{country.name}</h4>
                    <span className="student-count">{country.count} students</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="community-testimonial">
            <blockquote>
              "Al-Hikmah University has provided me with not just quality education, but a second home. 
              The international student community is vibrant and supportive, making my journey from Ghana 
              to Nigeria seamless and enriching."
            </blockquote>
            <cite>- Fatima A., Computer Science Student from Ghana</cite>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="tuition-fees">
        <div className="container">
          <div className="section-header">
            <h2>Tuition & Fees</h2>
            <p>Affordable quality education with flexible payment options</p>
          </div>

          <div className="fees-info">
            <div className="fees-note">
              <h3>International Student Fees Structure:</h3>
              <p>Our fees are competitively priced to provide excellent value for international students. 
              The exact tuition varies by program and level of study.</p>
              
              <div className="fee-highlights">
                <div className="fee-item">
                  <span className="fee-label">Undergraduate Programs:</span>
                  <span className="fee-range">$2,500 - $4,000 per year</span>
                </div>
                <div className="fee-item">
                  <span className="fee-label">Postgraduate Programs:</span>
                  <span className="fee-range">$3,000 - $5,500 per year</span>
                </div>
                <div className="fee-item">
                  <span className="fee-label">Accommodation:</span>
                  <span className="fee-range">$800 - $1,200 per year</span>
                </div>
              </div>

              <div className="payment-options">
                <h4>Payment Options:</h4>
                <ul>
                  <li>Full payment discount (5% off total fees)</li>
                  <li>Semester installments</li>
                  <li>Monthly payment plans</li>
                  <li>Scholarship opportunities available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <div className="container">
          <div className="section-header">
            <h2>Application Process</h2>
            <p>Simple steps to begin your journey</p>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Submit Application</h3>
                <p>Complete online application form and upload required documents</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Document Review</h3>
                <p>Our admissions team reviews your application and documents</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Admission Decision</h3>
                <p>Receive admission letter and begin visa application process</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Visa & Travel</h3>
                <p>Complete visa requirements and prepare for arrival in Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join our international community and experience world-class education</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <h4>International Office</h4>
                <p>📞 +234 (0) 803 XXX XXXX</p>
                <p>✉️ international@alhikmahuniversity.edu.ng</p>
              </div>
              
              <div className="contact-item">
                <h4>WhatsApp Support</h4>
                <p>💬 +234 (0) 805 XXX XXXX</p>
                <p>Available 24/7 for international inquiries</p>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="https://ecampus.alhikmahuniversity.edu.ng/admissions" className="cta-btn primary" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
              <a href="/contact" className="cta-btn secondary">
                Contact Us
              </a>
              <button type="button" className="cta-btn secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalStudents;
