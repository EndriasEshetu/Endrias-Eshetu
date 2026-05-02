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
              <div className="order-1 min-w-0 lg:col-span-2 lg:col-start-1 lg:row-start-1">
                <h1
                  className="hero-title text-2xl font-bold md:text-4xl"
                  id="hero-title"
                >
                  Building reliable, user-focused web products from front-end to
                  back-end.
                </h1>
              </div>

              <div className="order-2 mx-auto w-full self-center sm:w-11/12 md:w-9/12 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:w-full">
                <div className="hero-card">
                  <div className="hero-card-inner">
                    <div className="relative">
                      <img
                        src="/professional-image.webp"
                        alt="Photo of Endrias Eshetu working on a laptop"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        width={700}
                        height={900}
                        className="mt-4 block h-auto w-full rounded-3xl object-cover lg:mt-0"
                      />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-3xl bg-linear-to-t from-black/35 via-black/10 to-transparent" />

                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-2">
                        <div className="rounded-2xl bg-black/40 px-3 py-2 text-white sm:px-4 sm:py-3">
                          <p className="mb-1 text-base font-semibold leading-tight sm:text-lg md:text-xl">
                            Endrias Eshetu
                          </p>
                          <p className="m-0 text-sm text-white/85 sm:text-sm md:text-base">
                            Full-Stack Developer and
                            <span className="block">
                              Computer Science Engineer
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-intro-block order-3 min-w-0 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mt-0">
                <p className="text-3xl text-muted-prose">
                  Based in Adama (often in Hawasa), I build responsive
                  interfaces and dependable back-end systems with clean,
                  maintainable code.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
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

                <div className="hero-metrics mt-6">
                  <div>
                    <p className="metric-value">End-to-end</p>
                    <p className="text-muted-prose">
                      UI, API, and delivery focus
                    </p>
                  </div>

                  <div>
                    <p className="metric-value">Open</p>
                    <p className="text-muted-prose">
                      Internships and collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
