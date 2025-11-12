import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [30, 'Username cannot exceed 30 characters'],
    unique: true,
    trim: true,
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false // Don't include password in queries by default
  },
  role: {
    type: String,
    enum: ['student', 'admin', 'staff'],
    default: 'student'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
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
UserSchema.index({ email: 1 });
UserSchema.index({ username: 1 });
UserSchema.index({ createdAt: -1 });

// Update the updatedAt field before saving
UserSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Method to update last login
UserSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save();
};

// Method to check if user is admin
UserSchema.methods.isAdmin = function() {
  return this.role === 'admin';
};

// Static method to find active users
UserSchema.statics.findActive = function() {
  return this.find({ isActive: true });
};

const UserModel = model('User', UserSchema);

export default UserModel;
