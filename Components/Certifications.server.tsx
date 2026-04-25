import CertCarousel from "./CertCarousel";
import { getCertImages } from "@/lib/getCertImages.server";

export default function Certifications() {
  const certificationGroups = [
    ["Databricks", getCertImages("databricks")],
    ["Coursera / AI & Data Science", getCertImages("coursera-ai")],
    ["Coursera / Mechanical Engineering", getCertImages("coursera-mech")],
    ["Udemy", getCertImages("udemy")],
    ["Igetit", getCertImages("igetit")],
    ["Languages", getCertImages("languages")],
  ] as const;

  return (
    <section id="certifications" className="scroll-mt-28 py-8">
      <div className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/55">
              <span className="h-px w-12 bg-[var(--accent-gradient)]" />
              Credentials
            </div>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Certifications and coursework
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            A running archive of certifications across analytics, scientific
            computing, design engineering, and language learning.
          </p>
        </div>

        <div className="space-y-10">
          {certificationGroups.map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-4 font-display text-2xl text-white">{title}</h3>
              <CertCarousel items={items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
