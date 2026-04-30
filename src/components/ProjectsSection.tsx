import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import yosephdesign1 from "../assets/yosephdesign1.png";
import mortgageCalculator from "../assets/mortgage-calculator.png";
import alpacaImage from "../assets/alpaca-image.png";
import mernStack from "../assets/mern-stack.png";

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects = [
    {
      year: "2026",
      title: "Architectural Design Posting Website",
      description:
        "Building an e-commerce style website for architectural design publishing and discovery. Includes posting interior and other design types with detailed specifications. Supports ordering design packages, project browsing, and admin-level content management.",
      image: yosephdesign1,
      liveLink: "https://yosephdesign.vercel.app",
    },
    {
      year: "2026",
      title: "MERN Dev Community Platform",
      description:
        "A full-stack MERN application designed to foster a vibrant community of developers. It features user authentication, profile management, and a dynamic feed for sharing projects and insights. The platform encourages collaboration through interactive features like commenting and liking posts, creating a supportive environment for learning and growth.",
      image: mernStack,
      liveLink: "https://endrias-mern-stack.onrender.com",
    },
    {
      year: "2026",
      title: "React Financial App or Mortgage Calculator",
      description:
        "This mortgage calculator app computes loan amount from purchase price and down payment, estimates monthly payments using the standard amortization formula, and correctly handles 0% interest as a special case. It validates user inputs with inline error messages, presents a clean loan snapshot with formatted USD currency values, and works smoothly across both mobile and desktop layouts.",
      image: mortgageCalculator,
      liveLink: "https://endrias-mortgage-calculator.netlify.app",
    },
    {
      year: "2025",
      title: "National ID Integration System",
      description:
        "Designed the flow for secure identity validation, built a clean interface for data verification steps, and connected front-end and back-end workflows.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
      liveLink: "https://example.com/national-id-integration",
    },
    {
      year: "2026",
      title: "Alpaca Image Generator",
      description:
        "This Alpaca Image Generator was built as a deep practice project focused on detailed DOM manipulation, clean and readable JavaScript, manually reusable functions, and component-like UI behavior patterns in vanilla JS. It is developed with HTML5, CSS3, and JavaScript only, without frameworks or UI libraries, and includes full alpaca customization by part and style, a category/style selection panel, a randomize feature to generate a complete random alpaca, and a download option to export the generated image as PNG.",
      image: alpacaImage,
      liveLink: "https://endrias-alpaca-image-generator.vercel.app",
    },
    {
      year: "2024",
      title: "Payment Reminder Automation",
      description:
        "Automated scheduled reminders for payment follow-ups, tracked delivery status and alert history, and focused on reliability with clear reporting.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
      liveLink: "https://example.com/payment-reminder-automation",
    },
  ];

  return (
    <section className="section" id="project" aria-labelledby="project-title">
      <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <ScrollReveal variant="slide-left" className="min-w-0">
            <div>
              <h2 className="section-title" id="project-title">
                Projects &amp; Experience
              </h2>
              <p className="m-0 text-muted-prose">
                Academic and automation projects I have delivered.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-left" className="shrink-0">
            <a
              className="inline-flex items-center justify-center rounded-lg border border-(--accent) px-5 py-2.5 font-medium text-(--accent)"
              href="#contact"
            >
              Request CV
            </a>
          </ScrollReveal>
        </div>
        <div className="projects-scroller mt-6 -mx-4 overflow-x-auto overflow-y-hidden touch-pan-x px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="mb-4 flex items-stretch gap-4 snap-x snap-mandatory overflow-y-hidden">
            {projects.map((project) => (
              <ScrollReveal
                key={project.title}
                variant="fade-up"
                className="flex min-w-[85%] self-stretch sm:min-w-[60%] lg:min-w-[32%] snap-start"
              >
                <div className="panel-card h-full rounded-3xl flex flex-col">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live preview`}
                    className="m-4 block overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-44 w-full object-cover transition rounded-2xl duration-300 hover:scale-125"
                      loading="lazy"
                    />
                  </a>
                  <div className="mb-2 px-6">
                    <p className="m-0 text-xs uppercase tracking-wide text-muted-prose">
                      {project.year}
                    </p>
                  </div>
                  <h3 className="text-xl font-semibold px-6">
                    {project.title}
                  </h3>
                  <p
                    className="mb-0 text-muted-prose px-6"
                    style={
                      expandedProject === project.title
                        ? undefined
                        : {
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }
                    }
                  >
                    {project.description}
                  </p>
                  <div className="m-4 mt-auto flex items-center justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg border border-(--accent) px-3 py-1.5 text-sm font-medium text-(--accent)"
                      onClick={() =>
                        setExpandedProject((current) =>
                          current === project.title ? null : project.title,
                        )
                      }
                    >
                      {expandedProject === project.title
                        ? "Hide details"
                        : "View details"}
                    </button>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-(--accent) text-(--accent)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
