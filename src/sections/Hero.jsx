import portfolioData from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-greeting">
          Hi, I'm
        </p>

        <h1 className="hero-title">
          {portfolioData.name}
        </h1>

        <h2 className="hero-role">
          {portfolioData.role}
        </h2>

        <p className="hero-tagline">
          {portfolioData.tagline}
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Contact Me
          </a>

        </div>

        <div className="hero-socials">

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

        </div>

      </div>

      <div className="hero-glow"></div>

    </section>
  );
}

export default Hero;