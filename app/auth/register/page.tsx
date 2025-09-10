"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function RegisterPage() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: fullName });
      alert("Registered successfully! Redirecting to login...");
      router.push("/auth/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 flex items-center justify-center">
      <div className="w-96 bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col">
        <div className="flex justify-around text-gray-300 text-xs mb-6">
          <p className="hover:text-blue-400 cursor-pointer transition">about us</p>
          <p className="hover:text-blue-400 cursor-pointer transition">terms & conditions</p>
          <p className="hover:text-blue-400 cursor-pointer transition">security</p>
        </div>

        <h2 className="text-white text-4xl font-bold mb-6 flex flex-col">
          <span>New</span>
          <span>account</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col text-gray-200 text-sm">
            FULL NAME
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="bg-transparent border-b-2 border-gray-400 focus:border-blue-400 py-2 px-1 text-white focus:outline-none"
            />
          </label>

          <label className="flex flex-col text-gray-200 text-sm">
            EMAIL
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-b-2 border-gray-400 focus:border-blue-400 py-2 px-1 text-white focus:outline-none"
            />
          </label>

          <label className="flex flex-col text-gray-200 text-sm">
            PASSWORD
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent border-b-2 border-gray-400 focus:border-blue-400 py-2 px-1 text-white focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 py-3 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-gray-300 text-sm mt-4 text-center">
          Have account?{" "}
          <a href="/auth/login" className="text-blue-400 hover:text-blue-300 underline transition">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}
