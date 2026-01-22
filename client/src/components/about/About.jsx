import "./about.css";
import { Link } from "react-router-dom";
import vc from "../../assets/vc.jpg";
import comprehensive from "../../assets/comprehensive.jpg"
import learning from "../../assets/learning.jpg"
import aid from "../../assets/aid.jpg"
import alumini from "../../assets/alumini.jpg"
import moot from "../../assets/moot.jpg"
import award from "../../assets/award.jpg"

function About() {
  return (
    <div>
      <div className="about-section">
        <div className="about-img">
          <img src={vc} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>ABOUT US</h2>
          <p>
            AL-HIKMAH UNIVERSITY, ILORIN-NIGERIA, was established in 2005 by the
            Abdur-Raheem Oladimeji Islamic Foundation (AROIF), Nigeria. The
            university came into existence via the granting of a license to
            operate as a conventional private university by the Federal
            Government of Nigeria (License No. 010) on 7th January 2005. It is
            the first Islamic faith-based university in Nigeria. It commenced
            academic activities during the 2005/2006 academic session with 70
            students spread across the three (3) take-off colleges: humanities,
            management sciences, and natural sciences.
          </p> 
          <p>
            Our students are worthy ambassadors of this noble citadel of
            learning. This we can say without mincing words, that the curriculum
            of the institution is erected on the tenets and cornerstones of
            Islamic philosophy – rare to come by in contemporary institutions of
            higher learning, especially in Nigeria.
          </p>
          <Link className="read-more" to="/vice-chancellor">READ MORE &gt;</Link>
        </div>
        <div className="about-links">
          <Link className="link-button green" to="/application-process">
            🎓 Apply
          </Link>
          <Link className="link-button" to="/campus">
            ✈ Visit Campus
          </Link>
          <Link className="link-button" to="/student-services">
            👤 Student
          </Link>
          <Link className="link-button" to="/library">
            🏫 Library
          </Link>
          <Link className="link-button" to="/admission">
            🎓 Scholarship
          </Link>
         
          <Link className="link-button" to="/contact">
            ❓ FAQ
          </Link>
        </div>
      </div>

      {/* CHOOSE US SECTION */}
       <div className="why-choose-section">
      <h2>Why Choose Al-Hikmah University?</h2>
      <div className="card-container">
        <div className="info-card">
          <img src={comprehensive} alt="Comprehensive Education" />
          <h3>Comprehensive Education</h3>
          <p>
           Degree programmes at Al-Hikmah University are all-encompassing.  The University has developed custom-built courses to specially package the student and deliver him to his world upon graduation as an agent of change. He takes charge of his environment and breaks the barriers of limitation confronting our nation and continent at large.
          </p>
        </div>

        <div className="info-card">
          <img src={learning} alt="Resources" />
          <h3>Resources</h3>
          <p>
            The library is the heart and lifeline of any citadel of learning. The library complex is an edifice with three floors, reputed to be one of the largest in Africa. The total floor area of the complex is 11,300m2
          </p>
        </div>

        <div className="info-card">
          <img src={aid} alt="Financial Aid" />
          <h3>Financial Aid</h3>
          <p>
          Al-Hikmah University offers international scholarships, fellowships, or grants to both local and international students. Apart from university-based scholarships, many other organizations, including foundations, trusts, and corporate bodies, give scholarships to international students.
          </p>
        </div>
      </div> <br /><br />
      <div className="card-container">
        <div className="info-card">
          <img src={alumini} alt="Comprehensive Education" />
          <h3>Active Alumni Network</h3>
          <p>
          The University has Alumni network with more than 20,000 engaged members in more than 50 countries, exclusive alumni platform and job opportunities, more than 15% Alumni are Entrepreneurs (Job Creators) and Graduates excel as Ivy League Postgraduate students
          </p>
        </div>

        <div className="info-card">
          <img src={moot} alt="Resources" />
          <h3>Campus</h3>
          <p>
            Al-Hikmah campus is an ultra-modern new generation campus. Her luscious lawns, beautifully planned gardens and architectural masterpiece buildings provide a unique, stimulating and empowering context for inspiring research and creative activities.
          </p>
        </div>

        <div className="info-card">
          <img src={award} alt="Financial Aid" />
          <h3>Global Rankings</h3>
          <p>
           Al-Hikmah University has had a rapid rise in nearly two decades of its existence. The webometric ranking named Al-Hikmah University the best Private University in Nigeria in its 2021 ranking and the second best university overall.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
