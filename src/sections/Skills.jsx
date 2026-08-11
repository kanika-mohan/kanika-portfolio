const skillCategories = [
  {
    title: "Programming",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
    ],
  },

  {
    title: "AI & Machine Learning",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "Data Analytics",
    skills: [
      "Data Analytics",
      "Power BI",
      "Excel",
      "Matplotlib",
    ],
  },

  {
    title: "Full Stack Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "Spring Boot",
      "Node.js",
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "REST API",
    ],
  },
];


function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>Technologies I Work With</h2>

          <p className="section-description">
            A combination of programming, artificial intelligence,
            data analytics and software development skills that I
            use to build practical solutions.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div
              className="skill-card"
              key={category.title}
            >

              <h3>{category.title}</h3>

              <div className="skill-list">

                {category.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;