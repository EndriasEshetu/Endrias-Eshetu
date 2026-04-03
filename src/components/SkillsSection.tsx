import { ScrollReveal } from "./ScrollReveal";

const skills = [
  {
    title: "Web Development",
    description:
      "Responsive front-end builds and dependable back-end services.",
    emphasis: "core" as const,
    aria: "Web development — core focus area",
  },
  {
    title: "Computer Networking",
    description:
      "Network fundamentals, troubleshooting, and connectivity planning.",
    emphasis: "strong" as const,
    aria: "Computer networking — strong area",
  },
  {
    title: "AI Automation",
    description: "Automating workflows and building smart task helpers.",
    emphasis: "core" as const,
    aria: "AI automation — core focus area",
  },
  {
    title: "Problem-Solving",
    description: "Debugging, systems thinking, and clear solutions.",
    emphasis: "strong" as const,
    aria: "Problem-solving — strong area",
  },
  {
    title: "Project Management",
    description: "Planning, organizing tasks, and delivery follow-through.",
    emphasis: "strong" as const,
    aria: "Project management — strong area",
  },
  {
    title: "Team Collaboration",
    description: "Communicating clearly and working well across teams.",
    emphasis: "core" as const,
    aria: "Team collaboration — core focus area",
  },
] as const;

const emphasisVisual = {
  core: {
    label: "Core focus",
    markerClass:
      "size-2 rotate-45 rounded-sm bg-(--btn-accent-bg) shadow-[0_0_0_3px_rgba(166,124,26,0.28)]",
    trackClass: "bg-[color-mix(in_srgb,var(--btn-accent-bg)_35%,transparent)]",
  },
  strong: {
    label: "Strong",
    markerClass:
      "size-2 rounded-full bg-(--accent) shadow-[0_0_0_2px_rgba(244,201,74,0.35)]",
    trackClass: "bg-[color-mix(in_srgb,var(--accent)_22%,transparent)]",
  },
} as const;

export function SkillsSection() {
  return (
    <section
      className="section section-alt"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <ScrollReveal variant="fade-up" className="min-w-0">
            <div>
              <h2 className="section-title" id="skills-title">
                Skills
              </h2>
              <p className="m-0 text-muted-prose">
                Built around web development, automation, and teamwork.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" className="shrink-0">
            <span className="inline-block rounded-full bg-(--btn-accent-bg) px-3 py-1 text-sm font-semibold text-(--navbar-text)">
              2026 focus
            </span>
          </ScrollReveal>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <ScrollReveal
              key={skill.title}
              variant="fade-scale"
              className="min-w-0 h-full"
            >
              <div className="skill-card h-full rounded-3xl p-6">
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="text-muted-prose">{skill.description}</p>
                <div
                  className="mt-5 flex items-center gap-3"
                  role="group"
                  aria-label={skill.aria}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider text-(--accent)"
                    aria-hidden
                  >
                    {emphasisVisual[skill.emphasis].label}
                  </span>
                  <div
                    className="relative flex h-4 min-w-0 flex-1 items-center"
                    aria-hidden
                  >
                    <div
                      className={
                        "h-px w-full rounded-full " +
                        emphasisVisual[skill.emphasis].trackClass
                      }
                    />
                    <span
                      className={
                        "absolute left-0 top-1/2 -translate-y-1/2 " +
                        emphasisVisual[skill.emphasis].markerClass
                      }
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
