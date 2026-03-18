export function SelectedWork() {
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
            className="inline-flex items-center justify-center rounded-lg border border-[#18023ae6] px-5 py-2.5 font-medium text-[#18023ae6]"
            href="#contact"
          >
            Request details
          </a>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <article className="project-card h-full rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-muted-prose">
                Government
              </p>
              <h3 className="text-xl font-semibold">
                National ID Integration System
              </h3>
              <p className="text-muted-prose">
                Secure identity verification flow with full-stack delivery.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-[#18023ae6] px-3 py-1.5 text-sm font-medium text-[#18023ae6]"
                href="#contact"
              >
                View details
              </a>
            </article>
          </div>
          <div>
            <article className="project-card h-full rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-muted-prose">
                Automation
              </p>
              <h3 className="text-xl font-semibold">
                Payment Reminder Automation
              </h3>
              <p className="text-muted-prose">
                Automated reminders with tracking and status logs.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-[#18023ae6] px-3 py-1.5 text-sm font-medium text-[#18023ae6]"
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
