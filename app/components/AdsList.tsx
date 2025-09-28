// components/AdsList.tsx
// ==========================================
"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface AdListItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
}

export function AdsList() {
  const [ads, setAds] = useState<AdListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdsList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ADS-GOOGLE"));
        const fetchedAds: AdListItem[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as AdListItem[];
        setAds(fetchedAds);
      } catch (err) {
        console.error("Error fetching ads:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdsList();
  }, []);

  if (loading) return <div className="p-4 text-gray-500">Loading ads...</div>;
  if (!ads.length) return <div className="p-4 text-gray-500">No ads found.</div>;

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {ads.map((ad) => (
        <a
          key={ad.id}
          href={ad.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white overflow-hidden"
        >
          {ad.imageUrl && (
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{ad.title}</h3>
            {ad.description && <p className="mt-1 text-sm text-gray-600">{ad.description}</p>}
            <p className="mt-2 text-xs text-gray-400">Sponsored</p>
          </div>
        </a>
      ))}
    </div>
  );
}
