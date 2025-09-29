// app/components/Hero.tsx
"use client";

import React, { JSX } from 'react';
import { DynamicAd } from './DynamicAd';
import { GiConfirmed } from 'react-icons/gi';
import { useState } from 'react';
import TimeLabelButtons from './TimeLabelButtons';
import { FaTrash, FaTasks, FaStar } from 'react-icons/fa';
//import { AdsList } from './AdsList';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {

  type HeroString =
    | 'Bewertungen löschen'
    | 'Bewertungen effizient verwalten'
    | 'Positive Bewertungen aufbauen';

  const stringIcons: Record<HeroString, JSX.Element> = {
    'Bewertungen löschen': <FaTrash className="text-gray-600 w-5 h-5" />,
    'Bewertungen effizient verwalten': <FaTasks className="text-gray-600 w-5 h-5" />,
    'Positive Bewertungen aufbauen': <FaStar className="text-gray-600 w-5 h-5" />,
  };

  const [activeStep, setActiveStep] = useState(0);




  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen">

      {/* HERO BOX */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT: Hero text */}
          <div className="text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block text-[#51a2ff]">
                Perfektionieren
              </span>
              <span className="block text-gray-800 mt-2">Sie den Online-Auftritt</span>
              <span className="block text-gray-800">Ihres Unternehmens</span>
            </h1>

            <div className="mt-6 md:mt-8 space-y-3 text-gray-700 text-base md:text-lg">
              {(Object.keys(stringIcons) as HeroString[]).map((text, idx) => (
                <button
                  key={idx}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => console.log(text)}
                >
                  {/* Icon */}
                  <span className="mr-3">{stringIcons[text]}</span>
                  <span className="font-medium">{text}</span>
                </button>
              ))}
            </div>



            <button
              className="mt-6 md:mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              aria-label="Jetzt Kontakt aufnehmen"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </div>

          {/* RIGHT: Hero image */}
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

      {/* SOLUTIONS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Unsere Lösungen für Ihr Unternehmen:</h1>
          <p className="text-gray-600 mb-4">
            Gute Bewertungen, ein positiver Markenauftritt und eine tadellose Reputation sind heute die Basis und ein
            unabdingbarer Baustein Ihres Erfolges. Onno Plus unterstützt Sie dabei.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Unser Angebot ist ideal für Sie, wenn...</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <GiConfirmed className="mr-2 text-blue-500 text-xl" /> Sie ein Ladengeschäft oder mehrere Filialen besitzen
            </li>
            <li className="flex items-center">
              <GiConfirmed className="mr-2 text-blue-500 text-xl" /> Sie sich von Ihrer Konkurrenz abheben möchten
            </li>
            <li className="flex items-center">
              <GiConfirmed className="mr-2 text-blue-500 text-xl" /> Sie durch Bewertungen benachteiligt wurden
            </li>
            <li className="flex items-center">
              <GiConfirmed className="mr-2 text-blue-500 text-xl" /> Sich echte Profis um Ihre Online-Bewertungen kümmern sollen
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
            Kontakt aufnehmen
          </button>
        </div>

        {/* RIGHT SIDE (4 CARDS with icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-xl p-6 flex flex-col items-start hover:shadow-lg transition"
            >
              <div className="flex items-center mb-3">
                <GiConfirmed className="mr-2 text-blue-500 text-xl" />
                <h2 className="text-lg font-semibold text-gray-800">Bewertungen löschen</h2>
              </div>
              <p className="text-gray-600 mb-4">
                auf allen gängigen Portalen wie Google, Kununu und Co.
              </p>
              <button className="mt-auto text-blue-600 font-medium hover:underline">
                Mehr erfahren
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* ONLINE-REPUTATION SECTION */}
      <section className="relative text-gray-900 bg-white w-screen max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center py-16 md:py-24">
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ihre Online-Reputation ist heutzutage so wichtig wie nie zuvor
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Vertrauen ist die Währung im digitalen Zeitalter. Sorgen Sie dafür, dass Ihr Unternehmen überall positiv wahrgenommen wird.
          </p>
        </div>

        {/* 3 COLUMNS STATS with circular percent bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* 79% */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm">
            <div className="relative w-28 h-28 mb-4">
              <div
                className="w-28 h-28 rounded-full"
                style={{
                  background: `conic-gradient(#51a2ff 0% 79%, #e5e7eb 79% 100%)`,
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">79%</span>
              </div>
            </div>
            <p className="mt-2 text-gray-700">
              Vertrauen Bewertungen genauso wie persönlichen Empfehlungen
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Quelle: BrightLocal Studie, 2020
            </p>
          </div>

          {/* 74% */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm">
            <div className="relative w-28 h-28 mb-4">
              <div
                className="w-28 h-28 rounded-full"
                style={{
                  background: `conic-gradient(#51a2ff 0% 74%, #e5e7eb 74% 100%)`,
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">74%</span>
              </div>
            </div>
            <p className="mt-2 text-gray-700">
              Lesen oft oder vor jedem Kauf Online-Bewertungen und Meinungen
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Quelle: Capterra Nutzerstudie, 2019
            </p>
          </div>

          {/* 92% */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm">
            <div className="relative w-28 h-28 mb-4">
              <div
                className="w-28 h-28 rounded-full"
                style={{
                  background: `conic-gradient(#51a2ff 0% 92%, #e5e7eb 92% 100%)`,
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">92%</span>
              </div>
            </div>
            <p className="mt-2 text-gray-700">
              Entscheiden sich nach dem Lesen einer negativen Bewertung eher für ein anderes Unternehmen
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Quelle: BrightLocal Studie, 2020
            </p>
          </div>
        </div>
      </section>



      {/* PROBLEMS SECTION */}
      <section className="relative py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Welche Probleme entstehen durch Bewertungen?
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Negative Bewertungen können das Vertrauen Ihrer Kunden schwächen
            und langfristig Ihren Unternehmenserfolg gefährden.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: 1,
              text: "Es stehen nachteilige Bewertungen über Sie oder Ihr Unternehmen im Internet.",
              img: "1000_F_559643360_oqEqtrmAv2bycK4byljdViiy6WGUZ7hN-removebg-preview.png",
            },
            {
              id: 2,
              text: "Ihr Ranking und die Auffindbarkeit auf Bewertungsplattformen verschlechtert sich.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6IxGB7UhFe9d0sHtNLLFZBxV575Mn36QRg&s",
            },
            {
              id: 3,
              text: "Ihre Kunden gehen zur Konkurrenz und wahrscheinlich müssen Sie Umsatzeinbußen akzeptieren.",
              img: "images-removebg-preview.png",
            },
            {
              id: 4,
              text: "Ihnen fehlt die Zeit und die Ressourcen, um Ihre Online-Reputation aktiv zu verwalten.",
              img: "closed-stamp-text-letters-concept-260nw-2110895720-removebg-preview.png",
            },
          ].map((card) => (
            <div
              key={card.id}
              className="bg-white shadow p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-blue-500 mb-3">{card.id}</div>
              <img
                src={card.img}
                alt={`Problem ${card.id}`}
                className="w-20 h-20 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 text-sm md:text-base">{card.text}</p>
            </div>
          ))}
        </div>
      </section>





      {/* STEP-BY-STEP REPUTATION SECTION (Clean, full-width) */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Wir setzen am Kern des Problems an
          </h2>
          <p className="text-gray-800 text-lg md:text-xl mb-6">
            Wir begleiten Sie Schritt für Schritt beim Aufbau Ihrer Online-Reputation.
          </p>
          {/* Optional: Step navigation buttons */}
          <TimeLabelButtons />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">

          {/* Left Side - About / Innovative Section */}
          <div className="lg:w-1/2 flex flex-col justify-start space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Onno Plus: innovativ & persönlich</h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Wir helfen dem Mittelstand mit einem professionellen Online-Auftritt zu mehr Reichweite und einer positiven Außendarstellung. Lernen Sie uns kennen!
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
              Über uns
            </button>

            {/* Optional left side boxes or extra info */}
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold">Innovativ</span>
                <p className="text-gray-700">Neue Ansätze für Ihre Online-Reputation.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold">Präsentation</span>
                <p className="text-gray-700">Professionell und ansprechend für Ihre Kunden.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Team / Stats Section */}
          <div className="lg:w-1/2 flex flex-col justify-start space-y-6 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Werde Teil unseres aufstrebenden Teams</h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Onno Plus ist stets auf der Suche nach Talenten, die uns auf unserem Weg unterstützen wollen, die führende Online-Reputations-Plattform Europas zu werden.
            </p>

            {/* Stats Boxes */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold">50+</span>
                <p className="text-gray-700">zufriedene Mitarbeiter</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold">10+</span>
                <p className="text-gray-700">verschiedene Nationalitäten</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold">12.000+</span>
                <p className="text-gray-700">zufriedene Kunden</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold">175.000+</span>
                <p className="text-gray-700">gelöschte Bewertungen</p>
              </div>
            </div>

            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition">
              Bewirb dich jetzt
            </button>
          </div>

        </div>
      </section>

      {/* ADS SECTION */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Neues aus unserem Blog</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Hier finden Sie die neuesten Beiträge rund um das wichtige Thema Reputationsmanagement</p>
      </div>

      <section className="relative w-full bg-blue-50 py-20 px-6 text-center">

        <DynamicAd size="medium" className="mx-auto max-w-lg" />


      </section>



    </div>
  );
};

export default Hero;
