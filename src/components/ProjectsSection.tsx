import { ScrollReveal } from "./ScrollReveal";

export function ProjectsSection() {
  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <ScrollReveal variant="slide-left" className="min-w-0">
            <div>
              <h2 className="section-title" id="experience-title">
                Projects &amp; Experience
              </h2>
              <p className="m-0 text-muted-prose">
                Academic and automation projects I have delivered.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-left" className="shrink-0">
            <a
              className="inline-flex items-center justify-center rounded-lg border border-(--accent) px-5 py-2.5 font-medium text-(--accent)"
              href="#contact"
            >
              Request CV
            </a>
          </ScrollReveal>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <ScrollReveal variant="fade-up" className="min-w-0 h-full">
            <div className="panel-card h-full rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-muted-prose">
                2025
              </p>
              <h3 className="text-xl font-semibold">
                National ID Integration System
              </h3>
              <ul className="experience-list mb-0 text-muted-prose">
                <li>Designed the flow for secure identity validation.</li>
                <li>Built a clean interface for data verification steps.</li>
                <li>Connected front-end and back-end workflows.</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" className="min-w-0 h-full">
            <div className="panel-card h-full rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-muted-prose">
                2024
              </p>
              <h3 className="text-xl font-semibold">
                Payment Reminder Automation
              </h3>
              <ul className="experience-list mb-0 text-muted-prose">
                <li>Automated scheduled reminders for payment follow-ups.</li>
                <li>Tracked delivery status and alert history.</li>
                <li>Focused on reliability and clear reporting.</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" className="min-w-0 h-full">
            <div className="panel-card h-full rounded-3xl p-6">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="m-0 text-xs uppercase tracking-wide text-muted-prose">
                  2026 - Present
                </p>
                <span className="rounded-full border border-(--accent) px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-(--accent)">
                  In Progress
                </span>
              </div>
              <h3 className="text-xl font-semibold">
                Architectural Design Posting Website
              </h3>
              <ul className="experience-list mb-0 text-muted-prose">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
