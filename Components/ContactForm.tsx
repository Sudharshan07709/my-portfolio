"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submitForm = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Message sent!");
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col gap-4 max-w-md mt-8">
      <input
        className="p-2 rounded bg-gray-800 placeholder-gray-400"
        placeholder="Your Name"
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="p-2 rounded bg-gray-800 placeholder-gray-400"
        placeholder="Your Email"
        required
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        className="p-2 rounded bg-gray-800 placeholder-gray-400"
        placeholder="Your Message"
        required
        rows={4}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        type="submit"
        className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
}
