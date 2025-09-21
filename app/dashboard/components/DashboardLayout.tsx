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

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="dashboard-main flex flex-col min-h-screen md:flex-row">
      {/* Sidebar - hidden on mobile, shown on desktop */}
      <div className={`${isMobile ? 'hidden' : 'block'}`}>
        <Sidebar activeIndex={activeIndex} onNavClick={onNavClick} />
      </div>
      
      {/* Mobile header - shown only on mobile */}
      {isMobile && (
        <div className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white md:hidden">
          <div className="flex justify-between items-center p-3 border-b border-gray-700">
            <div className="logo text-xl font-bold">Menu<span className="text-blue-400">Hub</span></div>
            <div className="text-xs text-gray-400">Dashboard</div>
          </div>
          
          {/* Horizontal Menu Items for Mobile */}
          <div className="w-full overflow-x-auto">
            <ul className="flex w-max min-w-full">
              {[
                { icon: "fa-house", text: "Home" },
                { icon: "fa-user", text: "Profile" },
                { icon: "fa-calendar-check", text: "Schedule" },
                { icon: "fa-person-running", text: "Activities" },
                { icon: "fa-sliders", text: "Settings" },
              ].map((item, index) => (
                <li key={index} className="flex-shrink-0">
                  <div
                    className={`flex flex-col items-center justify-center p-3 min-w-[80px] ${
                      activeIndex === index 
                        ? "bg-blue-600 text-white" 
                        : "bg-transparent text-gray-300 hover:bg-blue-700"
                    } transition-all duration-200 cursor-pointer border-b-2 ${
                      activeIndex === index ? "border-green-400" : "border-transparent"
                    }`}
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