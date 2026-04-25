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
      className="group relative cursor-pointer overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.03)] text-white transition duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      {hasImage && (
        <div className="relative overflow-hidden">
          <Image
            src={project.images![0]}
            alt={project.title}
            width={600}
            height={400}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090913] via-transparent to-transparent" />
        </div>
      )}

      <div className="p-6">
        <h3 className="font-display text-2xl leading-tight text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-white/45">Open project details</span>
          <span className="text-white transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </div>
  );
}
