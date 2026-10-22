
import type { ChatRequest, ChatResponse } from "../types/chatbot";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000"
).replace(/\/$/, "");


export async function sendChatMessage(
  request: ChatRequest,
): Promise<ChatResponse> {
  const limitedRequest: ChatRequest = {
    ...request,
    history: request.history.slice(-6),
  };

  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(limitedRequest),
  });

  const data = (await response.json()) as ChatResponse;

  if (!response.ok) {
    throw new Error(
      data.message || "Unable to send your message. Please try again.",
    );
  }

  return data;
}

