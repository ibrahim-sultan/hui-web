import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    featuredImage: null,
    images: []
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

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
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);

      // Add featured image
      if (formData.featuredImage && formData.featuredImage[0]) {
        formDataToSend.append('featuredImage', formData.featuredImage[0]);
      }

      // Add additional images
      if (formData.images) {
        Array.from(formData.images).forEach(file => {
          formDataToSend.append('images', file);
        });
      }

      const response = await axios.post('/api/posts', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Error creating post:', error);
      const errorMessage = error.response?.data?.message || 'Error creating post. Please try again.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post">
      <h1>Create New Post</h1>
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
            required
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
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Creating...' : 'Create Post'}
          </button>
          <button type="button" onClick={() => navigate('/admin-dashboard')} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
