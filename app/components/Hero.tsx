// app/components/Hero.tsx
import React from 'react';
import DynamicAd from './DynamicAd';
import { GiConfirmed } from 'react-icons/gi';

export default function Hero() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      {/* ---------------------- */}
      {/* HERO BOX (first content box) - now at the top */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT: hero copy, bullets, CTA */}
          <div className="text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Perfektionieren
              </span>
              <span className="block text-gray-800 mt-2">Sie den Online-Auftritt</span>
              <span className="block text-gray-800">Ihres Unternehmens</span>
            </h1>

            <div className="mt-6 md:mt-8 space-y-3 text-gray-700 text-base md:text-lg">
              <div className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <GiConfirmed className="mt-1 mr-3 text-blue-500 flex-shrink-0 text-xl" />
                <span className="font-medium">Bewertungen löschen</span>
              </div>

              <div className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <GiConfirmed className="mt-1 mr-3 text-blue-500 flex-shrink-0 text-xl" />
                <span className="font-medium">Bewertungen effizient verwalten</span>
              </div>

              <div className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <GiConfirmed className="mt-1 mr-3 text-blue-500 flex-shrink-0 text-xl" />
                <span className="font-medium">Positive Bewertungen aufbauen</span>
              </div>
            </div>

            <button
              className="mt-6 md:mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              aria-label="Jetzt Kontakt aufnehmen"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </div>

          {/* RIGHT: hero image (responsive, constrained heights) */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src={'/heroExample.png'}
                alt="Hero"
                className="relative w-full max-h-64 md:max-h-96 object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- */}
      {/* ADS SECTION HEADER */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Angebote unserer Partner</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Entdecken Sie exklusive Angebote, die speziell für unsere Kunden ausgewählt wurden</p>
      </div>

      {/* ---------------------- */}
      {/* TOP ADS ROW (moved below hero) */}
      <div className="flex flex-col md:flex-row items-stretch gap-6 mb-8">
        {/* Main top banner (left / full-width on mobile) */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Empfohlene Angebote</h3>
            <div
              aria-label="Google Top Ad"
              className="w-full h-24 md:h-40 rounded-xl bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden border border-gray-200"
            >
              <DynamicAd section="top" theme="cars" size="large" />
            </div>
          </div>
        </div>

        {/* Secondary top slot (right on large screens, below on mobile) */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 h-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Spezial-Angebot</h3>
            <div
              aria-label="Google Top Secondary Ad"
              className="w-full h-20 md:h-36 rounded-xl bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden border border-gray-200"
            >
              <DynamicAd section="top-secondary" theme="education" size="medium" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- */}
      {/* MIDDLE CONTENT + AD */}
      <section className="mt-8 md:mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Products</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Check out our latest offers and collections designed to help your business thrive online.</p>
          </div>

          <div className="my-6">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Aktuelle Angebote</h3>
              <div
                aria-label="Google Middle Ad"
                className="w-full h-28 md:h-40 rounded-xl flex items-center justify-center overflow-hidden"
              >
                <DynamicAd section="middle" theme="coaching" size="medium" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CONTENT + FOOTER AD */}
      <section className="mt-8 md:mt-12 mb-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">More Deals</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Don't miss our special discounts and limited-time offers.</p>
          </div>

          <div className="mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Exklusiv für Sie</h3>
              <div
                aria-label="Google Footer Ad"
                className="w-full h-28 md:h-40 rounded-xl flex items-center justify-center overflow-hidden"
              >
                <DynamicAd section="footer" theme="education" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}