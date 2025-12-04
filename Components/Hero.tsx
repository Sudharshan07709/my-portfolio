"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* Name */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-white"
      >
        Sudharshan Ram Jayaraman
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-xl text-[#5BE7FF]"
      >
        Building solutions at the intersection of Data, Math, and Machine Intelligence
      </motion.p>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-10"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#00D2FF] shadow-xl">
          <Image
            src="/profile-placeholder.png"
            width={200}
            height={200}
            alt="Profile Image"
          />
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 flex gap-6"
      >
        <a
          href="/resume.pdf"
          className="px-6 py-3 rounded-lg bg-[#00D2FF] text-black font-semibold hover:bg-[#5BE7FF] transition"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-[#00D2FF] text-[#00D2FF] font-semibold hover:bg-[#00D2FF] hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
