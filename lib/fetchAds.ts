// lib/fetchAds.ts
// ==========================================
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export interface Ad {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
}

export async function fetchAds(): Promise<Ad[]> {
  const querySnapshot = await getDocs(collection(db, "ADS-GOOGLE"));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "Untitled",
      description: data.description || "",
      imageUrl: data.imageUrl || data.imageURL || "",
      link: data.link || "#",
    };
  });
}
