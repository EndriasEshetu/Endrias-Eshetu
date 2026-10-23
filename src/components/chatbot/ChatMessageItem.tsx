import type { ChatMessage } from "../../types/chatbot";
import { formatChatMessage } from "../../utils/chatFormatter";

interface ChatMessageItemProps {
  message: ChatMessage;
  isDark: boolean;
  onRetry?: () => void;
}

function formatTime(timestamp: number): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date(timestamp));
  } catch {
    return "";
  }
}

export function ChatMessageItem({
  message,
  isDark,
  onRetry,
}: ChatMessageItemProps) {
  const isUser = message.role === "user";
  const isError = message.status === "error";

  return (
    <div
      className={`flex flex-col ${
        isUser ? "items-end" : "items-start"
      } space-y-1`}
    >
      <div
        className={`flex items-end gap-1.5 max-w-[85%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed break-words [overflow-wrap:anywhere] ${
            isUser
              ? `rounded-br-sm bg-amber-500 text-neutral-950 font-medium shadow-sm ${
                  isError ? "ring-2 ring-red-500/80 bg-amber-500/90" : ""
                }`
              : isDark
              ? "rounded-bl-sm border border-neutral-700/60 bg-neutral-800/90 text-neutral-100"
              : "rounded-bl-sm border border-neutral-200/80 bg-neutral-100 text-neutral-800"
          }`}
        >
          {formatChatMessage(message.content)}
        </div>

        {/* Retry Button if message failed to send */}
        {isUser && isError && onRetry && (
          <button
            type="button"
            onClick={onRetry}
            aria-label="Retry sending message"
            title="Retry sending"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 21h5v-5" />
            </svg>
          </button>
        )}
      </div>

      {/* Message Timestamp */}
      <span
        className={`text-[10px] px-1 select-none ${
          isDark ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        {formatTime(message.timestamp)}
      </span>
    </div>
  );
}
