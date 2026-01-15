import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    featuredImage: null,
    images: [],
    category: 'news',
    eventDate: '',
    eventTime: '',
    location: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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
    fetchPost();
  }, [id]);

  if (!token || !user || user.role !== 'admin') {
    return null;
  }

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/posts/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const post = response.data;
      if (post) {
        setFormData({
          title: post.title,
          content: post.content,
          featuredImage: null,
          images: [],
          category: post.category || 'news',
          eventDate: post.eventDate ? post.eventDate.slice(0, 10) : '',
          eventTime: post.eventTime || '',
          location: post.location || ''
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
      formDataToSend.append('category', formData.category);
      if (formData.category === 'events') {
        if (formData.eventDate) formDataToSend.append('eventDate', formData.eventDate);
        if (formData.eventTime) formDataToSend.append('eventTime', formData.eventTime);
        if (formData.location) formDataToSend.append('location', formData.location);
      }

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
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="news">News</option>
            <option value="events">Events</option>
            <option value="academics">Academics</option>
            <option value="research">Research</option>
            <option value="sports">Sports</option>
            <option value="student-life">Student Life</option>
            <option value="announcements">Announcements</option>
          </select>
        </div>

        {formData.category === 'events' && (
          <>
            <div className="form-group">
              <label htmlFor="eventDate">Event Date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventTime">Event Time</label>
              <input
                type="text"
                id="eventTime"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                placeholder="e.g., 8:00am - 12:30pm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Event location"
              />
            </div>
          </>
        )}

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
