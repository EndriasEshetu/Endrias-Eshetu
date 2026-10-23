import { useEffect, useRef } from "react";
import type { ChatMessage } from "../../types/chatbot";
import { ChatMessageItem } from "./ChatMessageItem";

interface ChatMessageListProps {
  messages: ChatMessage[];
  isSending: boolean;
  isDark: boolean;
  onRetryLast?: () => void;
}

export function ChatMessageList({
  messages,
  isSending,
  isDark,
  onRetryLast,
}: ChatMessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

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

      <div ref={messagesEndRef} aria-hidden="true" />
    </div>
  );
}
