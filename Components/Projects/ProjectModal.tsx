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
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-semibold hover:text-red-600"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold mb-4">
          {project.title}
        </h2>

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
      </div>
    </div>
  );
}
