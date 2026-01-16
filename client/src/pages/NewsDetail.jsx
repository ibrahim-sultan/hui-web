import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaCalendarAlt, FaUser, FaEye, FaTags, FaShare, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './newsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/posts/${id}`);
        const p = res.data;
        const contentHtml = (p.content || '').replace(/\n/g, '<br/>');
        const articleData = {
          id: p.slug,
          title: p.title,
          content: contentHtml,
          excerpt: p.excerpt || '',
          category: p.category || 'news',
          date: p.category === 'events' ? p.eventDate : (p.publishedAt || p.createdAt),
          eventTime: p.eventTime || '',
          location: p.location || '',
          author: p.authorName || 'Admin',
          authorBio: '',
          image: (() => {
            const raw = String(p.featuredImage || '').replace(/\\/g, '/');
            const rel = raw.replace(/^https?:\/\/[^/]+\/+/, '').replace(/^\/+/, '');
            return `/${rel}`;
          })(),
          images: Array.isArray(p.images) ? p.images.map(img => {
            const raw = String(img || '').replace(/\\/g, '/');
            const rel = raw.replace(/^https?:\/\/[^/]+\/+/, '').replace(/^\/+/, '');
            return `/${rel}`;
          }) : [],
          views: p.views || 0,
          readTime: '',
          tags: p.tags || [],
          type: p.category === 'events' ? 'event' : 'news',
          featured: false
        };
        setArticle(articleData);
        const listRes = await axios.get('/api/posts');
        const related = listRes.data
          .filter(x => x.slug !== p.slug && x.category === p.category)
          .slice(0, 3)
          .map(x => ({
            id: x.slug,
            title: x.title,
            excerpt: x.excerpt || '',
            date: x.publishedAt || x.createdAt,
            image: (() => {
              const raw = String(x.featuredImage || '').replace(/\\/g, '/');
              const rel = raw.replace(/^https?:\/\/[^/]+\/+/, '').replace(/^\/+/, '');
              return `/${rel}`;
            })()
          }));
        setRelatedNews(related);
      } catch (e) {
        setArticle(null);
        setRelatedNews([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareArticle = (platform) => {
    const url = window.location.href;
    const title = article?.title || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <div className="news-detail-page">
        <div className="loading-container">
          <div className="spinner-large"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="news-detail-page">
        <div className="error-container">
          <h2>Article Not Found</h2>
          <p>The requested article could not be found.</p>
          <Link to="/news" className="back-link">
            <FaArrowLeft /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      {/* Hero Section */}
      <section className="article-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <Link to="/news" className="back-link">
              <FaArrowLeft /> Back to News
            </Link>
            <div className="article-meta">
              <span className="category">{article.category}</span>
              <span className="date">
                <FaCalendarAlt />
                {formatDate(article.date)}
              </span>
              {article.type === 'event' && article.eventTime && (
                <span className="read-time">{article.eventTime}</span>
              )}
            </div>
            <h1>{article.title}</h1>
            <div className="article-stats">
              <span><FaUser /> {article.author}</span>
              <span><FaEye /> {article.views} views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="article-content">
        <div className="container">
          <div className="content-layout">
            {/* Article Body */}
            <div className="article-body">
              <div className="featured-image">
                <img src={article.image} alt={article.title} />
              </div>
              
              {article.images && article.images.length > 0 && (
                <div className="article-gallery">
                  {article.images.map((src, idx) => (
                    <img key={idx} src={src} alt={`${article.title} - ${idx + 1}`} className="gallery-image" />
                  ))}
                </div>
              )}
              
              {article.type === 'event' && (
                <div className="event-details">
                  {article.eventTime && (
                    <span className="event-time">
                      {article.eventTime}
                    </span>
                  )}
                  {article.location && (
                    <span className="event-location">
                      {article.location}
                    </span>
                  )}
                </div>
              )}
              
              <div className="article-text" dangerouslySetInnerHTML={{ __html: article.content }} />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="article-tags">
                  <FaTags className="tags-icon" />
                  <div className="tags-list">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="share-section">
                <h4>Share this article</h4>
                <div className="share-buttons">
                  <button onClick={() => shareArticle('facebook')} className="share-btn facebook">
                    <FaFacebook />
                    Facebook
                  </button>
                  <button onClick={() => shareArticle('twitter')} className="share-btn twitter">
                    <FaTwitter />
                    Twitter
                  </button>
                  <button onClick={() => shareArticle('linkedin')} className="share-btn linkedin">
                    <FaLinkedin />
                    LinkedIn
                  </button>
                  <button onClick={() => shareArticle('whatsapp')} className="share-btn whatsapp">
                    <FaWhatsapp />
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Author Info */}
              <div className="author-section">
                <h4>About the Author</h4>
                <div className="author-info">
                  <div className="author-details">
                    <h5>{article.author}</h5>
                    <p>{article.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="article-sidebar">
              {/* Related News */}
              <div className="sidebar-widget">
                <h3>Related News</h3>
                <div className="related-news-list">
                  {relatedNews.map(item => (
                    <Link key={item.id} to={`/news/${item.id}`} className="related-news-item">
                      <div className="related-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="related-content">
                        <h4>{item.title}</h4>
                        <p>{item.excerpt}</p>
                        <span className="related-date">
                          <FaCalendarAlt />
                          {formatDate(item.date)}
                        </span>
                      </div>
                    </Link>
                  ))}
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

              {/* Newsletter Signup */}
              <div className="sidebar-widget">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for the latest news and updates.</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
