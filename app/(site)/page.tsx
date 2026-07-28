import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";



export default function Home() {
  return <main>
      <HeroSection />
  
{/* ── FEATURES SECTION ── */}
<section className="about-section">
  <div className="about-container">

    {/* Header */}
    <span className="about-eyebrow">Powerful Features</span>
    <h2 className="about-heading">Everything You Need to Stay on Track</h2>
    <p className="about-subheading">
      One app to track your vitals, monitor your body metrics, and never miss a dose again.
    </p>

    {/* Feature cards */}
    <div className="features-grid">

      {/* Card 1 — Body Metrics */}
      <div className="feature-card">
        <div className="feature-icon-wrap icon-blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <h3>Body Metrics</h3>
        <p>Track BMI, calories, and weight with visual progress charts and helpful insights at a glance.</p>
        <a href="#" className="feature-link">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      {/* Card 2 — Health Vitals */}
      <div className="feature-card">
        <div className="feature-icon-wrap icon-red">
          <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <h3>Health Vitals</h3>
        <p>Record and monitor blood pressure, blood sugar, and cholesterol levels all in one place.</p>
        <a href="#" className="feature-link">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      {/* Card 3 — Medicine Reminder */}
      <div className="feature-card">
        <div className="feature-icon-wrap icon-purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>
        <h3>Medicine Reminder</h3>
        <p>Set up medication schedules and get timely reminders you can rely on, every single day.</p>
        <a href="#" className="feature-link">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

    </div>

    {/* ── Dashboard overview row ── */}
    <div className="overview-row">

      {/* Left — copy */}
      <div>
        <span className="overview-label">Dashboard Overview</span>
        <h2 className="overview-heading">All Your Health Data,<br />All in One Place</h2>
        <p className="overview-desc">
          Get a complete overview of your health in seconds. Spot trends, track progress, and make informed decisions about your well-being.
        </p>
        <ul className="overview-checklist">
          {["Instant health overview", "Progress tracking", "Risk indicators", "Daily reminders"].map((item) => (
            <li key={item}>
              <span className="check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <a href="#" className="cta-button">
          Explore Dashboard
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      {/* Right — dashboard mockup */}
      <div className="overview-image">
        <div className="dashboard-mockup">

          {/* App header */}
          <div className="mockup-header">
            <div className="mockup-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="mockup-app-name">FitApex</span>
          </div>

          <p className="mockup-greeting">Good morning, Alex 👋</p>
          <p className="mockup-date">Friday, 23 May 2025</p>

          {/* Stats row */}
          <div className="mockup-stats">
            <div className="stat-chip">
              <span className="label">BMI</span>
              <span className="value">27.4</span>
              <span className="sub">Normal range</span>
            </div>
            <div className="stat-chip">
              <span className="label">Calories</span>
              <span className="value">1,360</span>
              <span className="sub">68% of goal</span>
            </div>
            <div className="stat-chip">
              <span className="label">Weight</span>
              <span className="value">72.4<span style={{ fontSize: 12, fontWeight: 400 }}>kg</span></span>
              <span className="sub">−1.3 kg/week</span>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mockup-row">
            <div className="mockup-mini-card">
              <span className="mini-card-label">Blood Pressure</span>
              <span className="bp-display">120 <span className="bp-unit">/ 80</span></span>
              <div className="bp-bar" />
            </div>
            <div className="mockup-mini-card">
              <span className="mini-card-label">Weight Trend</span>
              <span className="weight-number">72.4<span style={{ fontSize: 12, fontWeight: 400, color: '#64748b' }}> kg</span></span>
              <span className="weight-change">↓ −1.3 kg last week</span>
              <svg className="weight-trend" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="0,28 20,26 40,24 60,22 80,18 100,14 120,10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
{/* ========== END ABOUT SECTION ========== */}



  </main>;

}