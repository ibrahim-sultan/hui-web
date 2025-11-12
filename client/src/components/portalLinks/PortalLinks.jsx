import React from 'react';
import './portalLinks.css';

const PortalLinks = () => {
  const portals = [
    {
      title: "Student Payment Portal",
      url: "https://ecampus.alhikmahuniversity.edu.ng/portal/"
    },
    {
      title: "Student Result Portal",
      url: "https://portal.alhikmah.edu.ng/students/"
    },
    {
      title: "Topup Result Portal",
      url: "https://topup.alhikmah.edu.ng/students/"
    },
    {
      title: "Sandwich Result Portal",
      url: "https://sandwich.alhikmah.edu.ng/students/"
    }
  ];

  return (
    <section className="portal-links">
      <div className="container">
        <h2>Student Portals</h2>
        <div className="portal-links-grid">
          {portals.map((portal, index) => (
            <a
              key={index}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portal-link-item"
            >
              {portal.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortalLinks;
