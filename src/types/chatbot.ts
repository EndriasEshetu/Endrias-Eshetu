
export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

export interface ChatRequest {
  message: string;
  history: Array<{
    role: ChatRole;
    content: string;
  }>;
}

export interface ChatResponse {
  ok: boolean;
  reply?: string;
  message?: string;
}
