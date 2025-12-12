// Components/ProjectModal.tsx

"use client";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div
        className="relative max-w-4xl w-full mx-4
                   bg-white text-black rounded-xl p-6
                   overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4
                     text-neutral-500 hover:text-black"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold">
          {project.title}
        </h2>

        <p className="mt-3 text-neutral-700">
          {project.longDescription}
        </p>

        {project.images && project.images.length > 0 && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((src) => (
              <img
                key={src}
                src={src}
                alt={project.title}
                className="rounded-lg border border-neutral-300"
              />
            ))}
          </div>
        )}

        {project.video && (
          <div className="mt-6">
            <video
              src={project.video}
              controls
              className="w-full rounded-lg border border-neutral-300"
            />
          </div>
        )}

        <div className="mt-6 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg text-sm"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg text-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
