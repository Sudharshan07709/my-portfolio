"use client";

import Image from "next/image";
import { useState } from "react";

interface CertItem {
  src: string;
  title: string;
}

export default function CertCarousel({ items = [] }: { items?: CertItem[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  if (!Array.isArray(items)) return null;

  return (
    <div className="w-full overflow-hidden py-6">

      {/* MOVING ROW */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-10 animate-marquee whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelected(item.src)}
            >
              <div className="w-[260px] h-[180px] bg-white rounded-xl shadow-md border border-gray-700 hover:scale-105 transition-all overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm text-center mt-2 text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
        >
          <div className="max-w-5xl max-h-[90vh] p-4 rounded-xl bg-black">
            <Image
              src={selected}
              alt="Certificate Fullscreen"
              width={1600}
              height={1200}
              className="w-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
