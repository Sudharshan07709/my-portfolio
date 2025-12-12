"use client";

import { useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const trackResume = useCallback(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "resume_download",
        timestamp: Date.now(),
      }),
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full pt-20 pb-28 px-6 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Background glow (FIXED) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-10"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-40 pointer-events-none" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl"
        >
          <Image
            src="/profile.jpg"
            alt="Sudharshan Ram Jayaraman"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold text-white mb-6"
      >
        Hi, I&apos;m Sudharshan Ram Jayaraman
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-300 max-w-3xl mb-10 text-lg md:text-xl leading-relaxed"
      >
        Showcasing a strong foundation in Data-driven analysis, Visualization
        techniques, Machine learning, and numerical modeling — explore my work
        and contributions.
      </motion.p>

      {/* Download Resume */}
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        href="/SudharshanRamResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackResume}
        className="relative z-10 bg-blue-600 px-8 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
      >
        Download Resume
      </motion.a>
    </section>
  );
}
