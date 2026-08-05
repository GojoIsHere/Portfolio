import {
  ArrowRight,
  BriefcaseBusiness,
  CodeXml,
  Download,
  Mail,
  MapPin,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="availability">
          <span aria-hidden="true" />
          Available for software development opportunities
        </div>

        <p className="eyebrow">Hello, I&apos;m</p>

        <h1>
          Sushil Thanet
          <span>Full-Stack Software Developer</span>
        </h1>

        <p className="hero-description">
          I build responsive web applications, reliable APIs, automated tests,
          and AI-powered software products using modern development
          technologies.
        </p>

        <div className="location">
          <MapPin size={18} aria-hidden="true" />
          Ottawa, Ontario, Canada
        </div>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View my work
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="button button-secondary"
            download
          >
            <Download size={18} aria-hidden="true" />
            Download résumé
          </a>
        </div>

        <div className="social-links" aria-label="Social profiles">
          <a
            href="https://github.com/c0939973"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <CodeXml aria-hidden="true" />
          </a>

          <a
            href="https://linkedin.com/in/sushilthanet"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <BriefcaseBusiness aria-hidden="true" />
          </a>

          <a
            href="mailto:sus.thanet0726@gmail.com"
            aria-label="Send me an email"
          >
            <Mail aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
