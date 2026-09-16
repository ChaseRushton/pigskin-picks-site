import type { ChangelogEntry as ChangelogEntryType } from '@/content/changelog';

export default function ChangelogEntry({ entry }: { entry: ChangelogEntryType }) {
  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="border-b border-brand-border py-6 last:border-b-0 dark:border-brand-border-dark">
      <time
        dateTime={entry.date}
        className="text-xs uppercase tracking-wide text-brand-muted dark:text-brand-muted-dark"
      >
        {formattedDate}
      </time>
      <h2 className="mt-1 font-semibold">{entry.title}</h2>
      <p className="mt-2 text-sm text-brand-muted dark:text-brand-muted-dark">
        {entry.body}
      </p>
    </article>
  );
}
