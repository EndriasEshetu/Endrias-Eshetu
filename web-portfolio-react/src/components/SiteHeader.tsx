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
              <div>
                <h1
                  className="hero-title text-4xl font-bold md:text-5xl"
                  id="hero-title"
                >
                  Building reliable, user-focused web products from front-end to
                  back-end.
                </h1>
                <p className="mt-4 text-lg text-slate-400">
                  Based in Adama (often in Hawasa), I build responsive
                  interfaces and dependable back-end systems with clean,
                  maintainable code.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="btn-accent inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium"
                    href="#projects"
                  >
                    View projects
                  </a>
                  <a
                    className="hero-outline-btn inline-flex items-center justify-center rounded-lg border border-[#18023ae6] px-6 py-3 font-medium text-[#18023ae6]"
                    href="#certificates"
                  >
                    View certificates
                  </a>
                </div>
                <div className="hero-metrics mt-6">
                  <div>
                    <p className="metric-value">End-to-end</p>
                    <p className=" text-slate-400">
                      UI, API, and delivery focus
                    </p>
                  </div>

                  <div>
                    <p className="metric-value">Open</p>
                    <p className=" text-slate-400">
                      Internships and collaborations
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="hero-card">
                  <div className="hero-card-inner">
                    <img
                      src="/155A2404.JPG"
                      alt="Photo of me working on a laptop, smiling at the camera"
                      className="h-auto w-full rounded-3xl shadow"
                    />
                    <div className="panel-card mt-4  bg-white p-4">
                      <p className="mb-1 font-semibold">
                        Available for internships and junior roles
                      </p>
                      <p className="m-0 text-slate-400">
                        Adama, Ethiopia · Often in Hawasa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="section-title" id="about-title">
                About me
              </h2>
              <p className="text-slate-400">
                I'm Endrias, a freelance full-stack developer focused on
                delivering complete features from planning and UI design to
                back-end logic and deployment support.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
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
            </div>
            <div className="lg:col-span-7">
              <div className="panel-card rounded-3xl bg-white p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      Focus areas
                    </h3>
                    <ul className="m-0 list-none p-0">
                      <li>Front-end development</li>
                      <li>Back-end development</li>
                      <li>Full-stack project delivery</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      Tools I love
                    </h3>
                    <ul className="m-0 list-none p-0">
                      <li>HTML, CSS, JavaScript(TypeScript), React.JS</li>
                      <li>Tailwind CSS, Git, VS Code</li>
                      <li>Node.js, Express.js, MongoDB</li>
                    </ul>
                  </div>
                </div>
                <div className="panel-card mt-4 bg-white p-4">
                  <p className="mb-1">Signature strength</p>
                  <p className="mb-0 font-semibold">
                    Delivering end-to-end features with clarity and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
