import { useState, useRef, useEffect, forwardRef } from "react";
import type { ChatMessage } from "../../types/chatbot";
import { sendChatMessage } from "../../services/chatbotService";
import { useTheme } from "../../contexts/ThemeContext";

interface ChatbotWindowProps {
  onClose: () => void;
}

export const ChatbotWindow = forwardRef<HTMLElement, ChatbotWindowProps>(
  function ChatbotWindow({ onClose }, ref) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const [messages, setMessages] = useState<ChatMessage[]>([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi! I'm Endrias's AI assistant. Ask me about his skills, projects, experience, or technologies.",
      },
    ]);

    const [input, setInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to latest message
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isSending]);

    // Close on Escape key press
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const content = input.trim();

      if (!content || isSending) {
        return;
      }

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content,
      };

      const nextMessages = [...messages, userMessage];

      setMessages(nextMessages);
      setInput("");
      setIsSending(true);

      try {
        const response = await sendChatMessage({
          message: content,
          history: messages
            .filter((message) => message.id !== "welcome")
            .map(({ role, content }) => ({
              role,
              content,
            })),
        });

        if (response.reply) {
          const assistantMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: response.reply,
          };

          setMessages((current) => [...current, assistantMessage]);
        }
      } catch (error) {
        const errorMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Sorry, I couldn't process your message.",
        };

        setMessages((current) => [...current, errorMessage]);
      } finally {
        setIsSending(false);
      }
    };

    return (
      <section
        ref={ref}
        aria-label="AI assistant"
        className={`fixed z-[1050] flex flex-col overflow-hidden rounded-2xl border shadow-2xl transition-all duration-200
        bottom-20 left-3 right-3 sm:right-auto sm:left-7 sm:bottom-24
        w-auto max-w-[calc(80vw-1.5rem)] sm:w-[380px] md:w-[390px]
        h-[520px] max-h-[calc(90dvh-6.5rem)] min-h-[320px]
        ${isDark
            ? "border-neutral-800 bg-neutral-900 text-white shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
            : "border-neutral-200 bg-white text-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          }`}
      >
        {/* Header Container - Isolated div to prevent external header styles from interfering */}
        <div
          role="region"
          aria-label="Chatbot header"
          className={`shrink-0 flex items-center justify-between border-b px-4 py-3 select-none ${isDark
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
                className={`text-sm font-semibold truncate leading-tight ${isDark ? "text-white" : "text-neutral-900"
                  }`}
              >
                Endrias AI Assistant
              </h2>
              <p
                className={`text-xs truncate leading-tight mt-0.5 ${isDark ? "text-neutral-400" : "text-neutral-500"
                  }`}
              >
                Ask about my work and projects
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close AI assistant"
            title="Close AI assistant"
            className={`shrink-0 ml-2 flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${isDark
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

        {/* Messages Scroll Area */}
        <div className="flex-1 min-h-0 space-y-3 overflow-y-auto overflow-x-hidden p-3.5 sm:p-4 overscroll-contain">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed break-words [overflow-wrap:anywhere] ${message.role === "user"
                  ? "rounded-br-sm bg-amber-500 text-neutral-950 font-medium shadow-sm"
                  : isDark
                    ? "rounded-bl-sm border border-neutral-700/60 bg-neutral-800/90 text-neutral-100"
                    : "rounded-bl-sm border border-neutral-200/80 bg-neutral-100 text-neutral-800"
                  }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isSending ? (
            <div className="flex justify-start">
              <div
                className={`flex items-center gap-2 rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm ${isDark
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
          ) : null}

          <div ref={messagesEndRef} aria-hidden="true" />
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className={`shrink-0 border-t p-2.5 sm:p-3 ${isDark
            ? "border-neutral-800 bg-neutral-900"
            : "border-neutral-200 bg-white"
            }`}
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              disabled={isSending}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask something..."
              aria-label="Message"
              maxLength={500}
              className={`min-w-0 flex-1 rounded-xl border px-3 py-2 sm:px-3.5 sm:py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-amber-500/25 ${isDark
                ? "border-neutral-700 bg-neutral-800/80 text-white placeholder:text-neutral-500 focus:border-amber-500"
                : "border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 focus:border-amber-500"
                } disabled:cursor-not-allowed disabled:opacity-50`}
            />

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
      </section>
    );
  });
