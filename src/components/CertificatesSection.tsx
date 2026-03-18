import type { Certificate } from "../types/certificate";

interface CertificatesSectionProps {
  certificates: Certificate[];
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
}: CertificatesSectionProps) {
  return (
    <section
      className="section section-alt"
      id="certificates"
      aria-labelledby="certificates-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="section-title" id="certificates-title">
              Certificates
            </h2>
            <p className="text-muted-prose">
              Curated credentials published by the site owner.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold">Latest credentials</h3>
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
                    {certificate.link || certificate.pdfLink ? (
                      <div className="flex flex-wrap gap-2">
                        {certificate.pdfLink ? (
                          <a
                            className="certificate-link inline-flex items-center justify-center rounded-lg border border-fuchsia-950 px-3 py-1.5 text-sm font-medium text-white hover:bg-fuchsia-950"
                            href={certificate.pdfLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            See Certificate
                          </a>
                        ) : null}
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
                      </div>
                    ) : null}
                  </article>
                </div>
              ))}
            </div>
            {certificates.length === 0 ? (
              <p className="mt-3 text-slate-300" id="certificate-empty">
                No certificates published yet.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
