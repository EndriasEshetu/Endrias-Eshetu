export function ExperienceSection() {
  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h2 className="section-title" id="experience-title">
              Projects &amp; Experience
            </h2>
            <p className="text-muted mb-0">
              Academic and automation projects I have delivered.
            </p>
          </div>
          <a className="btn btn-outline-dark" href="#contact">
            Request CV
          </a>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card panel-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">2025</p>
                <h3 className="h5">National ID Integration System</h3>
                <ul className="text-muted mb-0 experience-list">
                  <li>Designed the flow for secure identity validation.</li>
                  <li>Built a clean interface for data verification steps.</li>
                  <li>Connected front-end and back-end workflows.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card panel-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">2024</p>
                <h3 className="h5">Payment Reminder Automation</h3>
                <ul className="text-muted mb-0 experience-list">
                  <li>Automated scheduled reminders for payment follow-ups.</li>
                  <li>Tracked delivery status and alert history.</li>
                  <li>Focused on reliability and clear reporting.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
