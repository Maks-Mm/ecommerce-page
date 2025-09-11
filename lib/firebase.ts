// lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getAnalytics, Analytics } from "firebase/analytics";

let app: FirebaseApp | undefined;
let analytics: Analytics | null = null;

/**
 * Returns the Firebase Auth instance (always client-side).
 * Throws an error if used on the server.
 */
export const getFirebaseAuth = (): Auth => {
  if (typeof window === "undefined") {
    throw new Error("Firebase Auth can only be used in the browser.");
  }

  if (!app) {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
    };

    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    analytics = getAnalytics(app);
  }

  return getAuth(app);
};

/**
 * Returns the Firebase Analytics instance (optional).
 */
export const getFirebaseAnalytics = (): Analytics | null => {
  if (typeof window === "undefined") return null;
  if (!analytics && app) analytics = getAnalytics(app);
  return analytics;
};
