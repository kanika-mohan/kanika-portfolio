import portfolioData from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            {portfolioData.name}
          </a>

          <p>
            AI & Data Science student building
            intelligent and practical solutions.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
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
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} {portfolioData.name}.
          All rights reserved.
        </p>

        <p>
          Built with React & JavaScript
        </p>

      </div>

    </footer>
  );
}

export default Footer;