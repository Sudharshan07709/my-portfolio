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
  /* =====================================================
     AI & DATA SCIENCE
     ===================================================== */

  {
    id: "us-sales-visual-analytics",
    title: "Visual Data Analysis of US Sales Trends",
    shortDescription:
      "Interactive visual analytics dashboard to study sales trends and human perception.",
    longDescription: `
Semester project in Visual Data Analytics focusing on understanding sales trends in the US market through advanced visualization techniques.

The project analyzed the effect of different visual channels on human perception, incorporating clustering, trend lines, and perception degree metrics. A comprehensive Tableau dashboard was developed featuring multiple plots and geographically mapped data with interactive filters for region and time period.

The work emphasized data-driven storytelling and perception-aware visualization design.
`,
    tech: [
      "Tableau",
      "Data Visualization",
      "Clustering",
      "Trend Analysis",
      "Visual Perception",
    ],
    category: "AI_DATA",
    images: [
    "/projects/us-sales-visual-analytics/img-1.png",
    "/projects/us-sales-visual-analytics/img-2.png",
  ],
  },

  {
    id: "crowd-ml-modeling",
    title: "Machine Learning in Crowd Modelling",
    shortDescription:
      "ML-driven analysis and simulation of crowd dynamics with epidemiological extensions.",
    longDescription: `
Semester project in Machine Learning integrating data-driven methods with dynamical systems to model and analyze crowd behavior.

Crowd simulations were built using Vadere and extended with epidemiological SIR dynamics. Machine learning techniques such as PCA, Diffusion Maps, and Variational Autoencoders (VAEs) were applied for dimensionality reduction and latent-space modeling.

The project further explored data-driven dynamical system reconstruction using function approximation and time-delay embedding, with collaborative development and version control managed via GitHub.
`,
    tech: [
      "Python",
      "Machine Learning",
      "PCA",
      "Diffusion Maps",
      "VAEs",
      "Dynamical Systems",
      "Vadere",
      "Git",
    ],
    category: "AI_DATA",
    images:[],
  },

  {
    id: "hyperparameter-optimization-seminar",
    title: "Hyperparameter Optimization in Machine Learning",
    shortDescription:
      "Comparative study of classical and advanced hyperparameter tuning techniques.",
    longDescription: `
Seminar project focused on computational aspects of machine learning, analyzing both classical and advanced hyperparameter optimization techniques.

Methods studied include Grid Search, Random Search, Bayesian Optimization, and Hyperband. The project examined convergence behavior, computational trade-offs, sample efficiency, and adaptive resource allocation strategies.

Special emphasis was placed on surrogate modeling, meta-learning concepts, and efficient tuning for large-scale machine learning models.
`,
    tech: [
      "Machine Learning",
      "Bayesian Optimization",
      "Hyperband",
      "Model Tuning",
      "Scikit-learn",
    ],
    category: "AI_DATA",
    images:[],
  },

  /* =====================================================
     SCIENTIFIC COMPUTING & SOFTWARE DEVELOPMENT
     ===================================================== */

  {
    id: "parallel-cfd-solver",
    title: "Parallel CFD Solver Development",
    shortDescription:
      "High-performance 2D CFD solver with MPI parallelization and multigrid acceleration.",
    longDescription: `
Semester project in Scientific Computing involving the development of a 2D Computational Fluid Dynamics solver from scratch.

The solver implements the incompressible Navier–Stokes equations using finite difference schemes on a staggered grid. Parallelization was achieved via MPI-based domain decomposition, with extensions toward GPU acceleration.

Results were visualized using ParaView, including velocity, pressure, and temperature fields. The project was further extended to multigrid methods (V-cycle and W-cycle) and managed using GitHub for version control.
`,
    tech: [
      "C++",
      "MPI",
      "Finite Difference Methods",
      "Navier–Stokes",
      "Multigrid",
      "ParaView",
      "Git",
    ],
    category: "SCIENTIFIC_COMPUTING",
    images:[  "/projects/parallel-cfd-solver/img-1.png",
    "/projects/parallel-cfd-solver/img-2.png",
    "/projects/parallel-cfd-solver/img-3.png",],
  },

  /* =====================================================
     MECHANICAL ENGINEERING
     ===================================================== */

  {
    id: "automotive-brake-analysis",
    title: "Automotive Brake System Benchmarking",
    shortDescription:
      "Engineering analysis and benchmarking of caliper and disc data for automotive models.",
    longDescription: `
Professional project conducted during tenure as a Design Engineer at Tata Technologies.

The work involved graphical representation and benchmarking of caliper and disc performance data for the Volvo EX30 model. The project followed Agile methodologies and contributed to major automotive programs including Volvo XC90, XC60, and EX30.

Significant contributions were made to the Pad Wear Indicator (PWI) project, leading to an estimated 18% profit increase through design and process improvements.
`,
    tech: [
      "Mechanical Design",
      "Data Analysis",
      "Automotive Engineering",
      "Agile",
      "CATIA",
      "Teamcenter",
    ],
    category: "MECHANICAL",
    images:[],
  },
    {
    id: "Liquid_sheet_breakup",
    title: "Characterization of liquid sheet breakup in practical atomizers",
    shortDescription:
      "Experimental characterization and optimization of liquid sheet breakup for practical atomizers.",
    longDescription: `
This project experimentally studies breakup phenomena in liquid sheet atomizers. Key parameters such as breakup length and breakup frequency were optimized for inkjet applications with the aid of acoustic energy.
`.trim(),
    tech: ["Experimental Research", "Atomizer Design", "Data Analysis", "Acoustics"],
    category: "MECHANICAL",
    images:[],
  },
  {
    id: "Pulsatile_flow_velocity_profile",
    title:
      "Effect of velocity profile on pulsatile flow in macro blood vessels of a cardiovascular system",
    shortDescription:
      "Theoretical modeling of pulsatile blood flow in macro-scale vessels using governing equations.",
    longDescription: `
This project theoretically models blood flow in macro channels of a cardiovascular system by imposing Navier–Stokes and continuity equations. Based on the flow-field understanding, insights can be used to support the design of biomedical machines.
`.trim(),
    tech: ["Fluid Mechanics", "Mathematical Modeling", "Navier–Stokes", "Biomedical Engineering"],
    category: "MECHANICAL",
    images:[],
  },
  {
    id: "Rotating_sphere_flow_study",
    title: "Flow study over a spherical rotating body with different angular velocity",
    shortDescription:
      "CFD analysis of wake behavior and backflow around a rotating sphere across angular velocities.",
    longDescription: `
A computational simulation study of airflow past a rotating sphere. The variation in wake region length was analyzed for different angular velocities, and the backflow phenomenon was examined from the resulting flow field.
`.trim(),
    tech: ["CFD", "ANSYS/Fluent", "Aerodynamics", "Post-processing"],
    category: "MECHANICAL",
    images:[],
  },
   {
    id: "PV_panel_thermal_FEA",
    title: "Finite element analysis on thermal distribution in a PV solar panel",
    shortDescription:
      "Thermal FEA to study heat distribution in PV panels and propose design changes to improve efficiency.",
    longDescription: `
This case study investigates heat distribution patterns in a PV solar panel using finite element analysis. Based on thermal contours, design changes related to the frame and cell-array distribution were proposed to improve panel efficiency.
`.trim(),
    tech: ["FEA", "Thermal Analysis", "Design Optimization", "Engineering Simulation"],
    category: "MECHANICAL",
    images:[],
  },
];
