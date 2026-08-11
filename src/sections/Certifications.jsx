const certifications = [
  {
    title: "AI in Healthcare",
    issuer: "Skill India",
    date: "July 2026",
    type: "Certification",
  },
];

const achievements = [
  {
    title: "MSME Idea Hackathon 4.0",
    description:
      "Participated in the MSME Idea Hackathon and explored an innovative technology-based solution.",
    date: "2024",
  },
  {
    title: "College Hackathon",
    description:
      "Participated in a hackathon at Dhanalakshmi Srinivasan College of Engineering and worked on an innovative solution.",
    date: "2025",
  },
  {
    title: "AR in Education Hackathon",
    description:
      "Worked on an augmented reality concept for education involving interactive 3D learning.",
    date: "2025",
  },
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">CREDENTIALS</p>
          <h2>Certifications & Achievements</h2>

          <p className="section-description">
            Certifications, learning experiences and achievements
            that complement my technical skills.
          </p>
        </div>

        <div className="credentials-grid">

          <div className="credentials-column">
            <h3 className="credentials-title">
              Certifications
            </h3>

            {certifications.map((certificate) => (
              <div
                className="credential-card"
                key={certificate.title}
              >
                <div className="credential-icon">
                  ✓
                </div>

                <div>
                  <span className="credential-type">
                    {certificate.type}
                  </span>

                  <h4>{certificate.title}</h4>

                  <p>{certificate.issuer}</p>

                  <small>{certificate.date}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="credentials-column">
            <h3 className="credentials-title">
              Achievements & Activities
            </h3>

            {achievements.map((achievement) => (
              <div
                className="credential-card"
                key={achievement.title}
              >
                <div className="credential-icon">
                  ★
                </div>

                <div>
                  <span className="credential-type">
                    Achievement
                  </span>

                  <h4>{achievement.title}</h4>

                  <p>{achievement.description}</p>

                  <small>{achievement.date}</small>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;