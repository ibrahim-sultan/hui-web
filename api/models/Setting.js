import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
    enum: ['homeVideo']
  },
  url: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Setting = mongoose.model('Setting', settingSchema);
export default Setting;
