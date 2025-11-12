import "./adminhero.css";

function AdminHero() {
  return (
    <div className="tuition-financial-aid-section">
      <h1>Tuition & Financial Aid</h1>
      <p>
        Al-Hikmah University is committed to providing accessible and affordable education. We offer a variety of financial aid options to support our students in achieving their academic goals.
      </p>

      <section className="financial-aid-overview">
        <h2>Financial Aid Overview</h2>
        <p>
          Our financial aid programs include scholarships, grants, and work-study opportunities designed to help students manage the cost of their education.
        </p>
      </section>

      <section className="undergraduate-aid">
        <h2>Undergraduate Financial Aid</h2>
        <p>
          Undergraduate students may qualify for need-based aid, merit scholarships, and other funding opportunities. We encourage all eligible students to apply early.
        </p>
        <ul>
          <li>Need-based scholarships for low-income families</li>
          <li>Merit-based scholarships for academic excellence</li>
          <li>Application deadlines: Early application recommended</li>
        </ul>
      </section>

      <section className="undergraduate-tuition">
        <h2>Undergraduate Tuition</h2>
        <p>For the 2024/2025 academic year, tuition fees are as follows:</p>
        <ul>
          <li>Tuition: ₦720,290</li>
          <li>Total Cost (including accommodation and fees): ₦200,500</li>
          <li>Flexible payment plans available</li>
        </ul>
      </section>

      <section className="graduate-aid">
        <h2>Graduate Financial Aid</h2>
        <p>
          Graduate students have access to fellowships, assistantships, and program-specific scholarships.
        </p>
        <ul>
          <li>Fellowships and assistantships available</li>
          <li>Program-specific scholarships</li>
          <li>Contact the Graduate Office for details</li>
        </ul>
      </section>

      <section className="graduate-tuition">
        <h2>Graduate Tuition</h2>
        <p>Tuition fees vary by program:</p>
        <ul>
          <li>Humanities and Social Sciences: ₦720,290</li>
          <li>Professional Schools (Law, Business): ₦1,000,000 – ₦2,000,000</li>
        </ul>
      </section>

      <section className="contact-info">
        <p>
          <strong>Questions?</strong> Contact the Financial Aid Office at <a href="mailto:finaid@alhikmahuniversity.edu.ng">finaid@alhikmahuniversity.edu.ng</a> or call +234 706 946 0421.
        </p>
      </section>

      <section className="apply-now-section">
        <a href="https://ecampus.alhikmahuniversity.edu.ng/admissions" target="_blank" rel="noopener noreferrer">
          <button className="apply-now-btn">Apply Now</button>
        </a>
      </section>
    </div>
  );
}

export default AdminHero;
