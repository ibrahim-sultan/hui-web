import React, { useState } from "react";
import { FaSearch, FaIdBadge, FaUser, FaUniversity, FaExclamationCircle, FaPaperPlane } from "react-icons/fa";

function Complaint() {
  const [idNumber, setIdNumber] = useState("");
  const [type, setType] = useState("student");
  const [loadingLookup, setLoadingLookup] = useState(false);
  const [record, setRecord] = useState(null);
  const [lookupError, setLookupError] = useState("");

  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("general");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const findRecord = async () => {
    setLoadingLookup(true);
    setLookupError("");
    setRecord(null);
    try {
      const res = await fetch(`/api/registry/${encodeURIComponent(idNumber)}?type=${encodeURIComponent(type)}`);
      if (res.ok) {
        const data = await res.json();
        setRecord(data);
      } else {
        const data = await res.json().catch(() => ({}));
        setLookupError(data.message || "Record not found");
      }
    } catch (e) {
      setLookupError("Network error");
    } finally {
      setLoadingLookup(false);
    }
  };

  const submitComplaint = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage("");
    try {
      const res = await fetch("/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          idNumber,
          subject,
          description,
          category,
        }),
      });
      if (res.ok) {
        setSubject("");
        setDescription("");
        setCategory("general");
        setSubmitMessage("Complaint submitted");
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitMessage(data.message || "Submission failed");
      }
    } catch (e) {
      setSubmitMessage("Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px" }}>
      <section style={{ background: "#2c3e50", color: "#fff", padding: "48px 24px", borderRadius: 12, textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: "2.2rem" }}>Submit a Complaint</h1>
        <p style={{ marginTop: 10, opacity: 0.9 }}>Enter your Matric Number or Staff ID to continue</p>
      </section>

      <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.08)", padding: 20, marginBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 140px", gap: 12, alignItems: "center" }}>
          <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: 12, borderRadius: 8, border: "1px solid #d9d9d9" }}>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaIdBadge color="#157646" />
            <input
              type="text"
              placeholder={type === "student" ? "Matric Number" : "Staff ID"}
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              style={{ flex: 1, padding: 12, borderRadius: 8, border: "1px solid #d9d9d9" }}
            />
          </div>
          <button
            onClick={findRecord}
            disabled={!idNumber || loadingLookup}
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              border: "none",
              background: "#157646",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {loadingLookup ? "Searching..." : (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <FaSearch /> Find
              </span>
            )}
          </button>
        </div>
        {lookupError && <p style={{ color: "#c0392b", marginTop: 12 }}>{lookupError}</p>}
      </div>

      {record && (
        <div style={{ background: "#ffffff", borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.08)", padding: 20, marginBottom: 24 }}>
          <h3 style={{ marginTop: 0, color: "#2c3e50" }}>Record Details</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FaUser color="#157646" />
              <span>{record.fullName}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FaIdBadge color="#157646" />
              <span>{record.idNumber}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FaUniversity color="#157646" />
              <span>{record.department || "N/A"}</span>
            </div>
          </div>
        </div>
      )}

      <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.08)", padding: 20 }}>
        <h3 style={{ marginTop: 0, color: "#2c3e50", display: "flex", alignItems: "center", gap: 8 }}>
          <FaExclamationCircle color="#157646" /> Complaint Form
        </h3>
        <form onSubmit={submitComplaint} style={{ display: "grid", gap: 12 }}>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ padding: 12, borderRadius: 8, border: "1px solid #d9d9d9" }}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: 12, borderRadius: 8, border: "1px solid #d9d9d9" }}>
            <option value="general">General</option>
            <option value="academic">Academic</option>
            <option value="hostel">Hostel</option>
            <option value="finance">Finance</option>
            <option value="conduct">Conduct</option>
            <option value="ict">ICT</option>
          </select>
          <textarea
            placeholder="Describe your complaint"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ padding: 12, borderRadius: 8, border: "1px solid #d9d9d9" }}
          />
          <button
            type="submit"
            disabled={!idNumber || !subject || !description || submitting}
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              border: "none",
              background: "#157646",
              color: "#fff",
              cursor: "pointer",
              width: 180,
            }}
          >
            {submitting ? "Submitting..." : (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <FaPaperPlane /> Submit
              </span>
            )}
          </button>
          {submitMessage && <p style={{ color: submitMessage.includes("submitted") ? "#157646" : "#c0392b" }}>{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Complaint;
