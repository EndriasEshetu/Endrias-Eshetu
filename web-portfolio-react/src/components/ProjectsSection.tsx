export function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title" id="projects-title">
              Selected work
            </h2>
            <p className="m-0 text-slate-600">Projects I am proud of.</p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-lg border border-[rgba(24,2,58,0.9)] px-5 py-2.5 font-medium text-[rgba(24,2,58,0.9)]"
            href="#contact"
          >
            Request details
          </a>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div>
            <article className="project-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Government
              </p>
              <h3 className="text-xl font-semibold">
                National ID Integration System
              </h3>
              <p className="text-slate-600">
                Secure identity verification flow with full-stack delivery.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-[rgba(24,2,58,0.9)] px-3 py-1.5 text-sm font-medium text-[rgba(24,2,58,0.9)]"
                href="#contact"
              >
                View details
              </a>
            </article>
          </div>
          <div>
            <article className="project-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Automation
              </p>
              <h3 className="text-xl font-semibold">
                Payment Reminder Automation
              </h3>
              <p className="text-slate-600">
                Automated reminders with tracking and status logs.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-[rgba(24,2,58,0.9)] px-3 py-1.5 text-sm font-medium text-[rgba(24,2,58,0.9)]"
                href="#contact"
              >
                View details
              </a>
            </article>
          </div>
          <div>
            <article className="project-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Personal
              </p>
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="text-slate-600">
                Responsive portfolio with certificate posting features.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-[rgba(24,2,58,0.9)] px-3 py-1.5 text-sm font-medium text-[rgba(24,2,58,0.9)]"
                href="#contact"
              >
                View details
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
