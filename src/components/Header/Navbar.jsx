"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth state

  const handleLogin = () => {
    // Replace with your login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Replace with your logout logic
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo + Site Name */}
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-500 w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
            FB
          </div>
          <span className="text-xl font-semibold">Freelancer Bros🚀</span>
        </div>

        {/* Center Tabs (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
          <Link href="/gallery" className="hover:text-indigo-400 transition">Gallery</Link>
        </div>

        {/* Login / Logout Buttons */}
        <div className="hidden md:flex">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md transition"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <Link href="/about" className="block hover:text-indigo-400 transition">About</Link>
          <Link href="/contact" className="block hover:text-indigo-400 transition">Contact</Link>
          <Link href="/gallery" className="block hover:text-indigo-400 transition">Gallery</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="block w-full text-left bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md transition"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
