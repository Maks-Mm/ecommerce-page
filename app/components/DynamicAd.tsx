"use client";

import React, { useEffect, useRef, useState } from "react";

/* ---------- CONFIG ---------- */
const PUBLISHER_ID = "ca-pub-5404208486949480";
//const TEST_MODE = false;
const TEST_MODE = process.env.NODE_ENV !== "production";

const TEST_CLIENT = "ca-pub-3940256099942544";
const TEST_SLOT = "6300978111";

const adSlotMap: Record<string, string> = {
  "hero": "4898236638",
  "ad-1": "1111111111",
  "ad-2": "2222222222",
  "ad-3": "3333333333",
  "ad-4": "4444444444",
  "ad-5": "5555555555",
  "ad-6": "6666666666",
};

type Size = "small" | "medium" | "large";

interface DynamicAdProps {
  slotId: string;
  size?: Size;
  className?: string;
}

type AdContent = {
  title: string;
  description?: string;
  imageUrl?: string;
  link: string;
};

/* ---------- Simulated Ads ---------- */
const simulatedAds: AdContent[] = [
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
];

/* ---------- Component ---------- */
export default function DynamicAd({ slotId, size = "medium", className = "" }: DynamicAdProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true); // always visible immediately
  const [simIndex, setSimIndex] = useState(0);

  const height = size === "large" ? 250 : size === "small" ? 60 : 120;
  const mappedSlot = adSlotMap[slotId];

  /* ---------- Rotate Simulated Ads ---------- */
  useEffect(() => {
    if (mappedSlot || TEST_MODE) return;
    const t = setInterval(() => setSimIndex((s) => (s + 1) % simulatedAds.length), 5000);
    return () => clearInterval(t);
  }, [mappedSlot]);

  /* ---------- Load Google Ads ---------- */
  useEffect(() => {
    if (!visible) return;
    if (mappedSlot || TEST_MODE) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn("adsbygoogle.push error:", err);
      }
    }
  }, [visible, mappedSlot]);

  /* ---------- Render ---------- */
  if ((mappedSlot || TEST_MODE) && visible) {
    const client = TEST_MODE ? TEST_CLIENT : PUBLISHER_ID;
    const slot = TEST_MODE ? TEST_SLOT : mappedSlot;

    return (
      <div ref={containerRef} className={`w-full ${className}`} aria-hidden>
        <ins
          className="adsbygoogle block"
          style={{ display: "block", width: "100%", minHeight: height }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  /* ---------- Simulated Ad Fallback ---------- */
  const ad = simulatedAds[simIndex];
  return (
    <div
      ref={containerRef}
      className={`w-full ${className}`}
      style={{ minHeight: height }}
      role="region"
      aria-label="Gesponserte Anzeige"
    >
      <a href={ad.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <div className="w-full flex items-center p-3 border border-gray-200 rounded-lg shadow-sm bg-white">
          {ad.imageUrl && (
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-20 h-20 object-cover mr-3 rounded"
              loading="lazy"
            />
          )}
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-gray-900">{ad.title}</div>
            {ad.description && <div className="text-xs text-gray-600">{ad.description}</div>}
          </div>
          <div className="text-xs text-gray-400 ml-3">Gesponsert</div>
        </div>
      </a>
    </div>
  );
}
