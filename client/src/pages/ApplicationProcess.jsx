import React, { useState } from 'react';
import { FaClipboardList, FaCreditCard, FaFileAlt, FaCheckCircle, FaCalendarAlt, FaDownload, FaExternalLinkAlt, FaUserGraduate } from 'react-icons/fa';
import './applicationProcess.css';

const ApplicationProcess = ({
  theme = 'green',
  removeUndergradStepTitles,
  applicationFees: feesOverride,
  paymentMethods: paymentMethodsOverride,
  removeImportantDateEvents
}) => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  const defaultUndergraduateSteps = [
    {
      step: 1,
      title: "JAMB Registration",
      description: "Register for JAMB UTME and select Al-Hikmah University as your first choice",
      details: [
        "Visit JAMB portal to create profile",
        "Pay JAMB registration fee (₦4,700)",
        "Choose Al-Hikmah University as 1st choice",
        "Select appropriate course",
        "Print JAMB registration slip"
      ],
      duration: "January - March",
      status: "required"
    },
    {
      step: 2,
      title: "JAMB UTME Examination",
      description: "Take the Unified Tertiary Matriculation Examination",
      details: [
        "Study for UTME examination",
        "Take examination at designated center",
        "Ensure you meet minimum cut-off mark",
        "Check results online when available"
      ],
      duration: "April - June",
      status: "required"
    },
    {
      step: 3,
      title: "Al-Hikmah University Application",
      description: "Submit application directly to Al-Hikmah University",
      details: [
        "Visit university admission portal",
        "Create account and login",
        "Fill application form completely",
        "Upload required documents",
        "Pay application fee (₦2,000)"
      ],
      duration: "May - July",
      status: "required"
    },
    {
      step: 4,
      title: "Post-UTME Screening",
      description: "Participate in the university's screening exercise",
      details: [
        "Check eligibility for screening",
        "Print screening exam slip",
        "Attend screening on scheduled date",
        "Bring all required documents"
      ],
      duration: "July - August",
      status: "required"
    },
    {
      step: 5,
      title: "Admission List Release",
      description: "Check for your name on the admission list",
      details: [
        "Monitor admission portal regularly",
        "Check JAMB CAPS for admission status",
        "Print admission letter if offered",
        "Accept admission on JAMB portal"
      ],
      duration: "August - September",
      status: "automatic"
    },
    {
      step: 6,
      title: "Document Verification",
      description: "Physical verification of academic credentials",
      details: [
        "Visit the university with original documents",
        "Present O'Level certificates",
        "Submit birth certificate and local govt certificate",
        "Complete medical examination",
        "Take passport photographs"
      ],
      duration: "September - October",
      status: "required"
    },
    {
      step: 7,
      title: "School Fees Payment",
      description: "Pay tuition and other fees to secure admission",
      details: [
        "Obtain school fees schedule",
        "Pay fees via approved payment methods",
        "Collect official receipts",
        "Submit payment evidence to bursary"
      ],
      duration: "October - November",
      status: "required"
    },
    {
      step: 8,
      title: "Registration & Matriculation",
      description: "Complete course registration and attend matriculation",
      details: [
        "Complete online course registration",
        "Collect student ID card",
        "Join orientation program",
        "Attend matriculation ceremony"
      ],
      duration: "November",
      status: "automatic"
    }
  ];

  const postgraduateSteps = [
    {
      step: 1,
      title: "Program Research",
      description: "Research available postgraduate programs and requirements",
      details: [
        "Browse available programs on university website",
        "Check specific admission requirements",
        "Contact department for program details",
        "Prepare research proposal (for PhD programs)"
      ],
      duration: "Ongoing",
      status: "recommended"
    },
    {
      step: 2,
      title: "Application Submission",
      description: "Submit online application with required documents",
      details: [
        "Visit postgraduate admission portal",
        "Complete application form",
        "Upload academic transcripts",
        "Submit research proposal and CV",
        "Pay application fee (₦5,000)"
      ],
      duration: "March - June",
      status: "required"
    },
    {
      step: 3,
      title: "Document Verification",
      description: "Submission of original academic documents",
      details: [
        "Submit original degree certificates",
        "Provide official transcripts",
        "Present professional certificates",
        "Submit recommendation letters",
        "Complete medical examination"
      ],
      duration: "April - July",
      status: "required"
    },
    {
      step: 4,
      title: "Entrance Examination",
      description: "Take postgraduate entrance examination if required",
      details: [
        "Check if examination is required for your program",
        "Prepare for written examination",
        "Attend examination on scheduled date",
        "Some programs may require oral examination"
      ],
      duration: "July - August",
      status: "conditional"
    },
    {
      step: 5,
      title: "Interview Process",
      description: "Participate in departmental interview",
      details: [
        "Prepare for academic interview",
        "Present research interests clearly",
        "Demonstrate knowledge in chosen field",
        "Discuss career objectives"
      ],
      duration: "August - September",
      status: "required"
    },
    {
      step: 6,
      title: "Admission Decision",
      description: "Await admission decision from the university",
      details: [
        "Check admission status online",
        "Receive admission letter via email",
        "Review program details and requirements",
        "Accept or decline admission offer"
      ],
      duration: "September - October",
      status: "automatic"
    },
    {
      step: 7,
      title: "Registration & Payment",
      description: "Complete registration and pay fees",
      details: [
        "Pay acceptance fee to secure admission",
        "Complete online course registration",
        "Pay tuition and other fees",
        "Collect student ID and materials"
      ],
      duration: "October - November",
      status: "required"
    }
  ];

  const requiredDocuments = {
    undergraduate: [
      "JAMB UTME Result",
      "O'Level Certificates (WAEC/NECO/NABTEB)",
      "Birth Certificate or Age Declaration",
      "Local Government Certificate of Origin",
      "State of Origin Certificate",
      "Passport Photographs (recent)",
      "Medical Fitness Certificate",
      "Payment Receipt"
    ],
    postgraduate: [
      "Bachelor's Degree Certificate",
      "Official Academic Transcripts",
      "NYSC Discharge Certificate",
      "Curriculum Vitae (CV)",
      "Research Proposal (PhD programs)",
      "Two Academic Reference Letters",
      "Professional Certificates (if applicable)",
      "Passport Photographs (recent)",
      "Medical Fitness Certificate"
    ]
  };

  const defaultApplicationFees = {
    undergraduate: "₦2,000",
    masters: "₦5,000",
    phd: "₦8,000"
  };

  const defaultImportantDates = [
    { event: "Application Opens", date: "March 1st", category: "deadline" },
    { event: "JAMB Registration Ends", date: "April 15th", category: "deadline" },
    { event: "Application Deadline", date: "July 31st", category: "deadline" },
    { event: "Post-UTME Screening", date: "August 1st - 15th", category: "exam" },
    { event: "First Admission List", date: "August 30th", category: "result" },
    { event: "Document Verification", date: "September 1st - 30th", category: "process" },
    { event: "School Fees Deadline", date: "October 31st", category: "deadline" },
    { event: "Matriculation Ceremony", date: "November 15th", category: "event" }
  ];

  const applicationFees = feesOverride ? { ...defaultApplicationFees, ...feesOverride } : defaultApplicationFees;

  let undergraduateSteps = defaultUndergraduateSteps;
  if (removeUndergradStepTitles && Array.isArray(removeUndergradStepTitles)) {
    undergraduateSteps = defaultUndergraduateSteps
      .filter(s => !removeUndergradStepTitles.includes(s.title))
      .map((s, idx) => ({ ...s, step: idx + 1 }));
  }

  let importantDates = defaultImportantDates;
  if (removeImportantDateEvents && Array.isArray(removeImportantDateEvents)) {
    importantDates = defaultImportantDates.filter(d => !removeImportantDateEvents.includes(d.event));
  }

  const paymentMethods = paymentMethodsOverride && Array.isArray(paymentMethodsOverride)
    ? paymentMethodsOverride
    : ["Bank Transfer", "Online Payment", "Bank Draft", "Mobile Money"];

  return (
    <div className={`application-process-page ${theme === 'green' ? 'green-theme' : ''}`}>
      {/* Hero Section */}
      <section className="process-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Application Process</h1>
            <p>Your step-by-step guide to joining Al-Hikmah University</p>
            <div className="hero-cta">
              <a href="https://ecampus.alhikmahuniversity.edu.ng/admissions" className="hero-btn" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
                Start Your Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="program-tabs">
        <div className="container">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'undergraduate' ? 'active' : ''}`}
              onClick={() => setActiveTab('undergraduate')}
            >
              <FaUserGraduate />
              Undergraduate
            </button>
            <button 
              className={`tab-btn ${activeTab === 'postgraduate' ? 'active' : ''}`}
              onClick={() => setActiveTab('postgraduate')}
            >
              <FaUserGraduate />
              Postgraduate
            </button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-steps">
        <div className="container">
          <div className="steps-header">
            <h2>{activeTab === 'undergraduate' ? 'Undergraduate' : 'Postgraduate'} Application Steps</h2>
            <p>Follow these steps carefully to ensure successful application</p>
          </div>

          <div className="steps-timeline">
            {(activeTab === 'undergraduate' ? undergraduateSteps : postgraduateSteps).map((step, index) => (
              <div key={index} className={`timeline-item ${step.status}`}>
                <div className="timeline-marker">
                  <span className="step-number">{step.step}</span>
                </div>
                
                <div className="timeline-content">
                  <div className="step-header">
                    <h3>{step.title}</h3>
                    <span className={`status-badge ${step.status}`}>
                      {step.status === 'required' && <FaCheckCircle />}
                      {step.status === 'automatic' && <FaCalendarAlt />}
                      {step.status === 'recommended' && <FaClipboardList />}
                      {step.status === 'conditional' && <FaFileAlt />}
                      {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                    </span>
                  </div>
                  
                  <p className="step-description">{step.description}</p>
                  
                  <div className="step-details">
                    <ul>
                      {step.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="step-footer">
                    <span className="step-duration">
                      <FaCalendarAlt />
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="required-documents">
        <div className="container">
          <div className="section-header">
            <h2>Required Documents</h2>
            <p>Ensure you have all these documents ready before applying</p>
          </div>
          
          <div className="documents-content">
            <div className="documents-list">
              <h3>{activeTab === 'undergraduate' ? 'Undergraduate' : 'Postgraduate'} Documents</h3>
              <div className="documents-grid">
                {requiredDocuments[activeTab].map((doc, index) => (
                  <div key={index} className="document-item">
                    <FaFileAlt className="doc-icon" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="documents-note">
              <div className="note-content">
                <h4>Important Notes:</h4>
                <ul>
                  <li>All documents must be original or certified true copies</li>
                  <li>International students may require additional documentation</li>
                  <li>Documents not in English must be officially translated</li>
                  <li>Ensure all certificates are properly authenticated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Fees */}
      <section className="application-fees">
        <div className="container">
          <div className="section-header">
            <h2>Application Fees</h2>
            <p>Current application fees for different program levels</p>
          </div>
          
          <div className="fees-grid">
            <div className="fee-card">
              <div className="fee-header">
                <FaCreditCard className="fee-icon" />
                <h3>Undergraduate</h3>
              </div>
              <div className="fee-amount">{applicationFees.undergraduate}</div>
              <div className="fee-details">
                <p>Includes application processing and screening fees</p>
              </div>
            </div>
            
            <div className="fee-card featured">
              <div className="fee-header">
                <FaCreditCard className="fee-icon" />
                <h3>Masters Program</h3>
              </div>
              <div className="fee-amount">{applicationFees.masters}</div>
              <div className="fee-details">
                <p>Includes application review and interview process</p>
              </div>
            </div>
            
            <div className="fee-card">
              <div className="fee-header">
                <FaCreditCard className="fee-icon" />
                <h3>PhD Program</h3>
              </div>
              <div className="fee-amount">{applicationFees.phd}</div>
              <div className="fee-details">
                <p>Includes comprehensive evaluation and defense</p>
              </div>
            </div>
          </div>
          
          <div className="payment-info">
            <h4>Payment Methods</h4>
            <div className="payment-methods">
              {paymentMethods.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="important-dates">
        <div className="container">
          <div className="section-header">
            <h2>Important Dates - 2025/2026 Session</h2>
            <p>Mark your calendar with these crucial dates</p>
          </div>
          
          <div className="dates-timeline">
            {importantDates.map((date, index) => (
              <div key={index} className={`date-item ${date.category}`}>
                <div className="date-marker">
                  <FaCalendarAlt />
                </div>
                <div className="date-content">
                  <h4>{date.event}</h4>
                  <span className="date-value">{date.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="help-support">
        <div className="container">
          <div className="support-content">
            <h2>Need Help?</h2>
            <p>Our admissions team is here to assist you throughout the application process</p>
            
            <div className="support-options">
              <div className="support-card">
                <h4>Admissions Office</h4>
                <p>📞 +234 (0) 803 XXX XXXX</p>
                <p>✉️ admissions@alhikmahuniversity.edu.ng</p>
              </div>
              
              <div className="support-card">
                <h4>Technical Support</h4>
                <p>📞 +234 (0) 805 XXX XXXX</p>
                <p>✉️ support@alhikmahuniversity.edu.ng</p>
              </div>
              
              <div className="support-card">
                <h4>Visit Us</h4>
                <p>🏢 Al-Hikmah University</p>
                <p>📍 Ilorin, Kwara State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Start your application today and take the first step towards your future</p>
            <div className="cta-buttons">
              <a href="https://ecampus.alhikmahuniversity.edu.ng/admissions" className="cta-btn primary" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
                Apply Now
              </a>
              <a href="/admission-requirements" className="cta-btn secondary">
                <FaFileAlt />
                View Requirements
              </a>
              <button type="button" className="cta-btn secondary">
                <FaDownload />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcess;
