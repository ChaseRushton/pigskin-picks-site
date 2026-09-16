import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border dark:border-brand-border-dark">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-brand-muted dark:text-brand-muted-dark sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Chase Rushton. Pigskin Picks.</p>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-brand-accent">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-brand-accent">
            Privacy
          </Link>
          <Link href="/support" className="hover:text-brand-accent">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
