import { useId, useState } from "react";
import type { ReactNode } from "react";

type ExpandableCertificateListProps<T> = {
  items: T[];
  /** Items shown before "See more" (default 4) */
  initialVisibleCount?: number;
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  /** Outer grid classes */
  gridClassName?: string;
  emptyFallback?: ReactNode;
  /** Optional id for the list container (e.g. for anchors) */
  listId?: string;
};

/**
 * Grid list with See more / See less. Smooth height animation via CSS grid-template-rows 0fr → 1fr.
 */
export function ExpandableCertificateList<T>({
  items,
  initialVisibleCount = 4,
  renderItem,
  keyExtractor,
  gridClassName = "grid gap-3 md:grid-cols-2",
  emptyFallback,
  listId,
}: ExpandableCertificateListProps<T>) {
  const [expanded, setExpanded] = useState(false);
  const moreRegionId = useId();
  const total = items.length;
  const hasMore = total > initialVisibleCount;

  if (total === 0) {
    return <>{emptyFallback ?? null}</>;
  }

  const visible = items.slice(0, initialVisibleCount);
  const hidden = hasMore ? items.slice(initialVisibleCount) : [];

  return (
    <div className="space-y-4">
      <div className={gridClassName} id={listId} aria-live="polite">
        {visible.map((item) => (
          <div key={keyExtractor(item)}>{renderItem(item)}</div>
        ))}

        {hasMore ? (
          <div
            id={moreRegionId}
            role="region"
            aria-label="Additional items"
            className={`col-span-full grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none motion-reduce:duration-0 ${
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div
              className="min-h-0 overflow-hidden"
              inert={!expanded ? true : undefined}
            >
              <div className="grid gap-3 border-t border-(--line) pt-3 md:grid-cols-2 md:border-t-0 md:pt-0">
                {hidden.map((item) => (
                  <div key={keyExtractor(item)}>{renderItem(item)}</div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {hasMore ? (
        <div className="flex justify-center">
          <button
            type="button"
            className="btn-accent inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-[transform,box-shadow] duration-200 hover:brightness-110 active:scale-[0.98] motion-reduce:transition-none"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={moreRegionId}
          >
            {expanded ? "See less" : "See more"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
