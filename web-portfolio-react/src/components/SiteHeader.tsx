export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className="site-header" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-lg-6 ">
                <p className="eyebrow text-uppercase">
                  Full-Stack Developer (Student)
                </p>
                <h1 className="display-4 hero-title" id="hero-title">
                  Building reliable web experiences from front-end to back-end.
                </h1>
                <p className="lead text-muted">
                  I am a full-stack developer and student based in Adama,
                  usually in Hawasa. I enjoy building clean, responsive
                  interfaces and dependable back-end systems.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a className="btn btn-accent btn-lg" href="#projects">
                    View projects
                  </a>
                  <a
                    className="btn btn-outline-dark btn-lg"
                    href="#certificates"
                  >
                    Add a certificate
                  </a>
                </div>
                <div className="hero-metrics mt-4">
                  <div>
                    <p className="metric-value">Full-stack</p>
                    <p className="metric-label">Front-end + back-end focus</p>
                  </div>
                  <div>
                    <p className="metric-value">Student</p>
                    <p className="metric-label">
                      Always learning &amp; building
                    </p>
                  </div>
                  <div>
                    <p className="metric-value">Open</p>
                    <p className="metric-label">
                      Internships &amp; collaborations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-card">
                  <div className="hero-card-inner">
                    <img
                      src="/endrias_photo.jpg"
                      alt="Photo of me working on a laptop, smiling at the camera"
                      className="img-fluid rounded-4 shadow"
                    />
                    <div className="hero-card-meta">
                      <p className="mb-1 fw-semibold">
                        Available for internships
                      </p>
                      <p className="mb-0 text-muted">
                        Adama, Ethiopia · Often in Hawasa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
