"use client";

import { useState } from "react";
import ProjectCategory from "./ProjectCategory";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "@/data/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const aiData = projects.filter((p) => p.category === "AI_DATA");
  const scientific = projects.filter(
    (p) => p.category === "SCIENTIFIC_COMPUTING"
  );
  const mechanical = projects.filter(
    (p) => p.category === "MECHANICAL"
  );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-16">
          Projects
        </h2>

        <ProjectCategory
          title="AI & Data Science"
          projects={aiData}
          onProjectClick={setActiveProject}
        />

        <ProjectCategory
          title="Scientific Computing & Software Development"
          projects={scientific}
          onProjectClick={setActiveProject}
        />

        <ProjectCategory
          title="Mechanical Engineering"
          projects={mechanical}
          onProjectClick={setActiveProject}
        />

        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </section>
  );
}
