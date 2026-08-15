import portfolioData from "../data/portfolioData";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h2>Featured Projects</h2>

          <p className="section-description">
            A selection of projects where I apply AI, data,
            software development and problem-solving skills.
          </p>
        </div>

        <div className="projects-grid">

          {portfolioData.projects.map((project, index) => (

            <article
              className={`project-card ${
                index === 0 ? "featured-project" : ""
              }`}
              key={project.title}
            >

              <div className="project-top">

                <span className="project-category">
                  {index === 0
                    ? "AI + Full Stack"
                    : "Web Development"}
                </span>

                {index === 0 && (
                  <span className="featured-badge">
                    Featured
                  </span>
                )}

              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    GitHub
                  </a>
                )}

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;