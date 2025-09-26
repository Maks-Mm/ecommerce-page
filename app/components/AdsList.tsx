// components/AdsList.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchAds, Ad } from "@/lib/fetchAds";

export default function AdsList() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    async function loadAds() {
      const data = await fetchAds();
      setAds(data);
    }
    loadAds();
  }, []);

  if (!ads.length) return <p>⚡️ Keine Anzeigen gefunden...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ads.map((ad) => (
        <a
          key={ad.id}
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border p-4 shadow hover:shadow-lg transition"
        >
          {ad.imageUrl && (
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
          )}
          <h3 className="text-lg font-semibold">{ad.title}</h3>
          <p className="text-gray-600 text-sm">{ad.description}</p>
        </a>
      ))}
    </div>
  );
}
