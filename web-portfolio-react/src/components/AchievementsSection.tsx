export function AchievementsSection() {
  return (
    <section
      className="section section-alt"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title" id="achievements-title">
              Achievements
            </h2>
            <p className="m-0 text-slate-400">
              Milestones from my learning path.
            </p>
          </div>
          <span className="rounded-full bg-fuchsia-950 px-3 py-1 text-sm font-semibold text-white">
            Growing
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <article className="achievement-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                2025
              </p>
              <h3 className="text-xl font-semibold">
                National ID System Prototype
              </h3>
              <p className="m-0 text-slate-400">
                Delivered a working prototype for identity integration.
              </p>
            </article>
          </div>
          <div>
            <article className="achievement-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                2024
              </p>
              <h3 className="text-xl font-semibold">Automation Impact</h3>
              <p className="m-0 text-slate-400">
                Built automated payment reminders to reduce follow-up time.
              </p>
            </article>
          </div>
          <div>
            <article className="achievement-card h-full rounded-3xl bg-white p-6">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                2023
              </p>
              <h3 className="text-xl font-semibold">Full-Stack Growth</h3>
              <p className="m-0 text-slate-400">
                Strengthened front-end and back-end development skills.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
