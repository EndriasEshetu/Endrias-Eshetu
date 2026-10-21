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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8" />
            <path d="M8 13h5" />
          </svg>
        )}
      </button>
    </>
  );
}