"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  title: string;
  images: string[];
}

export default function CertCarousel({ title, images }: Props) {
  return (
    <section className="py-12">
      <h3 className="text-2xl font-semibold text-[#5BE7FF] mb-6 text-center">
        {title}
      </h3>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[260px] h-[170px] bg-[#0F1629] border border-[#00D2FF]
              rounded-xl overflow-hidden shadow-lg flex items-center justify-center 
              hover:scale-105 transition cursor-pointer"
            >
              <Image
                src={src}
                alt="Certificate"
                width={280}
                height={180}
                className="object-contain p-3"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
