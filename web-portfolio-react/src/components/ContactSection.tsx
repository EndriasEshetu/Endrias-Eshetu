export function ContactSection() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h2 className="section-title" id="contact-title">
              Let's connect
            </h2>
            <p className="text-slate-400">
              Reach out for internships, collaboration, or project work. I
              respond as quickly as possible.
            </p>
            <div className="contact-details mt-2">
              <p className="mb-1">Email</p>
              <a href="mailto:endrias.eshetu@example.com">
                endrias.eshetu.egata@gmail.com
              </a>
              <p className="mb-1 mt-3">Phone</p>
              <a href="tel:+251989483775">+251 989 483 775</a>
              <p className="mb-1 mt-3">Social</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/EndriasEshetu"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/endrias-eshetu-a25948388"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://web.facebook.com/tsinubekur1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div>
            <form
              className="panel-card rounded-3xl bg-white p-6"
              aria-label="Contact form"
            >
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="contact-name"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="contact-email"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="contact-topic"
                  >
                    Topic
                  </label>
                  <select
                    className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                    id="contact-topic"
                    name="topic"
                    required
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="fullstack">Full-stack project</option>
                    <option value="automation">Automation</option>
                    <option value="networking">Networking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project"
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    className="btn-accent inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-medium"
                    type="submit"
                  >
                    Send message
                  </button>
                  <p className="mb-0 mt-2 text-sm text-slate-400">
                    This form is a demo. Replace with your email handler.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
