// lib/firebase.ts
// ==========================================
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

let app: FirebaseApp | undefined;

const firebaseConfig = {
  apiKey: "AIzaSyCmOWGy1gniHl-vJojZ0E_82jsCwk7xqfk",
  authDomain: "ecommerce-2748b.firebaseapp.com",
  projectId: "ecommerce-2748b",
  storageBucket: "ecommerce-2748b.firebasestorage.app",
  messagingSenderId: "236286522866",
  appId: "1:236286522866:web:a03cb8ac3a80029633e76b",
  measurementId: "G-0X4LY3SMBK"
};

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Auth export
export const getFirebaseAuth = (): Auth => {
  if (typeof window === "undefined") {
    throw new Error("Firebase Auth can only be used in the browser.");
  }
  return getAuth(app);
};

// Firestore export
export const db: Firestore = getFirestore(app);