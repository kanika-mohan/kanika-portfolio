const projects = [
  {
    title: "Smart Placement Management Portal",
    category: "AI + Full Stack",
    description:
      "An intelligent placement management platform that helps students and recruiters manage job opportunities, applications and recruitment activities with an AI-powered resume analyzer.",
    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "SQL",
      "AI",
    ],
    github: "",
    demo: "",
    featured: true,
  },

  {
    title: "AI Personalized Study Planner",
    category: "Artificial Intelligence",
    description:
      "An AI-based study planning application that creates personalized learning schedules based on student goals, subjects and available study time.",
    technologies: [
      "Python",
      "Machine Learning",
      "React",
      "AI",
    ],
    github: "",
    demo: "",
  },

  {
    title: "Employee Data Analytics Dashboard",
    category: "Data Analytics",
    description:
      "An interactive analytics dashboard for analyzing employee information, attendance, performance, profit and loss using business intelligence techniques.",
    technologies: [
      "Power BI",
      "Excel",
      "Data Analytics",
    ],
    github: "",
    demo: "",
  },

  {
    title: "News Aggregator",
    category: "Web Development",
    description:
      "A responsive web application that collects and displays news articles through an API with category-based browsing and a clean user interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "REST API",
    ],
    github: "",
    demo: "",
  },
];

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

          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
            >

              <div className="project-top">
                <span className="project-category">
                  {project.category}
                </span>

                {project.featured && (
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