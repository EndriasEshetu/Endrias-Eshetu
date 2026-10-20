import { ScrollReveal } from "./ScrollReveal";
import { useTheme } from "../contexts/ThemeContext";

type JourneyStep = {
  phase: string;
  title: string;
  description: string;
};

const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "FOUNDATION",
    title: "Academic Studies",
    description:
      "I built my foundation in Computer Science and Engineering at ASTU, mastering programming, data structures, algorithms, object-oriented design and core software engineering principles.",
  },
  {
    phase: "GROWTH",
    title: "Skill Development & Exploration",
    description:
      "I strengthened my skills through academic fundamentals into modern web development, working hands-on with JavaScript, TypeScript, React, Node.js, and relational and NoSQL databases.",
  },
  {
    phase: "PROJECTS",
    title: "Real-World Systems",
    description:
      "I developed production-grade applications—including an enterprise letter workflow system for SITA, a healthcare platform with RBAC, and developer community platforms.",
  },
  {
    phase: "PRESENT",
    title: "Production-Ready Engineering",
    description:
      "Currently architecting full-stack web applications with clean, maintainable architecture, secure authentication, intuitive UX, and reliable cloud deployment.",
  },
  {
    phase: "FUTURE",
    title: "Expanding Impact",
    description:
      "I aim to become a professional software engineer, building impactful digital products and scalable systems, while contributing to real-world solutions and growing within the global tech community.",
  },
];

export function MyJourney() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const sectionTextClass = isLight ? "text-slate-900" : "text-white";
  const titleClass = isLight ? "text-slate-900" : "text-white";
  const bodyClass = isLight ? "text-slate-700" : "text-slate-300";

  return (
    <section
      className={`relative scroll-mt-24 overflow-hidden bg-(--section-alt-bg) border-y border-(--line) py-20 md:py-28 ${sectionTextClass}`}
      id="journey"
      aria-labelledby="journey-title"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse_at_bottom_left, rgba(245,158,11,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          variant="fade-up"
          className="relative z-10 mb-16 text-center"
        >
          <p className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
            The Path
          </p>
          <h2
            className={`font-serif text-3xl font-light md:text-4xl ${titleClass}`}
            id="journey-title"
          >
            My Journey
          </h2>
        </ScrollReveal>

        <div
          className="relative z-10 mx-auto max-w-4xl"
          style={{ minHeight: 200 }}
          aria-label="Timeline of my learning and work journey"
        >
          <span
            className="absolute left-4 top-0 bottom-0 w-px bg-neutral-700 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {JOURNEY_STEPS.map((step, index) => {
            const sideClass =
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";

            return (
              <ScrollReveal
                key={step.phase}
                variant="fade-up"
                className={`relative mb-14 flex flex-col items-start gap-6 last:mb-0 md:gap-12 ${sideClass}`}
              >
                <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1.5 rounded-full bg-amber-500 ring-4 ring-neutral-900 md:left-1/2 md:-translate-x-1.5" />

                <article
                  className={`ml-12 max-w-none md:w-1/2 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-left" : "md:pl-16 md:text-left"}`}
                >
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
                    {step.phase}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold md:text-2xl">
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed md:text-base ${bodyClass}`}
                  >
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
