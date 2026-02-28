import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar  navbar-expand-lg py-3 fixed-top portfolio-navbar ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#top" aria-label="Home">
          <img
            className="brand-mark"
            src="/android-chrome-512x512.png"
            alt="Endrias Eshetu logo"
          />
          Endrias Eshetu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#siteNav"
          aria-controls="siteNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="siteNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "#about" ? "is-active" : ""}`}
                href="#about"
                onClick={() => setActiveNav("#about")}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "#experience" ? "is-active" : ""}`}
                href="#experience"
                onClick={() => setActiveNav("#experience")}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "#achievements" ? "is-active" : ""}`}
                href="#achievements"
                onClick={() => setActiveNav("#achievements")}
              >
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "#certificates" ? "is-active" : ""}`}
                href="#certificates"
                onClick={() => setActiveNav("#certificates")}
              >
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "#contact" ? "is-active" : ""}`}
                href="#contact"
                onClick={() => setActiveNav("#contact")}
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
