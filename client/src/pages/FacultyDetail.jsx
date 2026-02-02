import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaExternalLinkAlt, FaUniversity, FaUserTie } from "react-icons/fa";

const FACULTY_MAP = {
  management: {
    title: "Faculty of Management Sciences",
    site: "https://management.alhikmahuniversity.edu.ng/",
  },
  humanities: {
    title: "Faculty of Humanities and Social Sciences",
    site: "https://humanities.alhikmahuniversity.edu.ng/",
  },
  sciences: {
    title: "Faculty of Natural and Applied Sciences",
    site: "https://sciences.alhikmahuniversity.edu.ng/",
  },
  education: {
    title: "Faculty of Education",
    site: "https://education.alhikmahuniversity.edu.ng/",
  },
  health: {
    title: "Faculty of Health Sciences",
    site: "https://health.alhikmahuniversity.edu.ng/",
  },
  law: {
    title: "Faculty of Law",
    site: "https://law.alhikmahuniversity.edu.ng/",
  },
  computing: {
    title: "Faculty of Computing, Engineering and Technology",
    site: "https://computing.alhikmahuniversity.edu.ng/",
  },
  agriculture: {
    title: "Faculty of Agriculture",
    site: "https://agriculture.alhikmahuniversity.edu.ng/",
  },
};

const FACULTY_DATA = {
  "Faculty of Agriculture": {
    dean: "Dr. K.N Olorunnishoa",
    description:
      "The Faculty of Agricultural Sciences delivers a robust, modern curriculum and practical exposure in crop production, agribusiness, and sustainable practices.",
    departments: ["Department of Agriculture"],
  },
  "Faculty of Education": {
    dean: "Dr. Mrs. RASHEEDAT M. OLADIMEJI",
    description:
      "A comprehensive faculty focused on training educators and administrators with strong pedagogy and leadership skills.",
    departments: [
      "Department of Science Education",
      "Department of Arts and Social Sciences Education",
      "Department of Educational Management and Counselling",
    ],
  },
  "Faculty of Health Sciences": {
    dean: "Prof. O.O Kayode",
    description:
      "Offers programs in Medical Laboratory Science, Public Health, Anatomy, and Physiology with strong clinical exposure.",
    departments: [
      "Department of Medical Laboratory Science",
      "Department of Community Health",
      "Department of Human Anatomy",
      "Department of Human Physiology",
    ],
  },
  "Faculty of Humanities and Social Sciences": {
    dean: "Prof. L. F Oladimeji",
    description:
      "Combines liberal arts and social sciences, fostering critical thinking and societal impact.",
    departments: [
      "Department of Sociology and Criminology",
      "Department of Political Science and Public Administration",
      "Department of Mass Communication",
      "Department of Languages",
      "Department of Islamic Studies",
      "Department of History and International Studies",
    ],
  },
  "Faculty of Law": {
    dean: "Dr. (Mrs.) Bayero-jimoh Maryam",
    description:
      "Fully accredited faculty offering a comprehensive LL.B in Common and Islamic Law.",
    departments: ["Department of Law"],
  },
  "Faculty of Management Sciences": {
    dean: "Prof. Aremu M Adeyemi FSM",
    description:
      "Develops professionals in accounting, finance, business, and economics through rigorous training.",
    departments: [
      "Department of Accounting",
      "Department of Finance",
      "Department of Economics",
      "Department of Business Administration",
    ],
  },
  "Faculty of Natural and Applied Sciences": {
    dean: "Dr (Mrs) F.M JIMOH",
    description:
      "Comprehensive STEM education with structured departments and modern laboratories.",
    departments: [
      "Department of Chemical and Geological Sciences",
      "Department of Biological Sciences",
      "Department of Physical Sciences",
    ],
  },
  "Faculty of Computing, Engineering and Technology": {
    dean: "Dr. T.U ABDULRAUF",
    description:
      "Specializes in cybersecurity, software development, and information systems.",
    departments: [
      "Department of Computer Sciences",
      "Department of Data Science and Information Systems",
    ],
  },
};

function FacultyDetail() {
  const { slug } = useParams();
  const meta = FACULTY_MAP[slug];
  const title = meta?.title || "Faculty";
  const site = meta?.site || "";
  const data = FACULTY_DATA[title];

  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(135deg, #0f5a36 0%, #157646 50%, #1a8754 100%)",
          color: "#fff",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1 style={{ margin: 0, fontSize: "2.6rem" }}>{title}</h1>
          <p style={{ marginTop: 10, opacity: 0.9 }}>
            Explore programs, departments, and opportunities
          </p>
          <div style={{ marginTop: 16 }}>
            {site && (
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 18px",
                  borderRadius: 8,
                  background: "#ffffff",
                  color: "#0f5a36",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                <FaExternalLinkAlt /> Visit Faculty Site
              </a>
            )}
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 0", background: "#f7f9fb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              padding: 20,
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FaUniversity color="#157646" />
              <h2 style={{ margin: 0 }}>Overview</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7 }}>
              {data?.description || "Information will be available soon."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FaUserTie color="#157646" />
              <div style={{ color: "#222" }}>
                Dean: {data?.dean || "To be announced"}
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              padding: 20,
            }}
          >
            <h3 style={{ marginTop: 0 }}>Departments</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 12,
              }}
            >
              {(data?.departments || []).map((dept, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#f8fdf9",
                    border: "1px solid #e6f3ea",
                    borderRadius: 10,
                    padding: 14,
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#0f5a36" }}>
                    {dept}
                  </div>
                  <div style={{ color: "#555", fontSize: 13 }}>
                    Learn more about curriculum, labs, and opportunities
                  </div>
                </div>
              ))}
              {(!data || !data.departments || data.departments.length === 0) && (
                <div style={{ color: "#555" }}>Departments will be listed soon</div>
              )}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link
              to="/programs"
              style={{
                color: "#157646",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Back to Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FacultyDetail;
