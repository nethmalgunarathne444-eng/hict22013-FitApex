"use client";
// components/pages/HealthVitalsPage.jsx

import { useState } from "react";

const demoData = {
  bp: { systolic: 120, diastolic: 80, status: "Normal" },
  sugar: { fasting: 5.6, status: "Normal" },
  cholesterol: { ldl: 2.4, hdl: 1.3, total: 4.9 },
  history: [
    { date: "May 23, 2025", systolic: 120, diastolic: 80, sugar: 5.6, ldl: 2.4, hdl: 1.3, total: 4.9, status: "Normal" },
    { date: "May 16, 2025", systolic: 122, diastolic: 81, sugar: 5.8, ldl: 2.5, hdl: 1.3, total: 5.0, status: "Normal" },
    { date: "May 9, 2025",  systolic: 118, diastolic: 79, sugar: 5.5, ldl: 2.3, hdl: 1.4, total: 4.8, status: "Normal" },
  ],
};

export default function HealthVitalsPage() {
  const [activeTab, setActiveTab] = useState("BP");
  const data = demoData;

  const statusColor = (s) =>
    ["Normal", "Optimal", "Good", "Desirable"].includes(s) ? "#22C55E"
    : s === "High" ? "#EF4444" : "#F59E0B";

  return (
    <>
      <style>{`
        .page-title { font-size: 22px; font-weight: 700; color: #0F172A; margin: 0 0 4px; font-family: 'Inter', sans-serif; }
        .page-sub   { font-size: 13px; color: #94A3B8; margin: 0 0 28px; font-family: 'Inter', sans-serif; }

        .tab-row { display: flex; gap: 4px; margin-bottom: 24px; }
        .tab-btn { padding: 7px 18px; border-radius: 8px; border: 1px solid #E2E8F0; font-size: 13px; font-weight: 500; color: #64748B; background: #fff; cursor: pointer; font-family: 'Inter', sans-serif; }
        .tab-btn.active { background: #FFF1F2; border-color: #FECACA; color: #EF4444; font-weight: 600; }

        .vitals-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
        @media (max-width: 700px) { .vitals-row { grid-template-columns: 1fr; } }

        .v-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; font-family: 'Inter', sans-serif; }
        .v-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; margin-bottom: 12px; }
        .v-big { font-size: 40px; font-weight: 700; color: #0F172A; line-height: 1; margin-bottom: 6px; }
        .v-unit { font-size: 14px; color: #94A3B8; font-weight: 400; margin-left: 6px; }
        .v-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; border-radius: 100px; padding: 4px 10px; margin-top: 8px; background: #F0FDF4; }

        .bp-gradient { height: 6px; border-radius: 3px; background: linear-gradient(to right, #22C55E 60%, #F59E0B 80%, #EF4444 100%); margin-top: 14px; }

        .chol-rows { display: flex; flex-direction: column; gap: 10px; margin-top: 4px; }
        .chol-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #F8FAFF; border-radius: 10px; }
        .chol-name { font-size: 14px; color: #334155; font-weight: 500; }
        .chol-val  { font-size: 14px; color: #0F172A; font-weight: 600; }
        .chol-val .unit { font-size: 11px; color: #94A3B8; font-weight: 400; margin-left: 2px; }

        .log-form { display: flex; flex-direction: column; gap: 12px; }
        .log-input-row { display: flex; gap: 10px; }
        .log-input { flex: 1; padding: 10px 14px; border: 1px solid #E2E8F0; border-radius: 10px; font-family: 'Inter', sans-serif; font-size: 14px; color: #0F172A; outline: none; width: 100%; box-sizing: border-box; }
        .log-input:focus { border-color: #EF4444; }
        .log-btn { padding: 10px 22px; background: #EF4444; color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: 'Inter', sans-serif; }
        .log-btn:hover { background: #DC2626; }

        .history-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; font-family: 'Inter', sans-serif; }
        .history-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .history-title { font-size: 15px; font-weight: 700; color: #0F172A; }
        .history-table { width: 100%; border-collapse: collapse; }
        .history-table th { font-size: 11px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 12px; border-bottom: 1px solid #F1F5F9; text-align: left; }
        .history-table td { font-size: 14px; color: #334155; padding: 12px; border-bottom: 1px solid #F8FAFF; }
      `}</style>

      <h1 className="page-title">Health Vitals</h1>
      <p className="page-sub">Record and monitor blood pressure, blood sugar, and cholesterol</p>

      <div className="tab-row">
        {["BP", "Sugar", "Cholesterol"].map((t) => (
          <button key={t} className={`tab-btn${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div className="vitals-row">
        <div className="v-card">
          <div className="v-label">
            {activeTab === "BP" && "Blood Pressure"}
            {activeTab === "Sugar" && "Blood Sugar (Fasting)"}
            {activeTab === "Cholesterol" && "Cholesterol Panel"}
          </div>

          {activeTab === "BP" && (
            <>
              <div className="v-big">{data.bp.systolic} / {data.bp.diastolic}<span className="v-unit">mmHg</span></div>
              <div className="v-badge" style={{color: statusColor(data.bp.status)}}>☀ {data.bp.status}</div>
              <div className="bp-gradient" />
            </>
          )}
          {activeTab === "Sugar" && (
            <>
              <div className="v-big">{data.sugar.fasting}<span className="v-unit">mmol/L</span></div>
              <div className="v-badge" style={{color: statusColor(data.sugar.status)}}>☀ {data.sugar.status}</div>
            </>
          )}
          {activeTab === "Cholesterol" && (
            <div className="chol-rows">
              {[
                { label: "LDL", val: data.cholesterol.ldl, status: "Optimal" },
                { label: "HDL", val: data.cholesterol.hdl, status: "Good" },
                { label: "Total", val: data.cholesterol.total, status: "Desirable" },
              ].map((c) => (
                <div className="chol-row" key={c.label}>
                  <span className="chol-name">{c.label}</span>
                  <span className="chol-val">{c.val}<span className="unit">mmol/L</span></span>
                  <span style={{fontSize:12,fontWeight:600,color:statusColor(c.status)}}>● {c.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="v-card">
          <div className="v-label">Log New Reading</div>
          <div className="log-form">
            {activeTab === "BP" && (
              <div className="log-input-row">
                <input className="log-input" type="number" placeholder="Systolic (mmHg)" />
                <input className="log-input" type="number" placeholder="Diastolic (mmHg)" />
              </div>
            )}
            {activeTab === "Sugar" && <input className="log-input" type="number" placeholder="Fasting sugar (mmol/L)" />}
            {activeTab === "Cholesterol" && (
              <>
                <div className="log-input-row">
                  <input className="log-input" type="number" placeholder="LDL (mmol/L)" />
                  <input className="log-input" type="number" placeholder="HDL (mmol/L)" />
                </div>
                <input className="log-input" type="number" placeholder="Total cholesterol (mmol/L)" />
              </>
            )}
            <input className="log-input" type="datetime-local" />
            <button className="log-btn">Save Reading</button>
          </div>
        </div>
      </div>

      <div className="history-card">
        <div className="history-header">
          <span className="history-title">Reading History</span>
          <div style={{display:"flex",gap:6}}>
            {["7d","30d","90d"].map(r => <button key={r} className="tab-btn" style={{padding:"4px 12px",fontSize:12}}>{r}</button>)}
          </div>
        </div>
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              {activeTab === "BP" && <><th>Systolic</th><th>Diastolic</th></>}
              {activeTab === "Sugar" && <th>Sugar (mmol/L)</th>}
              {activeTab === "Cholesterol" && <><th>LDL</th><th>HDL</th><th>Total</th></>}
              <th>Status</th><th></th>
            </tr>
          </thead>
          <tbody>
            {data.history.map((row, i) => (
              <tr key={i}>
                <td>{row.date}</td>
                {activeTab === "BP" && <><td>{row.systolic}</td><td>{row.diastolic}</td></>}
                {activeTab === "Sugar" && <td>{row.sugar}</td>}
                {activeTab === "Cholesterol" && <><td>{row.ldl}</td><td>{row.hdl}</td><td>{row.total}</td></>}
                <td><span style={{color:statusColor(row.status),fontWeight:600,fontSize:12}}>● {row.status}</span></td>
                <td><button style={{border:"none",background:"none",color:"#EF4444",cursor:"pointer",fontSize:12}}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}