// data/projects.ts

export type ProjectCategory =
  | "AI_DATA"
  | "SCIENTIFIC_COMPUTING"
  | "MECHANICAL";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory;
  images?: string[];
  video?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "cfd-solver",
    title: "Parallel CFD Solver",
    shortDescription: "Navier–Stokes solver with multigrid acceleration",
    longDescription:
      "Developed a parallel CFD solver using finite differences and multigrid methods. Implemented domain decomposition and performance benchmarks on multi-core systems.",
    tech: ["C++", "OpenMP", "MPI", "CFD"],
    category: "SCIENTIFIC_COMPUTING",
    images: ["/projects/cfd/1.png", "/projects/cfd/2.png"],
    github: "https://github.com/yourname/cfd-solver",
  },
  {
    id: "portfolio",
    title: "Interactive Portfolio Website",
    shortDescription: "Next.js portfolio with UI and automation",
    longDescription:
      "Designed and developed a modern portfolio using Next.js App Router and Tailwind CSS with analytics and automation workflows using n8n.",
    tech: ["Next.js", "TypeScript", "Tailwind", "n8n"],
    category: "AI_DATA",
    github: "https://github.com/yourname/portfolio",
  },
  {
    id: "fea-bracket",
    title: "FEA of Mechanical Bracket",
    shortDescription: "Stress and deformation analysis",
    longDescription:
      "Performed finite element analysis on a mechanical bracket to study stress distribution and deformation under load.",
    tech: ["ANSYS", "Solid Mechanics"],
    category: "MECHANICAL",
  },
];
