export function FloatingContactButton() {
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
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center justify-center gap-2.5 rounded-full p-3 sm:px-4 sm:py-3 bg-amber-500  shadow-xl transition-all duration-300 hover:bg-amber-400 hover:scale-105 active:scale-95`}
    >
      {/* Chat icon with online/available status indicator */}
      <span className="relative flex items-center justify-center text-neutral-950">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      </span>

      <span className="hidden sm:inline text-sm font-semibold tracking-wide text-neutral-950">
        Contact Me
      </span>
    </a>
  );
}
