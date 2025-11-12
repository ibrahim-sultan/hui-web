import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBuilding, FaTree, FaWifi, FaCar, FaBook } from 'react-icons/fa';
import './campus.css';

const Campus = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const facilities = [
    {
      name: "Academic Buildings",
      icon: <FaBuilding />,
      description: "Modern lecture halls and classrooms equipped with state-of-the-art technology",
      features: ["Air-conditioned classrooms", "Digital projectors", "Audio systems", "Flexible seating"]
    },
    {
      name: "Library Complex",
      icon: <FaBook />,
      description: "Comprehensive library with digital resources and study spaces",
      features: ["250,000+ books", "Digital databases", "Study rooms", "24/7 access"]
    },
    {
      name: "Student Hostels",
      icon: <FaBuilding />,
      description: "Comfortable accommodation for both male and female students",
      features: ["Furnished rooms", "24/7 security", "Common areas", "WiFi connectivity"]
    },
    {
      name: "Sports Complex",
      icon: <FaTree />,
      description: "Modern sports facilities for various recreational activities",
      features: ["Football field", "Basketball court", "Gymnasium", "Athletic track"]
    },
    {
      name: "ICT Center",
      icon: <FaWifi />,
      description: "Advanced computer labs and IT infrastructure",
      features: ["Computer labs", "High-speed internet", "Tech support", "Software licenses"]
    },
    {
      name: "Parking Facilities",
      icon: <FaCar />,
      description: "Ample parking space for staff and students",
      features: ["Covered parking", "Security surveillance", "Designated areas", "Easy access"]
    }
  ];

  const campusImages = [
    {
      id: 1,
      title: "Main Administration Building",
      category: "buildings",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "University Library",
      category: "academic",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Student Hostel",
      category: "residential",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Sports Complex",
      category: "recreation",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "ICT Laboratory",
      category: "academic",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Campus Gardens",
      category: "environment",
      image: "/api/placeholder/600/400"
    },
    {
      id: 7,
      title: "Lecture Hall",
      category: "academic",
      image: "/api/placeholder/600/400"
    },
    {
      id: 8,
      title: "Student Center",
      category: "social",
      image: "/api/placeholder/600/400"
    }
  ];

  const campusStats = [
    { number: "150", label: "Acres", description: "Total campus area" },
    { number: "25", label: "Buildings", description: "Academic & residential" },
    { number: "5,000", label: "Capacity", description: "Student accommodation" },
    { number: "500", label: "Parking", description: "Spaces available" }
  ];

  return (
    <div className="campus-page">
      {/* Hero Section */}
      <section className="campus-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Beautiful Campus</h1>
            <p>Discover the modern facilities and serene environment at Al-Hikmah University</p>
            <div className="hero-stats">
              {campusStats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-description">{stat.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="campus-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Campus Overview</h2>
              <p>
                Al-Hikmah University is situated on a sprawling 150-acre campus in Ilorin, Kwara State. 
                Our campus combines modern architecture with natural beauty, creating an ideal environment 
                for learning and personal growth.
              </p>
              <p>
                The campus is strategically located along the Ilorin-Ajasse-Ipo Road, providing easy access 
                while maintaining a peaceful academic atmosphere. Our facilities are designed to support 
                both academic excellence and holistic student development.
              </p>
              
              <div className="location-info">
                <h3>
                  <FaMapMarkerAlt className="location-icon" />
                  Campus Location
                </h3>
                <div className="location-details">
                  <p><strong>Address:</strong> Km 5, Ilorin-Ajasse-Ipo Road, P.M.B 1601, Ilorin, Kwara State</p>
                  <p><strong>Distance from City:</strong> 5 kilometers from Ilorin city center</p>
                  <p><strong>Transportation:</strong> Regular bus services and taxi access</p>
                </div>
              </div>
            </div>
            
            <div className="overview-image">
              <img src="/api/placeholder/600/400" alt="Campus Overview" />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="campus-facilities">
        <div className="container">
          <div className="section-header">
            <h2>Campus Facilities</h2>
            <p>World-class facilities supporting academic and personal development</p>
          </div>
          
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">
                  {facility.icon}
                </div>
                <div className="facility-content">
                  <h3>{facility.name}</h3>
                  <p>{facility.description}</p>
                  <ul className="facility-features">
                    {facility.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="campus-gallery">
        <div className="container">
          <div className="section-header">
            <h2>Campus Gallery</h2>
            <p>Take a visual tour of our beautiful campus facilities</p>
          </div>
          
          <div className="gallery-tabs">
            <button 
              className={`gallery-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              All Images
            </button>
            <button 
              className={`gallery-tab ${activeTab === 'academic' ? 'active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              Academic
            </button>
            <button 
              className={`gallery-tab ${activeTab === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveTab('residential')}
            >
              Residential
            </button>
            <button 
              className={`gallery-tab ${activeTab === 'recreation' ? 'active' : ''}`}
              onClick={() => setActiveTab('recreation')}
            >
              Recreation
            </button>
          </div>
          
          <div className="gallery-grid">
            {campusImages
              .filter(image => activeTab === 'overview' || image.category === activeTab)
              .map((image) => (
                <div key={image.id} className="gallery-item">
                  <img src={image.image} alt={image.title} />
                  <div className="gallery-overlay">
                    <h4>{image.title}</h4>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Campus Amenities */}
      <section className="campus-amenities">
        <div className="container">
          <div className="section-header">
            <h2>Campus Amenities</h2>
            <p>Everything you need for a comfortable campus experience</p>
          </div>
          
          <div className="amenities-content">
            <div className="amenities-grid">
              <div className="amenity-category">
                <h3>Academic Support</h3>
                <ul>
                  <li>Modern lecture halls</li>
                  <li>Well-equipped laboratories</li>
                  <li>Digital library resources</li>
                  <li>Computer centers</li>
                  <li>Study rooms and spaces</li>
                </ul>
              </div>
              
              <div className="amenity-category">
                <h3>Student Services</h3>
                <ul>
                  <li>Health center</li>
                  <li>Counseling services</li>
                  <li>Banking facilities</li>
                  <li>Post office</li>
                  <li>Student affairs office</li>
                </ul>
              </div>
              
              <div className="amenity-category">
                <h3>Recreation & Sports</h3>
                <ul>
                  <li>Football field</li>
                  <li>Basketball courts</li>
                  <li>Tennis court</li>
                  <li>Gymnasium</li>
                  <li>Indoor games facility</li>
                </ul>
              </div>
              
              <div className="amenity-category">
                <h3>Dining & Shopping</h3>
                <ul>
                  <li>Main cafeteria</li>
                  <li>Food courts</li>
                  <li>Convenience stores</li>
                  <li>Bookshop</li>
                  <li>Prayer facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="virtual-tour-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Experience Our Campus</h2>
            <p>Ready to see Al-Hikmah University in person? Plan your visit or take a virtual tour</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                Schedule a Visit
              </button>
              <button className="cta-btn secondary">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;