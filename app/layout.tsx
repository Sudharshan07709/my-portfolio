import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudharshan Ram Jayaraman | Portfolio",
  description:
    "Building solutions at the intersection of Data, Math, and Machine Intelligence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="ambient-bg" aria-hidden="true">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>
        <Navbar />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
