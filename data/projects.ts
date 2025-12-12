// data/projects.ts

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
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
    images: ["/projects/cfd/1.png", "/projects/cfd/2.png"],
    video: "/projects/cfd/demo.mp4",
    github: "https://github.com/yourname/cfd-solver",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    shortDescription: "Next.js portfolio with interactive UI",
    longDescription:
      "Designed and developed a responsive portfolio using Next.js and Tailwind CSS, focusing on performance, accessibility, and clean animations.",
    tech: ["Next.js", "React", "Tailwind"],
    images: ["/projects/portfolio/1.png"],
  },
];
