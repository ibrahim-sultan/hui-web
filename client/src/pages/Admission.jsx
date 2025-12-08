import React from 'react';
import '../pages/admission.css';

function Admission() {
  return (
    <div className="admission-page">
     
      <section className="requirements-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Admission Requirements & Process</h1>
          <p>Comprehensive details on admission requirements, application process, fees, important dates, and support.</p>
        </div>
      </section>

      <section className="requirements-content container">
        <div className="requirement-section">
          <div className="requirement-header">
            <h3>Undergraduate Admission</h3>
          </div>
          <ul className="requirements-list">
            <li><span className="check-icon">✓</span> WAEC/NECO with 5 credits including English & Mathematics</li>
            <li><span className="check-icon">✓</span> UTME score of 180 and above</li>
            <li><span className="check-icon">✓</span> Post-UTME screening test</li>
            <li><span className="check-icon">✓</span> Original certificates for verification</li>
          </ul>
        </div>

        <div className="requirement-section">
          <div className="requirement-header">
            <h3>Postgraduate Admission</h3>
          </div>
          <ul className="requirements-list">
            <li><span className="check-icon">✓</span> Bachelor's degree from recognized institution</li>
            <li><span className="check-icon">✓</span> Minimum CGPA of 3.0 (for Master's)</li>
            <li><span className="check-icon">✓</span> Research proposal (for PhD)</li>
            <li><span className="check-icon">✓</span> Two academic references</li>
          </ul>
        </div>
      </section>

      <section className="application-process container">
        <h2>Application Process</h2>
        <div className="steps-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">1</div>
            <div className="timeline-content">
              <h4>Apply Online</h4>
              <p>Fill out the online application form on our portal</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2</div>
            <div className="timeline-content">
              <h4>Submit Documents</h4>
              <p>Upload required documents and certificates</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">3</div>
            <div className="timeline-content">
              <h4>Pay Fees</h4>
              <p>Make payment for application processing</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">4</div>
            <div className="timeline-content">
              <h4>Await Response</h4>
              <p>Wait for admission decision notification</p>
            </div>
          </div>
        </div>
        <div className="application-cta">
          <button className="hero-cta hero-btn">Apply Now</button>
        </div>
      </section>

      <section className="cutoff-marks">
        <div className="cutoff-content">
          <h2>Cut-off Marks</h2>
          <div className="cutoff-info">
            <div className="cutoff-card">
              <h3>Undergraduate</h3>
              <div className="cutoff-score">180</div>
              <p>Minimum UTME score required for undergraduate admission.</p>
            </div>
            <div className="cutoff-card postgrad">
              <h3>Postgraduate</h3>
              <div className="cutoff-score">3.0 CGPA</div>
              <p>Minimum CGPA required for postgraduate admission.</p>
            </div>
          </div>
          <p className="cutoff-note">Note: Cut-off marks are subject to change based on admission policies.</p>
        </div>
      </section>

      <section className="important-notes">
        <div className="notes-content">
          <h2><span className="warning-icon">⚠️</span> Important Notes</h2>
          <div className="notes-grid">
            <div className="note-item">
              <span className="note-icon">📌</span>
              Ensure all documents are authentic and verifiable.
            </div>
            <div className="note-item">
              <span className="note-icon">📌</span>
              Late applications may not be considered.
            </div>
            <div className="note-item">
              <span className="note-icon">📌</span>
              Follow all instructions carefully to avoid disqualification.
            </div>
          </div>
        </div>
      </section>

      <section className="application-fees">
        <h2>Application Fees</h2>
        <div className="fees-grid">
          <div className="fee-card">
            <div className="fee-header">Undergraduate</div>
            <div className="fee-amount">₦10,000</div>
            <div className="fee-details">Non-refundable application fee</div>
          </div>
          <div className="fee-card">
            <div className="fee-header">Postgraduate</div>
            <div className="fee-amount">₦25,000</div>
            <div className="fee-details">Non-refundable application fee</div>
          </div>
        </div>
        <p className="payment-info">Payment can be made via bank transfer, online payment, </p>
      </section>

      <section className="important-dates">
        <h2>Important Dates</h2>
        <div className="dates-timeline">
          <div className="date-item">
            <div className="date-marker">📅</div>
            <div className="date-content">
              <h4>Application Opens</h4>
              <div className="date-value">August 1, 2025</div>
            </div>
          </div>
          <div className="date-item">
            <div className="date-marker">📅</div>
            <div className="date-content">
              <h4>Application Closes</h4>
              <div className="date-value">September 30, 2025</div>
            </div>
          </div>
          <div className="date-item">
            <div className="date-marker">📅</div>
            <div className="date-content">
              <h4>Screening Test</h4>
              <div className="date-value">October 15, 2025</div>
            </div>
          </div>
          <div className="date-item">
            <div className="date-marker">📅</div>
            <div className="date-content">
              <h4>Admission Decision</h4>
              <div className="date-value">November 30, 2025</div>
            </div>
          </div>
        </div>
      </section>

      <section className="help-support">
        <div className="support-content">
          <h2>Help & Support</h2>
          <div className="support-options">
            <div className="support-card">
              <h4>Contact Admissions Office</h4>
              <p>Email: admissions@alhikmahuniversity.edu.ng</p>
              <p>Phone: +234 123 456 7890</p>
            </div>
            <div className="support-card">
              <h4>Technical Support</h4>
              <p>Email: support@alhikmahuniversity.edu.ng</p>
              <p>Phone: +234 987 654 3210</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>Ready to Join Al-Hikmah University?</h2>
        <p>Start your application today and take the first step towards a bright future.</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Apply Now</button>
          <button className="cta-btn secondary">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default Admission;
