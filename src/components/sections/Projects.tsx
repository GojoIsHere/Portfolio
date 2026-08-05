import { ArrowUpRight, Code2, ExternalLink, FolderCode } from "lucide-react";

import { projects } from "../../data/projects";

function Projects() {
  //   const getImagePath = (imagePath: string) => {
  //     const cleanPath = imagePath.replace(/^\//, "");
  //     return `${import.meta.env.BASE_URL}${cleanPath}`;
  //   };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="section-label">Selected work</p>

            <h2>Projects that demonstrate how I solve and build.</h2>
          </div>

          <a
            href="https://github.com/c0939973"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            View all repositories
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              key={project.id}
            >
              <div className="project-image-wrapper">
                <div className="project-image-placeholder">
                  <FolderCode size={48} aria-hidden="true" />
                  <span>{project.title}</span>
                </div>
                {/* <img
                  src={getImagePath(project.image)}
                  alt={`Screenshot of ${project.title}`}
                  className="project-image"
                /> */}

                <div className="project-image-overlay" />

                <span
                  className={`project-status ${
                    project.status === "In Development"
                      ? "project-status-development"
                      : ""
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-content">
                <div className="project-title-row">
                  <div className="project-icon">
                    <FolderCode size={21} aria-hidden="true" />
                  </div>

                  {project.featured && (
                    <span className="featured-label">Featured project</span>
                  )}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <ul
                  className="technology-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action project-action-primary"
                    >
                      <ExternalLink size={17} aria-hidden="true" />
                      Live demo
                    </a>
                  )}

                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action project-action-secondary"
                    >
                      <Code2 size={17} aria-hidden="true" />
                      Source code
                    </a>
                  )}

                  {!project.liveUrl && !project.repositoryUrl && (
                    <span className="project-coming-soon">
                      Case study coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
