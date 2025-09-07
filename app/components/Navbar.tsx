"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <Link href="/" className="text-xl font-bold">
        Ecommerce
      </Link>
      <div className="flex gap-4">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </div>
    </nav>
  );
}
