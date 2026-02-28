export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <h2 className="section-title" id="about-title">
              About me
            </h2>
            <p className="text-muted">
              I am a full-stack developer and student focused on building
              complete web solutions. I enjoy turning ideas into working
              products through reliable code, clean UI, and thoughtful
              automation.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a className="btn btn-outline-dark" href="#contact">
                Hire me
              </a>
              <a className="btn btn-link" href="#experience">
                See my journey
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card panel-card">
              <div className="card-body">
                <div className="row g-4">
                  <div className="col-md-6">
                    <h3 className="h6 text-uppercase">Focus areas</h3>
                    <ul className="list-unstyled mb-0">
                      <li>Front-end development</li>
                      <li>Back-end development</li>
                      <li>Full-stack project delivery</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h3 className="h6 text-uppercase">Tools I love</h3>
                    <ul className="list-unstyled mb-0">
                      <li>HTML, CSS, JavaScript</li>
                      <li>Bootstrap, Git, VS Code</li>
                      <li>Node.js, Python, SQL</li>
                    </ul>
                  </div>
                </div>
                <div className="about-highlight mt-4">
                  <p className="mb-1">Signature strength</p>
                  <p className="fw-semibold mb-0">
                    Delivering end-to-end features with clarity and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
