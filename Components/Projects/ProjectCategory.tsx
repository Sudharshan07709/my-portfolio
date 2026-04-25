import ProjectCard from "./ProjectCard";
import { Project } from "@/data/projects";

type Props = {
  title: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
};

export default function ProjectCategory({
  title,
  projects,
  onProjectClick,
}: Props) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h3 className="font-display text-3xl text-white">{title}</h3>
        <div className="hidden h-px flex-1 bg-white/10 sm:block" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </div>
  );
}
