/**
 * Shared contact and social link data used by ContactSection and SiteFooter.
 * Update here to keep both in sync.
 */

export const CONTACT_EMAIL = "endriaseshetu75@gmail.com";
export const CONTACT_PHONE = "+251989483775";
export const CONTACT_PHONE_DISPLAY = "+251 989 483 775";

export type SocialIconKey = "github" | "linkedin" | "facebook" | "instagram";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconKey;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/EndriasEshetu", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/endrias-eshetu",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/endriaseshetu.e",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/endriaseshetu.e",
    icon: "instagram",
  },
];
