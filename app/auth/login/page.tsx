// app/auth/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; // Google icon

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call backend API to authenticate
    localStorage.setItem("isLoggedIn", "true");
    alert("Logged in successfully!");
    router.push("/"); // redirect to home
  };

  const handleGoogleLogin = async () => {
    // TODO: Implement Google OAuth (NextAuth.js or Firebase, etc.)
    alert("Google login clicked!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 flex items-center justify-center">
      <div className="w-96 bg-gray-800 rounded-3xl shadow-lg p-8 relative flex flex-col">
        {/* Top links */}
        <div className="flex justify-around text-gray-300 text-xs mb-6">
          <p className="hover:text-blue-400 cursor-pointer transition">about us</p>
          <p className="hover:text-blue-400 cursor-pointer transition">terms & conditions</p>
          <p className="hover:text-blue-400 cursor-pointer transition">security</p>
        </div>

        {/* Heading */}
        <h2 className="text-white text-4xl font-bold mb-6 flex flex-col">
          <span>Log</span>
          <span>in</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
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

          {/* Traditional login button */}
          <button
            type="submit"
            className="mt-6 py-3 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* OR divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 py-3 bg-white text-gray-700 rounded-full text-lg font-medium hover:bg-gray-200 transition"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Account area */}
        <p className="text-gray-300 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/auth/register" className="text-blue-400 hover:text-blue-300 underline transition">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
