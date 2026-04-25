"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const trackResume = () => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "resume_download",
        timestamp: Date.now(),
      }),
    });
  };

  return (
    <section id="hero" className="scroll-mt-28 py-8 md:py-10">
      <div className="section-shell relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_55%,_rgba(32,132,132,0.34),_transparent_32%),radial-gradient(circle_at_82%_70%,_rgba(146,56,92,0.32),_transparent_26%),linear-gradient(90deg,_#11151e_0%,_#131524_56%,_#161321_100%)]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="order-2 lg:order-1"
          >
            <div className="max-w-4xl lg:max-w-4xl">
              <div className="mb-7 h-[3px] w-12 rounded-full bg-[linear-gradient(90deg,var(--accent-primary),var(--accent-secondary))]" />

              <p className="text-[1.05rem] font-medium tracking-[0.01em] text-white/65">
                Hello, I&apos;m
              </p>

              <h1 className="mt-4 pb-[0.14em] font-display text-5xl leading-[1.02] tracking-[-0.04em] text-transparent sm:text-6xl md:text-7xl xl:text-[5.8rem] xl:leading-[0.98] bg-[linear-gradient(135deg,#8f6cff_8%,#bb62dc_52%,#e174c9_100%)] bg-clip-text">
                Sudharshan
                <br />
                Ram
                <br />
                Jayaraman
              </h1>

              <p className="mt-7 text-3xl font-semibold tracking-[-0.03em] text-white/70 sm:text-[2.15rem]">
                Data Engineer
              </p>

              <p className="mt-10 max-w-3xl text-lg leading-[2.15rem] text-[#b8b5c7] sm:text-[1.05rem]">
                I transform complex data into reliable pipelines and usable
                insights. With experience in SQL, Python, machine learning, and
                visualization, I build data products that turn raw information
                into clear stories and better decisions.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-base">
                <div className="flex items-center gap-3 text-white/68">
                  <span className="flex h-5 w-5 items-center justify-center text-[var(--accent-primary)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Zm0-8.5A3.5 3.5 0 1 1 12 6a3.5 3.5 0 0 1 0 7.5Z" />
                    </svg>
                  </span>
                  <span>Germany</span>
                </div>

                <div className="flex items-center gap-3 font-medium text-[#39d353]">
                  <span className="h-5 w-5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_0_6px_rgba(139,125,255,0.12)]" />
                  <span>Open to opportunities</span>
                </div>

                <a
                  href="/SudharshanRamResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackResume}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/86 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md px-6 py-8 sm:px-10">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-12 z-20 rounded-full border border-white/20 bg-[rgba(16,18,30,0.82)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                Data
              </motion.div>
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute right-2 top-[58%] z-20 rounded-full border border-white/20 bg-[rgba(16,18,30,0.82)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                AI
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute left-10 bottom-2 z-20 rounded-full border border-white/20 bg-[rgba(16,18,30,0.82)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                ML
              </motion.div>

              <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-4 shadow-[var(--shadow-soft)]">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[2rem] border-l-2 border-t-2 border-[var(--accent-primary)]/70" />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-[2rem] border-b-2 border-r-2 border-[var(--accent-tertiary)]/70" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/profile.jpg"
                    alt="Sudharshan Ram Jayaraman"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(9,9,19,0.3))]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
