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
      className={`bg-purple-900 text-white ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}
    >
      {/* Toggle button */}
      <button
        className="mb-6 text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* ADD SPACING HERE */}
      <ul className="space-y-4"> {/* This adds vertical spacing between items */}
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