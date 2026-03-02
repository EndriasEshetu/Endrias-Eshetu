import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("#about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sectionIds = [
        "about",
        "experience",
        "achievements",
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
      className={`fixed top-0 z-1030 text-white w-full py-3 portfolio-navbar ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          className="navbar-brand text-lg font-semibold"
          href="#top"
          aria-label="Home"
        >
          <img
            className="brand-mark"
            src="/android-chrome-512x512.png"
            alt="Endrias Eshetu logo"
          />
          Endrias Eshetu
        </a>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-fuchsia-200/50 text-white lg:hidden"
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
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} absolute right-4 top-full mt-2 rounded-2xl bg-gray-700 p-4 shadow-lg lg:static lg:mt-0 lg:block lg:bg-transparent lg:p-0 lg:shadow-none`}
          id="siteNav"
        >
          <ul className="flex flex-col gap-2 lg:ml-auto lg:flex-row lg:items-center lg:gap-4">
            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 text-[#18023a] transition md:text-white lg:px-2 ${activeNav === "#about" ? "is-active" : ""}`}
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                  setIsMenuOpen(false);
                }}
              >
                About Me
              </a>
            </li>

            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 text-[#18023a] transition md:text-white lg:px-2 ${activeNav === "#experience" ? "is-active" : ""}`}
                href="#experience"
                onClick={() => {
                  setActiveNav("#experience");
                  setIsMenuOpen(false);
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 text-[#18023a] transition md:text-white lg:px-2 ${activeNav === "#achievements" ? "is-active" : ""}`}
                href="#achievements"
                onClick={() => {
                  setActiveNav("#achievements");
                  setIsMenuOpen(false);
                }}
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                className={`nav-link block rounded-lg px-3 py-2 text-[#18023a] transition md:text-white lg:px-2 ${activeNav === "#certificates" ? "is-active" : ""}`}
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
                className={`nav-link block rounded-lg px-3 py-2 text-[#18023a] transition md:text-white lg:px-2 ${activeNav === "#contact" ? "is-active" : ""}`}
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
