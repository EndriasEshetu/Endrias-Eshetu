import { ScrollReveal } from "./ScrollReveal";
import { useTheme } from "../contexts/ThemeContext";

type SkillGroup = {
  title: string;
  items: string[];
  accent: string;
  badgeIcon: string;
};

type SkillItemIcon = {
  src: string;
  alt: string;
};

const SKILL_ITEM_ICONS: Record<string, SkillItemIcon> = {
  React: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  TypeScript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  "JavaScript (ES6+)": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  HTML5: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  CSS3: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  "Tailwind CSS": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
  },
  "Node.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  "Express.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    alt: "Express.js",
  },
  MongoDB: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  Mongoose: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    alt: "Mongoose",
  },
  Git: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "Git",
  },
  GitHub: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "GitHub",
  },
  Vite: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
  },
  Postman: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    alt: "Postman",
  },
};

function getSkillIcon(skill: string): SkillItemIcon | null {
  if (skill.startsWith("Deployment")) {
    return {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      alt: "Deployment",
    };
  }

  if (skill === "REST API Design") {
    return {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      alt: "API",
    };
  }

  if (skill === "Authentication") {
    return {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/auth0/auth0-original.svg",
      alt: "Authentication",
    };
  }

  if (skill === "API Integration") {
    return {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      alt: "API Integration",
    };
  }

  if (skill === "Server-side Validation") {
    return {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "Validation",
    };
  }

  if (skill === "Data Modeling" || skill === "CRUD Operations") {
    return {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      alt: skill,
    };
  }

  if (skill === "Debugging") {
    return {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
      alt: "Debugging",
    };
  }

  return SKILL_ITEM_ICONS[skill] ?? null;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend Development",
    accent: "#61DAFB",
    badgeIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Backend Development",
    accent: "#34D399",
    badgeIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Authentication",
      "API Integration",
      "Server-side Validation",
    ],
  },
  {
    title: "Database & Data",
    accent: "#F59E0B",
    badgeIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    items: ["MongoDB", "Mongoose", "Data Modeling", "CRUD Operations"],
  },
  {
    title: "Tools & Workflow",
    accent: "#C084FC",
    badgeIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Vite",
      "Deployment (Vercel/Render)",
      "Debugging",
    ],
  },
];

export function SkillSection() {
  const { theme } = useTheme();
  const titleClass = theme === "dark" ? "text-white" : "text-slate-900";

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`section-title text-[clamp(1.9rem,5vw,2.75rem)] ${titleClass}`}
              id="skills-title"
            >
              Technical Skills
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:gap-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <ScrollReveal
              key={group.title}
              variant="fade-up"
              className="h-full"
            >
              <article className="skill-card relative h-full overflow-hidden rounded-4xl bg-white p-4 sm:p-5 lg:p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] border border-slate-200 dark:border-transparent dark:bg-(--card)">
                <div
                  className="absolute right-0 top-0 h-16 w-16 sm:h-24 sm:w-24 rounded-bl-[3rem] opacity-20"
                  style={{ background: group.accent }}
                  aria-hidden="true"
                />
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 shadow-sm sm:h-12 sm:w-12"
                  aria-hidden="true"
                >
                  <img
                    src={group.badgeIcon}
                    alt=""
                    className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                  />
                </div>
                <h3
                  className={`mt-6 text-xl font-bold sm:mt-7 sm:text-2xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {group.title}
                </h3>
                <div
                  className="mt-5 overflow-x-auto pb-2 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-6"
                  aria-label={group.title}
                >
                  <ul className="grid grid-cols-2 gap-2.5 sm:flex sm:min-w-full sm:flex-nowrap sm:gap-3 sm:snap-x sm:snap-mandatory">
                    {group.items.map((skill) => {
                      const skillIcon = getSkillIcon(skill);

                      return (
                        <li
                          key={skill}
                          className="min-w-0 sm:snap-start sm:shrink-0 sm:basis-auto sm:min-w-40"
                        >
                          <div className="flex min-w-0 w-full items-center gap-2.5 rounded-2xl  px-3 py-2.5 sm:gap-3 sm:py-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border sm:h-9 sm:w-9 dark:border-slate-300 dark:bg-slate-200">
                              {skillIcon ? (
                                <img
                                  src={skillIcon.src}
                                  alt={skillIcon.alt}
                                  className="h-4.5 w-4.5 object-contain sm:h-5 sm:w-5"
                                />
                              ) : (
                                <span
                                  className="h-2.5 w-2.5 rounded-full"
                                  style={{ background: group.accent }}
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                            <span className="min-w-0 wrap-break-word text-[0.8rem] font-medium ">
                              {skill}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
