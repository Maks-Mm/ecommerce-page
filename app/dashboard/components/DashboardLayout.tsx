// app/dashboard/components/DashboardLayout.tsx

"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
type Props = {
  activeIndex: number;
  onNavClick: (i: number) => void;
  children: React.ReactNode;
};

export default function DashboardLayout({ activeIndex, onNavClick, children }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      className={`dashboard-main min-h-screen ${
        isMobile ? "flex flex-col" : "flex flex-row"
      }`}
    >
      {/* Sidebar (desktop only) */}
      {!isMobile && (
        <Sidebar activeIndex={activeIndex} onNavClick={onNavClick} />
      )}

      {/* Mobile header with horizontal menu */}
      {isMobile && (
        <div className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white md:hidden">
          <div className="flex justify-between items-center p-3 border-b border-gray-700">
            <div className="logo text-xl font-bold">
              Menu<span className="text-blue-400">Hub</span>
            </div>
            <div className="text-xs text-gray-400">Dashboard</div>
          </div>

          {/* ✅ Horizontal Menu */}
          <div className="w-full">
            <ul className="flex w-full">
              {[
                { icon: "fa-house", text: "Home" },
                { icon: "fa-user", text: "Profile" },
                { icon: "fa-calendar-check", text: "Schedule" },
                { icon: "fa-person-running", text: "Activities" },
                { icon: "fa-sliders", text: "Settings" },
              ].map((item, index) => (
                <li key={index} className="flex-1">
                  <div
                    className={`flex flex-col items-center justify-center p-3 ${
                      activeIndex === index
                        ? "bg-blue-600 text-white border-b-2 border-green-400"
                        : "bg-transparent text-gray-300 hover:bg-blue-700"
                    } transition-all duration-200 cursor-pointer`}
                    onClick={() => onNavClick(index)}
                  >
                    <i className={`fa ${item.icon} text-lg mb-1`}></i>
                    <span className="text-xs">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Content area */}
      <section className="dashboard-content flex-1 p-4 md:p-6 bg-gray-100">
        {children}
      </section>
    </main>
  );
}
