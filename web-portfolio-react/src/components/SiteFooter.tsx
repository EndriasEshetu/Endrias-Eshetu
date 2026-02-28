interface SiteFooterProps {
  currentYear: number;
}

export function SiteFooter({ currentYear }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
          <p className="mb-0">Portfolio of Endrias Eshetu · {currentYear}</p>
          <div className="d-flex gap-3">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#certificates">Certificates</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
