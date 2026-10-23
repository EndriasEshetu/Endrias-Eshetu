import { useState, useEffect } from "react";

export function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 3000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline && !showReconnected) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-18 left-1/2 -translate-x-1/2 z-[1040] w-auto max-w-[90vw] pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-top-4"
    >
      {isOffline ? (
        <div className="flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-neutral-900/95 px-4 py-2 text-xs sm:text-sm text-amber-200 shadow-xl backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
          </span>
          <span className="font-medium">Offline Mode — viewing cached portfolio</span>
        </div>
      ) : (
        <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-neutral-900/95 px-4 py-2 text-xs sm:text-sm text-emerald-200 shadow-xl backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="font-medium">Back Online — connection restored</span>
        </div>
      )}
    </div>
  );
}
