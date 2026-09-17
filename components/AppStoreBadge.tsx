const DISCORD_INVITE_URL = 'https://discord.gg/Xg98UvdUEf';

export default function AppStoreBadge() {
  return (
    <a
      href={DISCORD_INVITE_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 rounded-full border-2 border-brand-accent bg-brand-accent/10 px-6 py-3 transition-colors hover:bg-brand-accent/20 dark:border-brand-accent-dark dark:bg-brand-accent-dark/10 dark:hover:bg-brand-accent-dark/20"
      aria-label="Coming soon to the App Store — join Discord for beta access"
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full bg-brand-accent dark:bg-brand-accent-dark"
        aria-hidden="true"
      />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[11px] font-semibold text-brand-muted dark:text-brand-muted-dark">
          Coming soon to the App Store
        </span>
        <span className="font-display text-base font-extrabold uppercase tracking-wide text-brand-accent dark:text-brand-accent-dark">
          Join Discord for beta access
        </span>
      </span>
    </a>
  );
}
