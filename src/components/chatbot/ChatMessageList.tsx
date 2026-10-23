import { useEffect, useRef } from "react";
import type { ChatMessage } from "../../types/chatbot";
import { ChatMessageItem } from "./ChatMessageItem";

interface ChatMessageListProps {
  messages: ChatMessage[];
  isSending: boolean;
  isDark: boolean;
  error?: string | null;
  onRetryLast?: () => void;
}

export function ChatMessageList({
  messages,
  isSending,
  isDark,
  error,
  onRetryLast,
}: ChatMessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending, error]);

  return (
    <div className="flex-1 min-h-0 space-y-3 overflow-y-auto overflow-x-hidden p-3.5 sm:p-4 overscroll-contain">
      {messages.map((message) => (
        <ChatMessageItem
          key={message.id}
          message={message}
          isDark={isDark}
          onRetry={message.status === "error" ? onRetryLast : undefined}
        />
      ))}

      {isSending && (
        <div className="flex justify-start">
          <div
            className={`flex items-center gap-2 rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm ${
              isDark
                ? "border border-neutral-700/60 bg-neutral-800/90 text-neutral-400"
                : "border border-neutral-200/80 bg-neutral-100 text-neutral-500"
            }`}
          >
            <span className="flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse [animation-delay:200ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse [animation-delay:400ms]" />
            </span>
            <span>Thinking...</span>
          </div>
        </div>
      )}

      {/* Inline Error Banner */}
      {error && (
        <div className="flex justify-center my-2">
          <div
            className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs max-w-[95%] shadow-sm ${
              isDark
                ? "border-red-500/30 bg-red-950/40 text-red-300"
                : "border-red-300 bg-red-50 text-red-700"
            }`}
          >
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="flex-1 leading-snug">{error}</span>
            {onRetryLast && (
              <button
                type="button"
                onClick={onRetryLast}
                className="font-semibold underline hover:opacity-80 ml-1 shrink-0 cursor-pointer"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      )}

      <div ref={messagesEndRef} aria-hidden="true" />
    </div>
  );
}
