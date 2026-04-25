"use client";

import Image from "next/image";
import { useState } from "react";
import type { CertItem } from "@/lib/types";

export default function CertCarousel({ items = [] }: { items?: CertItem[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="w-full overflow-hidden py-3">
      <div className="relative overflow-hidden">
        <div
          className="animate-marquee flex gap-6 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {[...items, ...items].map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              className="w-[250px] shrink-0 cursor-pointer text-left"
              onClick={() => setSelected(item.src)}
            >
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-3 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="overflow-hidden rounded-[1rem] bg-white">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="h-[170px] w-full object-contain"
                  />
                </div>
                <p className="mt-3 whitespace-normal text-sm leading-6 text-white/75">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#05060d]/85 p-4 backdrop-blur-md"
        >
          <div className="section-shell max-h-[90vh] max-w-5xl rounded-[2rem] p-4">
            <Image
              src={selected}
              alt="Certificate fullscreen"
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
