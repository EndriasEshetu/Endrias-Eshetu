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
    icon: <FontAwesomeIcon icon={faJs} className="h-9 w-9" />,
    iconToneClass: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} className="h-9 w-9" />,
    iconToneClass: "bg-cyan-50 text-cyan-600",
  },
  {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} className="h-9 w-9" />,
    iconToneClass: "bg-green-50 text-green-600",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="h-9 w-9" />,
    iconToneClass: "bg-neutral-100 text-neutral-700",
  },
  {
    name: "HTML5",
    icon: <FontAwesomeIcon icon={faHtml5} className="h-9 w-9" />,
    iconToneClass: "bg-orange-50 text-orange-600",
  },
  {
    name: "CSS3",
    icon: <FontAwesomeIcon icon={faCss3Alt} className="h-9 w-9" />,
    iconToneClass: "bg-blue-50 text-blue-600",
  },
  {
    name: "TypeScript",
    icon: <FontAwesomeIcon icon={faTypescript} className="h-9 w-9" />,
    iconToneClass: "bg-blue-100 text-blue-700",
  },
  {
    name: "Tailwind CSS",
    icon: <FontAwesomeIcon icon={faTailwindCss} className="h-9 w-9" />,
    iconToneClass: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Git",
    icon: <FontAwesomeIcon icon={faGitAlt} className="h-9 w-9" />,
    iconToneClass: "bg-amber-50 text-amber-600",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb className="h-9 w-9" />,
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
        <p className="m-0 text-muted-prose">
          Core technologies I use to design, build, and ship full-stack
          products.
        </p>
        <ScrollReveal variant="fade-scale" className="min-w-0 mt-6">
          <ul
            className="m-0 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            aria-label="Tech stack highlights"
          >
            {techStackItems.map((item) => (
              <li
                key={item.name}
                className="group relative overflow-hidden rounded-2xl border border-(--line) bg-linear-to-b from-(--paper) to-(--surface) p-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-[0_16px_34px_rgba(0,0,0,0.22)]"
              >
                <span
                  className="pointer-events-none absolute -right-4 -top-4 h-14 w-14 rounded-full bg-(--accent)/20 blur-xl transition duration-300 group-hover:bg-(--accent)/35"
                  aria-hidden
                />
                <div
                  className={`relative mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-sm transition duration-300 group-hover:scale-110 ${item.iconToneClass}`}
                  aria-hidden
                >
                  {item.icon}
                </div>
                <p className="relative mb-0 mt-3 text-sm font-semibold tracking-wide text-(--ink)">
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
