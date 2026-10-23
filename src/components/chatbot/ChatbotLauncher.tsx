import { useState, useRef, useEffect } from "react";
import { ChatbotWindow } from "./ChatbotWindow";

export function ChatbotLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const windowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      // Ignore clicks/taps inside the chatbot window
      if (windowRef.current && windowRef.current.contains(target)) {
        return;
      }

      // Ignore clicks/taps on the launcher button so its toggle onClick works normally
      if (launcherRef.current && launcherRef.current.contains(target)) {
        return;
      }

      // Clicked/tapped outside anywhere in the window -> close the chatbot window
      setIsOpen(false);
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  const prevIsOpen = useRef(isOpen);
  useEffect(() => {
    // When chatbot window closes, return focus to launcher button for keyboard/a11y users
    if (prevIsOpen.current && !isOpen) {
      launcherRef.current?.focus();
    }
    prevIsOpen.current = isOpen;
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <ChatbotWindow ref={windowRef} onClose={() => setIsOpen(false)} />
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        title={isOpen ? "Close AI assistant" : "Ask AI assistant"}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="fixed bottom-5 left-5 z-[1051] flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-neutral-950 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-400 active:scale-95 sm:bottom-7 sm:left-7"
      >
        {isOpen ? (
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
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
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M9 13v2" />
            <path d="M15 13v2" />
          </svg>
        )}
      </button>
    </>
  );
}