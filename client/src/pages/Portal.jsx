import React from 'react';

function Portal() {
  return (
    <div className="portal-page">
      <section style={{backgroundColor: '#2c3e50', color: 'white', padding: '5rem 0', textAlign: 'center'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Student Portal</h1>
          <p style={{fontSize: '1.2rem', opacity: 0.9}}>Access your academic information and university services</p>
        </div>
      </section>

      <section style={{padding: '4rem 0', backgroundColor: '#f8f9fa'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h2 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#2c3e50'}}>Quick Access</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <a href="https://ecampus.alhikmahuniversity.edu.ng/portal/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div style={{backgroundColor: 'white', padding: '3rem 2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.3s ease', cursor: 'pointer'}} onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{backgroundColor: '#e74c3c', color: 'white', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem'}}>🎓</div>
                <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>Student Portal</h3>
                <p style={{color: '#666', lineHeight: '1.6'}}>Access course materials, assignments, grades, and academic records</p>
              </div>
            </a>
            
            <a href="https://portal.alhikmah.edu.ng/students/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div style={{backgroundColor: 'white', padding: '3rem 2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.3s ease', cursor: 'pointer'}} onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{backgroundColor: '#3498db', color: 'white', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem'}}>📊</div>
                <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>Result Portal</h3>
                <p style={{color: '#666', lineHeight: '1.6'}}>Check your examination results and academic performance</p>
              </div>
            </a>
            
            <div style={{backgroundColor: 'white', padding: '3rem 2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center'}}>
              <div style={{backgroundColor: '#f39c12', color: 'white', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem'}}>💳</div>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>Payment Portal</h3>
              <p style={{color: '#666', lineHeight: '1.6'}}>Make fee payments and view payment history</p>
              <small style={{color: '#e74c3c', fontStyle: 'italic'}}>Coming Soon</small>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: '4rem 0'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <h2 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#2c3e50'}}>Student Services</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{backgroundColor: '#e8f5e8', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '2.5rem'}}>📚</div>
              <h4 style={{marginBottom: '1rem', color: '#2c3e50'}}>Library Services</h4>
              <p style={{color: '#666', fontSize: '0.9rem'}}>Access digital resources, book reservations, and study spaces</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{backgroundColor: '#e8f4fd', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '2.5rem'}}>🏥</div>
              <h4 style={{marginBottom: '1rem', color: '#2c3e50'}}>Health Services</h4>
              <p style={{color: '#666', fontSize: '0.9rem'}}>Medical appointments and health insurance information</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{backgroundColor: '#fdf2e8', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '2.5rem'}}>🏠</div>
              <h4 style={{marginBottom: '1rem', color: '#2c3e50'}}>Accommodation</h4>
              <p style={{color: '#666', fontSize: '0.9rem'}}>Hostel allocation and accommodation services</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{backgroundColor: '#f8e8f8', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '2.5rem'}}>🎯</div>
              <h4 style={{marginBottom: '1rem', color: '#2c3e50'}}>Career Services</h4>
              <p style={{color: '#666', fontSize: '0.9rem'}}>Job placement, career counseling, and alumni network</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portal
