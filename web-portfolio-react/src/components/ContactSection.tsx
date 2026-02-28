export function ContactSection() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title" id="contact-title">
              Let's connect
            </h2>
            <p className="text-muted">
              Reach out for internships, collaboration, or project work. I
              respond as quickly as possible.
            </p>
            <div className="contact-details">
              <p className="mb-1">Email</p>
              <a href="mailto:endrias.eshetu@example.com">
                endrias.eshetu.egata@gmail.com
              </a>
              <p className="mb-1 mt-3">Phone</p>
              <a href="tel:+251900000000">+251 989 483 775</a>
              <p className="mb-1 mt-3">Social</p>
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/EndriasEshetu"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/endrias-eshetu-a25948388"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://web.facebook.com/tsinubekur1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="card panel-card" aria-label="Contact form">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-name">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-email">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="contact-email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="contact-topic">
                      Topic
                    </label>
                    <select
                      className="form-select"
                      id="contact-topic"
                      name="topic"
                      required
                    >
                      <option value="" disabled>
                        Choose one
                      </option>
                      <option value="fullstack">Full-stack project</option>
                      <option value="automation">Automation</option>
                      <option value="networking">Networking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-accent w-100" type="submit">
                      Send message
                    </button>
                    <p className="small text-muted mt-2 mb-0">
                      This form is a demo. Replace with your email handler.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
