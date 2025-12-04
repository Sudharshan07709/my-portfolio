import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/Components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudharshan Ram Jayaraman | Portfolio",
  description:
    "Building solutions at the intersection of Data, Math, and Machine Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-main`}
      >
        {/* Navbar on all pages */}
        <Navbar />

        {/* Main content */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
