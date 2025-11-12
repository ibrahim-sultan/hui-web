import React, { useState, useEffect } from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Upcoming from '../components/upcoming/Upcoming';
import Publication from '../components/publication/Publication';
import QuickActions from '../components/quickActions/QuickActions';
import UniversityStats from '../components/stats/UniversityStats';
import PortalLinks from '../components/portalLinks/PortalLinks';
import './home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading Al-Hikmah University...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section with Modern Slider */}
      <Hero />
      
      {/* Quick Actions Bar */}
      <QuickActions />
      <PortalLinks />
      {/* University Rankings Banner */}
      <div className="rankings-banner">
        <div className="container">
          <div className="rankings-content">
            <h3>🏆 Al-Hikmah University Rankings 2025</h3>
            <p>Ranked 1st Private University in Kwara • Top 2nd in Kwara • 3rd in North-Central Nigeria</p>
            <span className="ranking-source">Times Higher Education Impact Rankings</span>
          </div>
        </div>
      </div>
      
      {/* University Statistics */}
      <UniversityStats />
      
      {/* About Section Enhanced */}
      <About />
      
      {/* Upcoming Events */}
      <Upcoming />
      
      {/* Academic Publications */}
      <Publication />
      
    </div>
  );
};

export default Home;
