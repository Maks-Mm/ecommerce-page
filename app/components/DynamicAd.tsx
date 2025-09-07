"use client";

import React, { useEffect, useState } from "react";

export type AdSection = "top" | "top-secondary" | "middle" | "footer";
export type AdSize = "small" | "medium" | "large";

interface DynamicAdProps {
  section: AdSection;
  theme?: string;
  size?: AdSize;
}

interface AdContent {
  title: string;
  description?: string;
  imageUrl?: string;
  link: string;
}

const DynamicAd: React.FC<DynamicAdProps> = ({ section, size = "medium" }) => {
  const [ad, setAd] = useState<AdContent | null>(null);
  const [index, setIndex] = useState(0);

  const simulatedAds: Record<AdSection, AdContent[]> = {
    top: [
      {
        title: "Cloud-Speicherlösungen",
        description: "Sichern Sie Ihre Unternehmensdaten.",
        imageUrl: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
        link: "#",
      },
      {
        title: "VPN-Service für Unternehmen",
        description: "Schützen Sie Ihr Team online.",
        imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
        link: "#",
      },
      {
        title: "Business Analytics Tool",
        description: "Treffen Sie klügere Entscheidungen.",
        imageUrl: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
        link: "#",
      },
    ],
    "top-secondary": [
      {
        title: "Digitale Marketing-Plattform",
        description: "Steigern Sie Ihre Online-Präsenz.",
        imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        link: "#",
      },
      {
        title: "E-Mail-Automatisierungssoftware",
        description: "Sparen Sie Zeit & steigern Sie den ROI.",
        imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
        link: "#",
      },
    ],
    middle: [
      {
        title: "Online-Schulungsmodule",
        description: "Bilden Sie Ihr Team weiter.",
        imageUrl: "https://images.pexels.com/photos/3184637/pexels-photo-3184637.jpeg",
        link: "#",
      },
      {
        title: "Projektmanagement SaaS",
        description: "Organisieren Sie Ihre Projekte.",
        imageUrl: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
        link: "#",
      },
    ],
    footer: [
      {
        title: "Corporate Learning Hub",
        description: "Steigern Sie die Fähigkeiten Ihrer Mitarbeiter.",
        imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        link: "#",
      },
      {
        title: "Business-Beratung",
        description: "Expertenrat für Wachstum.",
        imageUrl: "https://images.pexels.com/photos/3182769/pexels-photo-3182769.jpeg",
        link: "#",
      },
    ],
  };

  useEffect(() => {
    // Setze die initiale Anzeige
    setAd(simulatedAds[section][0]);

    // Anzeigen alle 5 Sekunden rotieren
    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % simulatedAds[section].length;
        setAd(simulatedAds[section][nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [section]);

  if (!ad) {
    return (
      <div className="w-full h-24 flex items-center justify-center bg-gray-100 border border-dashed border-gray-400 mt-6 text-gray-500">
        Anzeige wird geladen...
      </div>
    );
  }

  const height = size === "large" ? "250px" : size === "small" ? "60px" : "120px";

  return (
    <a href={ad.link} target="_blank" rel="noopener noreferrer">
      <div
        className="w-full flex flex-col md:flex-row items-center p-3 mt-6 border border-gray-300 rounded-lg shadow-sm bg-white relative hover:shadow-md transition"
        style={{ height }}
      >
        <span className="absolute top-2 right-2 text-xs text-gray-500">Gesponsert</span>
        {ad.imageUrl && size !== "small" && (
          <img
            src={ad.imageUrl}
            alt={ad.title}
            className="max-h-full max-w-[100px] object-contain mr-3 mb-2 md:mb-0"
          />
        )}
        <div className="flex flex-col justify-center">
          <span className="font-medium text-gray-800">{ad.title}</span>
          {ad.description && <span className="text-gray-600 text-sm">{ad.description}</span>}
        </div>
      </div>
    </a>
  );
};

export default DynamicAd;
