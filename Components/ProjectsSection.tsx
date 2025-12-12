"use client";

import { useState } from "react";
import ProjectCard from "@/Components/ProjectCard";
import ProjectModal from "@/Components/ProjectModal";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24">
      {/* TITLE */}
      <h2 className="text-4xl font-semibold mb-14">
        Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
