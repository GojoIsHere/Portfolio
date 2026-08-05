export type ExperienceType = "work" | "education";

export interface Experience {
  id: number;
  type: ExperienceType;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  highlights: string[];
}
