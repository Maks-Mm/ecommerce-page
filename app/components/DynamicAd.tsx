//app/components/DynamicAd.tsx
"use client"

import React, { useEffect, useState } from 'react';

interface DynamicAdProps {
  section?: 'hero' | 'middle' | 'footer';
  theme?: string;
  size?: 'small' | 'medium' | 'large';
}

interface AdContent {
  title: string;
  imageUrl?: string;
  link: string;
}

const DynamicAd: React.FC<DynamicAdProps> = ({
  section = 'middle',
  theme = 'general',
  size = 'medium',
}) => {
  const [ad, setAd] = useState<AdContent | null>(null);

  useEffect(() => {
    async function fetchAd() {
      const simulatedAds: Record<string, AdContent> = {
        hero: { title: 'Car Insurance Offer', imageUrl: '/ads/car.png', link: '#' },
        middle: { title: 'Online Coaching', imageUrl: '/ads/coaching.png', link: '#' },
        footer: { title: 'Education Platform', imageUrl: '/ads/education.png', link: '#' },
      };
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

  let height = '100px';
  if (size === 'large') height = '250px';
  if (size === 'small') height = '50px';

  return (
    <a href={ad.link} target="_blank" rel="noopener noreferrer">
      <div
        className="w-full bg-gray-100 flex flex-col items-center justify-center p-4 mt-6 border border-gray-300 rounded"
        style={{ height }}
      >
        {ad.imageUrl && <img src={ad.imageUrl} alt={ad.title} className="mb-2 max-h-32 object-contain" />}
        <span className="text-gray-800 font-medium">{ad.title}</span>
      </div>
    </a>
  );
};

export default DynamicAd;
