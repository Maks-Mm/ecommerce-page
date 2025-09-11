// app/dashboard/components/DashboardLayout.tsx
"use client";
import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  activeIndex: number;
  onNavClick: (i: number) => void;
  children: React.ReactNode;
};

export default function DashboardLayout({ activeIndex, onNavClick, children }: Props) {
  return (
    <main className="dashboard-main"> {/* Add a class here */}
      <Sidebar activeIndex={activeIndex} onNavClick={onNavClick} />
      <section className="content dashboard-content"> {/* Add a class here */}
        {children}
      </section>
    </main>
  );
}