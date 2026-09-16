import Link from 'next/link';

const LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/discord', label: 'Discord' },
  { href: '/changelog', label: "What's New" },
];

export default function Nav() {
  return (
    <header className="border-b border-brand-border dark:border-brand-border-dark">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold">
          🏈 Pigskin Picks
        </Link>
        <ul className="flex gap-6 text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-brand-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
