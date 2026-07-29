export const metadata = {
  title: "Features — FitApex",
  description: "Explore everything FitApex offers: body metrics tracking, health vitals monitoring, medicine reminders, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <style>{`
        .features-hero { padding: 64px 24px 0; background: #f8faff; }
        .features-hero-container { max-width: 720px; margin: 0 auto; text-align: center; }
        .fd-row { margin-bottom: 96px; }
        .fd-row:last-child { margin-bottom: 0; }
        .med-mockup-list { display: flex; flex-direction: column; gap: 10px; }
        .med-mockup-row { display: flex; align-items: center; justify-content: space-between; background: #f8faff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 14px; }
        .med-mockup-name { font-size: 13px; font-weight: 600; color: #0f172a; display: flex; align-items: center; }
        .med-mockup-time { font-size: 12px; color: #94a3b8; }
        .med-mockup-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; margin-right: 8px; display: inline-block; flex-shrink: 0; }
        .med-mockup-dot.pending { background: #e2e8f0; }
      `}</style>

      {/* ── Page intro ── */}
      <section className="features-hero">
        <div className="features-hero-container">
          <span className="about-eyebrow">Product Features</span>
          <h1 className="about-heading">Every Tool You Need, Built Into One Dashboard</h1>
          <p className="about-subheading">
            FitApex brings together body metrics, health vitals, medication schedules,
            and personal insights so you never have to juggle multiple apps to stay
            on top of your health.
          </p>
        </div>
      </section>

      <section className="about-section" style={{ paddingTop: 0 }}>
        <div className="about-container">

          {/* ── Full 6-card grid ── */}
          <div className="features-grid">

            {/* 1 — Body Metrics */}
            <div className="feature-card">
              <div className="feature-icon-wrap icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Body Metrics</h3>
              <p>Track BMI, calories, and weight with visual progress charts and helpful insights at a glance.</p>
              <a href="#body-metrics" className="feature-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* 2 — Health Vitals */}
            <div className="feature-card">
              <div className="feature-icon-wrap icon-red">
                <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Health Vitals</h3>
              <p>Record and monitor blood pressure, blood sugar, and cholesterol levels all in one place.</p>
              <a href="#health-vitals" className="feature-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* 3 — Medicine Reminder */}
            <div className="feature-card">
              <div className="feature-icon-wrap icon-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <h3>Medicine Reminder</h3>
              <p>Set up medication schedules and get timely reminders you can rely on, every single day.</p>
              <a href="#medicine-reminder" className="feature-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* 4 — Progress & Insights */}
            <div className="feature-card">
              <div className="feature-icon-wrap icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" /><path d="M18.7 8.3l-5.2 5.2-3-3-4 4" />
                </svg>
              </div>
              <h3>Progress &amp; Insights</h3>
              <p>See your weekly and monthly trends at a glance, so you always know whether you're moving in the right direction.</p>
              <a href="/dashboard" className="feature-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* 5 — Privacy-First */}
            <div className="feature-card">
              <div className="feature-icon-wrap icon-cyan">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Privacy-First &amp; Local Storage</h3>
              <p>Your health data stays on your device by default. No hidden tracking, no third party sharing your health, your business.</p>
              <a href="/dashboard/settings" className="feature-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* 6 — Personalized Goals & Reminders */}
            <div className="feature-card">
              <div className="feature-icon-wrap icon-amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3>Personalized Goals &amp; Reminders</h3>
              <p>Set your own weight targets, calorie goals, and reminder lead times, FitApex adapts to how you want to work.</p>
              <a href="/dashboard/settings" className="feature-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

          </div>

          {/* ── Deep dive 1 — Body Metrics ── */}
          <div className="overview-row fd-row" id="body-metrics">
            <div>
              <span className="overview-label">Body Metrics</span>
              <h2 className="overview-heading">Understand Your Body,<br />One Metric at a Time</h2>
              <p className="overview-desc">
                Log your weight and calories daily, and let FitApex calculate your BMI
                automatically with a visual gauge that shows exactly where you stand.
              </p>
              <ul className="overview-checklist">
                {[
                  "Automatic BMI calculation with a visual gauge",
                  "Daily calorie logging against your goal",
                  "Weight trend charts over 7, 30, or 90 days",
                  "Custom target weight & calorie goals",
                ].map((item) => (
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
              <a href="/dashboard/body-metrics" className="cta-button">
                Explore Body Metrics
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="overview-image">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-logo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <span className="mockup-app-name">FitApex</span>
                </div>
                <p className="mockup-greeting">Body Metrics</p>
                <p className="mockup-date">BMI · Calories · Weight</p>
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
                <div className="mockup-mini-card">
                  <span className="mini-card-label">Weight Trend</span>
                  <span className="weight-number">72.4<span style={{ fontSize: 12, fontWeight: 400, color: "#64748b" }}> kg</span></span>
                  <span className="weight-change">↓ −1.3 kg last week</span>
                  <svg className="weight-trend" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="0,28 20,26 40,24 60,22 80,18 100,14 120,10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── Deep dive 2 — Health Vitals (image left, alternated) ── */}
          <div className="overview-row fd-row" id="health-vitals">
            <div className="overview-image">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-logo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <span className="mockup-app-name">FitApex</span>
                </div>
                <p className="mockup-greeting">Health Vitals</p>
                <p className="mockup-date">Blood Pressure · Sugar · Cholesterol</p>
                <div className="mockup-row" style={{ marginBottom: 10 }}>
                  <div className="mockup-mini-card">
                    <span className="mini-card-label">Blood Pressure</span>
                    <span className="bp-display">120 <span className="bp-unit">/ 80</span></span>
                    <div className="bp-bar" />
                  </div>
                  <div className="mockup-mini-card">
                    <span className="mini-card-label">Fasting Sugar</span>
                    <span className="bp-display">5.6 <span className="bp-unit">mmol/L</span></span>
                    <div className="bp-bar" />
                  </div>
                </div>
                <div className="mockup-stats" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                  <div className="stat-chip"><span className="label">LDL</span><span className="value">2.4</span><span className="sub">Optimal</span></div>
                  <div className="stat-chip"><span className="label">HDL</span><span className="value">1.3</span><span className="sub">Good</span></div>
                  <div className="stat-chip"><span className="label">Total</span><span className="value">4.9</span><span className="sub">Desirable</span></div>
                </div>
              </div>
            </div>

            <div>
              <span className="overview-label">Health Vitals</span>
              <h2 className="overview-heading">Stay Ahead of<br />Your Health Risks</h2>
              <p className="overview-desc">
                Keep tabs on the numbers that matter most. FitApex classifies every
                reading so you instantly know whether you're in a healthy range.
              </p>
              <ul className="overview-checklist">
                {[
                  "Blood pressure logging with risk classification",
                  "Fasting blood sugar tracking over time",
                  "Full cholesterol panel — LDL, HDL, and Total",
                  "Historical reading charts across 7, 30, or 90 days",
                ].map((item) => (
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
              <a href="/dashboard/health-vitals" className="cta-button">
                Explore Health Vitals
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Deep dive 3 — Medicine Reminder ── */}
          <div className="overview-row fd-row" id="medicine-reminder">
            <div>
              <span className="overview-label">Medicine Reminder</span>
              <h2 className="overview-heading">Never Miss<br />a Dose Again</h2>
              <p className="overview-desc">
                Set up your medication schedule once, and let FitApex handle the rest —
                grouped by time of day, with one tap to mark a dose as taken.
              </p>
              <ul className="overview-checklist">
                {[
                  "Daily schedule grouped by morning, afternoon, evening & night",
                  "One-tap mark-as-taken tracking",
                  "Missed dose alerts so nothing slips through",
                  "Weekly adherence overview at a glance",
                ].map((item) => (
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
              <a href="/dashboard/medicine-reminder" className="cta-button">
                Explore Medicine Reminder
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="overview-image">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-logo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <span className="mockup-app-name">FitApex</span>
                </div>
                <p className="mockup-greeting">Medicine Reminder</p>
                <p className="mockup-date">Daily schedule &amp; alerts</p>
                <div className="med-mockup-list">
                  <div className="med-mockup-row">
                    <span className="med-mockup-name"><span className="med-mockup-dot pending" />Vitamin D3 1000 IU</span>
                    <span className="med-mockup-time">08:00 AM</span>
                  </div>
                  <div className="med-mockup-row">
                    <span className="med-mockup-name"><span className="med-mockup-dot" />Metformin 500mg</span>
                    <span className="med-mockup-time">01:00 PM</span>
                  </div>
                  <div className="med-mockup-row">
                    <span className="med-mockup-name"><span className="med-mockup-dot pending" />Omega-3 Fish Oil</span>
                    <span className="med-mockup-time">06:00 PM</span>
                  </div>
                  <div className="med-mockup-row">
                    <span className="med-mockup-name"><span className="med-mockup-dot pending" />Atorvastatin 10mg</span>
                    <span className="med-mockup-time">09:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
