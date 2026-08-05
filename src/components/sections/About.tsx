import { BrainCircuit, Code2, Layers3, TestTube2 } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Full-stack development",
    description:
      "Building responsive interfaces, REST APIs, and database-driven applications.",
  },
  {
    icon: TestTube2,
    title: "Testing mindset",
    description:
      "Using automated testing and structured debugging to build dependable software.",
  },
  {
    icon: Layers3,
    title: "End-to-end thinking",
    description:
      "Considering requirements, architecture, user experience, deployment, and maintenance.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted development",
    description:
      "Exploring practical ways to integrate AI into useful software products and workflows.",
  },
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header">
          <div>
            <p className="section-label">About me</p>

            <h2>
              I enjoy turning unclear ideas into structured, usable software.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              I am a full-stack software development graduate based in Ottawa,
              with hands-on experience building responsive web applications,
              REST APIs, database-driven systems, automated tests, and
              cloud-deployed projects.
            </p>

            <p>
              My strongest experience is with React, TypeScript, JavaScript,
              Node.js, Express, SQL, and MongoDB. I also have working experience
              with C#, Java, Python, Docker, AWS, and CI/CD workflows.
            </p>

            <p>
              I am especially interested in full-stack development, software
              testing, and AI-powered products where thoughtful planning and
              reliable implementation matter.
            </p>
          </div>
        </div>

        <div className="about-strengths">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <article className="strength-card" key={strength.title}>
                <div className="strength-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
