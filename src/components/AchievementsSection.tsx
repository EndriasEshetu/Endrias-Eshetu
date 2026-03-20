import { ScrollReveal } from "./ScrollReveal";

export function AchievementsSection() {
  return (
    <section
      className="section section-alt"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <ScrollReveal variant="fade-up" className="min-w-0">
            <div>
              <h2 className="section-title" id="achievements-title">
                Achievements
              </h2>
              <p className="m-0 text-muted-prose">
                Milestones from my learning path.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" className="shrink-0">
            <span className="inline-block rounded-full bg-(--btn-accent-bg) px-3 py-1 text-sm font-semibold text-(--navbar-text)">
              Growing
            </span>
          </ScrollReveal>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal variant="slide-right" className="min-w-0 h-full">
            <article className="achievement-card h-full rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-muted-prose">
                2025
              </p>
              <h3 className="text-xl font-semibold">
                National ID System Prototype
              </h3>
              <p className="m-0 text-muted-prose">
                Delivered a working prototype for identity integration.
              </p>
            </article>
          </ScrollReveal>
          <ScrollReveal variant="slide-right" className="min-w-0 h-full">
            <article className="achievement-card h-full rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-muted-prose">
                2024
              </p>
              <h3 className="text-xl font-semibold">Automation Impact</h3>
              <p className="m-0 text-muted-prose">
                Built automated payment reminders to reduce follow-up time.
              </p>
            </article>
          </ScrollReveal>
          <ScrollReveal variant="slide-right" className="min-w-0 h-full">
            <article className="achievement-card h-full rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-muted-prose">
                2023
              </p>
              <h3 className="text-xl font-semibold">Full-Stack Growth</h3>
              <p className="m-0 text-muted-prose">
                Strengthened front-end and back-end development skills.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
