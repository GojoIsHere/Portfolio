import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "ProjectLens AI",
    description:
      "An AI-powered project planning platform that helps developers transform unclear ideas into structured requirements, features, tasks, and implementation plans.",
    image: "/images/projectlens-placeholder.webp",
    technologies: ["React", "TypeScript", "Node.js", "AI"],
    status: "In Development",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Cryptocurrency Tracker",
    description:
      "A responsive cryptocurrency dashboard with live market data, currency switching, sorting, pagination, coin comparison, and interactive price charts.",
    image: "/images/crypto-tracker.webp",
    technologies: ["JavaScript", "REST API", "Chart.js", "CSS"],
    status: "Completed",
    liveUrl: "https://c0939973.github.io/Crypto_Tracker/",
    repositoryUrl: "https://github.com/c0939973/Crypto_Tracker",
  },
  {
    id: 3,
    title: "Bookstore Application",
    description:
      "A database-driven bookstore application with REST APIs, MySQL persistence, automated Jest tests, Docker support, and continuous integration.",
    image: "/images/bookstore-placeholder.webp",
    technologies: ["Node.js", "Express", "MySQL", "Jest", "Docker"],
    status: "Completed",
    repositoryUrl: "https://github.com/c0939973",
  },
];
