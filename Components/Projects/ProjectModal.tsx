"use client";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const hasImages = project.images && project.images.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-xl p-6 max-w-4xl w-full
                   max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-semibold hover:text-red-600"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold mb-2">
          {project.title}
        </h2>

        {/* ACTION LINKS (GitHub / Demo) */}
        {(project.github || project.demo) && (
          <div className="flex flex-wrap gap-4 mb-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-gray-900 text-white
                           hover:bg-gray-800 transition"
              >
                View on GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-blue-600 text-white
                           hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        )}

        {/* IMAGES */}
        {hasImages && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {project.images!.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${project.title} image ${idx + 1}`}
                className="w-full rounded-lg object-contain"
              />
            ))}
          </div>
        )}

        {/* DESCRIPTION */}
        <p className="text-neutral-700 whitespace-pre-line">
          {project.longDescription}
        </p>

        {/* TECH STACK */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
