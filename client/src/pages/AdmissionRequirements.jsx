import React from 'react';
import { FaGraduationCap, FaFileAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import './admissionRequirements.css';
import ApplicationProcess from './ApplicationProcess';

const AdmissionRequirements = () => {
  const undergraduateReqs = [
    "Minimum of 5 O'Level credits including English Language and Mathematics",
    "Acceptable JAMB UTME score (varies by program)",
    "Post-UTME screening examination",
    "Completed application form",
    "Birth certificate or age declaration",
    "Local Government certificate of origin",
    "Medical fitness certificate",
    "Passport photographs (recent)"
  ];

  const postgraduateReqs = [
    "Bachelor's degree with minimum Second Class Lower Division",
    "Official transcripts from previous institutions",
    "Two academic references",
    "Statement of purpose",
    "Research proposal (for PhD programs)",
    "Professional experience letter (where applicable)",
    "Medical fitness certificate",
    "Passport photographs (recent)"
  ];

  const programSpecific = [
    {
      program: "Law (LLB)",
      requirements: [
        "Minimum of 6 O'Level credits",
        "JAMB UTME score of 200 and above",
        "Credits in English, Mathematics, Literature, Government/History, and any other Arts subject"
      ]
    },
    {
      program: "Medical Laboratory Science",
      requirements: [
        "5 O'Level credits including English, Mathematics, Physics, Chemistry, and Biology",
        "JAMB UTME score of 220 and above",
        "Science subjects combination in JAMB"
      ]
    },
    {
      program: "Computer Science",
      requirements: [
        "5 O'Level credits including English, Mathematics, Physics",
        "JAMB UTME score of 180 and above",
        "Mathematics, Physics, and Chemistry/Biology in JAMB"
      ]
    },
    {
      program: "Mass Communication",
      requirements: [
        "5 O'Level credits including English and Mathematics",
        "JAMB UTME score of 160 and above",
        "English, Literature, and any two Arts subjects in JAMB"
      ]
    }
  ];

  const importantNotes = [
    "All certificates must be original or certified true copies",
    "International students may require additional documentation",
    "Some programs may have specific cut-off marks",
    "Late applications may not be considered",
    "All fees must be paid before admission confirmation"
  ];

  return (
    <div className="admission-requirements-page">
      <ApplicationProcess />
      {/* Hero Section */}
      <section className="requirements-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Admission Requirements</h1>
            <p>Everything you need to know about joining Al-Hikmah University</p>
            <div className="hero-highlights">
              <div className="highlight-item">
                <FaGraduationCap className="highlight-icon" />
                <span>Multiple Program Options</span>
              </div>
              <div className="highlight-item">
                <FaFileAlt className="highlight-icon" />
                <span>Clear Requirements</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>Merit-Based Selection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Requirements */}
      <section className="general-requirements">
        <div className="container">
          <div className="requirements-content">
            <div className="requirement-section">
              <div className="requirement-header">
                <FaGraduationCap className="req-icon" />
                <h2>Undergraduate Programs</h2>
              </div>
              <div className="requirement-card">
                <h3>General Requirements</h3>
                <ul className="requirements-list">
                  {undergraduateReqs.map((req, index) => (
                    <li key={index}>
                      <FaCheckCircle className="check-icon" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="requirement-section">
              <div className="requirement-header">
                <FaGraduationCap className="req-icon postgrad" />
                <h2>Postgraduate Programs</h2>
              </div>
              <div className="requirement-card">
                <h3>General Requirements</h3>
                <ul className="requirements-list">
                  {postgraduateReqs.map((req, index) => (
                    <li key={index}>
                      <FaCheckCircle className="check-icon" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program-Specific Requirements */}
      <section className="program-specific">
        <div className="container">
          <div className="section-header">
            <h2>Program-Specific Requirements</h2>
            <p>Additional requirements for selected programs</p>
          </div>
          
          <div className="programs-grid">
            {programSpecific.map((program, index) => (
              <div key={index} className="program-req-card">
                <h3>{program.program}</h3>
                <ul className="program-requirements">
                  {program.requirements.map((req, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JAMB Subject Combinations */}
      <section className="jamb-subjects">
        <div className="container">
          <div className="section-header">
            <h2>JAMB Subject Combinations</h2>
            <p>Required UTME subjects for different faculties</p>
          </div>
          
          <div className="subjects-grid">
            <div className="subject-card">
              <h3>Management Sciences</h3>
              <p><strong>Core:</strong> Mathematics, English Language</p>
              <p><strong>Others:</strong> Economics, Government, Commerce, Accounting</p>
            </div>
            
            <div className="subject-card">
              <h3>Natural Sciences</h3>
              <p><strong>Core:</strong> Mathematics, English Language, Physics</p>
              <p><strong>Others:</strong> Chemistry, Biology, Agricultural Science</p>
            </div>
            
            <div className="subject-card">
              <h3>Humanities</h3>
              <p><strong>Core:</strong> English Language</p>
              <p><strong>Others:</strong> Literature, Government, History, Islamic Studies, Arabic</p>
            </div>
            
            <div className="subject-card">
              <h3>Health Sciences</h3>
              <p><strong>Core:</strong> English Language, Mathematics, Physics, Chemistry</p>
              <p><strong>Others:</strong> Biology</p>
            </div>
            
            <div className="subject-card">
              <h3>Education</h3>
              <p><strong>Core:</strong> English Language</p>
              <p><strong>Others:</strong> Two teaching subjects + Mathematics or any Arts subject</p>
            </div>
            
            <div className="subject-card">
              <h3>Law</h3>
              <p><strong>Core:</strong> English Language</p>
              <p><strong>Others:</strong> Literature, Government, History, Islamic Studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cut-off Marks */}
      <section className="cutoff-marks">
        <div className="container">
          <div className="cutoff-content">
            <h2>2025/2026 Cut-off Marks</h2>
            <div className="cutoff-info">
              <div className="cutoff-card">
                <h3>General Cut-off</h3>
                <div className="cutoff-score">140</div>
                <p>Minimum JAMB score for most programs</p>
              </div>
              
              <div className="cutoff-card competitive">
                <h3>Competitive Programs</h3>
                <div className="cutoff-score">200+</div>
                <p>Law, Medicine-related programs</p>
              </div>
              
              <div className="cutoff-card postgrad">
                <h3>Postgraduate</h3>
                <div className="cutoff-score">2:2</div>
                <p>Minimum class of degree required</p>
              </div>
            </div>
            
            <div className="cutoff-note">
              <p><strong>Note:</strong> Cut-off marks may vary based on the number of applicants and available spaces. 
              Meeting the minimum requirement does not guarantee admission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="important-notes">
        <div className="container">
          <div className="notes-content">
            <h2>
              <FaExclamationTriangle className="warning-icon" />
              Important Notes
            </h2>
            <div className="notes-grid">
              {importantNotes.map((note, index) => (
                <div key={index} className="note-item">
                  <FaExclamationTriangle className="note-icon" />
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="application-cta">
        <div className="container">
          <div className="cta-content" style={{ backgroundColor:  '#157646' }}>
            <h2>Ready to Apply?</h2>
            <p>Start your journey with Al-Hikmah University today</p>
            <div className="cta-buttons"> 
              <a href="https://ecampus.alhikmahuniversity.edu.ng/admissions" className="cta-btn primary" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
              <a href="/application-process" className="cta-btn secondary">
                Application Process
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionRequirements;
