import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SiteFooterProps {
  currentYear: number;
}

type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: keyof typeof byPrefixAndName.fab;
};

const byPrefixAndName = {
  fab: {
    github: faGithub,
    linkedin: faLinkedin,
    facebook: faFacebook,
    instagram: faInstagram,
  },
  fas: {
    "arrow-up": faArrowUp,
  },
} as const;

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
];

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/EndriasEshetu",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/endrias-eshetu-a25948388",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/tsinubekur1",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tsinubekur1",
    icon: "instagram",
  },
];

export function SiteFooter({ currentYear }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="site-footer-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
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
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="social-link inline-flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <FontAwesomeIcon
                    icon={byPrefixAndName.fab[social.icon]}
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
            <a
              className="footer-top-link mt-4 inline-flex cursor-pointer items-center justify-center rounded-lg border border-fuchsia-950 px-3 py-1.5 text-sm font-medium text-white hover:bg-fuchsia-950"
              href="#top"
            >
              <FontAwesomeIcon
                icon={byPrefixAndName.fas["arrow-up"]}
                aria-hidden="true"
                className="mr-2"
              />
              Back to top
            </a>
          </div>
        </div>

        <div className="site-footer-bottom mt-8 border-t border-white/10 pt-5 text-center text-sm">
          Copyright © {currentYear}, Endrias Eshetu, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
