export function SiteHeader() {
  return (
    <>
      <a className="skip-link mt-0" href="#main">
        Skip to main content
      </a>

      <header className="site-header" id="top">
        <section className="section-alt hero" aria-labelledby="hero-title">
          <div className="mx-auto w-full max-w-6xl min-[1440px]:max-w-360 px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-3 lg:gap-x-10">
              <div className="hero-intro-block order-2 min-w-0 lg:order-1 lg:col-span-2">
                <h1
                  id="hero-title"
                  className="text-2xl font-medium leading-relaxed text-muted-prose sm:text-3xl md:text-4xl"
                >
                  Based in Addis Ababa, Ethiopia, I build responsive
                  interfaces and dependable back-end systems with clean,
                  maintainable code.
                </h1>

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

              <div className="hero-card-col order-1 mx-auto w-full max-w-sm sm:max-w-md lg:order-2 lg:col-span-1 lg:max-w-none">
                <div className="hero-card">
                  <div className="hero-card-inner">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl">
                      <img
                        src="/ephoto.png"
                        alt="Photo of Endrias Eshetu"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        width={1085}
                        height={1450}
                        className="block h-auto w-full object-cover"
                      />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5">
                        <div className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-white shadow-lg backdrop-blur-md sm:px-4 sm:py-3">
                          <p className="mb-0.5 text-base font-semibold leading-tight sm:text-lg md:text-xl">
                            Endrias Eshetu
                          </p>
                          <p className="m-0 text-xs text-white/90 sm:text-sm">
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
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
