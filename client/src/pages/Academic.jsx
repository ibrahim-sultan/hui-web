import React from 'react';
import AcadHero from '../components/acadhero/AcadHero';
import About from '../components/about/About';
import Faculty from '../components/faculty/Faculty';

function Academic() {
  return (
    <div className="academic-page" style={{ marginTop: 0 }}>
      <AcadHero />
      <About />
      
      <section className="academic-programs" style={{padding: '4rem 0', backgroundColor: '#f8f9fa'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h2 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#2c3e50'}}>Academic Programs</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
            <div style={{backgroundColor: '#2c3e50', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#ffffff', marginBottom: '1rem'}}>Undergraduate Programs</h3>
              <p style={{marginBottom: '1.5rem', lineHeight: '1.6', color: '#ffffff'}}>Bachelor's degrees across multiple faculties including Arts, Sciences, Law, and Management Sciences.</p>
              <ul style={{listStyle: 'none', padding: 0, color: '#ffffff'}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ 4-year degree programs</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ Industry-relevant curriculum</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ Expert faculty guidance</li>
                <li style={{padding: '0.5rem 0'}}>✓ Modern learning facilities</li>
              </ul>
            </div>
            
            <div style={{backgroundColor: '#2c3e50', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#ffffff', marginBottom: '1rem'}}>Postgraduate Programs</h3>
              <p style={{marginBottom: '1.5rem', lineHeight: '1.6', color: '#ffffff'}}>Master's and PhD programs designed for advanced learning and research.</p>
              <ul style={{listStyle: 'none', padding: 0, color: '#ffffff'}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ Research-focused programs</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ International standards</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ Flexible study options</li>
                <li style={{padding: '0.5rem 0'}}>✓ Scholarly publications</li>
              </ul>
            </div>
            
            <div style={{backgroundColor: '#2c3e50', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#ffffff', marginBottom: '1rem'}}>Professional Development</h3>
              <p style={{marginBottom: '1.5rem', lineHeight: '1.6', color: '#ffffff'}}>Continuous education and certification programs for working professionals.</p>
              <ul style={{listStyle: 'none', padding: 0, color: '#ffffff'}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ Weekend classes</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ Online learning options</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>✓ Industry certifications</li>
                <li style={{padding: '0.5rem 0'}}>✓ Career advancement focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Faculty />
    </div>
  );
}

export default Academic
