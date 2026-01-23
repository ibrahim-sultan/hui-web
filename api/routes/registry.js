import express from "express";
import { query, param, validationResult } from "express-validator";
import Registry from "../models/Registry.js";

const router = express.Router();

const validate = [
  param("idNumber").notEmpty().isString().trim(),
  query("type").optional().isIn(["student", "staff"]),
];

router.get("/:idNumber", validate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Validation failed", errors: errors.array() });
  }
  try {
    const { idNumber } = req.params;
    const { type } = req.query;
    const filter = type ? { idNumber, type } : { idNumber };
    const record = await Registry.findOne(filter);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json(record);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
