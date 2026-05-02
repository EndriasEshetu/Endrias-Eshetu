import { memo, useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type StatCardProps = {
  label: string;
  target: number;
  suffix?: string;
  delayMs?: number;
};

const ABOUT_STATS: StatCardProps[] = [
  { label: "Years of Experience", target: 2, delayMs: 0 },
  { label: "Projects Completed", target: 10, delayMs: 120 },
  { label: "Satisfied Clients", target: 15, delayMs: 240 },
];

const CountUpStat = memo(function CountUpStat({
  label,
  target,
  suffix = "+",
  delayMs = 0,
}: StatCardProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    once: true,
    threshold: 0.2,
  });

  const prefersReducedMotion = usePrefersReducedMotion();
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    let frameId = 0;

    if (prefersReducedMotion) {
      frameId = requestAnimationFrame(() => setCount(target));
      return () => cancelAnimationFrame(frameId);
    }

    const durationMs = 1200;
    let startTime = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion, target]);

  return (
    <ScrollReveal
      variant="fade-up"
      className="h-full"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div ref={ref} className="bg-white/5 rounded-xl p-6 shadow-md h-full">
        <h3 className="text-4xl font-bold text-accent">
          {count.toString().padStart(2, "0")}
          {suffix}
        </h3>
        <p className="mt-2 text-sm text-muted-prose">{label}</p>
      </div>
    </ScrollReveal>
  );
});

export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ScrollReveal variant="fade-up">
              <h2 className="section-title" id="about-title">
                About me
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="mt-3 block">
              <p className="text-muted-prose">
                I'm Endrias, a freelance full-stack developer focused on
                delivering complete features from planning and UI design to
                back-end logic and deployment support.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="mt-4 block">
              <div className="flex flex-wrap gap-3">
                <a
                  className="btn-accent inline-flex items-center justify-center rounded-lg p-3 font-medium"
                  href="#contact"
                >
                  Hire me
                </a>

                <a
                  className="inline-flex items-center justify-center p-2 underline-offset-4 hover:underline"
                  href="#journey"
                >
                  See my journey
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 lg:mt-0">
            {ABOUT_STATS.map((stat) => (
              <CountUpStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
