"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiGooglemessages, SiInstagram, SiWhatsapp } from "react-icons/si";
import {
  FaRegHandshake,
  FaRegCalendarAlt,
  FaBoxOpen,
  FaCreditCard,
  FaMapMarkerAlt,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaChevronDown,
} from "react-icons/fa";

// Declare a minimal type for the PayPal SDK on window (keeps TS happy).
declare global {
  interface Window {
    paypal?: any;
  }
}

const optionContents = {
  Hilfe: (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Hilfe & Support</h2>
      
      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2 text-red-700">🚨 Dringende Hilfe</h3>
        <p className="text-red-600 text-sm mb-3">Bei akuten Problemen sofort Kontakt:</p>
        <div className="flex gap-2">
          <a href="tel:+49123456789" className="flex-1 bg-red-500 text-white text-center py-2 rounded hover:bg-red-600 transition-colors text-sm">
            Anrufen
          </a>
          <a href="https://wa.me/49123456789" className="flex-1 bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition-colors text-sm">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Contact Options */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg mb-2">Kontaktwege</h3>
        
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <FaPhone className="text-blue-500 text-xl" />
          <div className="flex-1">
            <div className="font-medium">Telefon</div>
            <div className="text-sm text-gray-600">Mo-Fr 9:00-18:00</div>
          </div>
          <a href="tel:+49123456789" className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            Anruf
          </a>
        </div>

        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
          <SiWhatsapp className="text-green-500 text-xl" />
          <div className="flex-1">
            <div className="font-medium">WhatsApp</div>
            <div className="text-sm text-gray-600">Schnelle Antwort</div>
          </div>
          <a href="https://wa.me/49123456789" className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
            Chat
          </a>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <FaEnvelope className="text-gray-600 text-xl" />
          <div className="flex-1">
            <div className="font-medium">E-Mail</div>
            <div className="text-sm text-gray-600">Antwort in 24h</div>
          </div>
          <a href="mailto:support@ihrefirma.de" className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">
            Mail
          </a>
        </div>
      </div>

      {/* Live Chat */}
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <FaClock className="text-purple-500 text-xl" />
          <div>
            <h3 className="font-semibold">Live Chat</h3>
            <p className="text-sm text-gray-600">Jetzt verfügbar</p>
          </div>
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition-colors font-medium">
          Chat starten
        </button>
      </div>

      {/* FAQ Section - Collapsible */}
      <div className="border border-gray-200 rounded-lg">
        <details className="group">
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
            <span className="font-semibold">Häufige Fragen</span>
            <FaChevronDown className="text-gray-500 group-open:rotate-180 transition-transform" />
          </summary>
          <div className="px-4 pb-4 space-y-2">
            {[
              "Wie verfolge ich meine Bestellung?",
              "Was sind die Lieferzeiten?",
              "Kann ich meine Bestellung ändern?",
              "Wie läuft die Rückgabe ab?"
            ].map((question, index) => (
              <button
                key={index}
                className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </details>
      </div>
    </div>
  ),
  
  Beratung: (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Persönliche Beratung</h2>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-lg mb-3">Kostenlose Erstberatung</h3>
        <p className="text-gray-700 mb-4 text-sm">
          Lassen Sie sich von unseren Experten unverbindlich beraten.
        </p>
        
        <div className="space-y-2 text-sm">
          {[
            "Individuelle Lösungsvorschläge",
            "Detaillierte Produktvorstellungen", 
            "Persönliche Betreuung"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
        Termin vereinbaren
      </button>
    </div>
  ),

  "Soziale Medien": (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Folgen Sie uns</h2>
      
      <div className="grid grid-cols-1 gap-3">
        {[
          { platform: "Instagram", icon: <SiInstagram />, color: "from-purple-500 to-pink-500", text: "News & Stories" },
          { platform: "Facebook", icon: <SiGooglemessages />, color: "bg-blue-600", text: "Community & Events" },
          { platform: "Twitter/X", icon: <div>𝕏</div>, color: "bg-gray-800", text: "Updates & Support" }
        ].map((social, index) => (
          <a 
            key={index} 
            href="#" 
            className={`flex items-center gap-3 p-3 text-white rounded-lg hover:shadow-lg transition-all ${
              social.color.includes('bg') ? social.color : `bg-gradient-to-r ${social.color}`
            }`}
          >
            <span className="text-xl">{social.icon}</span>
            <div className="flex-1">
              <div className="font-semibold">{social.platform}</div>
              <div className="text-sm opacity-90">{social.text}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  ),

  Bestellung: (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Ihre Bestellung</h2>
      
      <div className="space-y-3">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold mb-2">📦 Bestellstatus</h3>
          <input 
            type="text" 
            placeholder="Bestellnummer"
            className="w-full p-2 border border-gray-300 rounded mb-2 text-sm"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-sm">
            Status abfragen
          </button>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold mb-2">🔄 Retoure</h3>
          <p className="text-sm text-gray-600 mb-2">Einfache Rückgabe in 30 Tagen</p>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm">
            Retoure starten
          </button>
        </div>
      </div>
    </div>
  ),

  Zahlung: (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Sichere Zahlung</h2>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-lg mb-3">💳 Verschiedene Zahlungsmethoden</h3>
        <p className="text-gray-700 mb-4 text-sm">
          Wählen Sie Ihre bevorzugte Zahlungsmethode für eine sichere und schnelle Abwicklung.
        </p>
        
        <div className="space-y-2 text-sm">
          {[
            "PayPal - Schnell und sicher",
            "Kreditkarte - Visa, Mastercard", 
            "Überweisung - Klassisch und sicher"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border border-gray-200 rounded-lg">
        <h3 className="font-semibold mb-2">💰 Jetzt bezahlen mit PayPal</h3>
        <p className="text-sm text-gray-600 mb-3">Sichere Zahlung in wenigen Klicks</p>
        <div id="paypal-button-container" className="mt-2" />
      </div>
    </div>
  ),

  // JETZT ENTWICKELTE OPTIONEN - mit gleichen Stilen wie existierende
  Termin: (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Termin vereinbaren</h2>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-lg mb-3">📅 Persönliche Terminvereinbarung</h3>
        <p className="text-gray-700 mb-4 text-sm">
          Vereinbaren Sie bequem einen Termin für eine persönliche Beratung vor Ort oder online.
        </p>
        
        <div className="space-y-2 text-sm">
          {[
            "Vor-Ort Beratung in unseren Filialen",
            "Video-Call Termine verfügbar", 
            "Flexible Zeiten nach Vereinbarung"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold mb-2">🗓️ Termin auswählen</h3>
          <div className="space-y-2">
            <select className="w-full p-2 border border-gray-300 rounded text-sm">
              <option>Terminart auswählen</option>
              <option>Vor-Ort Beratung</option>
              <option>Video-Call</option>
              <option>Telefonische Beratung</option>
            </select>
            <input 
              type="datetime-local" 
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors font-medium mt-3">
            Termin buchen
          </button>
        </div>
      </div>
    </div>
  ),

  Standorte: (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Unsere Standorte</h2>
      
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="font-semibold text-lg mb-3">📍 Filialen in Ihrer Nähe</h3>
        <p className="text-gray-700 mb-4 text-sm">
          Besuchen Sie uns in einer unserer Filialen - wir beraten Sie gerne persönlich.
        </p>
      </div>

      <div className="space-y-3">
        {[
          {
            name: "Berlin Mitte",
            address: "Hauptstraße 123, 10115 Berlin",
            hours: "Mo-Fr: 9:00-18:00, Sa: 10:00-14:00",
            phone: "+49 30 12345678"
          },
          {
            name: "Hamburg Zentrum", 
            address: "Alsterarkaden 45, 20354 Hamburg",
            hours: "Mo-Fr: 9:30-18:30, Sa: 10:00-16:00",
            phone: "+49 40 87654321"
          },
          {
            name: "München City",
            address: "Marienplatz 8, 80331 München", 
            hours: "Mo-Fr: 9:00-19:00, Sa: 10:00-15:00",
            phone: "+49 89 13579246"
          }
        ].map((location, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">{location.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{location.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-500" />
                <span>{location.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-500" />
                <span>{location.phone}</span>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors text-sm mt-3">
              Route anzeigen
            </button>
          </div>
        ))}
      </div>
    </div>
  ),

  Feedback: (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Ihr Feedback</h2>
      
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-lg mb-3">💫 Teilen Sie uns Ihre Meinung mit</h3>
        <p className="text-gray-700 mb-4 text-sm">
          Wir sind stets bemüht, unseren Service zu verbessern und freuen uns über Ihr Feedback.
        </p>
        
        <div className="space-y-2 text-sm">
          {[
            "Konstruktive Kritik hilft uns besser zu werden",
            "Positive Rückmeldungen motivieren unser Team", 
            "Anregungen für neue Features willkommen"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold mb-2">📝 Feedback-Formular</h3>
          <div className="space-y-3">
            <select className="w-full p-2 border border-gray-300 rounded text-sm">
              <option>Feedback-Kategorie auswählen</option>
              <option>Produktbewertung</option>
              <option>Service-Bewertung</option>
              <option>Verbesserungsvorschlag</option>
              <option>Problemmeldung</option>
            </select>
            <input 
              type="text" 
              placeholder="Ihr Name (optional)"
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
            <textarea 
              placeholder="Ihr Feedback..."
              rows={4}
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Bewertung:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} className="text-yellow-400 hover:text-yellow-500">
                  <FaStar />
                </button>
              ))}
            </div>
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition-colors font-medium mt-3">
            Feedback absenden
          </button>
        </div>
      </div>
    </div>
  ),
} as const;

// KORREKTE TYP-DEFINITION - Jetzt mit allen Optionen
type OptionKey = keyof typeof optionContents;
type Option = { name: OptionKey; icon: React.ReactNode };

// PaymentPanel handles loading the PayPal SDK and rendering the button into a ref.
function PaymentPanel({ amount = "10.00" }: { amount?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let retries = 0;
    const interval = setInterval(() => {
      if (window.paypal && containerRef.current) {
        window.paypal.Buttons({
          createOrder: (data: any, actions: any) =>
            actions.order.create({
              purchase_units: [{ amount: { value: amount } }],
            }),
          onApprove: async (data: any, actions: any) => {
            const details = await actions.order.capture();
            alert(`Zahlung abgeschlossen von ${details?.payer?.name?.given_name ?? "Käufer"}`);
          },
        }).render(containerRef.current);

        clearInterval(interval);
      } else if (retries > 20) {
        console.error("PayPal SDK not available after waiting");
        clearInterval(interval);
      }
      retries++;
    }, 200);

    return () => clearInterval(interval);
  }, [amount]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Zahlung</h2>
      <p>Bezahlen Sie einfach und sicher mit PayPal.</p>
      <div ref={containerRef} id="paypal-button-container" className="mt-4" />
    </div>
  );
}

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
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full max-h-[85vh] flex flex-col">
            <button
              onClick={() => setSelected(null)}
              className="self-end text-gray-400 hover:text-gray-700 text-2xl mb-2"
              aria-label="Schließen"
            >
              ×
            </button>
            <div className="overflow-y-auto flex-1">
              {selected === "Zahlung" ? <PaymentPanel amount="10.00" /> : optionContents[selected]}
            </div>
          </div>
        </div>
      )}

      {open && !selected && (
        <div className="flex flex-col mb-2 space-y-2 bg-white shadow-lg rounded-xl p-3 max-h-[70vh] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.name}
              onClick={() => setSelected(option.name)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
            >
              {option.icon}
              {option.name}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition text-2xl"
        aria-label="Hilfsmenü"
      >
        {open ? "×" : <SiGooglemessages />}
      </button>
    </div>
  );
}