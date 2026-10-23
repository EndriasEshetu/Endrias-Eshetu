
import { useEffect, useState } from "react";
import type { ChatMessage, ChatRequest } from "../types/chatbot";
import { sendChatMessage } from "../services/chatbotService";

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm Endrias's AI assistant. Ask me about his skills, projects, experience, or technologies.",
  timestamp: Date.now(),
  status: "sent",
};


const CHAT_STORAGE_KEY = "portfolio_chat_session_v1";

function loadMessages(): ChatMessage[] {
  try {
    const storedMessages = sessionStorage.getItem(CHAT_STORAGE_KEY);

    if (!storedMessages) {
      return [WELCOME_MESSAGE];
    }

    const parsed: unknown = JSON.parse(storedMessages);

    if (!Array.isArray(parsed)) {
      return [WELCOME_MESSAGE];
    }

    const isValid = parsed.every(
      (message): message is ChatMessage =>
        typeof message === "object" &&
        message !== null &&
        typeof message.id === "string" &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        typeof message.timestamp === "number" &&
        (message.status === undefined ||
          message.status === "sending" ||
          message.status === "sent" ||
          message.status === "error"),
    );

    if (!isValid || parsed.length === 0) {
      return [WELCOME_MESSAGE];
    }

    return parsed;
  } catch {
    return [WELCOME_MESSAGE];
  }
}


export function useChatbot() {
 const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);

 useEffect(() => {
  try {
    sessionStorage.setItem(
      CHAT_STORAGE_KEY,
      JSON.stringify(messages),
    );
  } catch {
    // Storage may be unavailable or full.
    // Keep the chatbot usable even if saving fails.
  }
}, [messages]);

  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);


const sendMessage = async (customText?: string) => {
  const content = (customText ?? input).trim();

  if (!content || isSending) {
    return;
  }

  const userMessage: ChatMessage = {
    id: crypto.randomUUID(),
    role: "user",
    content,
    timestamp: Date.now(),
    status: "sending",
  };

  const history = messages
    .filter((message) => message.id !== "welcome")
    .map(({ role, content }) => ({ role, content }));

  setMessages((current) => [...current, userMessage]);
  setInput("");
  setError(null);
  setIsSending(true);

  try {
    const request: ChatRequest = {
      message: content,
      history,
    };

    const response = await sendChatMessage(request);

    if (!response.reply) {
      throw new Error(
        response.message || "The assistant returned an empty response.",
      );
    }

    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: response.reply,
      timestamp: Date.now(),
      status: "sent",
    };

    setMessages((current) => [
      ...current.map((message) =>
        message.id === userMessage.id
          ? { ...message, status: "sent" as const }
          : message,
      ),
      assistantMessage,
    ]);
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Sorry, I couldn't process your message.";

    setError(message);

    setMessages((current) => [
      ...current.map((item) =>
        item.id === userMessage.id
          ? { ...item, status: "error" as const }
          : item,
      ),
    ]);
  } finally {
    setIsSending(false);
  }
};

const clearChat = () => {
  setMessages([WELCOME_MESSAGE]);
  setInput("");
  setError(null);
};

const retryLastMessage = () => {
  const lastFailedMessage = [...messages]
    .reverse()
    .find(
      (message) =>
        message.role === "user" && message.status === "error",
    );

  if (!lastFailedMessage) {
    return;
  }

  const failedContent = lastFailedMessage.content;
  setMessages((current) =>
    current.filter((message) => message.id !== lastFailedMessage.id),
  );

  setError(null);
  void sendMessage(failedContent);
};

  return {
    messages,
    setMessages,
    input,
    setInput,
    isSending,
    setIsSending,
    error,
    setError,
    sendMessage,
    clearChat,
    retryLastMessage,
  };
}
