import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adminDashboard.css';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchPosts();
  }, [token, navigate]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:4000/api/posts/${id}`, {
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
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>

      <div className="posts-grid">
        {posts.map(post => (
          <div key={post._id} className="post-card">
            <img 
              src={`http://localhost:4000/${post.featuredImage}`} 
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
