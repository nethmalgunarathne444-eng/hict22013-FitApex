"use client";

const demoData = {
  userName: "Alex",
  bmi: 27.4,
  bmiStatus: "Normal range",
  caloriesToday: 1360,
  calorieGoal: 2000,
  weight: 72.4,
  weightUnit: "kg",
  weightChange: -1.3,
  bpSystolic: 120,
  bpDiastolic: 80,
  bpStatus: "Normal",
  bloodSugar: 5.6,
  bloodSugarStatus: "Normal",
  medicinesDueToday: 2,
  nextMedicineTime: "2:00 PM",
  upcomingMedicines: [
    { name: "Vitamin D3 1000 IU", time: "08:00 AM", taken: false },
    { name: "Metformin 500mg", time: "01:00 PM", taken: true },
    { name: "Omega-3 Fish Oil", time: "06:00 PM", taken: false },
    { name: "Atorvastatin 10mg", time: "09:00 PM", taken: false },
  ],
};

export default function DashboardOverview() {
  const data = demoData;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  const caloriePercent = Math.min(Math.round((data.caloriesToday / data.calorieGoal) * 100), 100);
  const weightChangeLabel = `${data.weightChange > 0 ? "+" : ""}${data.weightChange} ${data.weightUnit} vs last week`;

  return (
    <>
      <style>{`
        .db { font-family: 'Inter', sans-serif; }
        .db-header { margin-bottom: 28px; }
        .db-greeting { font-size: 22px; font-weight: 700; color: #0F172A; margin: 0 0 4px; }
        .db-date { font-size: 13px; color: #94A3B8; margin: 0; }

        .db-top-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
        @media (max-width: 1100px) { .db-top-row { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px)  { .db-top-row { grid-template-columns: 1fr; } }

        .stat-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 20px 20px 16px; display: flex; flex-direction: column; gap: 6px; position: relative; }
        .stat-card-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; }
        .stat-card-icon { position: absolute; top: 18px; right: 18px; width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; }
        .stat-card-value { font-size: 32px; font-weight: 700; color: #0F172A; line-height: 1; }
        .stat-card-sub { font-size: 12px; color: #64748B; }
        .stat-card-status-green { font-size: 12px; font-weight: 600; color: #22C55E; }
        .stat-card-link { font-size: 13px; font-weight: 600; color: #3B82F6; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; transition: gap 0.15s; }
        .stat-card-link:hover { gap: 8px; }

        .db-mid-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
        @media (max-width: 860px) { .db-mid-row { grid-template-columns: 1fr; } }

        .section-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px 22px 18px; }
        .section-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .section-icon { width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; flex-shrink: 0; }
        .icon-blue { background: #EFF6FF; color: #3B82F6; }
        .icon-purple { background: #F5F3FF; color: #7C3AED; }
        .icon-red { background: #FFF1F2; color: #EF4444; }
        .section-card-title { font-size: 15px; font-weight: 700; color: #0F172A; margin: 0 0 2px; }
        .section-card-sub { font-size: 12px; color: #94A3B8; margin: 0; }

        .bmi-value { font-size: 36px; font-weight: 700; color: #2563EB; line-height: 1; }
        .bmi-label { font-size: 12px; color: #22C55E; font-weight: 600; margin: 4px 0 14px; }
        .bmi-gauge { height: 8px; border-radius: 4px; background: linear-gradient(to right, #3B82F6 0%, #22C55E 35%, #F59E0B 65%, #EF4444 100%); margin-bottom: 6px; }
        .gauge-labels { display: flex; justify-content: space-between; font-size: 10px; color: #94A3B8; margin-bottom: 16px; }
        .gauge-labels span.active { color: #22C55E; font-weight: 700; }

        .tab-row { display: flex; gap: 4px; margin-bottom: 16px; }
        .tab-btn { padding: 5px 14px; border-radius: 8px; border: 1px solid #E2E8F0; font-size: 13px; font-weight: 500; color: #64748B; background: #fff; cursor: pointer; }
        .tab-btn.active { background: #EFF6FF; border-color: #BFDBFE; color: #2563EB; font-weight: 600; }

        .med-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; }
        .med-row { display: flex; align-items: center; justify-content: space-between; }
        .med-dot { width: 8px; height: 8px; border-radius: 50%; background: #E2E8F0; flex-shrink: 0; }
        .med-dot.taken { background: #22C55E; }
        .med-name { font-size: 14px; color: #334155; font-weight: 500; margin-left: 10px; flex: 1; }
        .med-time { font-size: 13px; color: #94A3B8; }

        .section-footer-link { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #3B82F6; text-decoration: none; border-top: 1px solid #F1F5F9; padding-top: 14px; margin-top: 4px; transition: gap 0.15s; }
        .section-footer-link:hover { gap: 10px; }

        .vitals-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: #F1F5F9; border-radius: 10px; overflow: hidden; margin-bottom: 18px; }
        @media (max-width: 640px) { .vitals-grid { grid-template-columns: 1fr; } }
        .vital-cell { background: #fff; padding: 16px 18px; }
        .vital-cell-label { font-size: 10px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
        .vital-big { font-size: 26px; font-weight: 700; color: #0F172A; }
        .vital-unit { font-size: 12px; color: #94A3B8; margin-left: 4px; }
        .vital-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 600; border-radius: 100px; padding: 3px 8px; margin-top: 6px; }
        .badge-green { background: #F0FDF4; color: #22C55E; }
      `}</style>

      <div className="db">
        <div className="db-header">
          <h1 className="db-greeting">Good morning, {data.userName} 👋</h1>
          <p className="db-date">{today}</p>
        </div>

        <div className="db-top-row">
          <div className="stat-card">
            <span className="stat-card-label">BMI</span>
            <div className="stat-card-icon icon-blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <div className="stat-card-value">{data.bmi}</div>
            <span className="stat-card-status-green">{data.bmiStatus}</span>
            <a href="/dashboard/body-metrics" className="stat-card-link">View history →</a>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">Calories Today</span>
            <div className="stat-card-icon" style={{background:"#F0FDF4"}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <div className="stat-card-value">{data.caloriesToday.toLocaleString()}</div>
            <span className="stat-card-sub">{caloriePercent}% of {data.calorieGoal} kcal goal</span>
            <a href="/dashboard/body-metrics" className="stat-card-link">Log now →</a>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">Weight</span>
            <div className="stat-card-icon" style={{background:"#F0F9FF"}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div className="stat-card-value">{data.weight} {data.weightUnit}</div>
            <span className="stat-card-status-green">{weightChangeLabel}</span>
            <a href="/dashboard/body-metrics" className="stat-card-link">Log now →</a>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">Medicines Due</span>
            <div className="stat-card-icon" style={{background:"#FFFBEB"}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            </div>
            <div className="stat-card-value">{data.medicinesDueToday}</div>
            <span className="stat-card-sub">Next at {data.nextMedicineTime}</span>
            <a href="/dashboard/medicine-reminder" className="stat-card-link">View today →</a>
          </div>
        </div>

        <div className="db-mid-row">
          <div className="section-card">
            <div className="section-card-header">
              <div className="section-icon icon-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <p className="section-card-title">Body Metrics</p>
                <p className="section-card-sub">BMI · Calories · Weight</p>
              </div>
            </div>
            <div className="tab-row">
              {["BMI", "Calories", "Weight"].map((t) => (
                <button key={t} className={`tab-btn${t === "BMI" ? " active" : ""}`}>{t}</button>
              ))}
            </div>
            <div className="bmi-value">{data.bmi} <span style={{fontSize:14,color:"#94A3B8",fontWeight:500}}>BMI</span></div>
            <div className="bmi-label">{data.bmiStatus}</div>
            <div className="bmi-gauge" />
            <div className="gauge-labels">
              <span>Underweight<br/>&lt; 18.5</span>
              <span className="active">Normal<br/>18.5 – 24.9</span>
              <span>Overweight<br/>25.0 – 29.9</span>
              <span>Obese<br/>≥ 30.0</span>
            </div>
            <a href="/dashboard/body-metrics" className="section-footer-link">Open Body Metrics →</a>
          </div>

          <div className="section-card">
            <div className="section-card-header">
              <div className="section-icon icon-purple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <div>
                <p className="section-card-title">Medicine Reminder</p>
                <p className="section-card-sub">Daily schedule &amp; alerts</p>
              </div>
            </div>
            <div className="med-list">
              {data.upcomingMedicines.map((med, i) => (
                <div className="med-row" key={i}>
                  <div className={`med-dot${med.taken ? " taken" : ""}`} />
                  <span className="med-name">{med.name}</span>
                  <span className="med-time">{med.time}</span>
                </div>
              ))}
            </div>
            <a href="/dashboard/medicine-reminder" className="section-footer-link">Open Medicine Reminder →</a>
          </div>
        </div>

        <div className="section-card">
          <div className="section-card-header">
            <div className="section-icon icon-red">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div>
              <p className="section-card-title">Health Vitals</p>
              <p className="section-card-sub">Blood Pressure · Sugar · Cholesterol</p>
            </div>
          </div>
          <div className="tab-row">
            {["BP", "Sugar", "Cholesterol"].map((t, i) => (
              <button key={t} className={`tab-btn${i === 0 ? " active" : ""}`}>{t}</button>
            ))}
          </div>
          <div className="vitals-grid">
            <div className="vital-cell">
              <div className="vital-cell-label">Blood Pressure</div>
              <div className="vital-big">{data.bpSystolic} / {data.bpDiastolic}<span className="vital-unit">mmHg</span></div>
              <div className="vital-badge badge-green">☀ {data.bpStatus}</div>
            </div>
            <div className="vital-cell">
              <div className="vital-cell-label">Blood Sugar (Fasting)</div>
              <div className="vital-big">{data.bloodSugar}<span className="vital-unit">mmol/L</span></div>
              <div className="vital-badge badge-green">☀ {data.bloodSugarStatus}</div>
            </div>
            <div className="vital-cell">
              <div className="vital-cell-label">Cholesterol</div>
              <div className="vital-big" style={{color:"#CBD5E1",fontSize:18}}>—</div>
              <div className="vital-badge" style={{background:"#F8FAFF",color:"#94A3B8"}}>No reading</div>
            </div>
          </div>
          <a href="/dashboard/health-vitals" className="section-footer-link">Open Health Vitals →</a>
        </div>
      </div>
    </>
  );
}