import express from 'express';
import multer from 'multer';
import path from 'path';
import Media from '../models/Media.js';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image/video files are allowed'));
    }
  }
});

const normalizePath = (p) => String(p || '').replace(/\\/g, '/');

// List media
router.get('/', async (req, res) => {
  try {
    const items = await Media.find().sort({ uploadedAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Upload media
router.post('/', adminAuth, upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'File is required' });
    }
    const type = file.mimetype.startsWith('image/') ? 'image' : 'video';
    const { title, description } = req.body;
    const item = await Media.create({
      title,
      description,
      type,
      path: normalizePath(file.path)
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete media
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const item = await Media.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
