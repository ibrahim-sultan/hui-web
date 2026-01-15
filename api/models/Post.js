import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post title is required'],
    trim: true,
    minlength: [5, 'Title must be at least 5 characters long'],
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Post content is required'],
    minlength: [1, 'Content is required']
  },
  excerpt: {
    type: String,
    maxlength: [300, 'Excerpt cannot exceed 300 characters']
  },
  featuredImage: {
    type: String,
    required: [true, 'Featured image is required']
  },
  images: [{
    type: String,
    validate: {
      validator: function(v) {
        return this.images.length <= 10;
      },
      message: 'Cannot have more than 10 additional images'
    }
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required']
  },
  authorName: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  category: {
    type: String,
    enum: ['news', 'events', 'academics', 'research', 'sports', 'student-life', 'announcements'],
    default: 'news'
  },
  eventDate: {
    type: Date
  },
  eventTime: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return this.tags.length <= 5;
      },
      message: 'Cannot have more than 5 tags'
    }
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  views: {
    type: Number,
    default: 0,
    min: 0
  },
  publishedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes for better performance
postSchema.index({ slug: 1 });
postSchema.index({ author: 1 });
postSchema.index({ category: 1 });
postSchema.index({ status: 1 });
postSchema.index({ publishedAt: -1 });
postSchema.index({ views: -1 });
postSchema.index({ tags: 1 });
postSchema.index({ title: 'text', content: 'text' }); // Text search

// Virtual for excerpt generation
postSchema.virtual('autoExcerpt').get(function() {
  if (this.excerpt) return this.excerpt;
  return this.content.length > 300 
    ? this.content.substring(0, 300) + '...' 
    : this.content;
});

// Generate slug from title
postSchema.pre('save', async function(next) {
  if (this.isModified('title') || !this.slug) {
    let baseSlug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
    
    // Ensure slug is not empty
    if (!baseSlug) {
      baseSlug = 'post-' + Date.now();
    }
    
    // Handle duplicate slugs
    let uniqueSlug = baseSlug;
    let counter = 1;
    
    while (true) {
      const existingPost = await mongoose.model('Post').findOne({ 
        slug: uniqueSlug, 
        _id: { $ne: this._id } 
      });
      
      if (!existingPost) {
        break;
      }
      
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    this.slug = uniqueSlug;
  }
  
  // Auto-generate excerpt if not provided
  if (!this.excerpt && this.content) {
    this.excerpt = this.content.length > 300 
      ? this.content.substring(0, 297) + '...'
      : this.content;
  }
  
  this.updatedAt = Date.now();
  next();
});

// Instance methods
postSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

postSchema.methods.publish = function() {
  this.status = 'published';
  this.publishedAt = new Date();
  return this.save();
};

postSchema.methods.archive = function() {
  this.status = 'archived';
  return this.save();
};

// Static methods
postSchema.statics.findPublished = function() {
  return this.find({ status: 'published' }).sort({ publishedAt: -1 });
};

postSchema.statics.findByCategory = function(category) {
  return this.find({ category, status: 'published' }).sort({ publishedAt: -1 });
};

postSchema.statics.searchPosts = function(query) {
  return this.find({
    $text: { $search: query },
    status: 'published'
  }).sort({ score: { $meta: 'textScore' } });
};

const Post = mongoose.model('Post', postSchema);
export default Post;
