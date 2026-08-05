import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          ST<span>.</span>
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Let&apos;s talk
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${isMenuOpen ? "mobile-navigation-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="container mobile-navigation-content">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-contact-link"
            onClick={closeMenu}
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
