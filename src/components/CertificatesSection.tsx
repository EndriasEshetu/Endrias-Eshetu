import { useMemo } from "react";
import type { Certificate } from "../types/certificate";
import { ExpandableCertificateList } from "./ExpandableCertificateList";

interface CertificatesSectionProps {
  certificates: Certificate[];
  /** How many certificates show before "See more" */
  initialVisibleCertificates?: number;
}

/** Parse issued date for sorting (newest first). Supports ISO YYYY-MM-DD and strings like "Mar 02, 2026". */
function certificateIssuedTime(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) {
    return 0;
  }

  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?/);
  if (isoMatch) {
    const y = Number(isoMatch[1]);
    const m = Number(isoMatch[2]);
    const d = isoMatch[3] ? Number(isoMatch[3]) : 1;
    const t = new Date(y, m - 1, d).getTime();
    return Number.isNaN(t) ? 0 : t;
  }

  const parsed = Date.parse(trimmed);
  return Number.isNaN(parsed) ? 0 : parsed;
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

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="certificate-card">
      <h3 className="text-xl font-semibold">{certificate.title}</h3>
      <p className="certificate-meta mb-1">Issued by {certificate.issuer}</p>
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
  );
}

export function CertificatesSection({
  certificates,
  initialVisibleCertificates = 4,
}: CertificatesSectionProps) {
  const sortedCertificates = useMemo(
    () =>
      [...certificates].sort(
        (a, b) => certificateIssuedTime(b.date) - certificateIssuedTime(a.date),
      ),
    [certificates],
  );

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
            <ExpandableCertificateList
              items={sortedCertificates}
              initialVisibleCount={initialVisibleCertificates}
              keyExtractor={(c) => c.id}
              listId="certificate-list"
              renderItem={(certificate) => (
                <CertificateCard certificate={certificate} />
              )}
              emptyFallback={
                <p className="mt-3 text-slate-300" id="certificate-empty">
                  No certificates published yet.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
