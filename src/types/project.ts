export type ProjectStatus = "Completed" | "In Development";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: ProjectStatus;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
}
