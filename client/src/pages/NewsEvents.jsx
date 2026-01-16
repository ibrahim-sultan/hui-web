import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    { id: 'news', name: 'News' },
    { id: 'events', name: 'Events' },
    { id: 'academics', name: 'Academics' },
    { id: 'research', name: 'Research' },
    { id: 'sports', name: 'Sports' },
    { id: 'student-life', name: 'Student Life' },
    { id: 'announcements', name: 'Announcements' }
  ];

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        const mapped = res.data.map(p => ({
          id: p.slug,
          title: p.title,
          excerpt: p.excerpt || (p.content ? (p.content.length > 120 ? p.content.slice(0, 117) + '...' : p.content) : ''),
          category: p.category || 'news',
          date: p.category === 'events' ? p.eventDate : (p.publishedAt || p.createdAt),
          time: p.eventTime || '',
          location: p.location || '',
          author: p.authorName || 'Admin',
          image: (() => {
            const raw = String(p.featuredImage || '').replace(/\\/g, '/');
            const rel = raw.replace(/^https?:\/\/[^/]+\/+/, '').replace(/^\/+/, '');
            return rel.startsWith('uploads/') ? `/${rel}` : `/${rel}`;
          })(),
          views: p.views || 0,
          type: p.category === 'events' ? 'event' : 'news',
          featured: false
        }));
        setNewsItems(mapped);
      } catch (err) {
        setNewsItems([]);
      }
    };
    fetchPosts();
  }, []);

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
  const featuredNews = newsItems[0] || { image: '/api/placeholder/400/250', title: '', excerpt: '', category: 'news', date: new Date().toISOString(), author: '', views: 0 };

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
