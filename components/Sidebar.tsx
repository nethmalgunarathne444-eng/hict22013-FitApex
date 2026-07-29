"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  )},
  { label: "Body Metrics", href: "/dashboard/body-metrics", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  )},
  { label: "Health Vitals", href: "/dashboard/health-vitals", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )},
  { label: "Medicine Reminder", href: "/dashboard/medicine-reminder", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )},
  { label: "Settings", href: "/dashboard/settings", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )},
];

export default function Sidebar() {
  const pathname = usePathname() ?? "";
  const [collapsed, setCollapsed] = useState(false);
  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);

  return (
    <>
      <style>{`
        .sidebar { width: ${collapsed ? "72px" : "220px"}; min-height: 100vh; background: #fff;
          border-right: 1px solid #E2E8F0; display: flex; flex-direction: column;
          transition: width 0.22s ease; flex-shrink: 0; position: sticky; top: 0; height: 100vh; overflow: hidden; }
        .sidebar-logo { display: flex; align-items: center; gap: 10px; padding: 20px 16px 18px;
          border-bottom: 1px solid #F1F5F9; text-decoration: none; overflow: hidden; white-space: nowrap; }
        .sidebar-logo-icon { width: 36px; height: 36px; background: linear-gradient(135deg, #2563EB, #1D4ED8);
          border-radius: 10px; display: grid; place-items: center; flex-shrink: 0; }
        .sidebar-logo-text { font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 700;
          color: #0F172A; opacity: ${collapsed ? 0 : 1}; transition: opacity 0.15s; }
        .sidebar-nav { flex: 1; padding: 12px 10px; display: flex; flex-direction: column; gap: 4px; }
        .sidebar-item { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 10px;
          text-decoration: none; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
          color: #64748B; white-space: nowrap; overflow: hidden; transition: background 0.15s, color 0.15s; }
        .sidebar-item:hover { background: #F8FAFF; color: #2563EB; }
        .sidebar-item.active { background: #EFF6FF; color: #2563EB; font-weight: 600; }
        .sidebar-item svg { flex-shrink: 0; }
        .sidebar-item-label { opacity: ${collapsed ? 0 : 1}; transition: opacity 0.15s; }
        .sidebar-footer { padding: 12px 10px 20px; border-top: 1px solid #F1F5F9; }
        .sidebar-toggle { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 10px;
          border: none; background: none; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 13px;
          font-weight: 500; color: #94A3B8; width: 100%; white-space: nowrap; overflow: hidden; transition: background 0.15s, color 0.15s; }
        .sidebar-toggle:hover { background: #F8FAFF; color: #64748B; }
        .sidebar-toggle-label { opacity: ${collapsed ? 0 : 1}; transition: opacity 0.15s; }
      `}</style>
      <aside className="sidebar">
        <a href="/dashboard" className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <span className="sidebar-logo-text">FitApex</span>
        </a>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`sidebar-item${isActive(item.href) ? " active" : ""}`}>
              {item.icon}
              <span className="sidebar-item-label">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {collapsed ? <><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></>
                         : <><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></>}
            </svg>
            <span className="sidebar-toggle-label">{collapsed ? "" : "Collapse"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}