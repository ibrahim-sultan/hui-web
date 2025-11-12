import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    featuredImage: null,
    images: []
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/posts`);
      const post = response.data.find(p => p._id === id);
      if (post) {
        setFormData({
          title: post.title,
          content: post.content,
          featuredImage: null,
          images: []
        });
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'featuredImage' || e.target.name === 'images') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);

      if (formData.featuredImage && formData.featuredImage[0]) {
        formDataToSend.append('featuredImage', formData.featuredImage[0]);
      }

      if (formData.images) {
        Array.from(formData.images).forEach(file => {
          formDataToSend.append('images', file);
        });
      }

      await axios.put(`http://localhost:4000/api/posts/${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Error updating post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="edit-post">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter post title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="Write your post content here..."
            rows="10"
          />
        </div>

        <div className="form-group">
          <label htmlFor="featuredImage">Featured Image</label>
          <input
            type="file"
            id="featuredImage"
            name="featuredImage"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="images">Additional Images</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={saving} className="btn btn-primary">
            {saving ? 'Saving...' : 'Update Post'}
          </button>
          <button type="button" onClick={() => navigate('/admin-dashboard')} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
