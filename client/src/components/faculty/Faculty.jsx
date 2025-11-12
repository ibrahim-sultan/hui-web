import React, { useState } from 'react';
import "./faculty.css";

// Faculty and department data based on Al-Hikmah University structure
const facultyData = {
  "Faculty of Agriculture": {
    dean: "Dr. K.N Olorunnishoa",
    description: "The Faculty of Agricultural Sciences at Al‑Hikmah delivers a robust, modern curriculum and substantial financial support through early‑stage scholarships.",
    departments: [
      "Department of Agriculture"
    ]
  },
  "Faculty of Education": {
    dean: "Dr. Mrs. RASHEEDAT M. OLADIMEJI",
    description: "The Faculty of Education at Al‑Hikmah University is a well‑structured, outreach-driven unit offering a broad range of undergraduate education degrees.",
    departments: [
      "Department of Science Education",
      "Department of Arts and Social Sciences Education", 
      "Department of Educational Management and Counselling"
    ]
  },
  "Faculty of Health Sciences": {
    dean: "Prof. O.O Kayode",
    description: "The Faculty of Health Sciences, launched in 2018, offers a robust suite of programmes—Medical Laboratory Science, Public Health, Anatomy, Physiology, and Nursing.",
    departments: [
      "Department of Medical Laboratory Science",
      "Department of Community Health",
      "Department of Human Anatomy",
      "Department of Human Physiology"
    ]
  },
  "Faculty of Humanities and Social Sciences": {
    dean: "Prof. L. F Oladimeji",
    description: "This faculty combines a strong foundation in liberal arts (languages, history, Islamic studies) with practical social science disciplines.",
    departments: [
      "Department of Sociology and Criminology",
      "Department of Political Science and Public Administration",
      "Department of Mass Communication",
      "Department of Languages",
      "Department of Islamic Studies",
      "Department of History and International Studies"
    ]
  },
  "Faculty of Law": {
    dean: "Dr. (Mrs.) Bayero-jimoh Maryam",
    description: "This faculty, operational since October 2015, is fully accredited and offers a comprehensive LL.B. curriculum in both Common and Islamic Law.",
    departments: [
      "Department of Law"
    ]
  },
  "Faculty of Management Sciences": {
    dean: "Prof. Aremu M Adeyemi FSM",
    description: "The Faculty of Management Sciences at Al‑Hikmah is committed to developing high-caliber professionals in accounting, finance, business, and economics.",
    departments: [
      "Department of Accounting",
      "Department of Finance",
      "Department of Economics",
      "Department of Business Administration"
    ]
  },
  "Faculty of Natural and Applied Sciences": {
    dean: "Dr (Mrs) F.M JIMOH",
    description: "The Faculty of Natural & Applied Sciences offers a comprehensive STEM education with strong leadership, well‑structured departments.",
    departments: [
      "Department of Chemical and Geological Sciences",
      "Department of Biological Sciences",
      "Department of Physical Sciences"
    ]
  },
  "Faculty of Computing, Engineering and Technology": {
    dean: "Dr. T.U ABDULRAUF",
    description: "The Faculty of Computing, Engineering and Technology specializes in core computer science fields—covering cybersecurity, software development, and IT systems.",
    departments: [
      "Department of Computer Sciences",
      "Department of Data Science and Information Systems"
    ]
  },
  "Faculty of Nursing Sciences": {
    dean: "TBD",
    description: "Faculty of Nursing Sciences provides comprehensive nursing education and training programs.",
    departments: [
      "Department of Nursing Sciences"
    ]
  },
  "School of Medicine and Surgery": {
    dean: "TBD",
    description: "School of Medicine and Surgery offering MBBS program for future medical practitioners.",
    departments: [
      "Department of Medicine and Surgery"
    ]
  },
  "College of Health Sciences": {
    dean: "TBD",
    description: "College of Health Sciences providing various health-related programs and specializations.",
    departments: [
      "Various Health Science Departments"
    ]
  }
};

function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleFacultyClick = (facultyName) => {
    setSelectedFaculty(selectedFaculty === facultyName ? null : facultyName);
  };

  return (
    <div>
      <div className="background">
        <br />
        <br />
        <br />
        <br /> <br />
        <h1>Faculties, Colleges, & Schools</h1>
        <hr />
      </div>
      
      {/* Interactive Faculty Cards Section */}
      <div className="faculty-container">
        <div className="faculty-grid">
          {Object.entries(facultyData).map(([facultyName, facultyInfo]) => (
            <div key={facultyName} className="faculty-card">
              <div 
                className="faculty-header"
                onClick={() => handleFacultyClick(facultyName)}
              >
                <h2 className="faculty-name">{facultyName}</h2>
                <div className="faculty-toggle">
                  {selectedFaculty === facultyName ? '−' : '+'}
                </div>
              </div>
              
              <div className="faculty-info">
                <p className="faculty-dean">Dean: {facultyInfo.dean}</p>
                <p className="faculty-description">{facultyInfo.description}</p>
              </div>
              
              {selectedFaculty === facultyName && (
                <div className="departments-section">
                  <h3>Departments:</h3>
                  <ul className="departments-list">
                    {facultyInfo.departments.map((department, index) => (
                      <li key={index} className="department-item">
                        <span className="department-icon">🏫</span>
                        {department}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Links Sidebar */}
      <div className="sidebar-section">
        <div className="quick-links">
          <button className="quick-links-toggle">
            Quick Links <span>▼</span>
          </button>
          <ul className="quick-links-list">
            <li><a href="#undergraduate">Undergraduate Programs</a></li>
            <li><a href="#postgraduate">Postgraduate Programs</a></li>
            <li><a href="#admission">Admission Requirements</a></li>
            <li><a href="#scholarships">Scholarships</a></li>
            <li><a href="#academic-calendar">Academic Calendar</a></li>
            <li><a href="#libraries">Libraries</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
