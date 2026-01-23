import express from "express";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import Complaint from "../models/Complaint.js";
import Registry from "../models/Registry.js";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

const validateCreate = [
  body("type").isIn(["student", "staff"]),
  body("idNumber").isString().notEmpty().trim(),
  body("subject").isString().isLength({ min: 3, max: 150 }).trim(),
  body("description").isString().isLength({ min: 10 }).trim(),
  body("category").optional().isString().trim(),
];

router.post("/", limiter, validateCreate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Validation failed", errors: errors.array() });
  }
  try {
    const { type, idNumber, subject, description, category } = req.body;
    const reg = await Registry.findOne({ idNumber, type });
    const complaint = new Complaint({
      type,
      idNumber,
      registry: reg?._id,
      nameSnapshot: reg?.fullName || "",
      departmentSnapshot: reg?.department || "",
      subject,
      description,
      category: category || "general",
    });
    await complaint.save();
    res.status(201).json(complaint);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
