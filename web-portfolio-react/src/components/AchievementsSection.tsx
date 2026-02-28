export function AchievementsSection() {
  return (
    <section
      className="section section-alt"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h2 className="section-title" id="achievements-title">
              Achievements
            </h2>
            <p className="text-muted mb-0">Milestones from my learning path.</p>
          </div>
          <span className="badge rounded-pill text-bg-accent">Growing</span>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <article className="card achievement-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">2025</p>
                <h3 className="h5">National ID System Prototype</h3>
                <p className="text-muted mb-0">
                  Delivered a working prototype for identity integration.
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="card achievement-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">2024</p>
                <h3 className="h5">Automation Impact</h3>
                <p className="text-muted mb-0">
                  Built automated payment reminders to reduce follow-up time.
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="card achievement-card h-100">
              <div className="card-body">
                <p className="text-uppercase small text-muted">2023</p>
                <h3 className="h5">Full-Stack Growth</h3>
                <p className="text-muted mb-0">
                  Strengthened front-end and back-end development skills.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
