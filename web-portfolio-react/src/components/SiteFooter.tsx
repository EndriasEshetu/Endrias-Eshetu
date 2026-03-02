import type { ReactElement } from "react";

interface SiteFooterProps {
  currentYear: number;
}

type SocialLink = {
  label: string;
  href: string;
  icon: ReactElement;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/EndriasEshetu",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.08 1.83 2.83 1.3 3.52.99.11-.77.42-1.3.77-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.16 0 0 1.01-.33 3.3 1.22a11.5 11.5 0 0 1 6 0c2.3-1.55 3.31-1.22 3.31-1.22.66 1.64.24 2.86.12 3.16.77.83 1.24 1.89 1.24 3.2 0 4.6-2.8 5.61-5.48 5.91.43.37.82 1.1.82 2.23v3.31c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/endrias-eshetu-a25948388",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 14h-3V9h3v8Zm-1.5-9.3a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM18 17h-3v-4.03c0-2.4-3-2.22-3 0V17H9V9h3v1.3c1.4-2.58 6-2.77 6 2.47V17Z"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/tsinubekur1",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M13.5 21v-7h2.35l.35-2.73H13.5V9.53c0-.79.22-1.33 1.36-1.33h1.45V5.76A19.7 19.7 0 0 0 14.2 5c-2.1 0-3.54 1.28-3.54 3.63v2.04H8.3V14h2.36v7h2.84Z"
        />
      </svg>
    ),
  },
];

export function SiteFooter({ currentYear }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="site-footer-grid grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="footer-brand m-0 text-lg font-semibold">
              Endrias Eshetu
            </p>
            <p className="footer-text mb-0 mt-2 text-sm">
              Full-stack developer focused on clean UI, reliable APIs, and
              thoughtful user experience.
            </p>
          </div>

          <div>
            <p className="footer-title m-0">Navigate</p>
            <div className="footer-link-list mt-3 flex flex-col gap-2 text-sm">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#achievements">Achievements</a>
              <a href="#certificates">Certificates</a>
            </div>
          </div>

          <div>
            <p className="footer-title m-0">Social</p>
            <div
              className="mt-3 flex flex-wrap gap-3"
              aria-label="Social links"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="social-link inline-flex h-10 w-10 items-center justify-center rounded-full"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="footer-text mb-0 mt-3 text-sm">
              For direct email and phone, please use the contact section.
            </p>
          </div>

          <div>
            <p className="footer-title m-0">Let&apos;s Work Together</p>
            <p className="footer-text mb-0 mt-2 text-sm">
              Open to internships, junior roles, and project collaboration.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="footer-contact-link btn-accent inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
                href="#contact"
              >
                Contact me
              </a>
              <a
                className="footer-top-link inline-flex items-center justify-center rounded-lg border border-fuchsia-950 px-3 py-1.5 text-sm font-medium text-white cursor-pointer hover:bg-fuchsia-950"
                href="#top"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm md:flex-row md:items-center md:justify-between">
          <p className="m-0">
            © {currentYear} Endrias Eshetu, All rights reserved.
          </p>
          <p className="m-0">Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
