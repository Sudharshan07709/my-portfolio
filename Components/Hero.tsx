"use client";

import { useCallback } from "react";
import Image from "next/image";

export default function Hero() {
  // Track resume download
  const trackResume = useCallback(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "resume_download",
        timestamp: Date.now()
      }),
    });
  }, []);

  return (
    <section id="hero" className="w-full py-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-4">
        Hi, I'm Sudharshan Ram
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-8">
        Welcome to my portfolio — explore projects, skills, and achievements.
      </p>

      {/* Download Resume Button */}
      <a
        href="/SudharshanRamResume.pdf"
        download
        onClick={trackResume}   // ✅ Tracking added here
        className="bg-blue-600 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
