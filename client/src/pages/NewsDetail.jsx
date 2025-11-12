import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaEye, FaTags, FaShare, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './newsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample article data - in a real app, this would be fetched from an API
  const sampleArticle = {
    id: 1,
    title: "Al-Hikmah University Ranked 1st Private University in Kwara State",
    content: `
      <p>Al-Hikmah University, Ilorin, has achieved a remarkable milestone by being ranked as the 1st Private University in Kwara State according to the prestigious 2025 Times Higher Education Impact Rankings. This achievement marks a significant recognition of the university's commitment to academic excellence, research innovation, and societal impact.</p>

      <h3>Outstanding Performance in Multiple Categories</h3>
      <p>The ranking places Al-Hikmah University at the top among private universities in Kwara State, 2nd overall in the state, and 3rd in the North-Central region of Nigeria. This exceptional performance reflects the university's dedication to maintaining the highest standards of education while fostering moral and intellectual development among its students.</p>

      <h3>Vice Chancellor's Statement</h3>
      <p>Professor Noah Yusuf, the Vice-Chancellor of Al-Hikmah University, expressed his gratitude and pride in this achievement: "This ranking is a testament to the hard work and dedication of our entire university community - faculty, staff, and students. It validates our mission of 'Learning for Wisdom and Morality' and reinforces our commitment to providing world-class education."</p>

      <h3>Key Factors Contributing to the Ranking</h3>
      <p>The Times Higher Education Impact Rankings evaluate universities based on their performance against the United Nations' Sustainable Development Goals (SDGs). Al-Hikmah University excelled in several key areas:</p>
      <ul>
        <li><strong>Quality Education:</strong> The university's innovative teaching methods and comprehensive academic programs</li>
        <li><strong>Research Excellence:</strong> Groundbreaking research contributions across various disciplines</li>
        <li><strong>Community Impact:</strong> Extensive outreach programs and community development initiatives</li>
        <li><strong>Infrastructure Development:</strong> State-of-the-art facilities and learning environments</li>
        <li><strong>Industry Partnerships:</strong> Strong collaborations with local and international organizations</li>
      </ul>

      <h3>Academic Programs and Innovation</h3>
      <p>The university currently offers over 75 programs across 9 faculties, including the recently launched Faculty of Computing, Engineering and Technology. This expansion reflects the institution's commitment to meeting the evolving needs of students and the job market.</p>

      <h3>Future Prospects</h3>
      <p>This ranking achievement positions Al-Hikmah University for continued growth and excellence. The university plans to leverage this recognition to attract top-tier faculty, forge new international partnerships, and expand its research capabilities.</p>

      <h3>Student Success Stories</h3>
      <p>The university's commitment to holistic education has produced graduates who are making significant contributions in various fields. Alumni are serving in leadership positions across government, private sector, and academic institutions both nationally and internationally.</p>

      <p>This achievement is not just a victory for Al-Hikmah University but also for the entire educational landscape of Kwara State and Nigeria. It demonstrates the potential of private universities to contribute significantly to national development through quality education and research.</p>
    `,
    excerpt: "The university achieves top ranking in the 2025 Times Higher Education Impact Rankings, marking a significant milestone in academic excellence.",
    category: 'achievements',
    date: '2025-01-15',
    author: 'PR Department',
    authorBio: 'The Public Relations Department of Al-Hikmah University is responsible for managing communications and sharing updates about university achievements and developments.',
    image: '/api/placeholder/800/400',
    views: 1250,
    readTime: '8 min read',
    tags: ['Rankings', 'Academic Excellence', 'Awards', 'University News'],
    type: 'news',
    featured: true
  };

  const sampleRelatedNews = [
    {
      id: 2,
      title: "2025/2026 Admission Process Now Open",
      excerpt: "Applications for undergraduate and postgraduate programs are now being accepted.",
      date: '2025-01-10',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: "New Faculty of Computing, Engineering and Technology Launched",
      excerpt: "The university expands its academic offerings with modern technology programs.",
      date: '2025-01-08',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: "Vice Chancellor Receives Award for Educational Excellence",
      excerpt: "Prof. Noah Yusuf honored with Outstanding Leadership in Education Award.",
      date: '2025-01-03',
      image: '/api/placeholder/300/200'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setArticle(sampleArticle);
      setRelatedNews(sampleRelatedNews);
      setLoading(false);
    }, 1000);
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
              <span className="read-time">{article.readTime}</span>
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