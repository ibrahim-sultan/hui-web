import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const MAP = {
  agriculture: "https://agriculture.alhikmahuniversity.edu.ng/",
  management: "https://alhikmahuniversity.edu.ng/faculty-of-management-sciences/",
  humanities: "https://alhikmahuniversity.edu.ng/faculty-of-humanities-and-social-sciences/",
  sciences: "https://alhikmahuniversity.edu.ng/faculty-of-natural-and-applied-sciences/",
  education: "https://alhikmahuniversity.edu.ng/faculty-of-education/",
  health: "https://alhikmahuniversity.edu.ng/faculty-of-health-sciences/",
  law: "https://alhikmahuniversity.edu.ng/faculty-of-law/",
  computing: "https://alhikmahuniversity.edu.ng/faculty-of-computing-engineering-and-technology/",
};

router.get("/:slug", async (req, res) => {
  try {
    const slug = String(req.params.slug || "").toLowerCase();
    const url = MAP[slug];
    if (!url) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    const resp = await fetch(url, { timeout: 15000 });
    const html = await resp.text();
    res.json({ url, html });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default router;
