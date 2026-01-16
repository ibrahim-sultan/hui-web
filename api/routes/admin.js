import express from 'express';
import Post from '../models/Post.js';
import Setting from '../models/Setting.js';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

const normalizePath = (p) => {
  if (typeof p !== 'string') return p;
  let s = p.replace(/\\/g, '/');
  // strip protocol+host if present
  s = s.replace(/^https?:\/\/[^/]+\/+/, '');
  // remove leading slash
  s = s.replace(/^\/+/, '');
  // collapse api/uploads to uploads
  s = s.replace(/^api\/uploads\/?/, 'uploads/');
  return s;
};

router.post('/migrations/normalize-paths', adminAuth, async (req, res) => {
  try {
    const posts = await Post.find({});
    let updated = 0;
    for (const post of posts) {
      let changed = false;
      const nf = normalizePath(post.featuredImage);
      if (nf !== post.featuredImage) {
        post.featuredImage = nf;
        changed = true;
      }
      if (Array.isArray(post.images) && post.images.length > 0) {
        const ni = post.images.map(normalizePath);
        if (ni.some((v, i) => v !== post.images[i])) {
          post.images = ni;
          changed = true;
        }
      }
      if (!post.category) {
        post.category = 'news';
        changed = true;
      }
      if (changed) {
        await post.save();
        updated++;
      }
    }
    res.json({ updated });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post('/home-video', adminAuth, async (req, res) => {
  try {
    const { url, active } = req.body;
    console.log('Home video update request by', req.user?.email, 'body:', req.body);
    const normalizedUrl = typeof url === 'string' ? url.trim() : '';
    const setting = await Setting.findOneAndUpdate(
      { type: 'homeVideo' },
      { url: normalizedUrl, active: !!active },
      { upsert: true, new: true }
    );
    res.json(setting);
  } catch (e) {
    console.error('Home video update failed:', e);
    res.status(500).json({ message: e.message });
  }
});

export default router;
