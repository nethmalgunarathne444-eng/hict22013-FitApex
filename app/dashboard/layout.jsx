import Sidebar from "@/components/Sidebar";

export const metadata = { title: "FitApex Dashboard" };

export default function DashboardLayout({ children }) {
  return (
    <>
      <style>{`
        .dashboard-shell { display: flex; min-height: 100vh; background: #F8FAFF; font-family: 'Inter', sans-serif; }
        .dashboard-main { flex: 1; min-width: 0; padding: 32px 36px; }
        @media (max-width: 768px) { .dashboard-main { padding: 20px 16px; } }
      `}</style>
      <div className="dashboard-shell">
        <Sidebar />
        <main className="dashboard-main">{children}</main>
      </div>
    </>
  );
}