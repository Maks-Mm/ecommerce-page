// components/DynamicAd.tsx
// ==========================================
"use client";

import { useEffect, useState } from "react";
import { fetchAds, Ad } from "@/lib/fetchAds";

interface DynamicAdProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export function DynamicAd({ size = "medium", className = "" }: DynamicAdProps) {
  const [ads, setAds] = useState<Ad[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAds = async () => {
      try {
        const adsData = await fetchAds();
        setAds(adsData);
      } catch (err) {
        console.error("Failed to load ads:", err);
        setError("Failed to load ads");
      }
    };
    loadAds();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!ads.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
      {ads.slice(0, 5).map((ad) => (
        <a
          key={ad.id}
          href={ad.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white overflow-hidden"
        >
          {ad.imageUrl && (
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-32 object-cover"
              loading="lazy"
            />
          )}
          <div className="p-4 flex flex-col justify-center flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{ad.title}</h3>
            {ad.description && <p className="mt-1 text-sm text-gray-600">{ad.description}</p>}
            <p className="mt-2 text-xs text-gray-400">Sponsored</p>
          </div>
        </a>
      ))}
    </div>
  );
}