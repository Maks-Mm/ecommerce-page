//app/auth/login/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { getFirebaseAuth } from "@/lib/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Toast from "../../components/Toast";
import { useToast } from "@/hooks/useToast";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast, showToast, hideToast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getFirebaseAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isLoggedIn", "true");
      showToast("Logged in successfully!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error: any) {
      showToast(error.message, "error");
    }
  };

   const handleGoogleLogin = async () => {
    const auth = getFirebaseAuth();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      localStorage.setItem("isLoggedIn", "true");
      showToast("Logged in with Google!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error: any) {
      showToast(error.message, "error");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 flex items-center justify-center">
      <div className="w-96 bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col">
        <h2 className="text-white text-4xl font-bold mb-6 flex flex-col">
          <span>Log</span>
          <span>in</span>
        </h2>
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
          <button
            type="submit"
            className="mt-6 py-3 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 py-3 bg-white text-gray-700 rounded-full text-lg font-medium hover:bg-gray-200 transition"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>
        <p className="text-gray-300 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/auth/register" className="text-blue-400 hover:text-blue-300 underline transition">
            Sign up here
          </a>
        </p>
      </div>
       {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={hideToast} 
        />
      )}
    </div>
  );
}
