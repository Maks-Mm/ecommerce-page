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
      className={`nav-item ${
        activeIndex === index 
          ? "bg-blue-500 text-white" 
          : "bg-transparent text-gray-300 hover:bg-blue-600"
      } 
      transition-all duration-200 
      rounded-lg p-3 
      cursor-pointer 
      border-b-2 border-transparent 
      hover:border-blue-400`}
      onClick={() => onClick(index)}
    >
      <b></b>
      <b></b>
      <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3">
        <i className={`fa ${icon} nav-icon`} aria-hidden="true" />
        <span className="nav-text">{text}</span>
      </a>
    </li>
  );
}