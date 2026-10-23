import { useEffect, forwardRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useChatbot } from "../../hooks/useChatbot";
import { ChatHeader } from "./ChatHeader";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInput } from "./ChatInput";
import { DEFAULT_SUGGESTIONS, SuggestionChips } from "./SuggestionChips";

interface ChatbotWindowProps {
  onClose: () => void;
}

export const ChatbotWindow = forwardRef<HTMLElement, ChatbotWindowProps>(
  function ChatbotWindow({ onClose }, ref) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const {
      messages,
      input,
      setInput,
      isSending,
      sendMessage,
      clearChat,
      retryLastMessage,
    } = useChatbot();

    // Mobile background scroll locking (< 640px) to prevent dual-scrolling
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("resize", handleResize);
      };
    }, []);

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
      await sendMessage();
    };

    return (
      <section
        ref={ref}
        aria-label="AI assistant"
        className={`fixed z-[1050] flex flex-col overflow-hidden rounded-2xl border shadow-2xl transition-all duration-200
        bottom-20 sm:translate-x-0 sm:left-7 sm:right-auto sm:bottom-24
        w-[85vw] sm:w-[355px] md:w-[395px]
        h-[520px] max-h-[calc(85dvh-4.5rem)] sm:max-h-[calc(90dvh-6.5rem)] min-h-[320px]
        ${isDark
            ? "border-neutral-800 bg-neutral-900 text-white shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
            : "border-neutral-200 bg-white text-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          }`}
      >
        {/* Header Component */}
        <ChatHeader
          onClose={onClose}
          onClearChat={clearChat}
          canClear={messages.length > 1}
          isSending={isSending}
          isDark={isDark}
        />

        {/* Message Feed Component */}
        <ChatMessageList
          messages={messages}
          isSending={isSending}
          isDark={isDark}
          onRetryLast={retryLastMessage}
        />

        {/* Suggestion Chips (when only welcome message is present) */}
        {messages.length === 1 && messages[0].id === "welcome" && (
          <SuggestionChips
            suggestions={DEFAULT_SUGGESTIONS}
            onSelect={(prompt) => {
              void sendMessage(prompt);
            }}
            disabled={isSending}
          />
        )}

        {/* Input Form Component */}
        <ChatInput
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          isSending={isSending}
          isDark={isDark}
        />
      </section>
    );
  },
);
