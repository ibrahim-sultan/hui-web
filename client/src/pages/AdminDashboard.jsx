import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adminDashboard.css';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch {
      return null;
    }
  })();

  useEffect(() => {
    if (!token || !user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchPosts();
  }, [token, user, navigate]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNormalizePaths = async () => {
    try {
      const resp = await axios.post('/api/admin/migrations/normalize-paths', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert(`Normalized ${resp.data.updated} posts`);
      fetchPosts();
    } catch (err) {
      const msg = err.response?.data?.message || 'Migration failed';
      alert(msg);
    }
  };

  const [homeVideoUrl, setHomeVideoUrl] = useState('');
  const [homeVideoActive, setHomeVideoActive] = useState(false);
  const [mediaItems, setMediaItems] = useState([]);
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaDesc, setMediaDesc] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [uploadingMedia, setUploadingMedia] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  useEffect(() => {
    const loadHomeVideo = async () => {
      try {
        const res = await axios.get('/api/home-video');
        setHomeVideoUrl(res.data?.url || '');
        setHomeVideoActive(!!res.data?.active);
      } catch {}
    };
    loadHomeVideo();
    const loadMedia = async () => {
      try {
        const res = await axios.get('/api/media');
        setMediaItems(res.data || []);
      } catch {}
    };
    loadMedia();
  }, []);
  const saveHomeVideo = async () => {
    try {
      await axios.post('/api/admin/home-video', { url: homeVideoUrl, active: homeVideoActive }, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
      });
      alert('Home video updated');
    } catch (e) {
      console.error('Home video update error:', e);
      alert(e.response?.data?.message || (e.message || 'Failed to update home video'));
    }
  };

  const uploadMedia = async () => {
    if (!mediaFile) {
      alert('Select an image or video file');
      return;
    }
    try {
      setUploadingMedia(true);
      const form = new FormData();
      form.append('file', mediaFile);
      if (mediaTitle) form.append('title', mediaTitle);
      if (mediaDesc) form.append('description', mediaDesc);
      const res = await axios.post('/api/media', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
        timeout: 60000,
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total || progressEvent.loaded;
          const percent = total ? Math.round((progressEvent.loaded * 100) / total) : 0;
          setUploadProgress(percent);
        }
      });
      setMediaItems(prev => [res.data, ...prev]);
      setMediaTitle('');
      setMediaDesc('');
      setMediaFile(null);
      alert('Media uploaded');
      navigate('/university-media');
    } catch (e) {
      const status = e.response?.status;
      const msg = e.response?.data?.message || e.message || 'Upload failed';
      if (status === 401) {
        alert('Authentication required. Please log in again.');
        navigate('/login');
      } else if (status === 403) {
        alert('Admin access required to upload media.');
      } else {
        alert(msg);
      }
    }
    finally {
      setUploadingMedia(false);
      setUploadProgress(0);
    }
  };

  const deleteMedia = async (id) => {
    if (!window.confirm('Delete this media item?')) return;
    try {
      await axios.delete(`/api/media/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMediaItems(prev => prev.filter(m => m._id !== id));
    } catch (e) {
      alert(e.response?.data?.message || 'Delete failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`/api/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const [registryItems, setRegistryItems] = useState([]);
  const [registryLoading, setRegistryLoading] = useState(false);
  const [registryFile, setRegistryFile] = useState(null);
  const [registrySearch, setRegistrySearch] = useState('');
  const [registryType, setRegistryType] = useState('');
  const fetchRegistry = async () => {
    try {
      setRegistryLoading(true);
      const params = {};
      if (registryType) params.type = registryType;
      if (registrySearch) params.q = registrySearch;
      const res = await axios.get('/api/admin/registry', {
        params,
        headers: { Authorization: `Bearer ${token}` }
      });
      setRegistryItems(res.data?.items || []);
    } catch (e) {
      console.error('Registry fetch error', e);
    } finally {
      setRegistryLoading(false);
    }
  };
  useEffect(() => {
    if (token && user && user.role === 'admin') {
      fetchRegistry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const uploadRegistry = async () => {
    if (!registryFile) {
      alert('Select a CSV file to upload');
      return;
    }
    try {
      const form = new FormData();
      form.append('file', registryFile);
      const res = await axios.post('/api/admin/registry/bulk', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      alert(`Processed ${res.data?.totalProcessed || 0} records`);
      setRegistryFile(null);
      fetchRegistry();
    } catch (e) {
      const msg = e.response?.data?.message || e.message || 'Upload failed';
      alert(msg);
    }
  };
  const deleteRegistry = async (id) => {
    if (!window.confirm('Delete this entry?')) return;
    try {
      await axios.delete(`/api/admin/registry/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRegistryItems(prev => prev.filter(r => r._id !== id));
    } catch (e) {
      alert(e.response?.data?.message || 'Delete failed');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p className="admin-subtitle">Manage your blog posts and content</p>
        </div>
        <div className="admin-actions">
          <button onClick={() => navigate('/create-post')} className="btn btn-primary">
            Create New Post
          </button>
          <button onClick={handleNormalizePaths} className="btn btn-secondary">
            Fix Image Paths
          </button>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>
      
      <div className="section-card">
        <h3 className="section-title">Student & Staff Registry</h3>
        <p className="section-subtitle">Upload bulk CSV and manage entries</p>
        <div className="form-grid">
          <input
            type="file"
            accept=".csv,text/csv"
            onChange={(e)=>setRegistryFile(e.target.files?.[0] || null)}
          />
          <button onClick={uploadRegistry} className="btn btn-primary">Upload CSV</button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 160px 120px', gap: 12 }}>
            <input
              type="text"
              placeholder="Search by name, email, department, ID"
              value={registrySearch}
              onChange={(e)=>setRegistrySearch(e.target.value)}
            />
            <select value={registryType} onChange={(e)=>setRegistryType(e.target.value)}>
              <option value="">All Types</option>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
            <button className="btn btn-secondary" onClick={fetchRegistry}>
              {registryLoading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
        </div>
        <div className="media-grid" style={{ marginTop: 16 }}>
          {registryItems.map(item => (
            <div key={item._id} className="media-card">
              <div style={{ padding: 8 }}>
                <div style={{ fontWeight: 700, color: '#0f5a36', marginBottom: 6 }}>{item.fullName}</div>
                <div style={{ fontSize: 13, color: '#555' }}>{item.email || 'No email'}</div>
                <div style={{ fontSize: 13, color: '#555' }}>{item.department || 'No department'}</div>
                <div style={{ fontSize: 13, color: '#222', marginTop: 6 }}>
                  {item.type === 'staff' ? 'Staff ID' : 'Matric Number'}: <strong>{item.idNumber}</strong>
                </div>
              </div>
              <div className="media-card-footer">
                <span className="media-type">{item.type}</span>
                <button className="btn btn-secondary" onClick={()=>deleteRegistry(item._id)}>Delete</button>
              </div>
            </div>
          ))}
          {registryItems.length === 0 && !registryLoading && (
            <div style={{ color: '#555' }}>No entries found</div>
          )}
        </div>
      </div>

      <div className="section-card admin-video-config">
        <h3 className="section-title">Homepage Video</h3>
        <input
          type="text"
          placeholder="YouTube link (e.g., https://youtu.be/...)"
          value={homeVideoUrl}
          onChange={(e) => setHomeVideoUrl(e.target.value)}
          className="video-url-input"
        />
        <label className="video-active-label">
          <input type="checkbox" checked={homeVideoActive} onChange={(e) => setHomeVideoActive(e.target.checked)} /> Active
        </label>
        <button onClick={saveHomeVideo} className="btn btn-primary">Save Video</button>
      </div>

      <div className="section-card admin-media">
        <h3 className="section-title">University Media</h3>
        <p className="section-subtitle">Upload images or videos to appear on the University Media page.</p>
        <div className="form-grid">
          <input
            type="text"
            placeholder="Title (optional)"
            value={mediaTitle}
            onChange={(e)=>setMediaTitle(e.target.value)}
          />
          <textarea
            placeholder="Description (optional)"
            value={mediaDesc}
            onChange={(e)=>setMediaDesc(e.target.value)}
            rows={3}
          />
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e)=>setMediaFile(e.target.files?.[0] || null)}
          />
          <button onClick={uploadMedia} className="btn btn-primary" disabled={uploadingMedia}>
            {uploadingMedia ? `Uploading... ${uploadProgress}%` : 'Upload Media'}
          </button>
        </div>
        <div className="existing-media">
          <h4 className="section-title">Existing Media</h4>
          <div className="media-grid">
            {mediaItems.map(item => (
              <div key={item._id} className="media-card">
                <div className="media-thumb">
                  {item.type === 'image' ? (
                    <img src={`/${item.path}`} alt={item.title || 'Media'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <video src={`/${item.path}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} controls />
                  )}
                </div>
                <div className="media-card-footer">
                  <span className="media-type">{item.type}</span>
                  <button className="btn btn-secondary" onClick={()=>deleteMedia(item._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="posts-grid">
        {posts.map(post => (
          <div key={post._id} className="post-card">
            <img 
              src={`/${String(post.featuredImage || '').replace(/\\\\/g, '/').replace(/^https?:\/\/[^/]+\/+/, '').replace(/^\/+/, '')}`} 
              alt={post.title} 
              className="post-image"
            />
            <div className="post-content">
              <h3>{post.title}</h3>
              <p className="post-meta">
                By {post.authorName} • {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <div className="post-actions">
                <button 
                  onClick={() => navigate(`/edit-post/${post._id}`)}
                  className="btn btn-edit"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(post._id)}
                  className="btn btn-delete"
                >
                  Delete
                </button>
                <button 
                  onClick={() => navigate(`/post/${post.slug}`)}
                  className="btn btn-view"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
