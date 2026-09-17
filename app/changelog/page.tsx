import { CHANGELOG_ENTRIES } from '@/content/changelog';
import ChangelogEntry from '@/components/ChangelogEntry';

export const metadata = {
  title: "What's New — Pigskin Picks",
};

export default function ChangelogPage() {
  const sorted = [...CHANGELOG_ENTRIES].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        What&rsquo;s New
      </h1>
      <div className="mt-8">
        {sorted.map((entry) => (
          <ChangelogEntry key={entry.date + entry.title} entry={entry} />
        ))}
      </div>
    </main>
  );
}
