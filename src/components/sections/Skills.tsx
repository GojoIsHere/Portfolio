import type { LucideIcon } from "lucide-react";

import {
  Braces,
  CloudCog,
  CodeXml,
  Database,
  FlaskConical,
} from "lucide-react";

import { skillCategories } from "../../data/skills";
import type { SkillCategoryId } from "../../types/skill";

const categoryIcons: Record<SkillCategoryId, LucideIcon> = {
  "core-development": CodeXml,
  databases: Database,
  testing: FlaskConical,
  devops: CloudCog,
  additional: Braces,
};

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-heading">
          <div>
            <p className="section-label">Technical toolkit</p>

            <h2>Technologies I use to build, test, and ship software.</h2>
          </div>

          <p className="skills-introduction">
            My strongest focus is full-stack JavaScript and TypeScript
            development, supported by practical experience in testing,
            databases, cloud platforms, and CI/CD workflows.
          </p>
        </div>

        <div className="skill-categories">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id];

            return (
              <article className="skill-category" key={category.id}>
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>

                <ul
                  className="skill-tags"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
