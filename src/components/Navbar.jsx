import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          {portfolioData.name}
        </a>

        <div className="nav-links">

          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>

          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>

        </div>

        <div className="nav-socials">

          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href={portfolioData.social.email}>
            Email
          </a>

          <a
            href="/Kanika-Mohan-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

        </div>

        <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        {menuOpen ? "×" : "☰"}
        </button>

            {menuOpen && (
      <div className="mobile-menu">

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#experience"
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </a>

       <a
       href="#certifications"
       className={activeSection === "certifications" ? "active" : ""}
       >
        Certifications
       </a>


        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        <a
          href="/Kanika-Mohan-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>

      </div>
    )}
      </div>
    </nav>
  );
}

export default Navbar;