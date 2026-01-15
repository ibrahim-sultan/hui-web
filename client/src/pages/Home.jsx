import React, { useState, useEffect } from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Upcoming from '../components/upcoming/Upcoming';
import Publication from '../components/publication/Publication';
import QuickActions from '../components/quickActions/QuickActions';
import UniversityStats from '../components/stats/UniversityStats';
import PortalLinks from '../components/portalLinks/PortalLinks';
import './home.css';
import axios from 'axios';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState({ url: '', active: false });
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/home-video');
        setVideo(res.data || { url: '', active: false });
        setShowVideo(!!res.data?.active && !!res.data?.url);
      } catch (e) {
        setVideo({ url: '', active: false });
      }
    };
    fetchVideo();
  }, []);

  const embedUrl = (() => {
    const raw = video?.url || '';
    try {
      const u = new URL(raw);
      // youtu.be/<id>
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.split('/').filter(Boolean)[0] || '';
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : '';
      }
      // youtube.com/watch?v=<id>
      if (u.searchParams.get('v')) {
        const id = u.searchParams.get('v') || '';
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : '';
      }
      // youtube.com/shorts/<id> or /embed/<id> or /live/<id>
      const parts = u.pathname.split('/').filter(Boolean);
      if (parts.length >= 2) {
        const [type, id] = parts;
        if (['shorts', 'embed', 'live'].includes(type) && id) {
          return `https://www.youtube.com/embed/${id}?autoplay=1`;
        }
      }
      return '';
    } catch {
      // Fallback regex
      const match = raw.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]+)/);
      const id = match ? match[1] : '';
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : '';
    }
  })();

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
      
      {showVideo && embedUrl && (
        <div className="home-video-overlay">
          <button className="overlay-close" onClick={() => setShowVideo(false)}>×</button>
          <div className="overlay-content">
            <div className="overlay-iframe-wrap">
              <iframe
                src={embedUrl}
                title="University Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
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
