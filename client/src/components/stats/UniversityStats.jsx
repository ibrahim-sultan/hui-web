import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaUsers, FaBookOpen, FaAward, FaGlobe, FaBuilding } from 'react-icons/fa';
import './universityStats.css';

const UniversityStats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    faculty: 0,
    programs: 0,
    graduates: 0,
    faculties: 0,
    years: 0
  });
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const targetStatsRef = useRef({
    students: 8500,
    faculty: 350,
    programs: 75,
    graduates: 15000,
    faculties: 9,
    years: 23
  });

  const stats = [
    {
      icon: <FaUsers />,
      number: animatedStats.students,
      suffix: '+',
      label: 'Active Students',
      color: '#157646'
    },
    {
      icon: <FaGraduationCap />,
      number: animatedStats.faculty,
      suffix: '+',
      label: 'Faculty Members',
      color: '#2196F3'
    },
    {
      icon: <FaBookOpen />,
      number: animatedStats.programs,
      suffix: '+',
      label: 'Academic Programs',
      color: '#FF9800'
    },
    {
      icon: <FaAward />,
      number: animatedStats.graduates,
      suffix: '+',
      label: 'Graduates',
      color: '#4CAF50'
    },
    {
      icon: <FaBuilding />,
      number: animatedStats.faculties,
      suffix: '',
      label: 'Faculties',
      color: '#9C27B0'
    },
    {
      icon: <FaGlobe />,
      number: animatedStats.years,
      suffix: '',
      label: 'Years of Excellence',
      color: '#F44336'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          students: Math.floor(targetStatsRef.current.students * easeOutProgress),
          faculty: Math.floor(targetStatsRef.current.faculty * easeOutProgress),
          programs: Math.floor(targetStatsRef.current.programs * easeOutProgress),
          graduates: Math.floor(targetStatsRef.current.graduates * easeOutProgress),
          faculties: Math.floor(targetStatsRef.current.faculties * easeOutProgress),
          years: Math.floor(targetStatsRef.current.years * easeOutProgress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedStats(targetStatsRef.current);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timeout = setTimeout(animateStats, 200);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <section className="university-stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-header">
          <h2>Al-Hikmah University by the Numbers</h2>
          <p>Excellence in education backed by impressive achievements</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-item ${isVisible ? 'animate' : ''}`}
              style={{ '--accent-color': stat.color, '--delay': `${index * 0.1}s` }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  {stat.number.toLocaleString()}
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-footer">
          <div className="achievement-badges">
            <div className="achievement-badge">
              <span className="badge-title">🏆 Top Ranked</span>
              <span className="badge-desc">1st Private University in Kwara State</span>
            </div>
            <div className="achievement-badge">
              <span className="badge-title">🌟 Excellence</span>
              <span className="badge-desc">Times Higher Education Ranked</span>
            </div>
            <div className="achievement-badge">
              <span className="badge-title">🎓 Quality</span>
              <span className="badge-desc">NUC Accredited Programs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityStats;
