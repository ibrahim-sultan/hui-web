import React from "react";
import "./hero.css";
// Make sure to import Bootstrap CSS and JS in your project
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import slide1 from "../../assest/slide1.jpg";
import slide2 from "../../assest/slide2.jpg";
import slide3 from "../../assest/slide3.jpg";
import { FaPhotoVideo } from "react-icons/fa";
import { GiOpenBook, GiBookshelf } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";

function Hero() {
  return (
    <div className="hero-section">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
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
              <h5>2024/2025 Admission in Process</h5>
              <p>
                Join our prestigious institution for <br />
                quality education with moral values
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block top-left-caption">
              <h5>12th Convocation Ceremony</h5>
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Content boxes at the bottom */}
      <div className="hero-content-boxes">
        <div className="content-box">
          <h6>Admissions Open</h6>
          <p>2024/2025 session applications ongoing</p>
        </div>
        <div className="content-box">
          <h6>Convocation</h6>
          <p>12th graduation ceremony</p>
        </div>
        <div className="content-box">
          <h6>Vice Chancellor</h6>
          <p>Prof. Naheem Yusuf</p>
        </div>
        <div className="content-box">
          <h6>Lecture Series</h6>
          <p>Maiden Distinguished Personality Lecture</p>
        </div>
      </div>
      {/* ONE OF VERY FEW PRIVATE */} <br />
      <br />
      <div class="container">
        <section class="university-info">
          <div class="container">
            <h1 class="main-heading">
              One of the very few Private Islamic Universities in Nigeria
            </h1>
            <div class="info-grid">
              <div class="info-card">
                <h2>Establishment</h2>
                <p>
                  Established in 2005 by the Abdur-Raheem Oladimeji Islamic
                  Foundation (AROIF), Nigeria.
                </p>
              </div>

              <div class="info-card highlight">
                <h2>Islamic University</h2>
                <p>The first Islamic Faith-Based University in Nigeria.</p>
              </div>

              <div class="info-card">
                <h2>Academic Programmes</h2>
                <p>
                  Has 7 Faculties and the Postgraduate School. It has 50
                  Undergraduate, 12 Diploma and 43 Postgraduate Programmes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* RESEACH CENTER SECTION */}
      <div class="container">
        <div class="row">
          <div class="col -lg-6">
            <div class="research-row">
              <h1>
                Centre for Research, Industrial Linkage & International
                Cooperation
              </h1>
              <p class="research-description">
                Through research, a tertiary institution can sustain its own
                existence as a centre of learning that is committed to the
                pursuit of excellence. The Centre serves as the rallying point
                for planning, coordinating and regulating research activities to
                foster structured and directional research in AI-Hikmah
                University.
              </p>
            </div>
            <div class="download-header">
              <h3>Download BMAS here</h3>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="download-grid">
              <div class="download-box">
                <FaPhotoVideo className="media-icon" />
                <h4>University Media</h4>
                <div class="download-content">
                  <a href="#">University media</a>
                </div>
              </div>

              <div class="download-box">
                <GiOpenBook className="media-icon" />
                <h4>Open Education</h4>
                <div class="download-content">
                  <a href="#">Educational Materials</a>
                </div>
              </div>

              <div class="download-box">
                <GiBookshelf className="media-icon" />
                <h4>University Library</h4>
                <div class="download-content">
                  <a href="#">Library Resources</a>
                </div>
              </div>

              <div class="download-box">
                <IoMdSchool className="media-icon" />
                <h4>Academic Programs</h4>
                <div class="download-content">
                  <a href="#">Undergraduate & Postgraduate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* LEARN MORE SECTION */}
      <section class="academic-programs">
  <div class="container">
    <div class="programs-grid">
   
      <div class="program-card undergraduate">
        <div class="program-content">
          <h3>Undergraduate</h3>
          <p>We are offering our students a diverse spectrum of courses and enriching experiences.</p>
          <a href="#" class="learn-more-btn">Learn more <span class="arrow">→</span></a>
        </div>
      </div>

    
      <div class="program-card postgraduate">
        <div class="program-content">
          <h3>Postgraduate & Professional</h3>
          <p>Whether you are looking at continuing your educational journey or professional development.</p>
          <a href="#" class="learn-more-btn">Learn more <span class="arrow">→</span></a>
        </div>
      </div>

     
      <div class="program-card scholarships">
        <div class="program-content">
          <h3>Scholarships & Financial Aid</h3>
          <p>Agricultural Science is one of our newest and latest accredited courses with funding options.</p>
          <a href="#" class="learn-more-btn">Learn more <span class="arrow">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Hero;
