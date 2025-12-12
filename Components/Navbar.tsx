"use client";

export default function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 bg-[#0F1629] text-white sticky top-0 z-50">
      <h1 className="text-xl font-semibold tracking-wide">
        Sudharshan Ram Jayaraman
      </h1>

      <div className="flex gap-6 text-sm font-medium">
        <a href="#projects" className="hover:text-[#00D2FF] transition">Projects</a>
        <a href="#certifications" className="hover:text-[#00D2FF] transition">Certifications</a>
        <a href="#extra" className="hover:text-[#00D2FF] transition">Extra Curricular</a>
        <a href="#skills" className="hover:text-[#00D2FF] transition">Skills</a>
        <a href="#contact" className="hover:text-[#00D2FF] transition">Contact</a>
      </div>
    </nav>
  );
}
