import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "fade-scale";

type ScrollRevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  variant?: ScrollRevealVariant;
  /** When false, leaving the viewport hides the element so it can reveal again (scroll down or up). Default false. */
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
} & Omit<HTMLAttributes<HTMLElement>, "children">;

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function ScrollReveal({
  as,
  className,
  children,
  variant = "fade-up",
  once = false,
  rootMargin,
  threshold,
  ...rest
}: ScrollRevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const [ref, isInView] = useInView<HTMLElement>({
    rootMargin,
    threshold,
    once,
  });

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "scroll-reveal",
        `scroll-reveal--${variant}`,
        isInView && "is-inview",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
