import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  type: { type: String, enum: ['image', 'video'], required: true },
  path: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

const Media = mongoose.model('Media', mediaSchema);
export default Media;
