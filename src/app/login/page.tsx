"use client";

import Link from "next/link";
import { useState } from "react";

export default function loginPage() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
        <div className="card w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Login
          </h2>

          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-300 mb-1"
            >
              Username
            </label>
            <div className="flex items-center rounded-md bg-white/5 border border-white/10 focus-within:border-indigo-500 transition">
              <input
                id="username"
                type="text"
                name="username"
                placeholder="janesmith"
                value={userData?.username}
                className="w-full bg-transparent py-2 px-3 text-white placeholder-gray-400 focus:outline-none"
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="flex items-center rounded-md bg-white/5 border border-white/10 focus-within:border-indigo-500 transition">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={userData?.password}
                className="w-full bg-transparent py-2 px-3 text-white placeholder-gray-400 focus:outline-none"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium py-2 rounded-md shadow-lg">
            Login
          </button>
          <p className="mt-4 text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition"
            >
              Sign up here
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
