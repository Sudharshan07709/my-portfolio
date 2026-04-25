"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  description: string;
}

export default function ActivityModal({
  isOpen,
  onClose,
  title,
  images,
  description,
}: Props) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    requestAnimationFrame(() => {
      scrollContainerRef.current?.scrollTo({ top: 0, behavior: "auto" });
    });

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen, title]);

  if (!isOpen) return null;

  const modal = (
    <div
      className="fixed inset-0 z-50 bg-[#05060d]/88 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-10"
      onClick={onClose}
    >
      <div
        className="section-shell mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-white/8 bg-[rgba(20,21,36,0.96)] px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="pr-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Activity
              </p>
              <h2 className="mt-3 max-w-4xl font-display text-3xl leading-tight text-white sm:text-4xl">
                {title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl leading-none text-white transition hover:bg-white/10"
              aria-label="Close activity modal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="max-h-[calc(100vh-10rem)] overflow-y-auto overscroll-contain scroll-smooth p-6 sm:max-h-[calc(100vh-12rem)] sm:p-8"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
              Details
            </p>
            <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-[1.02rem]">
              {description}
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
              Gallery
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {images.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/10"
                >
                  <Image
                    src={src}
                    alt={`${title} image ${index + 1}`}
                    width={900}
                    height={650}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(modal, document.body);
}
