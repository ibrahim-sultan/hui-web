import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const adminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {
      // For now, allow all authenticated users to create posts
      // You can add role-based access later
      if (req.user) {
        next();
      } else {
        res.status(403).json({ message: 'Access required' });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
