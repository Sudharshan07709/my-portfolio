"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 sm:p-8"
    >
      <div className="space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm uppercase tracking-[0.18em] text-white/50">
            Name
          </span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-[#0f1020] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent-primary)]"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm uppercase tracking-[0.18em] text-white/50">
            Email
          </span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-[#0f1020] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent-primary)]"
            placeholder="Your email"
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm uppercase tracking-[0.18em] text-white/50">
            Message
          </span>
          <textarea
            className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-[#0f1020] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent-primary)]"
            placeholder="Tell me a bit about your project or message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-[var(--accent-gradient)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
