import { useState } from "react";
import type { Certificate, NewCertificate } from "../types/certificate";

interface CertificatesSectionProps {
  certificates: Certificate[];
  onAdd: (certificate: NewCertificate) => void;
  onClear: () => void;
}

function formatCertificateDate(value: string) {
  if (!value) {
    return "";
  }

  const [year, month, day] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, day ? Number(day) : 1);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function CertificatesSection({
  certificates,
  onAdd,
  onClear,
}: CertificatesSectionProps) {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextTitle = title.trim();
    const nextIssuer = issuer.trim();
    const nextLink = link.trim();

    if (!nextTitle || !nextIssuer || !date) {
      return;
    }

    onAdd({
      title: nextTitle,
      issuer: nextIssuer,
      date,
      link: nextLink,
    });

    setTitle("");
    setIssuer("");
    setDate("");
    setLink("");
  };

  return (
    <section
      className="section section-alt"
      id="certificates"
      aria-labelledby="certificates-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="section-title" id="certificates-title">
              Certificates
            </h2>
            <p className="text-slate-400">
              Add new certificates anytime. They will stay on this device.
            </p>
            <form
              className="certificate-form mt-4 rounded-3xl p-6"
              id="certificate-form"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="cert-title"
                >
                  Certificate title
                </label>
                <input
                  type="text"
                  className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                  id="cert-title"
                  name="title"
                  required
                  maxLength={100}
                  placeholder="e.g., Google UX Design Professional"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="cert-issuer"
                >
                  Issuing organization
                </label>
                <input
                  type="text"
                  className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                  id="cert-issuer"
                  name="issuer"
                  required
                  maxLength={80}
                  placeholder="e.g., Coursera"
                  value={issuer}
                  onChange={(event) => setIssuer(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="cert-date"
                >
                  Completion date
                </label>
                <input
                  type="date"
                  className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                  id="cert-date"
                  name="date"
                  required
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="cert-link"
                >
                  Credential link (optional)
                </label>
                <input
                  type="url"
                  className="w-full text-slate-900 rounded-lg border border-[#b200e3] bg-white px-3 py-2 outline-none transition focus:border-[#ae00f399]"
                  id="cert-link"
                  name="link"
                  placeholder="https://"
                  value={link}
                  onChange={(event) => setLink(event.target.value)}
                />
              </div>
              <button
                className="btn-accent inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-medium"
                type="submit"
              >
                Add certificate
              </button>
              <p
                className="mb-0 mt-3 text-sm text-slate-400"
                id="certificate-help"
              >
                Tip: Use the credential URL or verification link.
              </p>
            </form>
          </div>
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="m-0 text-xl font-semibold">Latest credentials</h3>
              <button
                className="inline-flex items-center justify-center rounded-lg border border-fuchsia-950 px-3 py-1.5 text-sm font-medium text-white cursor-pointer hover:bg-fuchsia-950"
                type="button"
                id="clear-certificates"
                onClick={onClear}
              >
                Clear all
              </button>
            </div>
            <div
              className="grid gap-3 md:grid-cols-2"
              id="certificate-list"
              aria-live="polite"
            >
              {certificates.map((certificate) => (
                <div key={certificate.id}>
                  <article className="certificate-card">
                    <h3 className="text-xl font-semibold">
                      {certificate.title}
                    </h3>
                    <p className="certificate-meta mb-1">
                      Issued by {certificate.issuer}
                    </p>
                    <p className="certificate-meta mb-3">
                      {formatCertificateDate(certificate.date)}
                    </p>
                    {certificate.link ? (
                      <a
                        className="certificate-link inline-flex items-center justify-center rounded-lg border border-fuchsia-950 px-3 py-1.5 text-sm font-medium text-white hover:bg-fuchsia-950"
                        href={certificate.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View credential
                      </a>
                    ) : null}
                  </article>
                </div>
              ))}
            </div>
            {certificates.length === 0 ? (
              <p className="mt-3 text-slate-300" id="certificate-empty">
                No certificates yet. Add your first credential using the form.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
