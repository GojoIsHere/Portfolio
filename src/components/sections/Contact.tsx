import {
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Mail,
  MapPin,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />

          <div className="contact-content">
            <p className="section-label contact-label">Let&apos;s connect</p>

            <h2>Let&apos;s build something meaningful together.</h2>

            <p className="contact-description">
              I am currently open to full-time opportunities in full-stack
              development, frontend development, software testing, and related
              software engineering roles.
            </p>

            <div className="contact-location">
              <MapPin size={18} aria-hidden="true" />
              Ottawa, Ontario, Canada
            </div>

            <div className="contact-actions">
              <a
                href="mailto:sus.thanet0726@gmail.com"
                className="button contact-primary-button"
              >
                <Mail size={18} aria-hidden="true" />
                Send me an email
              </a>

              <a
                href="https://linkedin.com/in/sushilthanet"
                target="_blank"
                rel="noreferrer"
                className="button contact-secondary-button"
              >
                <BriefcaseBusiness size={18} aria-hidden="true" />
                Connect on LinkedIn
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/GojoIsHere"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <CodeXml size={20} aria-hidden="true" />
                GitHub-main
              </a>
              <a
                href="https://github.com/c0939973"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <CodeXml size={20} aria-hidden="true" />
                GitHub-student
              </a>

              <a
                href="https://linkedin.com/in/sushilthanet"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                <BriefcaseBusiness size={20} aria-hidden="true" />
                LinkedIn
              </a>

              <a
                href="mailto:sus.thanet0726@gmail.com"
                aria-label="Send me an email"
              >
                <Mail size={20} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
