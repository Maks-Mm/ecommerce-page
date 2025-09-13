//app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";

type DropdownState = "dienst" | "blog" | "user" | null;

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownState>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dienstRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dienstRef.current && !dienstRef.current.contains(event.target as Node) &&
        blogRef.current && !blogRef.current.contains(event.target as Node) &&
        userRef.current && !userRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdown = (name: DropdownState) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    setOpenDropdown(null);
  };

  const renderDropdown = (type: "dienst" | "blog" | "user") => {
    if (!isMounted) return null;

    if (type === "user") {
      return (
        <div className={`absolute right-0 mt-2 w-48 bg-white text-black shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${openDropdown === "user"
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col py-1">
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-blue-50" onClick={() => setOpenDropdown(null)}>My Profile</Link>
            </li>
            <li>
              <Link href="/SettingsContent" className="block px-4 py-2 hover:bg-blue-50" onClick={() => setOpenDropdown(null)}>My Settings</Link>
            </li>
          </ul>
        </div>
      );
    }

    const items = type === "dienst"
      ? ["SPA", "Web Development", "E-Commerce"]
      : ["SAP Integration", "Digital Marketing Tips", "Tech Trends"];
    const width = type === "dienst" ? "w-48" : "w-56";

    return (
      <div className={`absolute left-0 mt-2 ${width} bg-white text-black shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${openDropdown === type ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-1">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                href={`/dienst?page=${item.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-2 hover:bg-blue-50"
                onClick={() => setOpenDropdown(null)}
              >
                {item}
              </Link>

            </li>
          ))}
        </ul>
      </div>
    );
  };

  if (!isMounted) return null;

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg">
      <Link href="/" className="text-2xl font-bold mb-4 lg:mb-0">
        <span className="text-white">E</span>
        <span className="text-blue-400">commerce</span>
      </Link>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center w-full lg:w-auto">
        {/* LEFT SIDE MENU */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          <div className="relative" ref={dienstRef}>
            <button onClick={() => handleDropdown("dienst")} className="flex items-center hover:text-blue-300 transition-colors duration-300">
              Dienstleistungen
              <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === "dienst" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {renderDropdown("dienst")}
          </div>

          <Link href="/kundenstimmen" className="hover:text-blue-300 transition-colors duration-300">Kundenstimmen</Link>

          <div className="relative" ref={blogRef}>
            <button onClick={() => handleDropdown("blog")} className="flex items-center hover:text-blue-300 transition-colors duration-300">
              Blog
              <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === "blog" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {renderDropdown("blog")}
          </div>

          <Link href="/karriere" className="hover:text-blue-300 transition-colors duration-300">Karriere</Link>

          {/* Contact Info */}
          <div className="flex flex-row text-sm text-gray-300 mt-2 lg:mt-0 gap-6">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+49 123 456789</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@company.de</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE → Login/Register/User */}
        <div className="flex items-center mt-4 lg:mt-0 gap-4 text-white">
          {!isLoggedIn ? (
            <>
              <Link href="/auth/login" className="hover:text-blue-400 transition-colors duration-300" title="Login">
                <FaSignInAlt size={22} />
              </Link>
              <Link href="/auth/register" className="hover:text-blue-400 transition-colors duration-300" title="Register">
                <FaUserPlus size={22} />
              </Link>
            </>
          ) : (
            <>
              <div className="relative" ref={userRef}>
                <button onClick={() => handleDropdown("user")} className="hover:text-blue-400 transition-colors duration-300" title="Account">
                  <FaUser size={22} />
                </button>
                {renderDropdown("user")}
              </div>
              <button onClick={handleLogout} className="hover:text-red-400 transition-colors duration-300" title="Logout">
                <FaSignOutAlt size={22} />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
