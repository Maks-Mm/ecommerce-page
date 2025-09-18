"use client";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/* ---------- FIREBASE CONFIG ---------- */
const firebaseConfig = {
  apiKey: "AIza....",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

/* ---------- SERVICE FUNCTION ---------- */
async function getAds() {
  const querySnapshot = await getDocs(collection(db, "ads"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, slotId: doc.data().slotId }));
}

/* ---------- DYNAMIC AD COMPONENT ---------- */
interface DynamicAdProps {
  slotId: string;
  size?: "small" | "medium" | "large";
}

function DynamicAd({ slotId, size = "medium" }: DynamicAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error", err);
    }
  }, [slotId]);

  return (
    <ins
      className="adsbygoogle block"
      style={{ display: "block" }}
      data-ad-client="ca-pub-xxxxxxxx"
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

/* ---------- HERO COMPONENT ---------- */
interface AdData {
  id: string;
  slotId: string;
}

export default function Hero() {
  const [ads, setAds] = useState<AdData[]>([]);

  useEffect(() => {
    getAds().then(setAds).catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Blog Ads Grid
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {ads.map(ad => (
          <div key={ad.id} className="flex flex-col items-center">
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <DynamicAd slotId={ad.slotId} size="medium" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              Beispiel {ad.id}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
