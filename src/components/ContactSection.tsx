import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "../data/contact";

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

    // API base URL (for deployed backend on Render)
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

      let result: { ok?: boolean; message?: string } = {};
      try {
        result = (await response.json()) as { ok?: boolean; message?: string };
      } catch {
        // Server returned non-JSON (e.g. HTML error page)
      }

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
          "Cannot reach contact server. Start backend with npm run dev (or npm run server).",
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
          <ScrollReveal variant="slide-right" className="min-w-0">
            <div>
              <h2 className="section-title" id="contact-title">
                Let's connect
              </h2>
              <p className="text-(--metric-label)">
                Reach out for internships, collaboration, or project work. I
                respond as quickly as possible.
              </p>
              <div className="contact-details mt-2">
                <p className="mb-1">Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <p className="mb-1 mt-3">Phone</p>
                <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
                <p className="mb-1 mt-3">Location</p>
                <p className="text-(--ink)">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="min-w-0">
            <form
              className="panel-card rounded-3xl p-6"
              aria-label="Contact form"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <ScrollReveal variant="fade-up" className="min-w-0">
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-(--ink)"
                      htmlFor="contact-name"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-(--line) bg-(--input-bg) px-3 py-2 text-(--input-text) outline-none transition focus:border-(--accent)"
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal variant="fade-up" className="min-w-0">
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-(--ink)"
                      htmlFor="contact-email"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-(--line) bg-(--input-bg) px-3 py-2 text-(--input-text) outline-none transition focus:border-(--accent)"
                      id="contact-email"
                      name="email"
                      placeholder="endriaseshetu@gmail.com"
                      required
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  variant="fade-up"
                  className="min-w-0 md:col-span-2"
                >
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-(--ink)"
                      htmlFor="contact-topic"
                    >
                      Topic
                    </label>
                    <select
                      className="w-full rounded-lg border border-(--line) bg-(--input-bg) px-3 py-2 text-(--input-text) outline-none transition focus:border-(--accent)"
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
                </ScrollReveal>
                <ScrollReveal
                  variant="fade-up"
                  className="min-w-0 md:col-span-2"
                >
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-(--ink)"
                      htmlFor="contact-message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-(--line) bg-(--input-bg) px-3 py-2 text-(--input-text) outline-none transition focus:border-(--accent)"
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project"
                      required
                    ></textarea>
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  variant="fade-up"
                  className="min-w-0 md:col-span-2"
                >
                  <div>
                    <button
                      className="btn-accent inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-medium"
                      type="submit"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending..." : "Send message"}
                    </button>
                    <p
                      className={`mb-0 mt-2 text-sm ${status === "error" ? "text-red-500" : "text-(--muted)"}`}
                      role="status"
                      aria-live="polite"
                    >
                      {feedback ||
                        "Your message will be delivered to the backend API."}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
