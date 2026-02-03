import express from "express";

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

function absolutizeHtml(html, baseUrl) {
  try {
    const base = new URL(baseUrl);
    const toAbsolute = (value) => {
      if (!value) return value;
      const trimmed = value.trim();
      if (
        trimmed.startsWith("http://") ||
        trimmed.startsWith("https://") ||
        trimmed.startsWith("data:") ||
        trimmed.startsWith("mailto:") ||
        trimmed.startsWith("tel:") ||
        trimmed.startsWith("#")
      ) {
        return trimmed;
      }
      try {
        return new URL(trimmed, base).toString();
      } catch {
        return trimmed;
      }
    };
    let out = html;
    out = out.replace(/<base[\s\S]*?>/gi, "");
    out = out.replace(/<script[\s\S]*?<\/script>/gi, "");
    out = out.replace(/(href|src)=["']([^"']+)["']/gi, (_m, attr, val) => {
      const abs = toAbsolute(val);
      return `${attr}="${abs}"`;
    });
    return out;
  } catch {
    return html;
  }
}

router.get("/:slug", async (req, res) => {
  try {
    const slug = String(req.params.slug || "").toLowerCase();
    const url = MAP[slug];
    if (!url) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    if (typeof fetch !== "function") {
      return res.status(500).json({ message: "fetch is not available on server" });
    }
    const resp = await fetch(url);
    const html = await resp.text();
    const safeHtml = absolutizeHtml(html, url);
    res.json({ url, html: safeHtml });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default router;
