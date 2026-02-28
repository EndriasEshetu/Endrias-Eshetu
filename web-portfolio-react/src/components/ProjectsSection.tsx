export function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h2 className="section-title" id="projects-title">
              Selected work
            </h2>
            <p className="text-muted mb-0">Projects I am proud of.</p>
          </div>
          <a className="btn btn-outline-dark" href="#contact">
            Request details
          </a>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <article className="card project-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">Government</p>
                <h3 className="h5">National ID Integration System</h3>
                <p className="text-muted">
                  Secure identity verification flow with full-stack delivery.
                </p>
                <a className="btn btn-sm btn-outline-dark" href="#contact">
                  View details
                </a>
              </div>
            </article>
          </div>
          <div className="col-lg-4">
            <article className="card project-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">Automation</p>
                <h3 className="h5">Payment Reminder Automation</h3>
                <p className="text-muted">
                  Automated reminders with tracking and status logs.
                </p>
                <a className="btn btn-sm btn-outline-dark" href="#contact">
                  View details
                </a>
              </div>
            </article>
          </div>
          <div className="col-lg-4">
            <article className="card project-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">Personal</p>
                <h3 className="h5">Portfolio Website</h3>
                <p className="text-muted">
                  Responsive portfolio with certificate posting features.
                </p>
                <a className="btn btn-sm btn-outline-dark" href="#contact">
                  View details
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
