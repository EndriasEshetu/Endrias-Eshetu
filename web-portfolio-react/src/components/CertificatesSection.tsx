import { useState } from "react";
import type { Certificate, NewCertificate } from "../types/certificate";

interface CertificatesSectionProps {
  certificates: Certificate[];
  onAdd: (certificate: NewCertificate) => void;
  onClear: () => void;
}

function formatMonthYear(value: string) {
  if (!value) {
    return "";
  }

  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", {
    month: "long",
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
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <h2 className="section-title" id="certificates-title">
              Certificates
            </h2>
            <p className="text-muted">
              Add new certificates anytime. They will stay on this device.
            </p>
            <form
              className="card certificate-form"
              id="certificate-form"
              onSubmit={handleSubmit}
            >
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label" htmlFor="cert-title">
                    Certificate title
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
                  <label className="form-label" htmlFor="cert-issuer">
                    Issuing organization
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
                  <label className="form-label" htmlFor="cert-date">
                    Completion date
                  </label>
                  <input
                    type="month"
                    className="form-control"
                    id="cert-date"
                    name="date"
                    required
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="cert-link">
                    Credential link (optional)
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="cert-link"
                    name="link"
                    placeholder="https://"
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                  />
                </div>
                <button className="btn btn-accent w-100" type="submit">
                  Add certificate
                </button>
                <p className="small text-muted mt-3 mb-0" id="certificate-help">
                  Tip: Use the credential URL or verification link.
                </p>
              </div>
            </form>
          </div>
          <div className="col-lg-7">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="h5 mb-0">Latest credentials</h3>
              <button
                className="btn btn-sm btn-outline-dark"
                type="button"
                id="clear-certificates"
                onClick={onClear}
              >
                Clear all
              </button>
            </div>
            <div className="row g-3" id="certificate-list" aria-live="polite">
              {certificates.map((certificate) => (
                <div className="col-md-6" key={certificate.id}>
                  <article className="certificate-card">
                    <h3 className="h5">{certificate.title}</h3>
                    <p className="certificate-meta mb-1">
                      Issued by {certificate.issuer}
                    </p>
                    <p className="certificate-meta mb-3">
                      {formatMonthYear(certificate.date)}
                    </p>
                    {certificate.link ? (
                      <a
                        className="btn btn-sm btn-outline-dark"
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
              <p className="text-muted mt-3" id="certificate-empty">
                No certificates yet. Add your first credential using the form.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
