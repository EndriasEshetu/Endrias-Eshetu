export function ExperienceSection() {
  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title" id="experience-title">
              Projects &amp; Experience
            </h2>
            <p className="m-0 text-slate-600">
              Academic and automation projects I have delivered.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-lg border border-[rgba(24,2,58,0.9)] px-5 py-2.5 font-medium text-[rgba(24,2,58,0.9)]"
            href="#contact"
          >
            Request CV
          </a>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="panel-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                2025
              </p>
              <h3 className="text-xl font-semibold">
                National ID Integration System
              </h3>
              <ul className="experience-list mb-0 text-slate-600">
                <li>Designed the flow for secure identity validation.</li>
                <li>Built a clean interface for data verification steps.</li>
                <li>Connected front-end and back-end workflows.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="panel-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                2024
              </p>
              <h3 className="text-xl font-semibold">
                Payment Reminder Automation
              </h3>
              <ul className="experience-list mb-0 text-slate-600">
                <li>Automated scheduled reminders for payment follow-ups.</li>
                <li>Tracked delivery status and alert history.</li>
                <li>Focused on reliability and clear reporting.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
