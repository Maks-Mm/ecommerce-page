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
      className={`bg-gradient-to-b from-gray-900 to-blue-900 text-white p-4 ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300`}
    >
      {/* Toggle button */}
      <button
        className="mb-6 text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa fa-bars"></i>
      </button>

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
    </nav>
  );
}