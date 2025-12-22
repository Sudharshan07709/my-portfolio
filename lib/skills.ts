export type SkillCategory = {
  title: string;
  subtitle: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Scientific Computing",
    subtitle: "High-performance numerical systems",
    skills: ["C++", "OpenMP", "MPI", "Multigrid", "CFD", "Finite Differences"],
  },
  {
    title: "Data & AI",
    subtitle: "Analytics and machine intelligence",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "Deep Learning",
      "Data Visualization",
    ],
  },
  {
    title: "Software Engineering",
    subtitle: "Robust and scalable systems",
    skills: [
      "Modern C++",
      "Python",
      "Git & GitHub",
      "Testing",
      "Clean Architecture",
    ],
  },
  {
    title: "Web & Automation",
    subtitle: "Interactive systems & workflows",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "Workflow Automation",
    ],
  },
  {
    title: "Engineering Foundations",
    subtitle: "Mathematics & algorithms",
    skills: [
      "Linear Algebra",
      "Numerical Linear Algebra",
      "PDEs",
      "Algorithms",
      "Optimization",
    ],
  },
];
