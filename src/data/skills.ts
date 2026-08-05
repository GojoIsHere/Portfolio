import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "core-development",
    title: "Core Development",
    description:
      "The technologies I use most often to build responsive, maintainable web applications.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "REST APIs",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Relational and document databases used across application and API projects.",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Oracle SQL",
      "PL/SQL",
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    description:
      "Tools and practices used to catch regressions and improve software reliability.",
    skills: [
      "Jest",
      "Playwright",
      "Cypress",
      "Postman",
      "API Testing",
      "End-to-End Testing",
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    description:
      "Tools used to package, automate, deploy, and maintain development workflows.",
    skills: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "AWS",
      "Git",
      "GitHub",
      "Linux",
    ],
  },
  {
    id: "additional",
    title: "Additional Experience",
    description:
      "Technologies I have used in academic, professional, and personal projects.",
    skills: ["C#", "ASP.NET Core", "Java", "Python", "Chakra UI", "Bootstrap"],
  },
];
