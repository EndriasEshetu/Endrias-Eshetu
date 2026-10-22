import type { ReactNode } from "react";

function formatInlineText(text: string): ReactNode[] {
  const parts = text.split(
    /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g,
  );

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-black/10 px-1.5 py-0.5 text-[0.9em] dark:bg-white/10"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (linkMatch) {
      const [, label, url] = linkMatch;

      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80"
        >
          {label}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function formatLine(line: string, index: number): ReactNode {
  const trimmedLine = line.trim();

  if (!trimmedLine) {
    return <div key={index} className="h-2" />;
  }

  const unorderedListMatch = trimmedLine.match(/^[-*]\s+(.+)$/);

  if (unorderedListMatch) {
    return (
      <li key={index} className="ml-5 list-disc pl-1">
        {formatInlineText(unorderedListMatch[1])}
      </li>
    );
  }

  const orderedListMatch = trimmedLine.match(/^\d+[.)]\s+(.+)$/);

  if (orderedListMatch) {
    return (
      <li key={index} className="ml-5 list-decimal pl-1">
        {formatInlineText(orderedListMatch[1])}
      </li>
    );
  }

  if (trimmedLine.startsWith("### ")) {
    return (
      <h4 key={index} className="mt-3 mb-1 font-semibold">
        {formatInlineText(trimmedLine.slice(4))}
      </h4>
    );
  }

  if (trimmedLine.startsWith("## ")) {
    return (
      <h3 key={index} className="mt-3 mb-1 text-base font-semibold">
        {formatInlineText(trimmedLine.slice(3))}
      </h3>
    );
  }

  if (trimmedLine.startsWith("# ")) {
    return (
      <h3 key={index} className="mt-3 mb-1 text-base font-bold">
        {formatInlineText(trimmedLine.slice(2))}
      </h3>
    );
  }

  return (
    <p key={index} className="leading-relaxed">
      {formatInlineText(trimmedLine)}
    </p>
  );
}

export function formatChatMessage(content: string): ReactNode {
  const lines = content.replace(/\r\n/g, "\n").split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, index) => formatLine(line, index))}
    </div>
  );
}