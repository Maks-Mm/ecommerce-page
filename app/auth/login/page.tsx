//app/auth/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

  return (
    <div className="p-6 max-w-md mx-auto mt-10 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </label>
        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Login
        </button>
      </form>
    </div>
  );
}
