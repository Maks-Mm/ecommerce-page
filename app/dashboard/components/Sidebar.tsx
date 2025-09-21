// app/dashboard/components/Sidebar.tsx
"use client";
import { useState } from "react";
import NavItem from "./NavItem";

type SidebarProps = {
  activeIndex: number;
  onNavClick: (index: number) => void;
};

export default function Sidebar({ activeIndex, onNavClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { icon: "fa-house", text: "Home" },
    { icon: "fa-user", text: "Profile" },
    { icon: "fa-calendar-check", text: "Schedule" },
    { icon: "fa-person-running", text: "Activities" },
    { icon: "fa-sliders", text: "Settings" },
  ];

  return (
    <nav
      className={`bg-gradient-to-b from-gray-900 to-blue-900 text-white p-4 h-screen ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 hidden md:block`} // Hidden on mobile, shown on desktop
    >
      {/* Toggle button - hidden on mobile */}
      

      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            icon={item.icon}
            text={item.text}
            onClick={onNavClick}
          />
        ))}
      </ul>
      
      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-gray-700 text-center text-xs text-gray-400">
        <p>© 2023 Dashboard v1.0</p>
      </div>
    </nav>
  );
}