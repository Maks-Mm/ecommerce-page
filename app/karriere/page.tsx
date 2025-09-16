// app/Karriere/page.tsx
"use client";

import React, { useState } from "react";
//import Link from "next/link";


function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.81 8.44-4.94 8.44-9.93z" fill="#3b5998" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.1A4.9 4.9 0 1 0 16.9 13 4.9 4.9 0 0 0 12 8.1zM18.3 6.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" fill="#E1306C" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6.94 8.61H4.34V20h2.6V8.61zM5.64 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM20 20h-2.6v-5.3c0-1.26-.02-2.87-1.75-2.87-1.76 0-2.03 1.37-2.03 2.78V20H9.9V8.61h2.5v1.53h.03c.35-.66 1.21-1.36 2.5-1.36 2.67 0 3.16 1.76 3.16 4.05V20z" fill="#0077B5" />
        </svg>
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M22 5.92c-.64.28-1.33.47-2.05.56a3.6 3.6 0 0 0 1.58-1.98 7.13 7.13 0 0 1-2.27.87 3.56 3.56 0 0 0-6.06 3.25 10.1 10.1 0 0 1-7.33-3.72 3.56 3.56 0 0 0 1.1 4.74c-.51 0-1-.15-1.44-.38v.04a3.56 3.56 0 0 0 2.86 3.49c-.49.13-1.01.17-1.54.06a3.57 3.57 0 0 0 3.33 2.48A7.14 7.14 0 0 1 2 18.57 10.07 10.07 0 0 0 7 20c6.04 0 9.36-5 9.36-9.33v-.43A6.64 6.64 0 0 0 22 5.92z" fill="#1DA1F2" />
        </svg>
      </a>
    </div>

  );
}

export default function Karriere() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="w-full bg-gray-50">
      {/* HEADER / HERO */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <header className="flex items-center justify-between">
            <nav className="hidden md:flex gap-3">
              <a href="#offers" className="px-3 py-2 rounded border border-blue-600 text-blue-600 text-sm hover:bg-blue-600 hover:text-white transition-colors">Offene Angebote</a>
              <a href="#whyus" className="px-3 py-2 rounded border border-blue-600 text-blue-600 text-sm hover:bg-blue-600 hover:text-white transition-colors">Warum Local?</a>
            </nav>
          </header>

          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Finde die besten Angebote — lokal & global</h2>
            <p className="mt-2 text-sm text-gray-600">
              Ersetze diesen Text mit deinem echten Hero-Text.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <a href="#offers" className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors">Zu den Angeboten</a>
              <a href="#whyus" className="px-4 py-2 rounded border border-blue-600 text-blue-600 text-sm hover:bg-blue-600 hover:text-white transition-colors">Warum Local?</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-800">Warum unser Service?</h3>
          <p className="mt-2 text-sm text-gray-600">
            Kurze Einleitung — ersetze mit euren Sätzen.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">10.000+</div>
              <div className="text-xs text-gray-600">Nutzer</div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-xs text-gray-600">Marken</div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-xs text-gray-600">Länder</div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS (6 cards) */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-lg font-semibold text-center text-gray-800">Vorteile & Benefits</h4>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Beste Preise", color: "blue", icon: "💰" },
              { title: "Große Auswahl", color: "green", icon: "📦" },
              { title: "Sichere Nutzung", color: "purple", icon: "🔒" },
              { title: "Schnelle Suche", color: "orange", icon: "⚡" },
              { title: "Inspiration & Trends", color: "red", icon: "💡" },
              { title: "Lokale Reichweite", color: "indigo", icon: "🌍" },
            ].map((b, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm text-center hover:shadow-md transition-shadow">
                <div className={`text-2xl mb-2`}>{b.icon}</div>
                <div className={`font-semibold text-${b.color}-600`}>{b.title}</div>
                <div className="text-xs text-gray-500 mt-2">Kurze Beschreibung (replace)</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM (avatar placeholders) */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-lg font-semibold text-gray-800">Unser Team</h4>
          <div className="mt-4 flex gap-3 flex-wrap justify-center">
            {[
              { name: "Anna L.", color: "bg-blue-100 text-blue-800", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" },
              { name: "Ben M.", color: "bg-green-100 text-green-800", img: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww" },
              { name: "Clara K.", color: "bg-purple-100 text-purple-800", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww" },
              { name: "David M.", color: "bg-orange-100 text-orange-800", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Eva F.", color: "bg-red-100 text-red-800", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" },
              { name: "Greg H.", color: "bg-indigo-100 text-indigo-800", img: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            ].map((person, index) => (
              <div
                key={index}
                className={`w-16 h-16 rounded-full ${person.color} flex items-center justify-center text-sm font-medium overflow-hidden`}
                aria-label={person.name}
              >
                {person.img ? (
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                ) : (
                  person.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OFFERS (image placeholders) */}
      <section id="offers" className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-lg font-semibold text-gray-800">Offene Angebote</h4>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D",
                title: "Analyse & Beratung",
                description: "Kurzbeschreibung für Produkt 1",
              },
              {
                img: "https://plus.unsplash.com/premium_photo-1661501681983-d8b1453ba861?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
                title: "Professionelle Dienstleistungen",
                description: "Kurzbeschreibung für Produkt 2",
              },
              {
                img: "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Moderne Lösungen",
                description: "Kurzbeschreibung für Produkt 3",
              },
            ].map((product, index) => (
              <article
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h5 className="font-semibold text-gray-800">{product.title}</h5>
                  <p className="text-xs text-gray-500">{product.description}</p>
                  <div className="mt-3">
                    <a
                      className="px-3 py-2 rounded bg-blue-600 text-white text-sm inline-block hover:bg-blue-700 transition-colors"
                      href="#"
                    >
                      Zum Angebot
                    </a>
                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-lg font-semibold text-center text-gray-800">Häufige Fragen</h4>
          <div className="mt-4 space-y-3">
            {[
              {
                question: "Wie funktioniert Local?",
                answer: "Local verbindet lokale Anbieter mit Kunden in ihrer Umgebung. Unser Algorithmus zeigt dir die besten Angebote basierend auf deinem Standort und deinen Präferenzen."
              },
              {
                question: "Ist die Nutzung kostenlos?",
                answer: "Für Kunden ist die Nutzung komplett kostenlos. Anbieter zahlen eine kleine Gebühr für die Listung ihrer Angebote auf unserer Plattform."
              },
              {
                question: "Wie oft werden die Angebote aktualisiert?",
                answer: "Unsere Angebote werden täglich aktualisiert. Wir arbeiten eng mit unseren Partnern zusammen, um sicherzustellen, dass alle Informationen aktuell und korrekt sind."
              },
              {
                question: "Brauche ich ein Konto?",
                answer: "Für die reine Suche nach Angeboten benötigst du kein Konto. Um Angebote zu buchen oder zu speichern, ist die Erstellung eines kostenlosen Kontos erforderlich."
              },
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="mt-2 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    <div className="max-w-6xl mx-auto flex justify-center mb-6 bg-white">
  <SocialIcons className="bg-white" />
</div>



    </main>
  );
}