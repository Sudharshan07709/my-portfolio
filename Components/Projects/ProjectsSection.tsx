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
  const mechanical = projects.filter((p) => p.category === "MECHANICAL");

  return (
    <section id="projects" className="scroll-mt-28 py-8">
      <div className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/55">
              <span className="h-px w-12 bg-[var(--accent-gradient)]" />
              Portfolio
            </div>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Selected project work
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            A mix of machine learning, scientific computing, and engineering
            work focused on analytical rigor, technical depth, and clear
            execution.
          </p>
        </div>

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
