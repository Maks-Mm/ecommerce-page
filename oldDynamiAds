"use client";

import { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const PUBLISHER_ID = "ca-pub-5404208486949480";
const TEST_CLIENT = "ca-pub-3940256099942544";
const TEST_SLOT = "6300978111";

type Size = "small" | "medium" | "large";

interface DynamicAdProps {
  slotId?: string;
  size?: Size;
  className?: string;
}

// Correct AdSense global interface
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function DynamicAd({ slotId, size = "medium", className = "" }: DynamicAdProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ads, setAds] = useState<any[]>([]);
  const [simIndex, setSimIndex] = useState(0);
  const [adInitialized, setAdInitialized] = useState(false);
  
  // Use test mode in development
  const TEST_MODE = process.env.NODE_ENV === "development";
  const height = size === "large" ? 250 : size === "small" ? 60 : 120;

  // Fetch ads from Firestore if no slotId and not in test mode
  useEffect(() => {
    if (slotId || TEST_MODE) return;

    const fetchAds = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ads"));
        const fetchedAds = querySnapshot.docs.map((doc) => doc.data());
        setAds(fetchedAds.length ? fetchedAds : []);
      } catch (err) {
        console.warn("Error fetching ads:", err);
      }
    };

    fetchAds();
  }, [slotId, TEST_MODE]);

  // Rotate ads
  useEffect(() => {
    if (slotId || TEST_MODE || ads.length === 0) return;
    const t = setInterval(() => setSimIndex((s) => (s + 1) % ads.length), 5000);
    return () => clearInterval(t);
  }, [ads, slotId, TEST_MODE]);

  // Initialize AdSense
  useEffect(() => {
    if (!slotId && !TEST_MODE) return;
    if (adInitialized) return;

    const initializeAdSense = () => {
      try {
        // Initialize the ad - this is the correct way AdSense expects
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdInitialized(true);
      } catch (err) {
        console.warn("AdSense initialization error:", err);
      }
    };

    if (typeof window === "undefined") return;

    if (window.adsbygoogle) {
      initializeAdSense();
    } else {
      // Load the script
      const script = document.createElement("script");
      const client = TEST_MODE ? TEST_CLIENT : PUBLISHER_ID;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      
      script.onload = () => {
        setTimeout(initializeAdSense, 100);
      };
      
      script.onerror = () => {
        console.warn("AdSense script failed to load");
      };

      document.head.appendChild(script);
    }
  }, [slotId, TEST_MODE, adInitialized]);

  // Render Google ad if slotId exists or in test mode
  if (slotId || TEST_MODE) {
    const client = TEST_MODE ? TEST_CLIENT : PUBLISHER_ID;
    const slot = TEST_MODE ? TEST_SLOT : slotId;

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

  // Render Firestore ad or fallback
  const ad = ads[simIndex] || {
    title: "Cloud-Speicherlösungen",
    description: "Sichern Sie Ihre Unternehmensdaten.",
    imageUrl: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    link: "#",
  };

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
              src={`${ad.imageUrl}?v=${Date.now()}`}
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