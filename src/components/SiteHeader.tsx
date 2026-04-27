import { ParallaxFloat } from "./ParallaxFloat";
import { ScrollReveal } from "./ScrollReveal";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link mt-0" href="#main">
        Skip to main content
      </a>

      <header className="site-header" id="top">
        <section className="section-alt hero" aria-labelledby="hero-title">
          <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-5 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0">
              <div className="order-1 min-w-0 lg:col-span-2 lg:col-start-1 lg:row-start-1 ">
                <ScrollReveal variant="slide-right">
                  <h1
                    className="hero-title text-2xl font-bold md:text-4xl"
                    id="hero-title"
                  >
                    Building reliable, user-focused web products from front-end
                    to back-end.
                  </h1>
                </ScrollReveal>
              </div>
              <ScrollReveal
                variant="fade-scale"
                className="order-2 mx-auto w-full self-center sm:w-11/12 md:w-9/12 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:w-full"
              >
                <ParallaxFloat intensity={0.11} className="hero-card">
                  <div className="hero-card-inner">
                    <div className="relative">
                      <img
                        src="/professional-image.png"
                        alt="Photo of me working on a laptop, smiling at the camera"
                        className="mt-4 block h-auto w-full rounded-3xl lg:mt-0"
                        style={{
                          maskImage:
                            "linear-gradient(to bottom, black 75%, transparent 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, black 90%, transparent 100%)",
                        }}
                      />
                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-2">
                        <div className="rounded-2xl bg-black/40 px-3 py-2 text-white sm:px-4 sm:py-3">
                          <p className="mb-1 text-base font-semibold leading-tight sm:text-lg md:text-xl">
                            Endrias Eshetu
                          </p>
                          <p className="m-0 text-sm text-white/85 sm:text-sm md:text-base">
                            Full-Stack Developer and{" "}
                            <span className="block">
                              Computer Science Engineer
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxFloat>
              </ScrollReveal>
              <div className="hero-intro-block order-3 min-w-0 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mt-0">
                <ScrollReveal variant="slide-right" className="block">
                  <p className="text-3xl text-muted-prose">
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
                      href="#project"
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
            </div>
          </div>
        </section>
      </header>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
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
                    href="#journey"
                  >
                    See my journey
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
