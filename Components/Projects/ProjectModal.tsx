"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const hasImages = project.images && project.images.length > 0;
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
  }, [project.id]);

  const modal = (
    <div
      className="fixed inset-0 z-50 bg-[#05060d]/88 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-10"
      onClick={onClose}
    >
      <div
        className="section-shell relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-white/8 bg-[rgba(20,21,36,0.96)] px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="pr-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Project detail
              </p>
              <h2 className="mt-3 max-w-4xl font-display text-3xl leading-tight text-white sm:text-4xl">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl leading-none text-white transition hover:bg-white/10"
              aria-label="Close project modal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="max-h-[calc(100vh-10rem)] overflow-y-auto overscroll-contain scroll-smooth p-6 sm:max-h-[calc(100vh-12rem)] sm:p-8"
        >
          {(project.github || project.demo) && (
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.06)] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  View on GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--accent-gradient)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Open live demo
                </a>
              )}
            </div>
          )}

          {hasImages && (
            <div className="mt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
                Project gallery
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {project.images!.map((src, idx) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/10"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} preview ${idx + 1}`}
                      width={900}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
              Overview
            </p>
            <p className="whitespace-pre-line text-base leading-8 text-[var(--text-secondary)] sm:text-[1.02rem]">
              {project.longDescription}
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-3 pb-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white/70"
                >
                  {t}
                </span>
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
