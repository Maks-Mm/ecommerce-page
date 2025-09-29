// app/components/ClientHelper.tsx
"use client";

import * as React from "react";
import { useState } from "react";
import { SiGooglemessages, SiInstagram } from "react-icons/si";
import {
} from "react-icons/si";
import {
  FaRegHandshake,
  FaRegCalendarAlt,
  FaBoxOpen,
  FaCreditCard,
  FaMapMarkerAlt,
  FaStar
} from "react-icons/fa";

const optionContents = {
  Hilfe: (
    <div>
      <h2 className="text-xl font-bold mb-2">Hilfe</h2>
      <p>Hier können Sie Hilfe zu unseren Services erhalten. Schreiben Sie uns direkt im Chat!</p>
    </div>
  ),
  Beratung: (
    <div>
      <h2 className="text-xl font-bold mb-2">Beratung</h2>
      <p>Vereinbaren Sie eine Beratung mit unserem Team. Wir helfen Ihnen gerne weiter!</p>
    </div>
  ),
  Termin: (
    <div>
      <h2 className="text-xl font-bold mb-2">Termin</h2>
      <p>Buchen Sie einen Termin für ein persönliches Gespräch oder eine Online-Beratung.</p>
    </div>
  ),
  "Soziale Medien": (
    <div>
      <h2 className="text-xl font-bold mb-2">Soziale Medien</h2>
      <p>Folgen Sie uns auf Instagram für aktuelle News und Tipps!</p>
    </div>
  ),
  Bestellung: (
    <div>
      <h2 className="text-xl font-bold mb-2">Bestellung</h2>
      <p>Fragen zu Lieferung, Versand oder Rückgabe? Hier finden Sie Hilfe.</p>
    </div>
  ),
  Zahlung: (
    <div>
      <h2 className="text-xl font-bold mb-2">Zahlung</h2>
      <p>Informationen zu Rechnungen und Zahlungsmethoden.</p>
    </div>
  ),
  Standorte: (
    <div>
      <h2 className="text-xl font-bold mb-2">Standorte</h2>
      <p>Besuchen Sie uns in einer unserer Filialen oder finden Sie den nächstgelegenen Standort.</p>
    </div>
  ),
  Feedback: (
    <div>
      <h2 className="text-xl font-bold mb-2">Feedback</h2>
      <p>Teilen Sie uns Ihre Meinung mit – wir freuen uns über Ihr Feedback!</p>
    </div>
  ),
} as const;


type OptionKey = keyof typeof optionContents;

type Option = {
  name: OptionKey;
  icon: React.ReactNode;
};

export default function ClientHelper() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<OptionKey | null>(null);

  const options: Option[] = [
    { name: "Hilfe", icon: <SiGooglemessages /> },
    { name: "Beratung", icon: <FaRegHandshake /> },
    { name: "Termin", icon: <FaRegCalendarAlt /> },
    { name: "Soziale Medien", icon: <SiInstagram /> },
    { name: "Bestellung", icon: <FaBoxOpen /> },
    { name: "Zahlung", icon: <FaCreditCard /> },
    { name: "Standorte", icon: <FaMapMarkerAlt /> },
    { name: "Feedback", icon: <FaStar /> },
  ];
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Subpage Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
              aria-label="Schließen"
            >
              ×
            </button>
            {optionContents[selected]}
          </div>
        </div>
      )}

      {/* Expandable Options */}
      {open && !selected && (
        <div className="flex flex-col mb-2 space-y-2 bg-white shadow-lg rounded-xl p-3">
          {options.map((option) => (
            <button
              key={option.name}
              onClick={() => setSelected(option.name)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {option.icon}
              {option.name}
            </button>
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
