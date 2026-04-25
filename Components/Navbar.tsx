"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 pt-4">
      <div className="section-shell mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <a href="#hero" className="group">
          <div className="nav-name-pulse inline-flex rounded-2xl">
            <p className="rounded-2xl border border-white/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.32em] text-white/90">
              Sudharshan Ram
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {[
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Certifications", "#certifications"],
            ["Activities", "#extra"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/SudharshanRamResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
