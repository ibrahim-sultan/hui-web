import React, { useState } from 'react';
import { FaGraduationCap, FaUserGraduate, FaCertificate, FaSearch, FaUsers, FaBook, FaLaptopCode, FaFlask } from 'react-icons/fa';
import { MdScience, MdBusiness, MdGavel, MdHealthAndSafety } from 'react-icons/md';
import './programs.css';

const Programs = () => {
  const [activeLevel, setActiveLevel] = useState('undergraduate');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('all');

  const faculties = [
    { id: 'management', name: 'Management Sciences', icon: <MdBusiness />, color: '#2196F3' },
    { id: 'humanities', name: 'Humanities & Social Sciences', icon: <FaUsers />, color: '#FF9800' },
    { id: 'sciences', name: 'Natural & Applied Sciences', icon: <MdScience />, color: '#4CAF50' },
    { id: 'education', name: 'Education', icon: <FaBook />, color: '#9C27B0' },
    { id: 'health', name: 'Health Sciences', icon: <MdHealthAndSafety />, color: '#F44336' },
    { id: 'law', name: 'Law', icon: <MdGavel />, color: '#795548' },
    { id: 'computing', name: 'Computing, Engineering & Technology', icon: <FaLaptopCode />, color: '#607D8B' },
    { id: 'agriculture', name: 'Agriculture', icon: <FaFlask />, color: '#8BC34A' }
  ];

  const undergraduatePrograms = [
    // Management Sciences
    { name: 'Accounting', faculty: 'management', duration: '4 years', level: 'undergraduate', description: 'Professional accounting with ICAN recognition' },
    { name: 'Business Administration', faculty: 'management', duration: '4 years', level: 'undergraduate', description: 'Comprehensive business management skills' },
    { name: 'Economics', faculty: 'management', duration: '4 years', level: 'undergraduate', description: 'Economic theory and policy analysis' },
    { name: 'Banking & Finance', faculty: 'management', duration: '4 years', level: 'undergraduate', description: 'Financial management and banking operations' },
    
    // Humanities & Social Sciences
    { name: 'Mass Communication', faculty: 'humanities', duration: '4 years', level: 'undergraduate', description: 'Media studies and communication skills' },
    { name: 'English Language', faculty: 'humanities', duration: '4 years', level: 'undergraduate', description: 'Language studies and literature' },
    { name: 'Political Science', faculty: 'humanities', duration: '4 years', level: 'undergraduate', description: 'Political theory and public administration' },
    { name: 'Sociology', faculty: 'humanities', duration: '4 years', level: 'undergraduate', description: 'Society and social behavior studies' },
    { name: 'Islamic Studies', faculty: 'humanities', duration: '4 years', level: 'undergraduate', description: 'Islamic theology and jurisprudence' },
    { name: 'History & International Studies', faculty: 'humanities', duration: '4 years', level: 'undergraduate', description: 'Historical research and international relations' },
    { name: 'Arabic Language', faculty: 'humanities', duration: '4 years', level: 'undergraduate', description: 'Arabic language and literature' },
    
    // Natural & Applied Sciences
    { name: 'Computer Science', faculty: 'sciences', duration: '4 years', level: 'undergraduate', description: 'Software development and computer systems' },
    { name: 'Chemistry', faculty: 'sciences', duration: '4 years', level: 'undergraduate', description: 'Chemical processes and analysis' },
    { name: 'Physics', faculty: 'sciences', duration: '4 years', level: 'undergraduate', description: 'Physical sciences and applications' },
    { name: 'Mathematics', faculty: 'sciences', duration: '4 years', level: 'undergraduate', description: 'Mathematical theory and applications' },
    { name: 'Biology', faculty: 'sciences', duration: '4 years', level: 'undergraduate', description: 'Biological sciences and life processes' },
    { name: 'Geology', faculty: 'sciences', duration: '4 years', level: 'undergraduate', description: 'Earth sciences and mineral studies' },
    { name: 'Statistics', faculty: 'sciences', duration: '4 years', level: 'undergraduate', description: 'Statistical analysis and data science' },
    
    // Education
    { name: 'Educational Management', faculty: 'education', duration: '4 years', level: 'undergraduate', description: 'School administration and leadership' },
    { name: 'Science Education (Biology)', faculty: 'education', duration: '4 years', level: 'undergraduate', description: 'Biology teaching methodology' },
    { name: 'Science Education (Chemistry)', faculty: 'education', duration: '4 years', level: 'undergraduate', description: 'Chemistry teaching methodology' },
    { name: 'Science Education (Physics)', faculty: 'education', duration: '4 years', level: 'undergraduate', description: 'Physics teaching methodology' },
    { name: 'Science Education (Mathematics)', faculty: 'education', duration: '4 years', level: 'undergraduate', description: 'Mathematics teaching methodology' },
    { name: 'Arts Education (English)', faculty: 'education', duration: '4 years', level: 'undergraduate', description: 'English language teaching' },
    { name: 'Arts Education (Islamic Studies)', faculty: 'education', duration: '4 years', level: 'undergraduate', description: 'Islamic studies teaching' },
    
    // Health Sciences
    { name: 'Medical Laboratory Science', faculty: 'health', duration: '5 years', level: 'undergraduate', description: 'Medical diagnostics and laboratory technology' },
    { name: 'Human Anatomy', faculty: 'health', duration: '5 years', level: 'undergraduate', description: 'Human body structure and function' },
    { name: 'Human Physiology', faculty: 'health', duration: '5 years', level: 'undergraduate', description: 'Human body systems and processes' },
    { name: 'Community Health', faculty: 'health', duration: '4 years', level: 'undergraduate', description: 'Public health and community wellness' },
    
    // Law
    { name: 'Law (LLB)', faculty: 'law', duration: '5 years', level: 'undergraduate', description: 'Legal studies and jurisprudence' },
    
    // Computing & Technology
    { name: 'Data Science', faculty: 'computing', duration: '4 years', level: 'undergraduate', description: 'Data analysis and machine learning' },
    { name: 'Information Systems', faculty: 'computing', duration: '4 years', level: 'undergraduate', description: 'Information technology management' },
    
    // Agriculture
    { name: 'Agriculture', faculty: 'agriculture', duration: '4 years', level: 'undergraduate', description: 'Crop production and agricultural science' }
  ];

  const postgraduatePrograms = [
    // Management Sciences
    { name: 'MBA (Business Administration)', faculty: 'management', duration: '2 years', level: 'postgraduate', description: 'Advanced business management and leadership' },
    { name: 'M.Sc Accounting', faculty: 'management', duration: '2 years', level: 'postgraduate', description: 'Advanced accounting theory and practice' },
    { name: 'M.Sc Economics', faculty: 'management', duration: '2 years', level: 'postgraduate', description: 'Advanced economic analysis and policy' },
    { name: 'M.Sc Banking & Finance', faculty: 'management', duration: '2 years', level: 'postgraduate', description: 'Advanced financial management' },
    
    // Humanities & Social Sciences
    { name: 'M.A Mass Communication', faculty: 'humanities', duration: '2 years', level: 'postgraduate', description: 'Advanced media studies and research' },
    { name: 'M.A English Language', faculty: 'humanities', duration: '2 years', level: 'postgraduate', description: 'Advanced language and literature studies' },
    { name: 'M.A Islamic Studies', faculty: 'humanities', duration: '2 years', level: 'postgraduate', description: 'Advanced Islamic scholarship' },
    { name: 'M.Sc Political Science', faculty: 'humanities', duration: '2 years', level: 'postgraduate', description: 'Advanced political theory and analysis' },
    
    // Natural & Applied Sciences
    { name: 'M.Sc Computer Science', faculty: 'sciences', duration: '2 years', level: 'postgraduate', description: 'Advanced computing and software engineering' },
    { name: 'M.Sc Chemistry', faculty: 'sciences', duration: '2 years', level: 'postgraduate', description: 'Advanced chemical research and analysis' },
    { name: 'M.Sc Physics', faculty: 'sciences', duration: '2 years', level: 'postgraduate', description: 'Advanced physics research' },
    { name: 'M.Sc Mathematics', faculty: 'sciences', duration: '2 years', level: 'postgraduate', description: 'Advanced mathematical research' },
    
    // Education
    { name: 'M.Ed Educational Management', faculty: 'education', duration: '2 years', level: 'postgraduate', description: 'Advanced school administration' },
    { name: 'M.Ed Science Education', faculty: 'education', duration: '2 years', level: 'postgraduate', description: 'Advanced science teaching methodology' },
    
    // PhD Programs
    { name: 'Ph.D in Management', faculty: 'management', duration: '3-5 years', level: 'postgraduate', description: 'Doctoral research in management sciences' },
    { name: 'Ph.D in Islamic Studies', faculty: 'humanities', duration: '3-5 years', level: 'postgraduate', description: 'Doctoral research in Islamic scholarship' },
    { name: 'Ph.D in Computer Science', faculty: 'sciences', duration: '3-5 years', level: 'postgraduate', description: 'Doctoral research in computing' },
    { name: 'Ph.D in Education', faculty: 'education', duration: '3-5 years', level: 'postgraduate', description: 'Doctoral research in education' }
  ];

  const diplomaPrograms = [
    { name: 'Diploma in Islamic Studies', faculty: 'humanities', duration: '2 years', level: 'diploma', description: 'Foundational Islamic knowledge' },
    { name: 'Diploma in Computer Science', faculty: 'sciences', duration: '2 years', level: 'diploma', description: 'Basic computing skills and programming' },
    { name: 'Professional Certificate in Islamic Estate Distribution', faculty: 'humanities', duration: '6 months', level: 'diploma', description: 'Islamic inheritance law and practice' },
    { name: 'Certificate in Da\'wah and Imamship', faculty: 'humanities', duration: '1 year', level: 'diploma', description: 'Islamic preaching and mosque leadership' },
    { name: 'ICAN Professional Training Program', faculty: 'management', duration: '1-2 years', level: 'diploma', description: 'Professional accounting certification' }
  ];

  const allPrograms = {
    undergraduate: undergraduatePrograms,
    postgraduate: postgraduatePrograms,
    diploma: diplomaPrograms
  };

  const filteredPrograms = allPrograms[activeLevel].filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFaculty = selectedFaculty === 'all' || program.faculty === selectedFaculty;
    return matchesSearch && matchesFaculty;
  });

  const getLevelIcon = (level) => {
    switch(level) {
      case 'undergraduate': return <FaGraduationCap />;
      case 'postgraduate': return <FaUserGraduate />;
      case 'diploma': return <FaCertificate />;
      default: return <FaGraduationCap />;
    }
  };

  const getFacultyColor = (facultyId) => {
    const faculty = faculties.find(f => f.id === facultyId);
    return faculty ? faculty.color : '#2196F3';
  };

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Academic Programs</h1>
            <p>Discover world-class education opportunities at Al-Hikmah University</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">75+</span>
                <span className="stat-label">Programs</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">9</span>
                <span className="stat-label">Faculties</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">350+</span>
                <span className="stat-label">Expert Faculty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculties Overview */}
      <section className="faculties-overview">
        <div className="container">
          <h2>Our Faculties</h2>
          <div className="faculties-grid">
            {faculties.map((faculty) => (
              <div key={faculty.id} className="faculty-card" style={{ borderLeftColor: faculty.color }}>
                <div className="faculty-icon" style={{ color: faculty.color }}>
                  {faculty.icon}
                </div>
                <h3>{faculty.name}</h3>
                <p>Comprehensive programs designed for academic and professional excellence</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Filter and Search */}
      <section className="programs-filter">
        <div className="container">
          <div className="filter-header">
            <h2>Explore Our Programs</h2>
            <p>Find the perfect program to launch your career</p>
          </div>
          
          {/* Level Tabs */}
          <div className="level-tabs">
            {Object.keys(allPrograms).map((level) => (
              <button
                key={level}
                className={`level-tab ${activeLevel === level ? 'active' : ''}`}
                onClick={() => setActiveLevel(level)}
              >
                {getLevelIcon(level)}
                <span className="tab-text">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </span>
                <span className="tab-count">({allPrograms[level].length})</span>
              </button>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="search-filter-bar">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="faculty-filter"
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
            >
              <option value="all">All Faculties</option>
              {faculties.map((faculty) => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid-section">
        <div className="container">
          <div className="programs-grid">
            {filteredPrograms.map((program, index) => {
              const faculty = faculties.find(f => f.id === program.faculty);
              return (
                <div key={index} className="program-card">
                  <div className="program-header" style={{ backgroundColor: getFacultyColor(program.faculty) }}>
                    <div className="program-icon">
                      {faculty?.icon}
                    </div>
                    <div className="program-level">
                      {getLevelIcon(program.level)}
                    </div>
                  </div>
                  <div className="program-content">
                    <h3>{program.name}</h3>
                    <p className="faculty-name">{faculty?.name}</p>
                    <p className="program-description">{program.description}</p>
                    <div className="program-details">
                      <span className="duration">Duration: {program.duration}</span>
                      <span className="level">{program.level}</span>
                    </div>
                  </div>
                  <div className="program-footer">
                    <button className="learn-more-btn">
                      Learn More
                    </button>
                  <a href="https://ecampus.alhikmahuniversity.edu.ng/admissions" target="_blank" rel="noopener noreferrer" className="apply-btn" style={{ backgroundColor: getFacultyColor(program.faculty), display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                    Apply Now
                  </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="no-results">
              <h3>No programs found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="admission-requirements">
        <div className="container">
          <div className="requirements-content">
            <h2>Admission Requirements</h2>
            <div className="requirements-grid">
              <div className="requirement-card">
                <h3>Undergraduate Programs</h3>
                <ul>
                  <li>5 O'Level credits including English and Mathematics</li>
                  <li>Acceptable UTME score</li>
                  <li>Post-UTME screening</li>
                  <li>Medical clearance</li>
                </ul>
              </div>
              <div className="requirement-card">
                <h3>Postgraduate Programs</h3>
                <ul>
                  <li>Bachelor's degree with minimum of 2nd class lower division</li>
                  <li>Transcript from previous institution</li>
                  <li>Research proposal (for PhD programs)</li>
                  <li>Professional experience (for some programs)</li>
                </ul>
              </div>
              <div className="requirement-card">
                <h3>Diploma & Certificate Programs</h3>
                <ul>
                  <li>4 O'Level credits including English</li>
                  <li>Written application</li>
                  <li>Interview (for some programs)</li>
                  <li>Medical clearance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;