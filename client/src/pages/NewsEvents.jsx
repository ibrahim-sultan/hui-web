import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaEye, FaSearch, FaFilter, FaTags, FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import './newsEvents.css';

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'academic', name: 'Academic' },
    { id: 'admission', name: 'Admissions' },
    { id: 'events', name: 'Events' },
    { id: 'research', name: 'Research' },
    { id: 'sports', name: 'Sports' },
    { id: 'culture', name: 'Culture' },
    { id: 'achievements', name: 'Achievements' }
  ];

  // Sample news and events data
  const newsItems = [
    {
      id: 1,
      title: "Al-Hikmah University Ranked 1st Private University in Kwara State",
      excerpt: "The university achieves top ranking in the 2025 Times Higher Education Impact Rankings, marking a significant milestone in academic excellence.",
      category: 'achievements',
      date: '2025-01-15',
      author: 'PR Department',
      image: '/api/placeholder/400/250',
      views: 1250,
      type: 'news',
      featured: true
    },
    {
      id: 2,
      title: "2025/2026 Admission Process Now Open",
      excerpt: "Applications for undergraduate and postgraduate programs are now being accepted. Early applications receive priority consideration.",
      category: 'admission',
      date: '2025-01-10',
      author: 'Admissions Office',
      image: '/api/placeholder/400/250',
      views: 850,
      type: 'news'
    },
    {
      id: 3,
      title: "Annual Research Conference 2025",
      excerpt: "Join us for our flagship research conference showcasing cutting-edge research from faculty and students across all disciplines.",
      category: 'research',
      date: '2025-02-20',
      time: '9:00 AM',
      location: 'Main Auditorium',
      author: 'Research Office',
      image: '/api/placeholder/400/250',
      views: 420,
      type: 'event'
    },
    {
      id: 4,
      title: "New Faculty of Computing, Engineering and Technology Launched",
      excerpt: "The university expands its academic offerings with the launch of a new faculty focusing on modern technology and engineering disciplines.",
      category: 'academic',
      date: '2025-01-08',
      author: 'Academic Affairs',
      image: '/api/placeholder/400/250',
      views: 675,
      type: 'news'
    },
    {
      id: 5,
      title: "Cultural Week 2025: Celebrating Diversity",
      excerpt: "A week-long celebration of cultural diversity featuring performances, exhibitions, and international food festival.",
      category: 'culture',
      date: '2025-03-15',
      time: '10:00 AM',
      location: 'University Grounds',
      author: 'Student Affairs',
      image: '/api/placeholder/400/250',
      views: 380,
      type: 'event'
    },
    {
      id: 6,
      title: "Scholarship Opportunities Available for 2025/2026 Session",
      excerpt: "Multiple scholarship opportunities are available for deserving students. Applications close on February 28, 2025.",
      category: 'admission',
      date: '2025-01-05',
      author: 'Financial Aid Office',
      image: '/api/placeholder/400/250',
      views: 920,
      type: 'news'
    },
    {
      id: 7,
      title: "Inter-University Sports Competition 2025",
      excerpt: "Al-Hikmah University hosts the annual inter-university sports competition with participation from 15 universities.",
      category: 'sports',
      date: '2025-04-10',
      time: '8:00 AM',
      location: 'Sports Complex',
      author: 'Sports Department',
      image: '/api/placeholder/400/250',
      views: 290,
      type: 'event'
    },
    {
      id: 8,
      title: "Vice Chancellor Receives Award for Educational Excellence",
      excerpt: "Prof. Noah Yusuf honored with the Outstanding Leadership in Education Award by the Nigerian Education Forum.",
      category: 'achievements',
      date: '2025-01-03',
      author: 'PR Department',
      image: '/api/placeholder/400/250',
      views: 540,
      type: 'news'
    },
    {
      id: 9,
      title: "Digital Library Resources Now Available 24/7",
      excerpt: "Students and faculty can now access comprehensive digital library resources round the clock through the new online portal.",
      category: 'academic',
      date: '2024-12-28',
      author: 'Library Services',
      image: '/api/placeholder/400/250',
      views: 315,
      type: 'news'
    }
  ];

  // Filter items based on active tab, search term, and category
  const filteredItems = newsItems.filter(item => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesTab && matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  // Featured news (for hero section)
  const featuredNews = newsItems.filter(item => item.featured)[0] || newsItems[0];

  // Latest news (sidebar)
  const latestNews = newsItems
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  const resetFilters = () => {
    setActiveTab('all');
    setSearchTerm('');
    setSelectedCategory('all');
    setCurrentPage(1);
  };

  return (
    <div className="news-events-page">
      {/* Hero Section with Featured News */}
      <section className="news-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="featured-news">
              <div className="featured-image">
                <img src={featuredNews.image} alt={featuredNews.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <div className="news-meta">
                  <span className="category">{categories.find(cat => cat.id === featuredNews.category)?.name}</span>
                  <span className="date">
                    <FaCalendarAlt />
                    {formatDate(featuredNews.date)}
                  </span>
                </div>
                <h1>{featuredNews.title}</h1>
                <p>{featuredNews.excerpt}</p>
                <div className="news-stats">
                  <span><FaUser /> {featuredNews.author}</span>
                  <span><FaEye /> {featuredNews.views} views</span>
                </div>
                <Link to={`/news/${featuredNews.id}`} className="read-more-btn">
                  Read Full Story <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="news-navigation">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => {setActiveTab('all'); setCurrentPage(1);}}
            >
              All ({newsItems.length})
            </button>
            <button 
              className={`nav-tab ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => {setActiveTab('news'); setCurrentPage(1);}}
            >
              News ({newsItems.filter(item => item.type === 'news').length})
            </button>
            <button 
              className={`nav-tab ${activeTab === 'event' ? 'active' : ''}`}
              onClick={() => {setActiveTab('event'); setCurrentPage(1);}}
            >
              Events ({newsItems.filter(item => item.type === 'event').length})
            </button>
          </div>

          {/* Search and Filter */}
          <div className="search-filter-section">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
              />
            </div>
            <div className="filter-controls">
              <div className="filter-group">
                <FaTags className="filter-icon" />
                <select
                  value={selectedCategory}
                  onChange={(e) => {setSelectedCategory(e.target.value); setCurrentPage(1);}}
                  className="category-filter"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={resetFilters} className="reset-filters-btn">
                <FaFilter />
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="news-content">
        <div className="container">
          <div className="content-layout">
            {/* News Grid */}
            <div className="news-grid-section">
              {filteredItems.length > 0 ? (
                <>
                  <div className="section-header">
                    <h2>
                      {activeTab === 'all' ? 'Latest News & Events' :
                       activeTab === 'news' ? 'Latest News' : 'Upcoming Events'}
                    </h2>
                    <p>Showing {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}</p>
                  </div>

                  <div className="news-grid">
                    {currentItems.map(item => (
                      <article key={item.id} className={`news-card ${item.type}`}>
                        <div className="news-image">
                          <img src={item.image} alt={item.title} />
                          <div className="news-type-badge">{item.type}</div>
                          {item.type === 'event' && isUpcoming(item.date) && (
                            <div className="upcoming-badge">Upcoming</div>
                          )}
                        </div>
                        
                        <div className="news-content">
                          <div className="news-meta">
                            <span className="category">
                              {categories.find(cat => cat.id === item.category)?.name}
                            </span>
                            <span className="date">
                              <FaCalendarAlt />
                              {formatDate(item.date)}
                            </span>
                          </div>
                          
                          <h3>
                            <Link to={`/news/${item.id}`}>{item.title}</Link>
                          </h3>
                          
                          <p className="excerpt">{item.excerpt}</p>
                          
                          {item.type === 'event' && (
                            <div className="event-details">
                              {item.time && (
                                <span className="event-time">
                                  <FaClock /> {item.time}
                                </span>
                              )}
                              {item.location && (
                                <span className="event-location">
                                  <FaMapMarkerAlt /> {item.location}
                                </span>
                              )}
                            </div>
                          )}
                          
                          <div className="news-footer">
                            <div className="news-stats">
                              <span><FaUser /> {item.author}</span>
                              <span><FaEye /> {item.views}</span>
                            </div>
                            <Link to={`/news/${item.id}`} className="read-more">
                              {item.type === 'event' ? 'Event Details' : 'Read More'}
                              <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pagination">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="pagination-btn"
                      >
                        Previous
                      </button>
                      
                      <div className="pagination-numbers">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="pagination-btn"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="no-results">
                  <h3>No results found</h3>
                  <p>Try adjusting your search terms or filters</p>
                  <button onClick={resetFilters} className="reset-btn">
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="news-sidebar">
              {/* Latest News */}
              <div className="sidebar-widget">
                <h3>Latest News</h3>
                <div className="latest-news-list">
                  {latestNews.map(item => (
                    <div key={item.id} className="sidebar-news-item">
                      <div className="sidebar-news-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="sidebar-news-content">
                        <h4>
                          <Link to={`/news/${item.id}`}>{item.title}</Link>
                        </h4>
                        <span className="sidebar-date">
                          <FaCalendarAlt />
                          {formatDate(item.date)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget">
                <h3>Categories</h3>
                <div className="categories-list">
                  {categories.filter(cat => cat.id !== 'all').map(category => {
                    const count = newsItems.filter(item => item.category === category.id).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {setSelectedCategory(category.id); setCurrentPage(1);}}
                        className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                      >
                        <span>{category.name}</span>
                        <span className="count">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="sidebar-widget">
                <h3>Quick Links</h3>
                <div className="quick-links">
                  <Link to="/admission" className="quick-link">Apply for Admission</Link>
                  <Link to="/programs" className="quick-link">Academic Programs</Link>
                  <Link to="/contact" className="quick-link">Contact Us</Link>
                  <a href="https://ecampus.alhikmahuniversity.edu.ng/portal/" target="_blank" rel="noopener noreferrer" className="quick-link">Student Portal</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;