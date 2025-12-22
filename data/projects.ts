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
  /* ===============================
     SCIENTIFIC COMPUTING
     =============================== */
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

  /* ===============================
     AI & DATA SCIENCE
     =============================== */
  {
    id: "portfolio-ai",
    title: "Interactive Portfolio Website",
    shortDescription: "Next.js portfolio with UI and automation",
    longDescription:
      "Designed and developed a modern portfolio using Next.js App Router and Tailwind CSS with analytics and automation workflows using n8n.",
    tech: ["Next.js", "TypeScript", "Tailwind", "n8n"],
    category: "AI_DATA",
    github: "https://github.com/yourname/portfolio",
  },

  /* ===============================
     MECHANICAL ENGINEERING
     =============================== */
  {
    id: "fea-bracket",
    title: "FEA of Mechanical Bracket",
    shortDescription: "Stress and deformation analysis",
    longDescription:
      "Performed finite element analysis on a mechanical bracket to study stress distribution and deformation under load.",
    tech: ["ANSYS", "Solid Mechanics"],
    category: "MECHANICAL",
  },

  /* ===============================
     SCIENTIFIC COMPUTING / SOFTWARE
     =============================== */
  {
    id: "portfolio-scientific",
    title: "Developer Portfolio",
    shortDescription: "High-performance Next.js portfolio with analytics",
    longDescription: `
Designed and developed a modern, high-performance personal portfolio using Next.js (App Router) and Tailwind CSS, with a strong focus on scalability, performance, and clean component architecture.

The site presents academic, technical, and professional work through modular sections such as certifications, extracurricular activities, and interactive project showcases with modal-based deep dives.

The implementation follows a clear server–client component separation, reusable data-driven rendering, and fully responsive design principles. Integrated automation workflows using n8n enable real-time analytics, including page visit tracking, resume download tracking, contact form submissions, automated email notifications, and structured data storage in Google Sheets.

This portfolio functions as both a technical showcase and a digital resume, demonstrating proficiency in modern web development, UI engineering, and practical automation-driven system design.
`,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "Vercel",
      "n8n",
      "Google Cloud",
    ],
    images: ["/projects/portfolio/Website.png"],
    category: "SCIENTIFIC_COMPUTING",
  },
];
