import React, { useState } from "react";
import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

import { FaPhotoVideo, FaSignInAlt, FaUserPlus, FaUniversity, FaStar, FaGraduationCap, FaUsers, FaBook, FaCalendarAlt } from "react-icons/fa";
import { GiOpenBook, GiBookshelf } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ position: "relative" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="First slide" />
              <div className="carousel-caption d-none d-md-block top-left-caption">
                <h5>The 1st Islamic Faith-Based University in Nigeria</h5>
                <p>
                  Al-Hikmah University is a conventional private <br />
                  university with a well-anticipated mission of promoting <br />
                  both academic and moral excellence
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="Second slide" />
              <div className="carousel-caption d-none d-md-block top-left-caption">
                <h5>2025/2026 Admission in Process</h5>
                <p>
                  Join our prestigious institution for <br />
                  quality education with moral values
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block top-left-caption">
                <h5>13th Convocation Ceremony</h5>
                <p>
                  Celebrating our graduating students <br />
                  and their achievements
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Content Boxes */}
        <div className="hero-content-boxes">
          <div className="content-box">
            <h6>Admissions Open</h6>
            <p>2025/2026 session applications ongoing</p>
          </div>
          <div className="content-box">
            <h6>Convocation</h6>
            <p>13th graduation ceremony</p>
          </div>
          <div className="content-box">
            <h6>Vice Chancellor</h6>
            <p>Prof. Lateef Oladimeji  </p>
          </div>
          <div className="content-box">
            <h6>Lecture Series</h6>
            <p>Maiden Distinguished Personality Lecture</p>
          </div>
        </div>

        {/* University Excellence Overview */}
        <div className="container">
          <section className="university-excellence">
            <div className="excellence-header">
              <h1 className="excellence-title">
                Leading Islamic Higher Education in Nigeria
              </h1>
              <p className="excellence-subtitle">
                Pioneering academic excellence with moral values since 2005
              </p>
            </div>
            
           
            
            <div className="excellence-highlights">
              <div className="highlight-card featured">
                <div className="highlight-icon">
                  <FaUniversity />
                </div>
                <div className="highlight-content">
                  <h3>Premier Islamic Institution</h3>
                  <p>
                    Nigeria's first Islamic faith-based university, established by the 
                    Abdul-Raheem Oladimeji Islamic Foundation (AROIF) with a mission 
                    to integrate academic excellence with Islamic values.
                  </p>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <HiAcademicCap />
                </div>
                <div className="highlight-content">
                  <h3>Comprehensive Education</h3>
                  <p>
                    Offering 50+ undergraduate, 12 diploma, and 43+ postgraduate 
                    programs across 9 faculties, preparing students for global 
                    leadership in their chosen fields.
                  </p>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaBook />
                </div>
                <div className="highlight-content">
                  <h3>Learning for Wisdom & Morality</h3>
                  <p>
                    Our motto reflects our commitment to producing graduates who are 
                    not only academically competent but also morally upright and 
                    socially responsible global citizens.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Research Center */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="research-row">
                <h1>
                  Centre for Research, Industrial Linkage & International
                  Cooperation
                </h1>
                <p className="research-description">
                  Through research, a tertiary institution can sustain its own
                  existence as a centre of learning that is committed to the
                  pursuit of excellence...
                </p>
              </div>
              <div className="download-header">
                <h3>Download BMAS here</h3>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="download-grid">
                <div className="download-box">
                  <FaPhotoVideo className="media-icon" />
                  <h4>University Media</h4>
                  <div className="download-content">
                    <a href="#">University media</a>
                  </div>
                </div>
                <div className="download-box">
                  <GiOpenBook className="media-icon" />
                  <h4>Open Education</h4>
                  <div className="download-content">
                    <a href="#">Educational Materials</a>
                  </div>
                </div>
                <div className="download-box">
                  <GiBookshelf className="media-icon" />
                  <h4>University Library</h4>
                  <div className="download-content">
                    <a href="#">Library Resources</a>
                  </div>
                </div>
                <div className="download-box">
                  <IoMdSchool className="media-icon" />
                  <h4>Academic Programs</h4>
                  <div className="download-content">
                    <a href="#">Undergraduate & Postgraduate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Programs */}
        <section className="academic-programs">
          <div className="container">
            <div className="programs-grid">
              <div className="program-card undergraduate">
                <div className="program-content">
                  <h3>Undergraduate</h3>
                  <p>
                    We are offering our students a diverse spectrum of courses
                    and enriching experiences.
                  </p>
                  <a href="#" className="learn-more-btn">
                    Learn more <span className="arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="program-card postgraduate">
                <div className="program-content">
                  <h3>Postgraduate & Professional</h3>
                  <p>
                    Whether you are continuing your education or professional
                    development.
                  </p>
                  <a href="#" className="learn-more-btn">
                    Learn more <span className="arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="program-card scholarships">
                <div className="program-content">
                  <h3>Scholarships & Financial Aid</h3>
                  <p>
                    Agricultural Science is one of our newest accredited courses
                    with funding options.
                  </p>
                  <a href="#" className="learn-more-btn">
                    Learn more <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
