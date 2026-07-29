import React from "react";


// ── Inline SVG: Fitness Boy Illustration ─────────────────────
const FitnessBoy = () => (
  <svg
    viewBox="0 0 420 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Fitness boy illustration"
    role="img"
    style={{ width: "100%", maxWidth: 420, height: "auto" }}
  >
    {/* ── Background glow circle ── */}
    <circle cx="210" cy="260" r="200" fill="url(#bgGlow)" opacity="0.18" />

    {/* ── Floating stat cards ── */}
    {/* BMI card */}
    <rect x="10" y="60" width="120" height="56" rx="14" fill="white" filter="url(#cardShadow)" />
    <text x="24" y="82" fontFamily="Inter,sans-serif" fontSize="10" fill="#6B7280" fontWeight="500">BMI</text>
    <text x="24" y="103" fontFamily="Inter,sans-serif" fontSize="18" fill="#111827" fontWeight="700">27.4</text>
    <text x="72" y="103" fontFamily="Inter,sans-serif" fontSize="9" fill="#10B981" fontWeight="600">Normal</text>

    {/* Calories card */}
    <rect x="290" y="40" width="126" height="56" rx="14" fill="white" filter="url(#cardShadow)" />
    <text x="304" y="62" fontFamily="Inter,sans-serif" fontSize="10" fill="#6B7280" fontWeight="500">CALORIES TODAY</text>
    <text x="304" y="83" fontFamily="Inter,sans-serif" fontSize="18" fill="#111827" fontWeight="700">1,360</text>
    <text x="304" y="96" fontFamily="Inter,sans-serif" fontSize="9" fill="#6B7280">68% of 2000 kcal</text>

    {/* Weight card */}
    <rect x="10" y="390" width="124" height="56" rx="14" fill="white" filter="url(#cardShadow)" />
    <text x="24" y="412" fontFamily="Inter,sans-serif" fontSize="10" fill="#6B7280" fontWeight="500">WEIGHT</text>
    <text x="24" y="433" fontFamily="Inter,sans-serif" fontSize="18" fill="#111827" fontWeight="700">72.4 kg</text>
    <text x="24" y="446" fontFamily="Inter,sans-serif" fontSize="9" fill="#10B981" fontWeight="600">↓ 1.3 kg vs last week</text>

    {/* BP card */}
    <rect x="286" y="380" width="130" height="56" rx="14" fill="white" filter="url(#cardShadow)" />
    <text x="300" y="402" fontFamily="Inter,sans-serif" fontSize="10" fill="#6B7280" fontWeight="500">BLOOD PRESSURE</text>
    <text x="300" y="423" fontFamily="Inter,sans-serif" fontSize="18" fill="#111827" fontWeight="700">120/80</text>
    <text x="300" y="436" fontFamily="Inter,sans-serif" fontSize="9" fill="#10B981" fontWeight="600">Normal</text>

    {/* ── Boy body ── */}
    {/* Sneakers */}
    <ellipse cx="175" cy="492" rx="28" ry="10" fill="#1E3A8A" />
    <ellipse cx="245" cy="492" rx="28" ry="10" fill="#1E3A8A" />
    <rect x="150" y="470" width="50" height="26" rx="8" fill="#2563EB" />
    <rect x="222" y="470" width="50" height="26" rx="8" fill="#2563EB" />
    <rect x="152" y="470" width="46" height="10" rx="4" fill="white" opacity="0.3" />
    <rect x="224" y="470" width="46" height="10" rx="4" fill="white" opacity="0.3" />

    {/* Legs */}
    <rect x="164" y="370" width="42" height="108" rx="18" fill="#1D4ED8" />
    <rect x="218" y="370" width="42" height="108" rx="18" fill="#1D4ED8" />
    {/* Leg highlight */}
    <rect x="170" y="374" width="14" height="60" rx="7" fill="white" opacity="0.12" />
    <rect x="224" y="374" width="14" height="60" rx="7" fill="white" opacity="0.12" />

    {/* Shorts */}
    <rect x="152" y="330" width="120" height="58" rx="16" fill="#1E40AF" />
    <rect x="152" y="330" width="120" height="20" rx="10" fill="#1D4ED8" />
    <line x1="212" y1="330" x2="212" y2="388" stroke="#1E3A8A" strokeWidth="2" />

    {/* Torso / jersey */}
    <rect x="155" y="210" width="114" height="130" rx="24" fill="#2563EB" />
    {/* Jersey stripe */}
    <rect x="195" y="210" width="34" height="130" rx="6" fill="#3B82F6" opacity="0.4" />
    {/* Jersey collar */}
    <path d="M190 210 Q212 238 234 210" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
    {/* Number on jersey */}
    <text x="198" y="278" fontFamily="Inter,sans-serif" fontSize="28" fill="white" fontWeight="800" opacity="0.25">27</text>

    {/* Left arm */}
    <rect x="106" y="218" width="58" height="28" rx="14" fill="#2563EB" />
    <ellipse cx="100" cy="232" rx="22" ry="22" fill="#FBBF24" /> {/* fist/glove */}
    <ellipse cx="100" cy="232" rx="18" ry="18" fill="#F59E0B" />
    <path d="M88 228 Q100 220 112 228" fill="none" stroke="#D97706" strokeWidth="2" />

    {/* Right arm */}
    <rect x="260" y="218" width="58" height="28" rx="14" fill="#2563EB" />
    <ellipse cx="324" cy="232" rx="22" ry="22" fill="#FBBF24" />
    <ellipse cx="324" cy="232" rx="18" ry="18" fill="#F59E0B" />
    <path d="M312 228 Q324 220 336 228" fill="none" stroke="#D97706" strokeWidth="2" />

    {/* Neck */}
    <rect x="198" y="188" width="28" height="30" rx="10" fill="#FDE68A" />

    {/* Head */}
    <ellipse cx="212" cy="162" rx="54" ry="56" fill="#FDE68A" />
    <ellipse cx="212" cy="162" rx="54" ry="56" fill="url(#skinGrad)" />

    {/* Hair */}
    <ellipse cx="212" cy="118" rx="54" ry="30" fill="#1C1917" />
    <ellipse cx="165" cy="138" rx="16" ry="22" fill="#1C1917" />
    <ellipse cx="258" cy="138" rx="16" ry="22" fill="#1C1917" />
    <ellipse cx="212" cy="112" rx="48" ry="18" fill="#292524" />

    {/* Ears */}
    <ellipse cx="158" cy="162" rx="11" ry="14" fill="#FCD34D" />
    <ellipse cx="266" cy="162" rx="11" ry="14" fill="#FCD34D" />

    {/* Eyes */}
    <ellipse cx="192" cy="158" rx="10" ry="11" fill="white" />
    <ellipse cx="232" cy="158" rx="10" ry="11" fill="white" />
    <ellipse cx="194" cy="160" rx="6" ry="7" fill="#1C1917" />
    <ellipse cx="234" cy="160" rx="6" ry="7" fill="#1C1917" />
    <ellipse cx="196" cy="158" rx="2.5" ry="2.5" fill="white" />
    <ellipse cx="236" cy="158" rx="2.5" ry="2.5" fill="white" />

    {/* Eyebrows */}
    <path d="M182 146 Q192 140 202 146" fill="none" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
    <path d="M222 146 Q232 140 242 146" fill="none" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />

    {/* Smile */}
    <path d="M196 178 Q212 192 228 178" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />

    {/* Cheeks */}
    <ellipse cx="182" cy="174" rx="10" ry="7" fill="#FCA5A5" opacity="0.5" />
    <ellipse cx="242" cy="174" rx="10" ry="7" fill="#FCA5A5" opacity="0.5" />

    {/* Sweatband */}
    <rect x="160" y="126" width="104" height="16" rx="8" fill="#EF4444" />
    <rect x="200" y="126" width="24" height="16" rx="4" fill="#DC2626" />

    {/* Dumbbell left */}
    <rect x="52" y="224" width="44" height="14" rx="7" fill="#374151" />
    <rect x="44" y="216" width="16" height="30" rx="6" fill="#4B5563" />
    <rect x="84" y="216" width="16" height="30" rx="6" fill="#4B5563" />

    {/* Dumbbell right */}
    <rect x="328" y="224" width="44" height="14" rx="7" fill="#374151" />
    <rect x="320" y="216" width="16" height="30" rx="6" fill="#4B5563" />
    <rect x="360" y="216" width="16" height="30" rx="6" fill="#4B5563" />

    {/* Motion lines */}
    <line x1="36" y1="200" x2="54" y2="208" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    <line x1="28" y1="218" x2="48" y2="218" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    <line x1="36" y1="236" x2="54" y2="228" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    <line x1="384" y1="200" x2="366" y2="208" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    <line x1="392" y1="218" x2="372" y2="218" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    <line x1="384" y1="236" x2="366" y2="228" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

    {/* ── Defs ── */}
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.25" />
      </linearGradient>
      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00000018" />
      </filter>
    </defs>
  </svg>
);

// ── Trust badges ─────────────────────────────────────────────
const badges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: "Local Data Storage",
    sub: "Your data stays on your device",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Privacy First",
    sub: "No data sharing or tracking",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    label: "Track Progress",
    sub: "Visualize and Improve",
  },
];

// ── Component ────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <>
      <style>{`
        /* ── Reset & base ─────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Nav ──────────────────────────────────────────── */
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 72px;
          background: #fff;
          border-bottom: 1px solid #F3F4F6;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          text-decoration: none;
        }
        .nav-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #2563EB, #1D4ED8);
          border-radius: 10px;
          display: grid;
          place-items: center;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          transition: color 0.15s;
        }
        .nav-links a:hover { color: #2563EB; }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn-ghost {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .btn-ghost:hover { background: #F3F4F6; }
        .btn-primary {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #2563EB, #1D4ED8);
          border: none;
          cursor: pointer;
          padding: 10px 22px;
          border-radius: 10px;
          box-shadow: 0 4px 14px rgba(37,99,235,0.35);
          transition: transform 0.15s, box-shadow 0.15s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37,99,235,0.42);
        }

        /* ── Hero wrapper ─────────────────────────────────── */
        .hero {
          min-height: calc(100vh - 72px);
          background: #fff;
          display: flex;
          align-items: center;
          padding: 72px 48px 80px;
          gap: 64px;
          overflow: hidden;
          position: relative;
        }
        /* subtle background blob */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 70% 50%, rgba(37,99,235,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 20%, rgba(59,130,246,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── Left column ──────────────────────────────────── */
        .hero-left {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 1;
        }

        /* Eyebrow pill */
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          color: #2563EB;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 28px;
        }
        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563EB;
        }

        /* Main headline */
        .hero-headline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 10px;
        }
        /* "Every Day." in brand blue */
        .hero-headline-accent {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #2563EB;
          display: block;
          margin-bottom: 28px;
        }

        /* Sub-copy */
        .hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: #4B5563;
          max-width: 440px;
          margin-bottom: 40px;
        }

        /* CTA row */
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 52px;
          flex-wrap: wrap;
        }
        .btn-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #374151;
          background: #fff;
          border: 1.5px solid #E5E7EB;
          cursor: pointer;
          padding: 10px 22px;
          border-radius: 10px;
          transition: border-color 0.15s, background 0.15s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover { background: #F9FAFB; border-color: #D1D5DB; }
        .btn-play-icon {
          width: 26px;
          height: 26px;
          background: #EFF6FF;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }

        /* Trust badges */
        .trust-badges {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .badge {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .badge-icon {
          width: 36px;
          height: 36px;
          background: #EFF6FF;
          border-radius: 9px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .badge-label {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #111827;
          line-height: 1.3;
        }
        .badge-sub {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #6B7280;
          line-height: 1.4;
        }

        /* ── Right column ─────────────────────────────────── */
        .hero-right {
          flex: 1;
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero-illustration-wrap {
          width: 100%;
          max-width: 480px;
          position: relative;
          /* subtle float animation */
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        /* ── Responsive ───────────────────────────────────── */
        @media (max-width: 900px) {
          .nav { padding: 0 24px; }
          .nav-links { display: none; }
          .hero {
            flex-direction: column;
            padding: 48px 24px 64px;
            gap: 48px;
            text-align: center;
          }
          .eyebrow { margin: 0 auto 28px; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-ctas { justify-content: center; }
          .trust-badges { justify-content: center; }
          .hero-right { width: 100%; }
        }
        @media (max-width: 480px) {
          .hero { padding: 36px 16px 56px; }
          .trust-badges { gap: 16px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

{/* <Navbar /> */}

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="hero">
        {/* Left */}
        <div className="hero-left">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Your Health, Your Apex
          </span>

          <h1 className="hero-headline">
            Track. Understand.
            <br />
            Improve.
          </h1>
          <span className="hero-headline-accent">Every Day.</span>

          <p className="hero-sub">
            FitApex helps you track body metrics, health vitals, and
            medications all in one clean, easy to use dashboard.
            Stay consistent, spot trends, and take control of your health.
          </p>

          <div className="hero-ctas">
            <a href="#" className="btn-primary">Get Started Free →</a>
            <a href="dashboard" className="btn-secondary">
              <span className="btn-play-icon">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="#2563EB">
                  <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                </svg>
              </span>
              View Dashboard
            </a>
          </div>

          <div className="trust-badges">
            {badges.map((b) => (
              <div className="badge" key={b.label}>
                <div className="badge-icon">{b.icon}</div>
                <div>
                  <div className="badge-label">{b.label}</div>
                  <div className="badge-sub">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Fitness Boy SVG */}
        <div className="hero-right">
          <div className="hero-illustration-wrap">
            <FitnessBoy />
          </div>
        </div>
      </section>
    </>
  );
}