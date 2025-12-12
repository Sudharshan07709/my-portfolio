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
    tech: ["C++", "OpenMP", "MPI", "CFD", "Git"],
    images: ["/projects/cfd/1.png", "/projects/cfd/2.png"],
    video: "/projects/cfd/demo.mp4",
    github: "https://github.com/yourname/cfd-solver",
  },
  {
    id: "portfolio",
    title: "Interactive Portfolio Website",
    shortDescription: "Next.js portfolio with interactive UI and n8n automation",
  
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "Vercel", "N8N", "Google cloud"],
  longDescription: `
Designed and developed a modern, high-performance personal portfolio using Next.js (App Router) and Tailwind CSS, with a strong focus on scalability, performance, and clean component architecture. The site presents academic, technical, and professional work through modular sections such as certifications, extracurricular activities, and interactive project showcases with modal-based deep dives.

The implementation follows a clear server–client component separation, reusable data-driven rendering, and fully responsive design principles. Integrated automation workflows using n8n enable real-time analytics, including page visit tracking, resume download tracking, contact form submissions, automated email notifications, and structured data storage in Google Sheets.

This portfolio functions as both a technical showcase and a digital resume, demonstrating proficiency in modern web development, UI engineering, and practical automation-driven system design.
`,

  },
];
