// Components/ProjectCard.tsx

import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer rounded-xl
                 bg-white text-black border border-neutral-300
                 min-h-[220px] transition-all duration-300
                 hover:scale-[1.02]"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-neutral-700">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md
                         bg-neutral-200 text-neutral-800"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 bg-black/60 opacity-0
                   group-hover:opacity-100 transition-opacity
                   flex items-center justify-center"
      >
        <span
          className="px-4 py-2 border border-white
                     rounded-lg text-white text-sm"
        >
          View Project
        </span>
      </div>
    </div>
  );
}
