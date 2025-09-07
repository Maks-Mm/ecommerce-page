// app/components/DynamicAd.tsx
"use client"

import React, { useEffect, useState } from 'react';

// ✅ Fully typed sections and sizes
export type AdSection = 'top' | 'top-secondary' | 'middle' | 'footer';
export type AdSize = 'small' | 'medium' | 'large';

interface DynamicAdProps {
  section: AdSection;  // required
  theme?: string;
  size?: AdSize;
}

interface AdContent {
  title: string;
  imageUrl?: string;
  link: string;
}

const DynamicAd: React.FC<DynamicAdProps> = ({
  section,
  theme = 'general',
  size = 'medium',
}) => {
  const [ad, setAd] = useState<AdContent | null>(null);

  useEffect(() => {
    async function fetchAd() {
      // ✅ The keys here must match AdSection
      const simulatedAds: Record<AdSection, AdContent> = {
        top: { title: 'Car Insurance Offer', imageUrl: '/ads/car.png', link: '#' },
        'top-secondary': { title: 'Special Education Offer', imageUrl: '/ads/education.png', link: '#' },
        middle: { title: 'Online Coaching', imageUrl: '/ads/coaching.png', link: '#' },
        footer: { title: 'Education Platform', imageUrl: '/ads/education.png', link: '#' },
      };

      // Simulate network delay
      await new Promise((r) => setTimeout(r, 500));
      setAd(simulatedAds[section]);
    }

    fetchAd();
  }, [section]);

  if (!ad) {
    return (
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-600 border border-dashed border-gray-400 mt-6">
        Loading Ad...
      </div>
    );
  }

  // Set height based on size
  let height = '100px';
  if (size === 'large') height = '250px';
  if (size === 'small') height = '50px';

  return (
    <a href={ad.link} target="_blank" rel="noopener noreferrer">
      <div
        className="w-full bg-gray-100 flex flex-col items-center justify-center p-4 mt-6 border border-gray-300 rounded"
        style={{ height }}
      >
        {ad.imageUrl && (
          <img src={ad.imageUrl} alt={ad.title} className="mb-2 max-h-32 object-contain" />
        )}
        <span className="text-gray-800 font-medium">{ad.title}</span>
      </div>
    </a>
  );
};

export default DynamicAd;
