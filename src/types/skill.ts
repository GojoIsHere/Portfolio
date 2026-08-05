export type SkillCategoryId =
  "core-development" | "databases" | "testing" | "devops" | "additional";

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  description: string;
  skills: string[];
}
