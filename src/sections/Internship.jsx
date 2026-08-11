const internships = [
  {
    role: "Enterprise Application & API Development in Java",
    company: "Skypark Itech",
    location: "Coimbatore",
    duration: "Dec 2025 – Jan 2026",
    description:
      "Worked on enterprise application and API development using Java, focusing on backend concepts, REST APIs, database integration and application development.",
    technologies: ["Java", "Spring Boot", "REST API", "SQL"],
  },

  {
    role: "Data Analytics Intern",
    company: "Encapsulate IT",
    location: "Coimbatore",
    duration: "June 2026",
    description:
      "Worked with business and employee data to perform data analysis, visualization and dashboard development using data analytics tools.",
    technologies: ["Power BI", "Excel", "Data Analytics"],
  },

  {
    role: "Data Analytics Intern",
    company: "Skypark Itech",
    location: "Coimbatore",
    duration: "Aug 2025 – Sep 2025",
    description:
      "Gained practical experience in data analysis, visualization and interpreting business data to generate meaningful insights.",
    technologies: ["Data Analytics", "Power BI", "Excel"],
  },

  {
    role: "MERN Stack Intern",
    company: "ATS",
    location: "Coimbatore",
    duration: "Jun 2025 – Jul 2025",
    description:
      "Gained hands-on experience in full-stack web development using the MERN stack and worked with frontend, backend and REST API concepts.",
    technologies: ["React", "Node.js", "MongoDB", "REST API"],
  },

  {
    role: "Machine Learning Intern",
    company: "Acmegrade",
    location: "Remote",
    duration: "Apr 2024 – May 2024",
    description:
      "Gained practical exposure to machine learning workflows including data preprocessing, exploratory analysis, model development and evaluation using Python.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
  },
];

function Internships() {
  return (
    <section className="internships-section" id="experience">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>Internships & Experience</h2>

          <p className="section-description">
            Hands-on experience gained through internships and
            practical projects across AI, data analytics and software
            development.
          </p>
        </div>

        <div className="internship-timeline">

          {internships.map((internship, index) => (
            <div
              className="internship-item"
              key={`${internship.company}-${internship.role}`}
            >

              <div className="timeline-dot"></div>

              <div className="internship-card">

                <div className="internship-header">

                  <div>
                    <span className="internship-duration">
                      {internship.duration}
                    </span>

                    <h3>{internship.role}</h3>

                    <p className="internship-company">
                      {internship.company} · {internship.location}
                    </p>
                  </div>

                  <span className="internship-number">
                    0{index + 1}
                  </span>

                </div>

                <p className="internship-description">
                  {internship.description}
                </p>

                <div className="internship-tech">
                  {internship.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Internships;