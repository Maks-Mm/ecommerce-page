//app/components/TimeLabelButtons.tsx

"use client";

import React, { useState } from 'react';
import { FaTrash, FaEye, FaPlus, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    name: 'Löschen',
    icon: FaTrash,
    title: 'Entfernung von unerwünschten Bewertungen',
    description:
      'Wir löschen unerwünschte Google Bewertungen schnell und zuverlässig. Sie zahlen erst nach erfolgreicher Durchführung.',
  },
  {
    name: 'Überwachen',
    icon: FaEye,
    title: 'Überwachung Ihrer Bewertungen',
    description:
      'Wir überwachen Ihr Unternehmen auf neue Bewertungen und geben Ihnen sofortiges Feedback.',
  },
  {
    name: 'Aufbauen',
    icon: FaPlus,
    title: 'Aufbau positiver Bewertungen',
    description:
      'Wir helfen Ihnen, positive Bewertungen zu generieren, um Ihre Online-Reputation zu stärken.',
  },
  {
    name: 'Skalieren',
    icon: FaChartLine,
    title: 'Skalierung Ihres Erfolgs',
    description:
      'Optimieren Sie Ihre Prozesse und skalieren Sie Ihre Online-Reputation effizient.',
  },
];

const TimeLabelButtons: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
      {/* Tab buttons */}
      <div className="flex bg-gray-100">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <button
              key={step.name}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition ${
                idx === activeStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveStep(idx)}
            >
              <Icon /> {step.name}
            </button>
          );
        })}
      </div>

      {/* Card content */}
      <div className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {steps[activeStep].title}
        </h2>
        <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
          Kontakt aufnehmen
        </button>
      </div>
    </div>
  );
};

export default TimeLabelButtons;
