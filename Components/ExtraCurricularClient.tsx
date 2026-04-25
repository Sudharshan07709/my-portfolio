"use client";

import Image from "next/image";
import { useState } from "react";
import ActivityModal from "./ActivityModal";
import type { ActivityItem } from "@/lib/types";

export default function ExtraCurricularClient({
  activities,
}: {
  activities: ActivityItem[];
}) {
  const [selected, setSelected] = useState<ActivityItem | null>(null);

  return (
    <section id="extra" className="scroll-mt-28 py-8">
      <div className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/55">
              <span className="h-px w-12 bg-[var(--accent-gradient)]" />
              Beyond work
            </div>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Events and extracurriculars
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            A few moments from competitions, exhibitions, and collaborative
            experiences outside formal coursework.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <button
              key={activity.title}
              type="button"
              className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.04)] text-left transition duration-300 hover:-translate-y-1 hover:border-white/20"
              onClick={() => setSelected(activity)}
            >
              <div className="overflow-hidden">
                <Image
                  src={activity.cover}
                  alt={activity.title}
                  width={900}
                  height={650}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl text-white">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {activity.description.slice(0, 120)}
                  {activity.description.length > 120 ? "..." : ""}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selected && (
          <ActivityModal
            isOpen={true}
            onClose={() => setSelected(null)}
            title={selected.title}
            images={selected.images}
            description={selected.description}
          />
        )}
      </div>
    </section>
  );
}
