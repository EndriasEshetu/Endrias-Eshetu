import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ParallaxFloat } from "./ParallaxFloat";
import { ScrollReveal } from "./ScrollReveal";
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

const byPrefixAndName = {
  fab: {
    html5: faHtml5,
    css3Alt: faCss3Alt,
    js: faJs,
    react: faReact,
    typescript: faTypescript,
    "tailwind-css": faTailwindCss,
    gitAlt: faGitAlt,
    nodeJs: faNodeJs,
  },
} as const;

export function SiteHeader() {
  return (
    <>
      <a className="skip-link mt-0" href="#main">
        Skip to main content
      </a>

      <header className="site-header" id="top">
        <section className="section-alt hero" aria-labelledby="hero-title">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="min-w-0">
                <ScrollReveal variant="slide-right">
                  <h1
                    className="hero-title text-4xl font-bold md:text-5xl"
                    id="hero-title"
                  >
                    Building reliable, user-focused web products from front-end
                    to back-end.
                  </h1>
                </ScrollReveal>
                <ScrollReveal variant="slide-right" className="mt-4 block">
                  <p className="text-lg text-muted-prose">
                    Based in Adama (often in Hawasa), I build responsive
                    interfaces and dependable back-end systems with clean,
                    maintainable code.
                  </p>
                </ScrollReveal>
                <ScrollReveal variant="fade-up" className="mt-6 block">
                  <div className="flex flex-wrap gap-3">
                    <a
                      className="btn-accent inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium"
                      href="/certificates/Endrias%20Eshetu%20CV%20Resume.pdf"
                      download="Endrias-Eshetu-CV.pdf"
                    >
                      Download CV
                    </a>
                    <a
                      className="hero-outline-btn inline-flex items-center justify-center rounded-lg border border-(--accent) px-6 py-3 font-medium text-(--accent)"
                      href="#experience"
                    >
                      View projects
                    </a>
                  </div>
                </ScrollReveal>
                <div className="hero-metrics mt-6">
                  <ScrollReveal variant="fade-up" className="min-w-0">
                    <div>
                      <p className="metric-value">End-to-end</p>
                      <p className=" text-muted-prose">
                        UI, API, and delivery focus
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-up" className="min-w-0">
                    <div>
                      <p className="metric-value">Open</p>
                      <p className=" text-muted-prose">
                        Internships and collaborations
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
              <ScrollReveal
                variant="fade-scale"
                className="mx-auto w-8/12"
              >
                <ParallaxFloat intensity={0.11} className="hero-card">
                  <div className="hero-card-inner">
                    <img
                      src="/155A2404.JPG"
                      alt="Photo of me working on a laptop, smiling at the camera"
                      className="h-auto w-full rounded-3xl shadow"
                    />
                    <div className="panel-card mt-4 p-2.5">
                      <p className="mb-1 font-semibold pl-4">
                        Available for internships and junior roles
                      </p>
                      <p className="m-0 text-muted-prose pl-4">
                        Adama, Ethiopia · Often in Hawasa
                      </p>
                    </div>
                  </div>
                </ParallaxFloat>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </header>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-up">
                <h2 className="section-title" id="about-title">
                  About me
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" className="mt-3 block">
                <p className="text-muted-prose">
                  I'm Endrias, a freelance full-stack developer focused on
                  delivering complete features from planning and UI design to
                  back-end logic and deployment support.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" className="mt-4 block">
                <div className="flex flex-wrap gap-3">
                  <a
                    className="btn-accent inline-flex items-center justify-center rounded-lg p-3 font-medium"
                    href="#contact"
                  >
                    Hire me
                  </a>
                  <a
                    className="inline-flex items-center justify-center p-2  underline-offset-4 hover:underline"
                    href="#experience"
                  >
                    See my journey
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <div className="min-w-0 lg:col-span-7">
              <div className="panel-card rounded-3xl p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <ScrollReveal variant="fade-up" className="min-w-0">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide">
                        Focus areas
                      </h3>
                      <ul className="m-0 list-none mt-2 p-0">
                        <li>Front-end development</li>
                        <li>Back-end development</li>
                        <li>Full-stack project delivery</li>
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal variant="fade-up" className="min-w-0">
                    <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      Tools I love
                    </h3>
                    <ul
                      className="flex list-none flex-wrap gap-2 mt-2 p-0"
                      aria-label="Tools I love"
                    >
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600"
                        title="HTML5"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fab["html5"]} />
                        <span className="sr-only">HTML5</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
                        title="CSS3"
                      >
                        <FontAwesomeIcon
                          icon={byPrefixAndName.fab["css3Alt"]}
                        />
                        <span className="sr-only">CSS3</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600"
                        title="JavaScript"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fab["js"]} />
                        <span className="sr-only">JavaScript</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600"
                        title="React"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fab["react"]} />
                        <span className="sr-only">React</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700"
                        title="TypeScript"
                      >
                        <FontAwesomeIcon
                          icon={byPrefixAndName.fab["typescript"]}
                        />
                        <span className="sr-only">TypeScript</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700"
                        title="Tailwind CSS"
                      >
                        <FontAwesomeIcon
                          icon={byPrefixAndName.fab["tailwind-css"]}
                        />
                        <span className="sr-only">Tailwind CSS</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600"
                        title="Git"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fab["gitAlt"]} />
                        <span className="sr-only">Git</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600"
                        title="Node.js"
                      >
                        <FontAwesomeIcon icon={byPrefixAndName.fab["nodeJs"]} />
                        <span className="sr-only">Node.js</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700"
                        title="Express.js"
                      >
                        <SiExpress className="h-5 w-5" />
                        <span className="sr-only">Express.js</span>
                      </li>
                      <li
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700"
                        title="MongoDB"
                      >
                        <SiMongodb className="h-5 w-5" />
                        <span className="sr-only">MongoDB</span>
                      </li>
                    </ul>
                    </div>
                  </ScrollReveal>
                </div>
                <ScrollReveal variant="fade-up" className="mt-4 block">
                  <div className="panel-card mt-4 p-4">
                    <p className="mb-1 font-semibold">Signature strength</p>
                    <p className="">
                      Delivering end-to-end features with clarity and care.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
