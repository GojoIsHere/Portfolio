import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="experience-heading">
          <div>
            <p className="section-label">My journey</p>
            <h2>Experience shaped by technology, teamwork, and growth.</h2>
          </div>

          <p className="experience-introduction">
            My background combines software development, technical education,
            business operations, and customer-facing work—giving me both
            engineering skills and practical communication experience.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => {
            const Icon =
              experience.type === "education"
                ? GraduationCap
                : BriefcaseBusiness;

            return (
              <article className="timeline-item" key={experience.id}>
                <div className="timeline-marker-column" aria-hidden="true">
                  <div className="timeline-marker">
                    <Icon size={19} />
                  </div>

                  {index < experiences.length - 1 && (
                    <div className="timeline-line" />
                  )}
                </div>

                <div className="experience-card">
                  <div className="experience-card-header">
                    <div>
                      <span className="experience-type">
                        {experience.type === "education"
                          ? "Education"
                          : "Experience"}
                      </span>

                      <h3>{experience.role}</h3>
                      <p className="experience-organization">
                        {experience.organization}
                      </p>
                    </div>

                    <div className="experience-date">
                      <span>{experience.startDate}</span>
                      <span aria-hidden="true">—</span>
                      <span>{experience.endDate}</span>
                    </div>
                  </div>

                  <div className="experience-location">
                    <MapPin size={16} aria-hidden="true" />
                    <span>{experience.location}</span>
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <ul
                    className="experience-highlights"
                    aria-label={`${experience.role} skills and highlights`}
                  >
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
