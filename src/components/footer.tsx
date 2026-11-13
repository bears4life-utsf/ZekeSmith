import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  const contactLinks = [
    { label: "LinkedIn", href: site.linkedIn, external: true },
    { label: site.bigSandLabs.name, href: site.bigSandLabs.url, external: true },
    { label: "Email", href: `mailto:${site.email}`, external: false },
  ] as const;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-sans text-lg font-semibold tracking-tight text-foreground">
              {site.name}
            </p>
            <p className="mt-1.5 text-sm text-muted">{site.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                rel={item.external ? "noopener noreferrer" : undefined}
                target={item.external ? "_blank" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted/80">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
