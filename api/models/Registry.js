import mongoose from "mongoose";
const { Schema, model } = mongoose;

const RegistrySchema = new Schema(
  {
    type: {
      type: String,
      enum: ["student", "staff"],
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    department: {
      type: String,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    meta: {
      type: Map,
      of: String,
      default: {},
    },
  },
  { timestamps: true }
);

RegistrySchema.index({ idNumber: 1 });
RegistrySchema.index({ type: 1, idNumber: 1 });

const Registry = model("Registry", RegistrySchema);
export default Registry;
