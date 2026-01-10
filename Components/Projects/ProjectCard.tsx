import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rounded-xl bg-white text-black
                 border border-neutral-300 p-6 min-h-[220px]
                 transition-transform hover:scale-[1.02]"
    >
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
  );
}
