import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <a href="#home" className="footer-logo">
            ST<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()} Sushil Thanet. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <p>Built with React, TypeScript, and Vite.</p>

          <a
            href="#home"
            className="back-to-top"
            aria-label="Back to the top of the page"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
