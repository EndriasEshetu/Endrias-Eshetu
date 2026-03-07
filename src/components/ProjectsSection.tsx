export function ProjectsSection() {
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
            <p className="m-0 text-slate-400">
              Academic and automation projects I have delivered.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-lg border border-[#18023ae6] px-5 py-2.5 font-medium text-[#18023ae6]"
            href="#contact"
          >
            Request CV
          </a>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div>
            <div className="panel-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                2025
              </p>
              <h3 className="text-xl font-semibold">
                National ID Integration System
              </h3>
              <ul className="experience-list mb-0 text-slate-400">
                <li>Designed the flow for secure identity validation.</li>
                <li>Built a clean interface for data verification steps.</li>
                <li>Connected front-end and back-end workflows.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="panel-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                2024
              </p>
              <h3 className="text-xl font-semibold">
                Payment Reminder Automation
              </h3>
              <ul className="experience-list mb-0 text-slate-400">
                <li>Automated scheduled reminders for payment follow-ups.</li>
                <li>Tracked delivery status and alert history.</li>
                <li>Focused on reliability and clear reporting.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="panel-card h-full rounded-3xl bg-white p-6">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="m-0 text-xs uppercase tracking-wide text-slate-400">
                  2026 - Present
                </p>
                <span className="rounded-full border border-[#18023ae6] px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#18023ae6]">
                  In Progress
                </span>
              </div>
              <h3 className="text-xl font-semibold">
                Architectural Design Posting Website
              </h3>
              <ul className="experience-list mb-0 text-slate-400">
                <li>
                  Building an e-commerce style website for architectural design
                  publishing and discovery.
                </li>
                <li>
                  Includes posting interior and other design types with detailed
                  specifications.
                </li>
                <li>
                  Supports ordering design packages, project browsing, and
                  admin-level content management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
