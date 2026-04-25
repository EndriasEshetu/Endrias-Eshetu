import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faTailwindCss,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ScrollReveal } from "./ScrollReveal";

type TechStackItem = {
  name: string;
  icon: React.ReactNode;
  iconToneClass: string;
};

const techStackItems: TechStackItem[] = [
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} className="h-7 w-7" />,
    iconToneClass: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} className="h-7 w-7" />,
    iconToneClass: "bg-cyan-50 text-cyan-600",
  },
  {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} className="h-7 w-7" />,
    iconToneClass: "bg-green-50 text-green-600",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="h-7 w-7" />,
    iconToneClass: "bg-neutral-100 text-neutral-700",
  },
  {
    name: "HTML5",
    icon: <FontAwesomeIcon icon={faHtml5} className="h-7 w-7" />,
    iconToneClass: "bg-orange-50 text-orange-600",
  },
  {
    name: "CSS3",
    icon: <FontAwesomeIcon icon={faCss3Alt} className="h-7 w-7" />,
    iconToneClass: "bg-blue-50 text-blue-600",
  },
  {
    name: "TypeScript",
    icon: <FontAwesomeIcon icon={faTypescript} className="h-7 w-7" />,
    iconToneClass: "bg-blue-100 text-blue-700",
  },
  {
    name: "Tailwind CSS",
    icon: <FontAwesomeIcon icon={faTailwindCss} className="h-7 w-7" />,
    iconToneClass: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Git",
    icon: <FontAwesomeIcon icon={faGitAlt} className="h-7 w-7" />,
    iconToneClass: "bg-amber-50 text-amber-600",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb className="h-10 w-10" />,
    iconToneClass: "bg-emerald-50 text-emerald-700",
  },
];

export function TechStacks() {
  return (
    <section
      className="section panel-card"
      id="tech-stacks"
      aria-labelledby="tech-stacks-title"
    >
      <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" id="tech-stacks-title">
          Tech stacks
        </h2>
        <ScrollReveal variant="fade-scale" className="min-w-0 mt-6">
          <ul
            className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(112px,1fr))] gap-4 p-0"
            aria-label="Tech stack highlights"
          >
            {techStackItems.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-(--line) bg-(--paper) p-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
              >
                <div
                  className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconToneClass}`}
                  aria-hidden
                >
                  {item.icon}
                </div>
                <p className="mb-0 mt-3 text-sm font-medium text-(--ink)">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
