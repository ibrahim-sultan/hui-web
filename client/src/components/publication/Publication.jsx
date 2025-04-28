import React from "react";
import "./publication.css";
import logo from "../../assest/logo11.png"
import edu from "../../assest/edu.jpg"
import human from "../../assest/human.jpg"
import law from "../../assest/law.jpg"
import computing from "../../assest/computing.jpg"
import natural from "../../assest/natural.jpg"
import manage from "../../assest/manage.jpg"
import agric from "../../assest/agric.jpg"
import a from "../../assest/a.jpg"
import b from "../../assest/b.jpg"
import c from "../../assest/c.jpg"
import d from "../../assest/d.jpg"
import e from "../../assest/e.jpg"
import f from "../../assest/f.jpg"
import g from "../../assest/g.jpg"
import h from "../../assest/h.jpg"
import i from "../../assest/i.jpg"

const peopleImages = [
  edu, human, law, computing, natural, manage, agric, a, b, i, d,h,f,g,e,c];

const AlHikmahSection = () => {
  return (
    <div className="alhikmah-container">
      <div className="alhikmah-header">
        <img src= {logo} alt="Logo" className="alhikmah-logo" />
        <div className="alhikmah-info">
          <h2>Al-Hikmah University</h2>
          <p>10,000 Publication</p>
          <p>15,700 Total RG Score</p>
        </div>
      </div>

      <div className="alhikmah-grid">
        {peopleImages.map((img, idx) => (
          <img key={idx} src={img} alt={`Person ${idx + 1}`} className="alhikmah-avatar" />
        ))}
      </div>

      <div className="alhikmah-publications">
        <h3>Recent Publications</h3>
        <div className="alhikmah-publication-entry">
          <strong>The Salafi Bookstore</strong>
          <p>
            Explanation of the Six Fundamental Principles - The Precious Jewels In
            Establishing the Foundations for Beginners
          </p>
        </div>
        <div className="alhikmah-publication-entry">
          <strong>Darussalam</strong>
          <p>
            40 Hadith Concerning The Major Sins (25104, 9781532369407) · A
            Comprehensive Guide For The New Muslim (25103, 9781532369377)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlHikmahSection;
