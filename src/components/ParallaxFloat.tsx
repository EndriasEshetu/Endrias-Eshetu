import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type ParallaxFloatProps = {
  children: ReactNode;
  className?: string;
  /** Higher values move more with scroll (keep small, e.g. 0.06–0.14). */
  intensity?: number;
};

export function ParallaxFloat({
  children,
  className,
  intensity = 0.1,
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const el = ref.current;
    if (!el) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centerY = rect.top + rect.height / 2;
      const offsetFromMid = (centerY - vh / 2) / vh;
      const y = offsetFromMid * intensity * -16;
      el.style.setProperty("--parallax-y", `${y}px`);
    };

    const onScrollOrResize = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion, intensity]);

  const style: CSSProperties | undefined = reducedMotion
    ? undefined
    : {
        transform: "translate3d(0, var(--parallax-y, 0px), 0)",
        willChange: "transform",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
