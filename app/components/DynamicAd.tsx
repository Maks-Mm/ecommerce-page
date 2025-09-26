// components/DynamicAd.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchAds, Ad } from "@/lib/fetchAds";

interface DynamicAdProps {
  size?: "small" | "medium" | "large";
  className?: string; // 👈 allow className
}

export default function DynamicAd({ size = "medium", className = "" }: DynamicAdProps) {
  const [ad, setAd] = useState<Ad | null>(null);

  useEffect(() => {
    async function loadRandomAd() {
      const ads = await fetchAds();
      if (ads.length > 0) {
        const random = ads[Math.floor(Math.random() * ads.length)];
        setAd(random);
      }
    }
    loadRandomAd();
  }, []);

  if (!ad) return null;

  return (
    <a
      href={ad.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block border rounded-xl shadow p-3 text-center transition hover:shadow-lg ${
        size === "large" ? "w-full" : "max-w-sm"
      } ${className}`} // 👈 merge custom className
    >
      {ad.imageUrl && (
        <img
          src={ad.imageUrl}
          alt={ad.title}
          className="mx-auto mb-2 rounded-lg object-cover"
        />
      )}
      <h3 className="text-base font-semibold">{ad.title}</h3>
      <p className="text-gray-600 text-sm">{ad.description}</p>
    </a>
  );
}
