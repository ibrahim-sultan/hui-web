import React, { useEffect, useState } from 'react';
import './universityMedia.css';
import axios from 'axios';

function UniversityMedia() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await axios.get('/api/media');
        setMedia(res.data || []);
      } catch (e) {
        setError('Unable to load media at the moment');
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const filtered = media.filter(m => filter === 'all' || m.type === filter);

  return (
    <div className="university-media-page">
      <section className="media-hero">
        <div className="container">
          <h1>University Media</h1>
          <p>Explore photos and videos showcasing campus life, events, and achievements</p>
          <div className="media-filters">
            <button className={`media-filter ${filter==='all'?'active':''}`} onClick={()=>setFilter('all')}>All</button>
            <button className={`media-filter ${filter==='image'?'active':''}`} onClick={()=>setFilter('image')}>Images</button>
            <button className={`media-filter ${filter==='video'?'active':''}`} onClick={()=>setFilter('video')}>Videos</button>
          </div>
        </div>
      </section>

      <section className="media-grid-section">
        <div className="container">
          {loading && <div className="loading">Loading media...</div>}
          {error && <div className="error">{error}</div>}
          {!loading && !error && (
            <div className="media-grid">
              {filtered.map((item) => (
                <div key={item._id} className="media-card">
                  <div className="media-thumb">
                    {item.type === 'image' ? (
                      <img src={`/${item.path}`} alt={item.title || 'Media'} />
                    ) : (
                      <video controls src={`/${item.path}`} />
                    )}
                  </div>
                  <div className="media-info">
                    <h3>{item.title || (item.type === 'image' ? 'Image' : 'Video')}</h3>
                    {item.description && <p>{item.description}</p>}
                    <span className="media-type">{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default UniversityMedia;
