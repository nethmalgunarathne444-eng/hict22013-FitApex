"use client";
import { useState } from "react";

const demoData = {
  bmi: 27.4,
  bmiStatus: "Normal range",
  weight: 72.4,
  weightUnit: "kg",
  weightChange: -1.3,
  caloriesToday: 1360,
  calorieGoal: 2000,
  goal: { targetWeight: 68, dailyCalories: 2000 },
  history: [
    { date: "May 23, 2025", weight: 72.4, bmi: 27.4, calories: 1360 },
    { date: "May 22, 2025", weight: 72.9, bmi: 27.6, calories: 1810 },
    { date: "May 21, 2025", weight: 73.1, bmi: 27.7, calories: 1650 },
    { date: "May 20, 2025", weight: 73.5, bmi: 27.9, calories: 1920 },
  ],
};

export default function BodyMetricsPage() {
  const [activeTab, setActiveTab] = useState("BMI");
  const data = demoData;

  return (
    <>
      <style>{`
        .page-title { font-size: 22px; font-weight: 700; color: #0F172A; margin: 0 0 4px; font-family: 'Inter', sans-serif; }
        .page-sub   { font-size: 13px; color: #94A3B8; margin: 0 0 28px; font-family: 'Inter', sans-serif; }

        .tab-row { display: flex; gap: 4px; margin-bottom: 24px; }
        .tab-btn { padding: 7px 18px; border-radius: 8px; border: 1px solid #E2E8F0; font-size: 13px; font-weight: 500; color: #64748B; background: #fff; cursor: pointer; font-family: 'Inter', sans-serif; }
        .tab-btn.active { background: #EFF6FF; border-color: #BFDBFE; color: #2563EB; font-weight: 600; }

        .bm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
        @media (max-width: 700px) { .bm-grid { grid-template-columns: 1fr; } }

        .bm-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; font-family: 'Inter', sans-serif; }
        .bm-card-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; margin-bottom: 12px; }
        .bm-big { font-size: 40px; font-weight: 700; color: #2563EB; line-height: 1; margin-bottom: 6px; }
        .bm-status-green { font-size: 13px; font-weight: 600; color: #22C55E; }

        .gauge-bar { height: 10px; border-radius: 5px; background: linear-gradient(to right, #3B82F6 0%, #22C55E 35%, #F59E0B 65%, #EF4444 100%); margin: 16px 0 8px; }
        .gauge-labels { display: flex; justify-content: space-between; font-size: 10px; color: #94A3B8; }
        .gauge-labels .active { color: #22C55E; font-weight: 700; }

        .log-form { display: flex; flex-direction: column; gap: 12px; }
        .log-input-row { display: flex; gap: 10px; }
        .log-input { flex: 1; padding: 10px 14px; border: 1px solid #E2E8F0; border-radius: 10px; font-family: 'Inter', sans-serif; font-size: 14px; color: #0F172A; outline: none; width: 100%; box-sizing: border-box; }
        .log-input:focus { border-color: #2563EB; }
        .log-btn { padding: 10px 22px; background: #2563EB; color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: 'Inter', sans-serif; }
        .log-btn:hover { background: #1D4ED8; }

        .history-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; font-family: 'Inter', sans-serif; }
        .history-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .history-title { font-size: 15px; font-weight: 700; color: #0F172A; }
        .history-table { width: 100%; border-collapse: collapse; }
        .history-table th { font-size: 11px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 12px; border-bottom: 1px solid #F1F5F9; text-align: left; }
        .history-table td { font-size: 14px; color: #334155; padding: 12px; border-bottom: 1px solid #F8FAFF; }

        .goal-card { background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; margin-bottom: 20px; font-family: 'Inter', sans-serif; }
        .goal-row { display: flex; gap: 16px; }
        @media (max-width: 600px) { .goal-row { flex-direction: column; } }
        .goal-field { flex: 1; }
        .goal-label { font-size: 12px; font-weight: 600; color: #64748B; margin-bottom: 6px; }
      `}</style>

      <h1 className="page-title">Body Metrics</h1>
      <p className="page-sub">Track BMI, calories, and weight over time</p>

      <div className="tab-row">
        {["BMI", "Calories", "Weight"].map((t) => (
          <button key={t} className={`tab-btn${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div className="bm-grid">
        <div className="bm-card">
          <div className="bm-card-label">Current {activeTab}</div>
          {activeTab === "BMI" && (
            <>
              <div className="bm-big">{data.bmi}</div>
              <div className="bm-status-green">{data.bmiStatus}</div>
              <div className="gauge-bar" />
              <div className="gauge-labels">
                <span>Underweight<br/>&lt;18.5</span>
                <span className="active">Normal<br/>18.5–24.9</span>
                <span>Overweight<br/>25–29.9</span>
                <span>Obese<br/>≥30</span>
              </div>
            </>
          )}
          {activeTab === "Calories" && (
            <>
              <div className="bm-big">{data.caloriesToday}</div>
              <div className="bm-status-green">{data.calorieGoal - data.caloriesToday} kcal remaining</div>
            </>
          )}
          {activeTab === "Weight" && (
            <>
              <div className="bm-big">{data.weight} {data.weightUnit}</div>
              <div className="bm-status-green">{data.weightChange} kg vs last week</div>
            </>
          )}
        </div>

        <div className="bm-card">
          <div className="bm-card-label">Log Today's Data</div>
          <div className="log-form">
            {activeTab === "Weight" && <input className="log-input" type="number" placeholder={`Weight (${data.weightUnit})`} />}
            {activeTab === "Calories" && <input className="log-input" type="number" placeholder="Calories consumed (kcal)" />}
            {activeTab === "BMI" && (
              <div className="log-input-row">
                <input className="log-input" type="number" placeholder="Weight (kg)" />
                <input className="log-input" type="number" placeholder="Height (cm)" />
              </div>
            )}
            <input className="log-input" type="date" />
            <button className="log-btn">Save Entry</button>
          </div>
        </div>
      </div>

      <div className="goal-card">
        <div className="bm-card-label" style={{marginBottom:16}}>Goals</div>
        <div className="goal-row">
          <div className="goal-field">
            <div className="goal-label">Target Weight ({data.weightUnit})</div>
            <input className="log-input" type="number" defaultValue={data.goal.targetWeight} />
          </div>
          <div className="goal-field">
            <div className="goal-label">Daily Calorie Goal (kcal)</div>
            <input className="log-input" type="number" defaultValue={data.goal.dailyCalories} />
          </div>
          <div style={{display:"flex",alignItems:"flex-end"}}>
            <button className="log-btn">Save Goals</button>
          </div>
        </div>
      </div>

      <div className="history-card">
        <div className="history-header">
          <span className="history-title">History Log</span>
          <div style={{display:"flex",gap:6}}>
            {["7d","30d","90d"].map(r => <button key={r} className="tab-btn" style={{padding:"4px 12px",fontSize:12}}>{r}</button>)}
          </div>
        </div>
        <table className="history-table">
          <thead><tr><th>Date</th><th>Weight</th><th>BMI</th><th>Calories</th><th></th></tr></thead>
          <tbody>
            {data.history.map((row, i) => (
              <tr key={i}>
                <td>{row.date}</td>
                <td>{row.weight} {data.weightUnit}</td>
                <td>{row.bmi}</td>
                <td>{row.calories} kcal</td>
                <td><button style={{border:"none",background:"none",color:"#EF4444",cursor:"pointer",fontSize:12}}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}