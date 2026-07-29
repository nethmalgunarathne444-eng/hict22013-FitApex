"use client";

import { useState } from "react";

const demoMedicines = [
  { id: 1, name: "Vitamin D3 1000 IU", dosage: "1000 IU", frequency: "Daily", time: "08:00 AM", taken: false },
  { id: 2, name: "Metformin 500mg",    dosage: "500 mg",  frequency: "Daily", time: "01:00 PM", taken: true },
  { id: 3, name: "Omega-3 Fish Oil",   dosage: "1 capsule", frequency: "Daily", time: "06:00 PM", taken: false },
  { id: 4, name: "Atorvastatin 10mg",  dosage: "10 mg",   frequency: "Daily", time: "09:00 PM", taken: false },
];

export default function MedicineReminderPage() {
  const [showForm, setShowForm] = useState(false);
  const [medicines, setMedicines] = useState(demoMedicines);

  const toggleMedicineTaken = (id) => {
    setMedicines((prev) =>
      prev.map((medicine) =>
        medicine.id === id ? { ...medicine, taken: !medicine.taken } : medicine
      )
    );
  };

  const groupFor = (time) => {
    const h = parseInt(time);
    const isPM = time.includes("PM");
    const hour24 = isPM && h !== 12 ? h + 12 : h;
    if (hour24 >= 6 && hour24 < 12) return "Morning";
    if (hour24 >= 12 && hour24 < 17) return "Afternoon";
    if (hour24 >= 17 && hour24 < 21) return "Evening";
    return "Night";
  };
  

  const groups = ["Morning", "Afternoon", "Evening", "Night"].map((g) => ({
    group: g,
    items: medicines.filter((m) => groupFor(m.time) === g),
  }));

  return (
    <>
      <style>{`
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; font-family: 'Inter', sans-serif; }
        .page-title { font-size: 22px; font-weight: 700; color: #0F172A; margin: 0 0 4px; }
        .page-sub   { font-size: 13px; color: #94A3B8; margin: 0; }
        .add-btn { padding: 10px 20px; background: #7C3AED; color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; font-family: 'Inter', sans-serif; }
        .add-btn:hover { background: #6D28D9; }

        .med-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
        @media (max-width: 860px) { .med-grid { grid-template-columns: 1fr; } }

        .med-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px; font-family: 'Inter', sans-serif; }
        .med-card-title { font-size: 15px; font-weight: 700; color: #0F172A; margin-bottom: 16px; }

        .group-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; margin: 16px 0 8px; }
        .group-label:first-child { margin-top: 0; }

        .med-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #F8FAFF; }
        .med-check { width: 20px; height: 20px; border-radius: 6px; border: 2px solid #E2E8F0; display: grid; place-items: center; cursor: pointer; flex-shrink: 0; }
        .med-check.taken { background: #22C55E; border-color: #22C55E; }
        .med-info { flex: 1; }
        .med-name { font-size: 14px; font-weight: 500; color: #334155; }
        .med-dosage { font-size: 12px; color: #94A3B8; }
        .med-time-badge { font-size: 12px; font-weight: 500; color: #64748B; background: #F8FAFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 3px 10px; }

        .form-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.4); z-index: 100; display: flex; align-items: center; justify-content: center; }
        .form-modal { background: #fff; border-radius: 20px; padding: 28px; width: 100%; max-width: 480px; box-shadow: 0 20px 60px rgba(15,23,42,0.15); font-family: 'Inter', sans-serif; }
        .form-title { font-size: 17px; font-weight: 700; color: #0F172A; margin: 0 0 20px; }
        .form-group { margin-bottom: 14px; }
        .form-label { font-size: 12px; font-weight: 600; color: #64748B; margin-bottom: 6px; display: block; }
        .form-input { width: 100%; padding: 10px 14px; border: 1px solid #E2E8F0; border-radius: 10px; font-family: 'Inter', sans-serif; font-size: 14px; color: #0F172A; outline: none; box-sizing: border-box; }
        .form-input:focus { border-color: #7C3AED; }
        .form-row { display: flex; gap: 12px; }
        .form-actions { display: flex; gap: 10px; margin-top: 20px; }
        .form-save { flex: 1; padding: 11px; background: #7C3AED; color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; }
        .form-cancel { flex: 1; padding: 11px; background: #fff; color: #64748B; border: 1px solid #E2E8F0; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; }

        .active-list { display: flex; flex-direction: column; gap: 10px; }
        .active-card { background: #F8FAFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; }
        .active-name { font-size: 14px; font-weight: 600; color: #0F172A; }
        .active-meta { font-size: 12px; color: #94A3B8; margin-top: 2px; }
        .active-actions { display: flex; gap: 8px; }
        .icon-btn { border: none; background: none; cursor: pointer; color: #94A3B8; padding: 4px; border-radius: 6px; }
        .icon-btn:hover { color: #0F172A; background: #E2E8F0; }
        .icon-btn.del:hover { color: #EF4444; background: #FFF1F2; }

        .adherence-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
        .adh-cell { aspect-ratio: 1; border-radius: 6px; background: #22C55E; }
        .adh-cell.missed { background: #EF4444; }
        .adh-cell.pending { background: #F1F5F9; }
      `}</style>

      <div className="page-header">
        <div>
          <h1 className="page-title">Medicine Reminder</h1>
          <p className="page-sub">Manage your medication schedule and track intake</p>
        </div>
        <button className="add-btn" onClick={() => setShowForm(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Medicine
        </button>
      </div>

      <div className="med-grid">
        <div className="med-card">
          <div className="med-card-title">Today's Schedule</div>
          {groups.map(({ group, items }) => items.length > 0 && (
            <div key={group}>
              <div className="group-label">{group}</div>
              {items.map((med) => (
                <div className="med-row" key={med.id}>
                  <label className={`med-check${med.taken ? " taken" : ""}`}>
                    <input
                      type="checkbox"
                      checked={med.taken}
                      onChange={() => toggleMedicineTaken(med.id)}
                      className="med-checkbox"
                    />
                    {med.taken && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                  </label>
                  <div className="med-info">
                    <div className="med-name">{med.name}</div>
                    <div className="med-dosage">{med.dosage} · {med.frequency}</div>
                  </div>
                  <span className="med-time-badge">{med.time}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="med-card">
          <div className="med-card-title">Active Medicines</div>
          <div className="active-list">
            {medicines.map((med) => (
              <div className="active-card" key={med.id}>
                <div>
                  <div className="active-name">{med.name}</div>
                  <div className="active-meta">{med.dosage} · {med.frequency} · {med.time}</div>
                </div>
                <div className="active-actions">
                  <button className="icon-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button className="icon-btn del">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="med-card">
        <div className="med-card-title">Weekly Adherence</div>
        <div style={{display:"flex",gap:8,marginBottom:8}}>
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
            <div key={d} style={{flex:1,textAlign:"center",fontSize:10,color:"#94A3B8",fontWeight:600}}>{d}</div>
          ))}
        </div>
        <div className="adherence-grid">
          {["", "", "", "missed", "", "", "pending"].map((state, i) => (
            <div key={i} className={`adh-cell${state ? ` ${state}` : ""}`} />
          ))}
        </div>
      </div>

      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="form-title">Add New Medicine</div>
            <div className="form-group">
              <label className="form-label">Medicine Name</label>
              <input className="form-input" type="text" placeholder="e.g. Vitamin D3" />
            </div>
            <div className="form-row">
              <div className="form-group" style={{flex:1}}>
                <label className="form-label">Dosage</label>
                <input className="form-input" type="text" placeholder="e.g. 1000 IU" />
              </div>
              <div className="form-group" style={{flex:1}}>
                <label className="form-label">Frequency</label>
                <select className="form-input">
                  <option value="">Select</option>
                  <option>Daily</option>
                  <option>Twice daily</option>
                  <option>Weekly</option>
                  <option>As needed</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Time</label>
              <input className="form-input" type="time" />
            </div>
            <div className="form-row">
              <div className="form-group" style={{flex:1}}>
                <label className="form-label">Start Date</label>
                <input className="form-input" type="date" />
              </div>
              <div className="form-group" style={{flex:1}}>
                <label className="form-label">End Date (optional)</label>
                <input className="form-input" type="date" />
              </div>
            </div>
            <div className="form-actions">
              <button className="form-cancel" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="form-save">Save Medicine</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}