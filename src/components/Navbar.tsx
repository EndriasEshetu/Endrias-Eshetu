import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("#about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sectionIds = [
        "about",
        "skills",
        "experience",
        "projects",
        "certificates",
        "contact",
      ];

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const activationLine = window.scrollY + navHeight + 24;
      let currentSection = "#about";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        if (section.offsetTop <= activationLine) {
          currentSection = `#${id}`;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = "#contact";
      }

      setActiveNav(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onWindowMouseDown = (event: MouseEvent) => {
      if (!isMenuOpen) {
        return;
      }

      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", onWindowMouseDown);

    return () => {
      window.removeEventListener("mousedown", onWindowMouseDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-1030 w-full overflow-visible py-3 portfolio-navbar ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-6xl min-[1440px]:max-w-360 items-center justify-between overflow-visible px-4 sm:px-6 lg:px-8">
        <a
          className="navbar-brand min-w-0 shrink text-lg font-semibold"
          href="#top"
          aria-label="Home"
        >
          <img
            className="brand-mark"
            src="/logo.png"
            alt="Endrias Eshetu logo"
          />
          Endrias Eshetu
        </a>
        <div className="ml-auto flex shrink-0 items-center gap-5 pl-2 lg:contents">
          <button
            className="navbar-theme-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--toggle-bg) text-(--navbar-text) opacity-95 transition hover:opacity-100 lg:order-last"
            type="button"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className="inline-flex h-10 w-10 shrink-0 items-center mr-5 justify-center rounded-md border border-current opacity-90 lg:hidden"
            type="button"
            aria-controls="siteNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} absolute right-4 top-full z-1045 mt-2 overflow-visible rounded-2xl p-4 shadow-lg lg:static lg:z-auto lg:mt-0 lg:flex lg:flex-1 lg:justify-end lg:bg-transparent lg:p-0 lg:shadow-none [background:var(--card)] `}
          id="siteNav"
        >
          <ul className="flex flex-col gap-2 overflow-visible lg:ml-auto lg:flex-row lg:items-center lg:gap-4">
            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 transition lg:px-2 ${activeNav === "#about" ? "is-active" : ""}`}
                href="#top"
                onClick={() => {
                  setActiveNav("#top");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
            </li>

            <li className="nav-dropdown">
              <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wide text-(--metric-label) lg:hidden">
                Experience
              </p>
              <button
                type="button"
                className={`nav-link hidden w-full items-center gap-1 rounded-lg border-0 bg-transparent px-3 py-2 text-left font-inherit text-inherit transition lg:flex lg:px-2 ${activeNav === "#skills" || activeNav === "#experience" ? "is-active" : ""}`}
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
              >
                Experience
                <span className="text-[0.65rem] opacity-70" aria-hidden>
                  ▾
                </span>
              </button>
              <ul className="nav-dropdown-panel" role="list">
                <li>
                  <a
                    className={`nav-link block rounded-lg px-3 py-2 transition lg:px-3 ${activeNav === "#skills" ? "is-active" : ""}`}
                    href="#skills"
                    onClick={() => {
                      setActiveNav("#skills");
                      setIsMenuOpen(false);
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link block rounded-lg px-3 py-2 transition lg:px-3 ${activeNav === "#experience" ? "is-active" : ""}`}
                    href="#experience"
                    onClick={() => {
                      setActiveNav("#experience");
                      setIsMenuOpen(false);
                    }}
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 transition lg:px-2 ${activeNav === "#projects" ? "is-active" : ""}`}
                href="#projects"
                onClick={() => {
                  setActiveNav("#projects");
                  setIsMenuOpen(false);
                }}
              >
                Selected work
              </a>
            </li>
            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 transition lg:px-2 ${activeNav === "#certificates" ? "is-active" : ""}`}
                href="#certificates"
                onClick={() => {
                  setActiveNav("#certificates");
                  setIsMenuOpen(false);
                }}
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 transition lg:px-2 ${activeNav === "#contact" ? "is-active" : ""}`}
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
