import { useTheme } from "../contexts/ThemeContext";
import { ScrollReveal } from "./ScrollReveal";

const TECH_ICONS = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    label: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    label: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    label: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    label: "Express",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    label: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    label: "Mongoose",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    label: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    label: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    label: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    label: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    label: "GitHub",
  },
];

const BRAND_COLORS: Record<string, string> = {
  React: "#61DAFB",
  TypeScript: "#3178C6",
  Tailwind: "#06B6D4",
  "Node.js": "#339933",
  Express: "#FFFFFF",
  MongoDB: "#47A248",
  Mongoose: "#C32E2E",
  JavaScript: "#F7DF1E",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Git: "#F05032",
  GitHub: "#FFFFFF",
};

export function TechStack() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      className="section section-alt"
      id="tech-stack"
      aria-labelledby="tech-stack-title"
    >
      <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title" id="tech-stack-title">
              Tech-stack Highlights
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-8">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-wrap justify-center gap-6">
              {TECH_ICONS.map((tech) =>
                (() => {
                  const needsDarkBoost =
                    isDarkMode &&
                    (tech.label === "Express" || tech.label === "GitHub");
                  const useBlackBorderInLightMode =
                    !isDarkMode &&
                    (tech.label === "Express" || tech.label === "GitHub");

                  return (
                    <div
                      key={tech.label}
                      className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center p-3"
                      style={{
                        border: `1px solid ${
                          useBlackBorderInLightMode
                            ? "#000000"
                            : BRAND_COLORS[tech.label] ?? "var(--line)"
                        }`,
                      }}
                    >
                      <img
                        src={tech.src}
                        alt={tech.label}
                        className="h-14 w-14 object-contain"
                        style={{
                          filter: needsDarkBoost
                            ? "invert(1) brightness(1.8)"
                            : "none",
                        }}
                      />
                      <span className="mt-3 text-sm">{tech.label}</span>
                      <span
                        className="mt-2 h-1.5 w-10 rounded-full"
                        style={{
                          background: BRAND_COLORS[tech.label] ?? "transparent",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  );
                })(),
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
