import type { SuggestionChip } from "../../types/chatbot";

export const DEFAULT_SUGGESTIONS: SuggestionChip[] = [
  {
    id: "about",
    label: "About Endrias",
    prompt: "Tell me about Endrias.",
  },
  {
    id: "skills",
    label: "Skills",
    prompt: "What are Endrias's main technical skills?",
  },
  {
    id: "projects",
    label: "Projects",
    prompt: "Tell me about Endrias's projects.",
  },
  {
    id: "education",
    label: "Education",
    prompt: "What is Endrias's educational background?",
  },
];

interface SuggestionChipsProps {
  suggestions: SuggestionChip[];
  onSelect: (prompt: string) => void;
  disabled?: boolean;
}

export function SuggestionChips({
  suggestions,
  onSelect,
  disabled = false,
}: SuggestionChipsProps) {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div
      className="flex flex-wrap gap-2 px-4"
      aria-label="Suggested questions"
    >
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          type="button"
          onClick={() => onSelect(suggestion.prompt)}
          disabled={disabled}
          className="rounded-full border border-amber-600 px-3 py-1.5 text-sm transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-amber-600 dark:hover:bg-amber-400"
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );
}