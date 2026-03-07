import { useState, type FormEvent } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("submitting");
    setFeedback("Sending your message...");

    const baseUrl = import.meta.env.VITE_API_BASE_URL?.trim() ?? "";
    const endpoint = baseUrl ? `${baseUrl}/api/contact` : "/api/contact";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Could not send your message.");
      }

      setStatus("success");
      setFeedback(result.message ?? "Message sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof TypeError) {
        setFeedback(
          "Cannot reach contact server. Start backend with npm run dev (or npm run dev:server).",
        );
        return;
      }

      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

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
                endriaseshetu75@gmail.com
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
              onSubmit={handleSubmit}
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
                    defaultValue=""
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
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </button>
                  <p
                    className={`mb-0 mt-2 text-sm ${status === "error" ? "text-red-500" : "text-slate-500"}`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedback ||
                      "Your message will be delivered to the backend API."}
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
