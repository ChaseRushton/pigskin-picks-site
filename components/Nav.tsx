import Link from 'next/link';

const LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/discord', label: 'Discord' },
  { href: '/changelog', label: "What's New" },
];

export default function Nav() {
  return (
    <header className="border-b border-brand-border dark:border-brand-border-dark">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-4">
        <Link
          href="/"
          className="font-display text-xl font-extrabold uppercase tracking-wide text-brand-accent dark:text-brand-accent-dark"
        >
          Pigskin Picks
        </Link>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm sm:gap-x-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-brand-text hover:text-brand-accent dark:text-brand-text-dark dark:hover:text-brand-accent-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
