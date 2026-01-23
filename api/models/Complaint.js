import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const ComplaintSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["student", "staff"],
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
      trim: true,
    },
    registry: {
      type: Types.ObjectId,
      ref: "Registry",
    },
    nameSnapshot: {
      type: String,
      trim: true,
    },
    departmentSnapshot: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
      default: "general",
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
    status: {
      type: String,
      enum: ["open", "in_review", "resolved", "closed"],
      default: "open",
    },
    attachments: [
      {
        path: { type: String, trim: true },
        type: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true }
);

ComplaintSchema.index({ idNumber: 1 });
ComplaintSchema.index({ status: 1, createdAt: -1 });

const Complaint = model("Complaint", ComplaintSchema);
export default Complaint;
