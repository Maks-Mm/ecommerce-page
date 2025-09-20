//app/components/ClientHelper.tsx
"use client";

import { useState } from "react";
import { SiGooglemessages, SiWhatsapp, SiInstagram } from "react-icons/si";

export default function ClientHelper() {
  const [open, setOpen] = useState(false);

  const options = [
    { name: "Help", link: "https://wa.me/123456789", icon: <SiGooglemessages /> },
    { name: "Consulting", link: "https://wa.me/123456789", icon: <SiWhatsapp /> },
    { name: "Termin", link: "https://wa.me/123456789", icon: <SiWhatsapp /> },
    { name: "Social Media", link: "https://instagram.com/yourpage", icon: <SiInstagram /> },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Expandable Options */}
      {open && (
        <div className="flex flex-col mb-2 space-y-2 bg-white shadow-lg rounded-xl p-3">
          {options.map((option) => (
            <a
              key={option.name}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {option.icon}
              {option.name}
            </a>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition text-2xl"
      >
        {open ? "×" : <SiGooglemessages />}
      </button>
    </div>
  );
}
