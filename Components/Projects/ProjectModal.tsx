"use client";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-white text-black rounded-xl p-6 max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="mt-4 text-neutral-700">{project.longDescription}</p>
      </div>
    </div>
  );
}
