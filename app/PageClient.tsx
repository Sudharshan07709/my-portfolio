"use client";

import { useEffect } from "react";
import Hero from "@/Components/Hero";
import ContactForm from "@/Components/ContactForm";

export default function PageClient() {
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "visit" }),
    });
  }, []);

  return (
    <>
      <Hero />

      <section id="contact" className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <ContactForm />
      </section>
    </>
  );
}
