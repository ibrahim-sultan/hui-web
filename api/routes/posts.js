import express from 'express';
import multer from 'multer';
import path from 'path';
import Post from '../models/Post.js';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Create post
router.post('/', adminAuth, upload.fields([
  { name: 'featuredImage', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]), async (req, res) => {
  try {
    const { title, content, category, eventDate, eventTime, location } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const normalizePath = (p) => p.replace(/\\/g, '/');
    const featuredImage = req.files.featuredImage ? normalizePath(req.files.featuredImage[0].path) : '';
    const images = req.files.images ? req.files.images.map(file => normalizePath(file.path)) : [];

    if (!featuredImage) {
      return res.status(400).json({ message: 'Featured image is required' });
    }

    const post = new Post({
      title,
      content,
      category: category || 'news',
      eventDate: eventDate || undefined,
      eventTime: eventTime || undefined,
      location: location || undefined,
      featuredImage,
      images,
      author: req.user._id,
      authorName: req.user.username
    });

    console.log('Creating post with data:', { title, content, featuredImage, images, author: req.user._id });
    await post.save();
    console.log('Post created successfully:', post);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'A post with this title already exists' });
    }
    res.status(500).json({ message: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/admin/:id', adminAuth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single post by slug
router.get('/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update post
router.put('/:id', adminAuth, upload.fields([
  { name: 'featuredImage', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const { title, content, category, eventDate, eventTime, location } = req.body;
    
    post.title = title || post.title;
    post.content = content || post.content;
    post.category = category || post.category;
    if (typeof eventDate !== 'undefined') post.eventDate = eventDate || undefined;
    if (typeof eventTime !== 'undefined') post.eventTime = eventTime || undefined;
    if (typeof location !== 'undefined') post.location = location || undefined;

    const normalizePath = (p) => p.replace(/\\/g, '/');
    if (req.files) {
      if (req.files.featuredImage && req.files.featuredImage[0]) {
        post.featuredImage = normalizePath(req.files.featuredImage[0].path);
      }
      if (req.files.images && req.files.images.length > 0) {
        post.images = req.files.images.map(file => normalizePath(file.path));
      }
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete post
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
