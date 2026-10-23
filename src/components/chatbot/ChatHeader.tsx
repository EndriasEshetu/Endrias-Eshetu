interface ChatHeaderProps {
  onClose: () => void;
  onClearChat: () => void;
  canClear: boolean;
  isSending: boolean;
  isDark: boolean;
}

export function ChatHeader({
  onClose,
  onClearChat,
  canClear,
  isSending,
  isDark,
}: ChatHeaderProps) {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
    onClose();
  };

  return (
    <div
      role="region"
      aria-label="Chatbot header"
      className={`shrink-0 flex items-center justify-between border-b px-4 py-3 select-none ${
        isDark
          ? "border-neutral-800 bg-neutral-900/95"
          : "border-neutral-200 bg-neutral-50/95"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-neutral-950 shadow-sm">
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

          {/* Online Pulse Status */}
          <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-white dark:ring-neutral-900" />
          </span>
        </span>

        <div className="min-w-0 flex-1">
          <h2
            id="chatbot-heading"
            className={`text-sm font-semibold truncate leading-tight ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Endrias AI Assistant
          </h2>
          <p
            id="chatbot-subheading"
            className={`text-xs truncate leading-tight mt-0.5 ${
              isDark ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            Ask about my work and projects
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 ml-2 shrink-0">
        {/* Quick Contact Link */}
        <button
          type="button"
          onClick={handleContactClick}
          aria-label="Go to contact section"
          title="Go to contact form"
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
            isDark
              ? "text-neutral-400 hover:bg-neutral-800 hover:text-white"
              : "text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
          }`}
        >
          <svg
            className="h-4 w-4"
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
        </button>

        {/* Start New Chat Button */}
        {canClear && (
          <button
            type="button"
            onClick={onClearChat}
            disabled={isSending}
            aria-label="Start new chat"
            title="Start new chat"
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
              isDark
                ? "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                : "text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
            } disabled:cursor-not-allowed disabled:opacity-40`}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              <path d="M3 21v-5h5" />
            </svg>
          </button>
        )}

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close AI assistant"
          title="Close AI assistant"
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
            isDark
              ? "text-neutral-400 hover:bg-neutral-800 hover:text-white"
              : "text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
          }`}
        >
          <svg
            className="h-4.5 w-4.5"
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
        </button>
      </div>
    </div>
  );
}
