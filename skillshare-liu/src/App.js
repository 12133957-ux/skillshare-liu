import React, { useState } from 'react';

function App() {
  // Tracks which page the user is looking at
  const [activePage, setActivePage] = useState('home');

  // Contact form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* NAVBAR SECTION */}
      <header style={{
        backgroundColor: 'var(--primary-green)',
        color: 'var(--pure-white)',
        padding: '1rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '5px solid var(--accent-red)',
        flexWrap: 'wrap'
      }}>
        <div style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
          SkillShare <span style={{ color: 'var(--accent-red)' }}>LIU</span>
        </div>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: '10px 0 0 0', padding: 0, flexWrap: 'wrap' }}>
            <li><button onClick={() => setActivePage('home')} style={navButtonStyle(activePage === 'home')}>Home</button></li>
            <li><button onClick={() => setActivePage('tutors')} style={navButtonStyle(activePage === 'tutors')}>Find a Tutor</button></li>
            <li><button onClick={() => setActivePage('about')} style={navButtonStyle(activePage === 'about')}>About</button></li>
            <li><button onClick={() => setActivePage('contact')} style={navButtonStyle(activePage === 'contact')}>Contact</button></li>
          </ul>
        </nav>
      </header>

      {/* DYNAMIC CONTENT SECTION */}
      <main style={{ flex: 1, padding: '2rem 5%' }}>
        
        {/* PAGE 1: HOME */}
        {activePage === 'home' && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: 'var(--primary-green)', fontSize: '2.5rem', marginBottom: '1rem' }}>Master Your Courses with Peer Tutors</h1>
            <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Connecting Lebanese International University students together for ultimate academic collaboration and success.
            </p>
            <button onClick={() => setActivePage('tutors')} style={{
              backgroundColor: 'var(--accent-red)', color: '#fff', border: 'none', padding: '12px 30px', fontSize: '1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
            }}> Explore Available Tutors </button>
          </div>
        )}

        {/* PAGE 2: TUTORS (SERVICES/FEATURES) */}
        {activePage === 'tutors' && (
          <div>
            <h2 style={{ color: 'var(--primary-green)', marginBottom: '1.5rem', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>Available Peer Tutors</h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px'
            }}>
              <div style={cardStyle}>
                <h3 style={{ color: 'var(--primary-green)' }}>Ali Hussein</h3>
                <p><strong>Major:</strong> Computer Science</p>
                <p><strong>Expertise:</strong> Java & Web Programming</p>
                <span style={badgeStyle}>Rate: Free / Peer Help</span>
              </div>
              <div style={cardStyle}>
                <h3 style={{ color: 'var(--primary-green)' }}>Raya Al-Ahmad</h3>
                <p><strong>Major:</strong> Business Administration</p>
                <p><strong>Expertise:</strong> Accounting & Statistics</p>
                <span style={badgeStyle}>Rate: Free / Peer Help</span>
              </div>
              <div style={cardStyle}>
                <h3 style={{ color: 'var(--primary-green)' }}>Nour Mansour</h3>
                <p><strong>Major:</strong> Engineering</p>
                <p><strong>Expertise:</strong> Calculus & Physics</p>
                <span style={badgeStyle}>Rate: Free / Peer Help</span>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: ABOUT */}
        {activePage === 'about' && (
          <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>About SkillShare LIU</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              SkillShare LIU is an academic initiative aimed at bridging the gap between high-achieving seniors and students seeking guidance in tough courses.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Learning from a classmate who just completed the course provides insights, shared materials, and a comfortable stress-free environment to ask questions.
            </p>
          </div>
        )}

        {/* PAGE 4: CONTACT */}
        {activePage === 'contact' && (
          <div style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>Get in Touch</h2>
            {formSubmitted ? (
              <div style={{ backgroundColor: '#e8f5e9', color: 'var(--primary-green)', padding: '1rem', borderRadius: '5px', marginBottom: '1rem', fontWeight: 'bold' }}>
                Thank you, Malaki! Your request has been sent to the LIU Support Admin.
              </div>
            ) : null}
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name</label>
                <input type="text" required placeholder="Enter name" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>LIU Student ID</label>
                <input type="text" required placeholder="e.g., 12133957" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message / Requested Topic</label>
                <textarea required rows="4" placeholder="How can we help you?" style={inputStyle}></textarea>
              </div>
              <button type="submit" style={{
                backgroundColor: 'var(--primary-green)', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem'
              }}>Send Message</button>
            </form>
          </div>
        )}

      </main>

      {/* FOOTER SECTION */}
      <footer style={{
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '1.5rem',
        marginTop: 'auto',
        borderTop: '4px solid var(--accent-red)'
      }}>
        <p>&copy; 2026 SkillShare LIU - CSCI390 Project Phase 2</p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>Developed by Malaki Ramzi Alhakim (ID: 12133957)</p>
      </footer>
    </div>
  );
}

const navButtonStyle = (isActive) => ({
  background: isActive ? 'var(--pure-white)' : 'transparent',
  color: isActive ? 'var(--primary-green)' : 'var(--pure-white)',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '0.95rem',
  transition: '0.2s ease-in-out'
});

const cardStyle = {
  background: '#ffffff',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  borderLeft: '5px solid var(--accent-red)',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const badgeStyle = {
  backgroundColor: '#e8f5e9',
  color: 'var(--primary-green)',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  alignSelf: 'flex-start',
  marginTop: '5px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

export default App;