const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/70 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-display text-lg italic text-paper hover:text-violet transition-colors"
        >
          Mohammed Ali
        </a>
        <ul className="flex items-center gap-7 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-paper transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Mo-Ma-Ali"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-4 py-1.5 text-paper hover:border-violet hover:text-violet transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
