// app/dashboard/layout.tsx
import "./styles/dashboard.css";

export default function DashboardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        {children}
      </div>
    </div>
  );
}