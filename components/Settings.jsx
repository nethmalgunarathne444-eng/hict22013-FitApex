import { useState } from "react";

const NAV_ITEMS = [
  {
    id: "account",
    label: "Account & Login",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    id: "body",
    label: "Body Profile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: "notifications",
    label: "Notifications & Reminders",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
  },
  {
    id: "display",
    label: "Display & Preferences",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    id: "data",
    label: "Data Management",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
];

/* ── Reusable Toggle ── */
function Toggle({ value, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      className={`toggle-switch ${value ? "toggle-on" : "toggle-off"}`}
    >
      <span className="toggle-thumb" />
      <style jsx>{`
        .toggle-switch {
          width: 44px;
          height: 24px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          position: relative;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }
        .toggle-on  { background: #2563EB; }
        .toggle-off { background: #E2E8F0; }
        .toggle-thumb {
          position: absolute;
          top: 3px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff;
          transition: left 0.2s ease;
          left: ${value ? "23px" : "3px"};
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
        }
      `}</style>
    </button>
  );
}

/* ── Reusable section card ── */
function SettingsCard({ title, children }) {
  return (
    <div className="s-card">
      <h3 className="s-card-title">{title}</h3>
      {children}
      <style jsx>{`
        .s-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px 24px 24px;
          margin-bottom: 24px;
        }
        .s-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid #F1F5F9;
        }
      `}</style>
    </div>
  );
}

/* ── Field row ── */
function FieldRow({ label, hint, children }) {
  return (
    <div className="field-row">
      <div className="field-label-wrap">
        <span className="field-label">{label}</span>
        {hint && <span className="field-hint">{hint}</span>}
      </div>
      <div className="field-control">{children}</div>
      <style jsx>{`
        .field-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid #F8FAFF;
        }
        .field-row:last-child { border-bottom: none; padding-bottom: 0; }
        .field-row:first-child { padding-top: 0; }
        .field-label-wrap { flex: 1; min-width: 0; }
        .field-label { font-size: 14px; font-weight: 600; color: #334155; display: block; }
        .field-hint  { font-size: 12px; color: #94A3B8; margin-top: 2px; display: block; }
        .field-control { flex-shrink: 0; }
      `}</style>
    </div>
  );
}

/* ── Text input ── */
function TextInput({ value, onChange, type = "text", placeholder }) {
  return (
    <>
      <input
        className="s-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <style jsx>{`
        .s-input {
          width: 220px;
          padding: 9px 14px;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          font-size: 14px;
          color: #0F172A;
          background: #F8FAFF;
          outline: none;
          font-family: Inter, sans-serif;
          transition: border-color 0.15s, background 0.15s;
        }
        .s-input:focus {
          border-color: #2563EB;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .s-input::placeholder { color: #94A3B8; }
        @media (max-width: 600px) { .s-input { width: 140px; } }
      `}</style>
    </>
  );
}

/* ── Select ── */
function Select({ value, onChange, options }) {
  return (
    <>
      <select className="s-select" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <style jsx>{`
        .s-select {
          padding: 9px 32px 9px 14px;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          font-size: 14px;
          color: #0F172A;
          background: #F8FAFF url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 10px center;
          appearance: none;
          cursor: pointer;
          outline: none;
          font-family: Inter, sans-serif;
        }
        .s-select:focus { border-color: #2563EB; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
      `}</style>
    </>
  );
}

/* ── Danger button ── */
function DangerButton({ children, onClick }) {
  return (
    <>
      <button className="danger-btn" onClick={onClick}>{children}</button>
      <style jsx>{`
        .danger-btn {
          padding: 9px 18px;
          border: 1px solid #FCA5A5;
          border-radius: 10px;
          background: #FFF1F2;
          color: #EF4444;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
          font-family: Inter, sans-serif;
        }
        .danger-btn:hover { background: #FEE2E2; }
      `}</style>
    </>
  );
}

/* ══════════════════════════════════════
   SECTION PANELS
══════════════════════════════════════ */

function AccountSection() {
  const [email, setEmail] = useState("alex@example.com");
  const [name, setName] = useState("Alex Johnson");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <div>
      <SettingsCard title="Profile">
        <div className="avatar-row">
          <div className="avatar">AJ</div>
          <div>
            <p className="avatar-name">{name}</p>
            <button className="upload-btn">Change photo</button>
          </div>
        </div>
        <FieldRow label="Display name">
          <TextInput value={name} onChange={setName} placeholder="Your name" />
        </FieldRow>
        <FieldRow label="Email address">
          <TextInput value={email} onChange={setEmail} type="email" placeholder="you@example.com" />
        </FieldRow>
        <div className="save-row">
          <button className="save-btn">Save changes</button>
        </div>
      </SettingsCard>

      <SettingsCard title="Change password">
        <FieldRow label="Current password">
          <TextInput value={currentPw} onChange={setCurrentPw} type="password" placeholder="••••••••" />
        </FieldRow>
        <FieldRow label="New password">
          <TextInput value={newPw} onChange={setNewPw} type="password" placeholder="••••••••" />
        </FieldRow>
        <FieldRow label="Confirm new password">
          <TextInput value={confirmPw} onChange={setConfirmPw} type="password" placeholder="••••••••" />
        </FieldRow>
        <div className="save-row">
          <button className="save-btn">Update password</button>
        </div>
      </SettingsCard>

      <style jsx>{`
        .avatar-row { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #F1F5F9; }
        .avatar { width: 56px; height: 56px; border-radius: 50%; background: #EFF6FF; color: #2563EB; font-size: 18px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .avatar-name { font-size: 15px; font-weight: 700; color: #0F172A; margin: 0 0 4px; }
        .upload-btn { font-size: 13px; font-weight: 600; color: #2563EB; background: none; border: none; cursor: pointer; padding: 0; }
        .upload-btn:hover { text-decoration: underline; }
        .save-row { display: flex; justify-content: flex-end; margin-top: 20px; padding-top: 16px; border-top: 1px solid #F1F5F9; }
        .save-btn { background: #2563EB; color: #fff; font-size: 14px; font-weight: 600; padding: 10px 22px; border-radius: 10px; border: none; cursor: pointer; transition: background 0.2s; font-family: Inter, sans-serif; }
        .save-btn:hover { background: #1D4ED8; }
      `}</style>
    </div>
  );
}

function BodySection() {
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("28");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("moderate");

  return (
    <div>
      <SettingsCard title="Body measurements">
        <FieldRow label="Height (cm)" hint="Used to calculate BMI">
          <TextInput value={height} onChange={setHeight} placeholder="175" />
        </FieldRow>
        <FieldRow label="Age" hint="Used to estimate calorie needs">
          <TextInput value={age} onChange={setAge} placeholder="28" />
        </FieldRow>
        <FieldRow label="Gender">
          <Select value={gender} onChange={setGender} options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Prefer not to say" },
          ]} />
        </FieldRow>
        <FieldRow label="Activity level" hint="Affects daily calorie goal">
          <Select value={activity} onChange={setActivity} options={[
            { value: "sedentary", label: "Sedentary" },
            { value: "light", label: "Lightly active" },
            { value: "moderate", label: "Moderately active" },
            { value: "very", label: "Very active" },
            { value: "extra", label: "Extra active" },
          ]} />
        </FieldRow>
        <div className="save-row">
          <button className="save-btn">Save profile</button>
        </div>
      </SettingsCard>

      <div className="info-chip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        Changes here automatically recalculate your BMI and daily calorie goal on the dashboard.
      </div>

      <style jsx>{`
        .save-row { display: flex; justify-content: flex-end; margin-top: 20px; padding-top: 16px; border-top: 1px solid #F1F5F9; }
        .save-btn { background: #2563EB; color: #fff; font-size: 14px; font-weight: 600; padding: 10px 22px; border-radius: 10px; border: none; cursor: pointer; transition: background 0.2s; font-family: Inter, sans-serif; }
        .save-btn:hover { background: #1D4ED8; }
        .info-chip { display: flex; align-items: flex-start; gap: 10px; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #2563EB; line-height: 1.5; }
      `}</style>
    </div>
  );
}

function NotificationsSection() {
  const [medicineReminders, setMedicineReminders] = useState(true);
  const [leadTime, setLeadTime] = useState("10");
  const [dailySummary, setDailySummary] = useState(true);
  const [summaryTime, setSummaryTime] = useState("08:00");
  const [missedDose, setMissedDose] = useState(true);

  return (
    <div>
      <SettingsCard title="Medicine reminders">
        <FieldRow label="Reminders" hint="Get notified when a dose is due">
          <Toggle value={medicineReminders} onChange={setMedicineReminders} />
        </FieldRow>
        {medicineReminders && (
          <FieldRow label="Remind me before" hint="How early to send the alert">
            <Select value={leadTime} onChange={setLeadTime} options={[
              { value: "5", label: "5 minutes" },
              { value: "10", label: "10 minutes" },
              { value: "15", label: "15 minutes" },
            ]} />
          </FieldRow>
        )}
      </SettingsCard>

      <SettingsCard title="Daily health summary">
        <FieldRow label="Daily summary" hint="A recap of your health data each day">
          <Toggle value={dailySummary} onChange={setDailySummary} />
        </FieldRow>
        {dailySummary && (
          <FieldRow label="Send at">
            <TextInput value={summaryTime} onChange={setSummaryTime} type="time" />
          </FieldRow>
        )}
      </SettingsCard>

      <SettingsCard title="Missed dose alerts">
        <FieldRow label="Alert me for missed doses" hint="Notify if a scheduled dose was not logged">
          <Toggle value={missedDose} onChange={setMissedDose} />
        </FieldRow>
      </SettingsCard>
    </div>
  );
}

function DisplaySection() {
  const [darkMode, setDarkMode] = useState(false);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [glucoseUnit, setGlucoseUnit] = useState("mmol");
  const [dateFormat, setDateFormat] = useState("dmy");

  return (
    <div>
      <SettingsCard title="Appearance">
        <FieldRow label="Dark mode" hint="Switch the app to a dark theme">
          <Toggle value={darkMode} onChange={setDarkMode} />
        </FieldRow>
      </SettingsCard>

      <SettingsCard title="Units">
        <FieldRow label="Weight" hint="Used across body metrics">
          <Select value={weightUnit} onChange={setWeightUnit} options={[
            { value: "kg", label: "kg" },
            { value: "lbs", label: "lbs" },
          ]} />
        </FieldRow>
        <FieldRow label="Blood glucose" hint="Used in health vitals">
          <Select value={glucoseUnit} onChange={setGlucoseUnit} options={[
            { value: "mmol", label: "mmol/L" },
            { value: "mgdl", label: "mg/dL" },
          ]} />
        </FieldRow>
      </SettingsCard>

      <SettingsCard title="Date format">
        <FieldRow label="Format">
          <Select value={dateFormat} onChange={setDateFormat} options={[
            { value: "dmy", label: "DD / MM / YYYY" },
            { value: "mdy", label: "MM / DD / YYYY" },
            { value: "ymd", label: "YYYY / MM / DD" },
          ]} />
        </FieldRow>
      </SettingsCard>
    </div>
  );
}

function DataSection() {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div>
      <SettingsCard title="Export your data">
        <FieldRow label="Export as CSV" hint="All metrics, vitals, and medicine logs">
          <button className="export-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CSV
          </button>
        </FieldRow>
        <FieldRow label="Export as PDF" hint="Formatted report for your doctor">
          <button className="export-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </button>
        </FieldRow>
      </SettingsCard>

      <SettingsCard title="Clear data">
        <FieldRow label="Clear body metrics" hint="Removes all weight, BMI, and calorie logs">
          <DangerButton>Clear metrics</DangerButton>
        </FieldRow>
        <FieldRow label="Clear health vitals" hint="Removes all BP, glucose, and cholesterol records">
          <DangerButton>Clear vitals</DangerButton>
        </FieldRow>
        <FieldRow label="Clear medicine logs" hint="Removes all medicine and dose history">
          <DangerButton>Clear medicines</DangerButton>
        </FieldRow>
      </SettingsCard>

      <SettingsCard title="Danger zone">
        {!confirmDelete ? (
          <FieldRow label="Delete account" hint="Permanently removes all your data. This cannot be undone.">
            <DangerButton onClick={() => setConfirmDelete(true)}>Delete account</DangerButton>
          </FieldRow>
        ) : (
          <div className="confirm-box">
            <p className="confirm-text">Are you sure? This will permanently delete your account and all health data.</p>
            <div className="confirm-actions">
              <button className="cancel-btn" onClick={() => setConfirmDelete(false)}>Cancel</button>
              <DangerButton>Yes, delete my account</DangerButton>
            </div>
          </div>
        )}
      </SettingsCard>

      <style jsx>{`
        .export-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          background: #F8FAFF;
          color: #334155;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
          font-family: Inter, sans-serif;
        }
        .export-btn:hover { background: #EFF6FF; color: #2563EB; border-color: #BFDBFE; }
        .confirm-box { padding: 16px; background: #FFF1F2; border-radius: 10px; border: 1px solid #FCA5A5; }
        .confirm-text { font-size: 14px; color: #334155; margin: 0 0 16px; line-height: 1.6; }
        .confirm-actions { display: flex; gap: 10px; justify-content: flex-end; }
        .cancel-btn { padding: 9px 18px; border: 1px solid #E2E8F0; border-radius: 10px; background: #fff; font-size: 13px; font-weight: 600; color: #334155; cursor: pointer; font-family: Inter, sans-serif; }
        .cancel-btn:hover { background: #F1F5F9; }
      `}</style>
    </div>
  );
}

const PANELS = {
  account: <AccountSection />,
  body: <BodySection />,
  notifications: <NotificationsSection />,
  display: <DisplaySection />,
  data: <DataSection />,
};

/* ══════════════════════════════════════
   MAIN SETTINGS PAGE
══════════════════════════════════════ */

export default function SettingsPage() {
  const [active, setActive] = useState("account");
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeItem = NAV_ITEMS.find((n) => n.id === active);

  return (
    <>
      <div className="settings-page">
        <div className="settings-container">

          {/* Page header */}
          <div className="page-header">
            <span className="page-eyebrow">Configuration</span>
            <h1 className="page-heading">Settings</h1>
            <p className="page-desc">Manage your account, health profile, and app preferences.</p>
          </div>

          <div className="settings-layout">

            {/* ── Sidebar (desktop) ── */}
            <aside className="settings-sidebar">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  className={`sidebar-item ${active === item.id ? "sidebar-item-active" : ""}`}
                  onClick={() => setActive(item.id)}
                >
                  <span className={`sidebar-icon ${active === item.id ? "sidebar-icon-active" : ""}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </aside>

            {/* ── Mobile nav pill ── */}
            <div className="mobile-nav">
              <button className="mobile-nav-trigger" onClick={() => setMobileOpen(!mobileOpen)}>
                <span className="mobile-nav-icon">{activeItem.icon}</span>
                {activeItem.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "auto" }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {mobileOpen && (
                <div className="mobile-nav-dropdown">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      className={`mobile-nav-item ${active === item.id ? "mobile-nav-item-active" : ""}`}
                      onClick={() => { setActive(item.id); setMobileOpen(false); }}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── Content panel ── */}
            <main className="settings-content">
              {PANELS[active]}
            </main>

          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .settings-page {
          min-height: 100vh;
          background: #F8FAFF;
          font-family: Inter, sans-serif;
          padding: 48px 24px 80px;
        }

        .settings-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Page header */
        .page-header { margin-bottom: 40px; }
        .page-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #3B82F6;
          margin-bottom: 8px;
        }
        .page-heading {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          margin: 0 0 10px;
        }
        .page-desc {
          font-size: 15px;
          color: #64748B;
          margin: 0;
          line-height: 1.6;
        }

        /* Layout */
        .settings-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Sidebar */
        .settings-sidebar {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          position: sticky;
          top: 24px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          border: none;
          background: transparent;
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s, color 0.15s;
          font-family: Inter, sans-serif;
          width: 100%;
        }
        .sidebar-item:hover { background: #F8FAFF; color: #334155; }
        .sidebar-item-active { background: #EFF6FF !important; color: #2563EB !important; font-weight: 600; }

        .sidebar-icon { color: #94A3B8; transition: color 0.15s; }
        .sidebar-icon-active { color: #2563EB; }

        /* Mobile nav — hidden on desktop */
        .mobile-nav { display: none; position: relative; }

        .mobile-nav-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #0F172A;
          cursor: pointer;
          font-family: Inter, sans-serif;
        }

        .mobile-nav-icon { color: #2563EB; }

        .mobile-nav-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(15,23,42,0.1);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          border: none;
          background: transparent;
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          text-align: left;
          font-family: Inter, sans-serif;
          width: 100%;
        }
        .mobile-nav-item:hover { background: #F8FAFF; }
        .mobile-nav-item-active { background: #EFF6FF; color: #2563EB; font-weight: 600; }

        /* Content */
        .settings-content { min-width: 0; }

        /* Responsive */
        @media (max-width: 768px) {
          .settings-page { padding: 24px 16px 60px; }
          .settings-layout { grid-template-columns: 1fr; gap: 16px; }
          .settings-sidebar { display: none; }
          .mobile-nav { display: block; }
        }
      `}</style>
    </>
  );
}