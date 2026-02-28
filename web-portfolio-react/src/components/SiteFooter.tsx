interface SiteFooterProps {
  currentYear: number;
}

export function SiteFooter({ currentYear }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="m-0">Portfolio of Endrias Eshetu · {currentYear}</p>
          <div className="flex gap-3">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#certificates">Certificates</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
