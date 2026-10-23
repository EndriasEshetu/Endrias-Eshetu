import { useEffect, useRef } from "react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSending: boolean;
  isDark: boolean;
}

const MAX_CHAR_LIMIT = 500;
const WARN_CHAR_LIMIT = 450;

export function ChatInput({
  input,
  setInput,
  onSubmit,
  isSending,
  isDark,
}: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const charCount = input.length;
  const isNearLimit = charCount >= WARN_CHAR_LIMIT;

  useEffect(() => {
    // Automatically focus input when chatbot opens
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (!input.trim() || isSending) {
        e.preventDefault();
      }
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`shrink-0 border-t p-2.5 sm:p-3 ${
        isDark ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="relative flex-1 flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            disabled={isSending}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
            aria-label="Message input"
            maxLength={MAX_CHAR_LIMIT}
            className={`w-full rounded-xl border px-3 py-2 sm:px-3.5 sm:py-2.5 text-sm outline-none transition pr-14 focus:ring-2 focus:ring-amber-500/25 ${
              isDark
                ? "border-neutral-700 bg-neutral-800/80 text-white placeholder:text-neutral-500 focus:border-amber-500"
                : "border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 focus:border-amber-500"
            } disabled:cursor-not-allowed disabled:opacity-50`}
          />

          {/* Character counter (shows when user types) */}
          {charCount > 0 && (
            <span
              className={`absolute right-3 text-[10px] tabular-nums select-none ${
                isNearLimit
                  ? charCount >= MAX_CHAR_LIMIT
                    ? "text-red-500 font-semibold"
                    : "text-amber-500"
                  : isDark
                  ? "text-neutral-500"
                  : "text-neutral-400"
              }`}
            >
              {charCount}/{MAX_CHAR_LIMIT}
            </span>
          )}
        </div>

        <button
          type="submit"
          aria-label="Send message"
          title="Send message"
          disabled={!input.trim() || isSending}
          className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-neutral-950 transition hover:bg-amber-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 shadow-sm"
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
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>
    </form>
  );
}
