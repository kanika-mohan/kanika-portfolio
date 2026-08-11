import portfolioData from "../data/portfolioData";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Let's Connect</h2>

          <p className="section-description">
            I'm always open to discussing opportunities, projects,
            collaborations and interesting ideas.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            <div className="contact-card">
              <span className="contact-icon">✉</span>

              <div>
                <h3>Email</h3>

                <a href={portfolioData.social.email}>
                  {portfolioData.social.emailAddress}
                </a>
              </div>
            </div>


            <div className="contact-card">
              <span className="contact-icon">in</span>

              <div>
                <h3>LinkedIn</h3>

                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>


            <div className="contact-card">
              <span className="contact-icon">GH</span>

              <div>
                <h3>GitHub</h3>

                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View my repositories
                </a>
              </div>
            </div>

          </div>


          {/* Contact Form */}

          <form
            className="contact-form"
            action="https://formspree.io/f/mljrbljo"
            method="POST"
          >

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="primary-button"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;