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
    <div className="mb-20">
      <h3 className="text-2xl font-semibold mb-8">{title}</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)} // ✅ FULL OBJECT
          />
        ))}
      </div>
    </div>
  );
}
