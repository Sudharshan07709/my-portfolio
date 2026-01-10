import Image from "next/image";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const hasImage = project.images && project.images.length > 0;

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rounded-xl bg-white text-black
                 border border-neutral-300 overflow-hidden
                 transition-transform hover:scale-[1.02]"
    >
      {/* IMAGE (only if present) */}
      {hasImage && (
        <Image
          src={project.images![0]}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-44 object-cover"
        />
      )}

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-2 text-sm text-neutral-700">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
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
