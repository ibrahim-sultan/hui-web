import React from 'react';
import { FaBook, FaLaptop, FaSearch, FaClock, FaUsers, FaWifi, FaDownload, FaBookOpen, FaNewspaper, FaGraduationCap } from 'react-icons/fa';
import './library.css';

const Library = () => {
  const services = [
    {
      icon: <FaBook />,
      title: "Book Collection",
      description: "Extensive collection of over 50,000 books across all disciplines",
      features: [
        "Academic textbooks and references",
        "Islamic studies collection",
        "Fiction and non-fiction literature",
        "Rare books and manuscripts",
        "Multilingual resources"
      ]
    },
    {
      icon: <FaLaptop />,
      title: "Digital Resources",
      description: "Access to online databases, e-books, and digital journals",
      features: [
        "Academic databases and journals",
        "E-book collections",
        "Online research tools",
        "Digital archives",
        "Multimedia resources"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Study Spaces",
      description: "Quiet and collaborative spaces designed for effective learning",
      features: [
        "Silent study areas",
        "Group study rooms",
        "Computer workstations",
        "Research carrels",
        "Comfortable seating areas"
      ]
    },
    {
      icon: <FaSearch />,
      title: "Research Support",
      description: "Professional assistance for research and academic projects",
      features: [
        "Reference and research assistance",
        "Citation and bibliography help",
        "Database training sessions",
        "Research methodology guidance",
        "Interlibrary loan services"
      ]
    }
  ];

  const collections = [
    { name: "General Collection", count: "35,000+", description: "Books across all academic disciplines" },
    { name: "Islamic Studies", count: "8,500+", description: "Comprehensive Islamic literature and references" },
    { name: "Reference Materials", count: "3,200+", description: "Encyclopedias, dictionaries, and reference works" },
    { name: "Periodicals", count: "450+", description: "Academic journals and magazines" },
    { name: "Digital Resources", count: "25,000+", description: "E-books, online journals, and databases" },
    { name: "Theses Collection", count: "1,800+", description: "Student research projects and dissertations" }
  ];

  const facilities = [
    { icon: <FaWifi />, name: "Free Wi-Fi", description: "High-speed internet throughout the library" },
    { icon: <FaLaptop />, name: "Computer Lab", description: "Modern computers with academic software" },
    { icon: <FaDownload />, name: "Printing Services", description: "Printing, scanning, and photocopying" },
    { icon: <FaBookOpen />, name: "Reading Rooms", description: "Quiet spaces for focused study" },
    { icon: <FaNewspaper />, name: "Periodicals Section", description: "Current newspapers and magazines" },
    { icon: <FaGraduationCap />, name: "Graduate Study Area", description: "Dedicated space for postgraduate students" }
  ];

  const libraryHours = [
    { day: "Monday - Thursday", hours: "8:00 AM - 10:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "2:00 PM - 8:00 PM" }
  ];

  const stats = [
    { number: "50,000+", label: "Books" },
    { number: "25,000+", label: "E-resources" },
    { number: "450+", label: "Journals" },
    { number: "200", label: "Study Seats" }
  ];

  return (
    <div className="library-page">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Al-Hikmah University Library</h1>
            <p>Your gateway to knowledge, research, and academic excellence</p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library Services */}
      <section className="library-services">
        <div className="container">
          <div className="section-header">
            <h2>Library Services</h2>
            <p>Comprehensive resources and services to support your academic journey</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="library-collections">
        <div className="container">
          <div className="section-header">
            <h2>Our Collections</h2>
            <p>Extensive resources covering all areas of study and research</p>
          </div>

          <div className="collections-grid">
            {collections.map((collection, index) => (
              <div key={index} className="collection-card">
                <div className="collection-number">{collection.count}</div>
                <h3 className="collection-name">{collection.name}</h3>
                <p className="collection-description">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="library-facilities">
        <div className="container">
          <div className="section-header">
            <h2>Library Facilities</h2>
            <p>Modern amenities and comfortable spaces for learning and research</p>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">{facility.icon}</div>
                <h4>{facility.name}</h4>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Hours & Info */}
      <section className="library-info">
        <div className="container">
          <div className="info-grid">
            <div className="hours-section">
              <h3>
                <FaClock className="section-icon" />
                Library Hours
              </h3>
              <div className="hours-list">
                {libraryHours.map((schedule, index) => (
                  <div key={index} className="hours-item">
                    <span className="day">{schedule.day}</span>
                    <span className="hours">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="special-hours">
                <h4>Special Hours:</h4>
                <p><strong>Exam Period:</strong> Extended hours until 12:00 AM</p>
                <p><strong>Holidays:</strong> Reduced hours (check announcements)</p>
              </div>
            </div>

            <div className="catalog-section">
              <h3>
                <FaSearch className="section-icon" />
                Online Catalog
              </h3>
              <p>Search our comprehensive catalog to find books, journals, and digital resources.</p>
              
              <div className="catalog-features">
                <ul>
                  <li>Advanced search capabilities</li>
                  <li>Real-time availability status</li>
                  <li>Online reservation system</li>
                  <li>Personal account management</li>
                  <li>Reading history and renewals</li>
                </ul>
              </div>
              
              <div className="catalog-buttons">
                <button className="catalog-btn primary">Search Catalog</button>
                <button className="catalog-btn secondary">My Account</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Policies */}
      <section className="library-policies">
        <div className="container">
          <div className="policies-content">
            <h2>Library Policies & Guidelines</h2>
            <p>Important information to ensure a positive library experience for everyone</p>
            
            <div className="policies-grid">
              <div className="policy-card">
                <h4>Borrowing Policies</h4>
                <ul>
                  <li><strong>Students:</strong> Up to 5 books for 2 weeks</li>
                  <li><strong>Faculty:</strong> Up to 15 books for 4 weeks</li>
                  <li><strong>Staff:</strong> Up to 3 books for 2 weeks</li>
                  <li><strong>Renewals:</strong> Up to 2 times if no holds</li>
                  <li><strong>Fines:</strong> ₦50 per day for overdue books</li>
                </ul>
              </div>
              
              <div className="policy-card">
                <h4>Library Rules</h4>
                <ul>
                  <li>Maintain quiet environment in silent areas</li>
                  <li>Present valid ID when borrowing materials</li>
                  <li>No food or drinks in the library</li>
                  <li>Mobile phones on silent mode</li>
                  <li>Report damaged or lost materials immediately</li>
                </ul>
              </div>
              
              <div className="policy-card">
                <h4>Access & Services</h4>
                <ul>
                  <li>Library orientation for new students</li>
                  <li>Research assistance by appointment</li>
                  <li>Group study rooms (advance booking required)</li>
                  <li>Inter-library loan services available</li>
                  <li>Digital resources accessible 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="library-contact">
        <div className="container">
          <div className="contact-content">
            <h2>Contact the Library</h2>
            <p>Need help or have questions? Our librarians are here to assist you</p>
            
            <div className="contact-grid">
              <div className="contact-card">
                <h4>Main Library</h4>
                <p>📍 Central Campus Library Building</p>
                <p>📞 +234 (0) 803 XXX XXXX</p>
                <p>✉️ library@alhikmahuniversity.edu.ng</p>
                <p>🕐 See library hours above</p>
              </div>
              
              <div className="contact-card">
                <h4>Reference Desk</h4>
                <p>📞 +234 (0) 805 XXX XXXX</p>
                <p>✉️ reference@alhikmahuniversity.edu.ng</p>
                <p>Available during library hours</p>
                <p>Research assistance and consultations</p>
              </div>
              
              <div className="contact-card">
                <h4>Digital Services</h4>
                <p>📞 +234 (0) 807 XXX XXXX</p>
                <p>✉️ digital@alhikmahuniversity.edu.ng</p>
                <p>Online resources and technical support</p>
                <p>Database training and access issues</p>
              </div>
            </div>
            
            <div className="cta-section">
              <h3>Get Started</h3>
              <div className="cta-buttons">
                <button className="cta-btn primary">Library Tour</button>
                <button className="cta-btn secondary">Research Help</button>
                <button className="cta-btn secondary">Digital Access</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;