import { useState, useEffect } from "react";
import { usePwaInstall } from "../../hooks/usePwaInstall";

const DISMISSED_KEY = "pwa_install_prompt_dismissed";

export function PwaInstallPrompt() {
  const {
    isInstallable,
    isInstalled,
    showIOSPrompt,
    promptInstall,
    closeIOSPrompt,
  } = usePwaInstall();

  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    // Check if dismissed previously during this session
    const dismissedTime = sessionStorage.getItem(DISMISSED_KEY);
    if (!dismissedTime) {
      setIsDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem(DISMISSED_KEY, "true");
  };

  if (isInstalled || !isInstallable || isDismissed) {
    return (
      <>
        {/* iOS step-by-step modal if triggered from Navbar */}
        {showIOSPrompt && (
          <IOSInstallModal onClose={closeIOSPrompt} />
        )}
      </>
    );
  }

  return (
    <>
      {/* Bottom slide-in install prompt banner */}
      <div
        className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-7 sm:bottom-24 z-[1040] sm:max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300"
        role="region"
        aria-label="App installation banner"
      >
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-amber-500/30 bg-neutral-950/95 p-3.5 shadow-2xl backdrop-blur-xl sm:p-4 text-white">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/pwa-192x192.png"
              alt="Endrias App Icon"
              className="h-11 w-11 shrink-0 rounded-xl border border-amber-500/30 object-cover shadow-sm"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-neutral-100 truncate">
                Install Endrias App
              </p>
              <p className="text-xs text-neutral-400 truncate">
                Fast, offline-ready mobile experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={promptInstall}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-semibold text-neutral-950 shadow-md transition hover:bg-amber-400 active:scale-95"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              <span>Install</span>
            </button>

            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Dismiss install banner"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition hover:bg-white/10 hover:text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showIOSPrompt && <IOSInstallModal onClose={closeIOSPrompt} />}
    </>
  );
}

function IOSInstallModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[1100] flex items-end sm:items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl border border-amber-500/30 bg-neutral-950 p-6 text-neutral-100 shadow-2xl animate-in slide-in-from-bottom-8 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <img
              src="/pwa-192x192.png"
              alt="Endrias App Icon"
              className="h-10 w-10 rounded-xl border border-amber-500/30 object-cover"
            />
            <div>
              <h3 className="text-base font-bold text-white">Install on iOS</h3>
              <p className="text-xs text-neutral-400">Add to your Home Screen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <ol className="mt-4 space-y-3.5 text-xs sm:text-sm text-neutral-300">
          <li className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
              1
            </span>
            <span>
              Tap the <strong className="text-white">Share</strong> icon{" "}
              <svg
                className="inline-block h-4 w-4 align-text-bottom text-amber-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" x2="12" y1="2" y2="15" />
              </svg>{" "}
              in Safari navigation bar.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
              2
            </span>
            <span>
              Scroll down and select{" "}
              <strong className="text-white">Add to Home Screen</strong>.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
              3
            </span>
            <span>
              Tap <strong className="text-white">Add</strong> in the top right to launch anytime.
            </span>
          </li>
        </ol>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-amber-500 py-2.5 text-xs font-semibold text-neutral-950 transition hover:bg-amber-400"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
