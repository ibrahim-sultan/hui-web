import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaExternalLinkAlt, FaUniversity, FaUserTie } from "react-icons/fa";

const FACULTY_MAP = {
  management: {
    title: "Faculty of Management Sciences",
    site: "https://alhikmahuniversity.edu.ng/faculty-of-management-sciences/",
  },
  humanities: {
    title: "Faculty of Humanities and Social Sciences",
    site: "https://alhikmahuniversity.edu.ng/faculty-of-humanities-and-social-sciences/",
  },
  sciences: {
    title: "Faculty of Natural and Applied Sciences",
    site: "https://alhikmahuniversity.edu.ng/faculty-of-natural-and-applied-sciences/",
  },
  education: {
    title: "Faculty of Education",
    site: "https://alhikmahuniversity.edu.ng/faculty-of-education/",
  },
  health: {
    title: "Faculty of Health Sciences",
    site: "https://alhikmahuniversity.edu.ng/faculty-of-health-sciences/",
  },
  law: {
    title: "Faculty of Law",
    site: "https://alhikmahuniversity.edu.ng/faculty-of-law/",
  },
  computing: {
    title: "Faculty of Computing, Engineering and Technology",
    site: "https://alhikmahuniversity.edu.ng/faculty-of-computing-engineering-and-technology/",
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
      "Delivers a modern agriculture curriculum with practical exposure in crop production, agribusiness, and sustainable practices, including scholarship support for pioneer cohorts.",
    departments: ["Department of Agriculture"],
  },
  "Faculty of Education": {
    dean: "Dr. Mrs. RASHEEDAT M. OLADIMEJI",
    description:
      "A well-structured outreach-driven unit offering broad undergraduate education degrees and postgraduate programs focused on pedagogy, leadership, and curriculum development.",
    departments: [
      "Department of Science Education",
      "Department of Arts and Social Sciences Education",
      "Department of Educational Management and Counselling",
    ],
  },
  "Faculty of Health Sciences": {
    dean: "Prof. O.O Kayode",
    description:
      "Offers robust programmes in Medical Laboratory Science, Community Health, Anatomy, Physiology, and Nursing with strong clinical training and modern laboratories.",
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
      "Combines liberal arts and social sciences with programs that foster critical thinking, communication, and civic engagement across languages, media, and governance.",
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
      "Fully accredited faculty offering a comprehensive LL.B with foundations in Common Law and Islamic Law supported by moots, clinics, and professional mentorship.",
    departments: ["Department of Law"],
  },
  "Faculty of Management Sciences": {
    dean: "Prof. Aremu M Adeyemi FSM",
    description:
      "Develops professionals in accounting, finance, business, and economics through rigorous training aligned with industry certifications and entrepreneurship pathways.",
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
      "Comprehensive STEM education spanning physical, biological, chemical, and geological sciences with structured laboratories and research initiatives.",
    departments: [
      "Department of Chemical and Geological Sciences",
      "Department of Biological Sciences",
      "Department of Physical Sciences",
    ],
  },
  "Faculty of Computing, Engineering and Technology": {
    dean: "Dr. T.U ABDULRAUF",
    description:
      "Specializes in computer science and information systems with emphasis on software engineering, cybersecurity, data science, and applied technology.",
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
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "#fff",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 12, opacity: 0.9 }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>{" "}
            /{" "}
            <Link to="/programs" style={{ color: "#fff", textDecoration: "none" }}>
              Faculties
            </Link>{" "}
            / <span>{title}</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "2.8rem" }}>{title}</h1>
          <p style={{ marginTop: 8 }}>
            Excellence in teaching, research, and community impact
          </p>
          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 16,
                padding: "12px 18px",
                borderRadius: 8,
                background: "#ffffff",
                color: "#0f5a36",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <FaExternalLinkAlt /> Visit Faculty Site
              </span>
            </a>
          )}
        </div>
      </section>

      <section style={{ padding: "36px 0", background: "#f5f7fa" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 20,
          }}
        >
          <div>
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
              <p style={{ color: "#444", lineHeight: 1.8 }}>
                {data?.description ||
                  "Information will be available soon. Explore our programs and departments."}
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
                  gap: 14,
                }}
              >
                {(data?.departments || []).map((dept, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderRadius: 10,
                      overflow: "hidden",
                      border: "1px solid #e6f3ea",
                      background: "#f8fdf9",
                    }}
                  >
                    <div
                      style={{
                        height: 120,
                        background:
                          "linear-gradient(135deg, #0f5a36 0%, #157646 100%)",
                      }}
                    />
                    <div style={{ padding: 14 }}>
                      <div style={{ fontWeight: 700, color: "#0f5a36" }}>{dept}</div>
                      <div style={{ color: "#555", fontSize: 13 }}>
                        Program details, labs, and opportunities
                      </div>
                    </div>
                  </div>
                ))}
                {(!data || !data.departments || data.departments.length === 0) && (
                  <div style={{ color: "#555" }}>Departments will be listed soon</div>
                )}
              </div>
            </div>
          </div>

          <aside>
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                padding: 20,
                marginBottom: 20,
              }}
            >
              <h3 style={{ marginTop: 0 }}>Quick Links</h3>
              <div style={{ display: "grid", gap: 8 }}>
                <Link to="/admission-requirements" style={{ color: "#157646", textDecoration: "none" }}>
                  Admission Requirements
                </Link>
                <Link to="/application-process" style={{ color: "#157646", textDecoration: "none" }}>
                  Application Process
                </Link>
                <Link to="/student-services" style={{ color: "#157646", textDecoration: "none" }}>
                  Student Services
                </Link>
                <Link to="/library" style={{ color: "#157646", textDecoration: "none" }}>
                  Library
                </Link>
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
              <h3 style={{ marginTop: 0 }}>Contact</h3>
              <div style={{ color: "#444" }}>
                <div>Al‑Hikmah University</div>
                <div>Ilorin, Kwara State, Nigeria</div>
                <div style={{ marginTop: 8 }}>Email: info@alhikmahuniversity.edu.ng</div>
                <div>Phone: +234 803 123 4567</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default FacultyDetail;
