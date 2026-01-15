import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Post from '../models/Post.js';

dotenv.config();

function normalizePath(p) {
  if (!p || typeof p !== 'string') return p;
  return p.replace(/\\/g, '/');
}

async function main() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/universityDB';
  console.log('Connecting to MongoDB...');
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected.');

  const posts = await Post.find({});
  let updated = 0;

  for (const post of posts) {
    let changed = false;

    const normalizedFeatured = normalizePath(post.featuredImage);
    if (normalizedFeatured !== post.featuredImage) {
      post.featuredImage = normalizedFeatured;
      changed = true;
    }

    if (Array.isArray(post.images) && post.images.length > 0) {
      const normalizedImages = post.images.map(normalizePath);
      // Check if any changed
      if (normalizedImages.some((v, i) => v !== post.images[i])) {
        post.images = normalizedImages;
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
      console.log(`Updated post ${post._id} (${post.title})`);
    }
  }

  console.log(`Migration complete. Updated ${updated} posts.`);
  await mongoose.disconnect();
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
