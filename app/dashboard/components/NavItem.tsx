"use client";
import React from "react";


type NavItemProps = {
  index: number;
  activeIndex: number;
  icon: string;
  text: string;
  onClick: (i: number) => void;
};


export default function NavItem({ index, activeIndex, icon, text, onClick }: NavItemProps) {
  return (
    <li 
      className={`nav-item ${activeIndex === index ? "active" : ""} 
                 mb-4 p-3 rounded-lg transition-colors duration-200`} // Add Tailwind spacing
      onClick={() => onClick(index)}
    >
      <b></b>
      <b></b>
      <a href="#" onClick={(e) => e.preventDefault()}>
        <i className={`fa ${icon} nav-icon`} aria-hidden="true" />
        <span className="nav-text">{text}</span>
      </a>
    </li>
  );
}