import express from "express";
import multer from "multer";
import fs from "fs";
import { adminAuth } from "../middleware/auth.js";
import Registry from "../models/Registry.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "text/csv" || file.mimetype === "application/vnd.ms-excel") {
      cb(null, true);
    } else {
      cb(new Error("Only CSV files are allowed"));
    }
  },
});

const parseCsv = (content) => {
  const lines = content.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const out = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",").map((c) => c.trim());
    const rec = {};
    headers.forEach((h, idx) => {
      rec[h] = cols[idx] || "";
    });
    out.push(rec);
  }
  return out;
};

router.get("/", adminAuth, async (req, res) => {
  try {
    const { type, q, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (type && (type === "student" || type === "staff")) filter.type = type;
    if (q && typeof q === "string") {
      filter.$or = [
        { fullName: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { department: { $regex: q, $options: "i" } },
        { idNumber: { $regex: q, $options: "i" } },
      ];
    }
    const skip = (Number(page) - 1) * Number(limit);
    const [items, total] = await Promise.all([
      Registry.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Registry.countDocuments(filter),
    ]);
    res.json({ items, total, page: Number(page), limit: Number(limit) });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/bulk", adminAuth, upload.single("file"), async (req, res) => {
  try {
    let records = [];
    if (req.file) {
      const content = fs.readFileSync(req.file.path, "utf8");
      const raw = parseCsv(content);
      records = raw.map((r) => ({
        type: String(r.type || "").toLowerCase() === "staff" ? "staff" : "student",
        idNumber: String(r.idnumber || r.id || "").trim(),
        fullName: String(r.fullname || r.name || "").trim(),
        email: String(r.email || "").trim().toLowerCase(),
        department: String(r.department || "").trim(),
      }));
    } else if (Array.isArray(req.body?.records)) {
      records = req.body.records.map((r) => ({
        type: String(r.type || "").toLowerCase() === "staff" ? "staff" : "student",
        idNumber: String(r.idNumber || r.id || "").trim(),
        fullName: String(r.fullName || r.name || "").trim(),
        email: String(r.email || "").trim().toLowerCase(),
        department: String(r.department || "").trim(),
      }));
    } else {
      return res.status(400).json({ message: "CSV file or records array is required" });
    }

    records = records.filter((r) => r.idNumber && r.fullName && (r.type === "student" || r.type === "staff"));
    if (records.length === 0) {
      return res.status(400).json({ message: "No valid records to upload" });
    }

    const ops = records.map((r) => ({
      updateOne: {
        filter: { idNumber: r.idNumber },
        update: { $set: r },
        upsert: true,
      },
    }));
    const result = await Registry.bulkWrite(ops, { ordered: false });
    res.json({
      inserted: result.upsertedCount || 0,
      modified: result.modifiedCount || 0,
      matched: result.matchedCount || 0,
      totalProcessed: records.length,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const del = await Registry.findByIdAndDelete(req.params.id);
    if (!del) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default router;
