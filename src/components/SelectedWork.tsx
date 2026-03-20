import { ScrollReveal } from "./ScrollReveal";

export function SelectedWork() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <ScrollReveal variant="fade" className="min-w-0">
            <div>
              <h2 className="section-title" id="projects-title">
                Selected work
              </h2>
              <p className="m-0 text-muted-prose">Projects I am proud of.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade" className="shrink-0">
            <a
              className="inline-flex items-center justify-center rounded-lg border border-(--accent) px-5 py-2.5 font-medium text-(--accent)"
              href="#contact"
            >
              Request details
            </a>
          </ScrollReveal>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <ScrollReveal variant="scale" className="min-w-0 h-full">
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
                className="inline-flex items-center justify-center rounded-lg border border-(--accent) px-3 py-1.5 text-sm font-medium text-(--accent)"
                href="#contact"
              >
                View details
              </a>
            </article>
          </ScrollReveal>
          <ScrollReveal variant="scale" className="min-w-0 h-full">
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
                className="inline-flex items-center justify-center rounded-lg border border-(--accent) px-3 py-1.5 text-sm font-medium text-(--accent)"
                href="#contact"
              >
                View details
              </a>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
