import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    organization: "Tim Hortons",
    role: "Front Store Team Member",
    startDate: "December 2024",
    endDate: "Present",
    location: "Ottawa, Ontario",
    description:
      "Delivering friendly and efficient customer service in a fast-paced environment while balancing work with full-time software development studies and personal projects.",
    highlights: [
      "Customer Service",
      "Communication",
      "Teamwork",
      "Problem Solving",
    ],
  },
  {
    id: 2,
    type: "education",
    organization: "Lambton College",
    role: "Full Stack Software Development",
    startDate: "September 2024",
    endDate: "June 2026",
    location: "Ottawa, Ontario",
    description:
      "Completed hands-on coursework and team projects covering frontend development, backend APIs, databases, automated testing, cloud deployment, and DevOps workflows.",
    highlights: ["React", "Node.js", "Databases", "Testing", "Cloud & DevOps"],
  },
  {
    id: 3,
    type: "work",
    organization: "TEJ Fellowship",
    role: "Fellow Software Engineer",
    startDate: "June 2023",
    endDate: "March 2024",
    location: "Kathmandu, Nepal",
    description:
      "Worked with a four-person development team to build MERN-based internal applications, REST APIs, and business workflows while participating in Agile collaboration and code reviews.",
    highlights: ["React", "Express", "MongoDB", "REST APIs", "Agile"],
  },
  {
    id: 4,
    type: "work",
    organization: "U.S. Embassy Kathmandu",
    role: "Finance Intern",
    startDate: "December 2022",
    endDate: "March 2023",
    location: "Kathmandu, Nepal",
    description:
      "Supported finance operations through invoice review, document processing, administrative coordination, and management-control-related work while handling sensitive information carefully.",
    highlights: [
      "Financial Operations",
      "Documentation",
      "Attention to Detail",
      "Confidentiality",
    ],
  },
  {
    id: 5,
    type: "work",
    organization: "Essence Engineering Consult",
    role: "Junior Software Developer",
    startDate: "March 2021",
    endDate: "May 2022",
    location: "Kathmandu, Nepal",
    description:
      "Contributed to software development work by supporting application features, debugging issues, collaborating with team members, and gaining practical experience in professional development workflows.",
    highlights: [
      "Web Development",
      "Debugging",
      "Team Collaboration",
      "Software Maintenance",
    ],
  },
];
