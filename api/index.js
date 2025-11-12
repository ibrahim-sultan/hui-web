import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import User from "./models/User.js";
import Post from "./models/Post.js";
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS) || 12;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Security middleware
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 auth requests per windowMs
  message: {
    error: 'Too many authentication attempts, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting
app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.com'] // Replace with your actual domain in production
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Body parsing middleware with size limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static file serving
app.use('/uploads', express.static(uploadsDir));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/universityDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });

// Input validation middleware
const validateRegistration = [
  body('username')
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
];

const validateLogin = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

// Error handling middleware for validation
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

// Routes
app.post('/api/register', authLimiter, validateRegistration, handleValidationErrors, async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: existingUser.email === email 
          ? 'Email already registered' 
          : 'Username already taken' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET, 
      { expiresIn: '7d' }
    );
    
    const { password: _, ...userWithoutPassword } = user.toObject();
    
    console.log(`\u2705 New user registered: ${email}`);
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('\u274c Registration error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

app.post('/api/login', authLimiter, validateLogin, handleValidationErrors, async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET, 
      { expiresIn: '7d' }
    );
    
    const { password: _, ...userWithoutPassword } = user.toObject();
    
    console.log(`\u2705 User logged in: ${email}`);
    
    res.json({
      message: 'Login successful',
      token,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('\u274c Login error:', error);
    res.status(500).json({ message: 'Login failed. Please try again.' });
  }
});

// Post routes
app.use('/api/posts', postRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('\u274c Global Error Handler:', err);
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({
      message: 'Validation Error',
      errors: errors
    });
  }
  
  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
    });
  }
  
  // JWT error
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
  
  // JWT expired error
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      message: 'Token expired'
    });
  }
  
  // Multer error
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        message: 'File too large'
      });
    }
    return res.status(400).json({
      message: 'File upload error'
    });
  }
  
  // Cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Invalid ID format'
    });
  }
  
  // Default error
  const statusCode = err.statusCode || 500;
  const message = process.env.NODE_ENV === 'production' 
    ? 'Something went wrong'
    : err.message;
  
  res.status(statusCode).json({
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Handle 404 for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\u26a0\ufe0f SIGTERM received');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\u26a0\ufe0f SIGINT received');
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error('\u274c Unhandled Promise Rejection:', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('\u274c Uncaught Exception:', err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`\ud83d\ude80 Al-Hikmah University Server running on port ${PORT}`);
  console.log(`\ud83c\udf0d Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`\ud83d\udcc5 Started at: ${new Date().toISOString()}`);
});
