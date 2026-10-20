import { useTheme } from "../contexts/ThemeContext";

export function FloatingContactButton() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      aria-label="Contact me"
      title="Contact me"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center justify-center gap-2.5 rounded-full p-3 sm:px-4 sm:py-3 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
        isLight
          ? "bg-amber-600 text-white shadow-amber-600/30 hover:bg-amber-700 hover:shadow-amber-600/50"
          : "bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-semibold shadow-[0_8px_25px_rgba(245,158,11,0.35)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.5)] hover:brightness-110"
      }`}
    >
      {/* Chat icon with online/available status indicator */}
      <span className="relative flex items-center justify-center">
        <svg
          className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>

        {/* Pulsing available status badge */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-neutral-900" />
        </span>
      </span>

      <span className="hidden sm:inline text-sm font-semibold tracking-wide">
        Contact Me
      </span>
    </a>
  );
}
