const DISCORD_INVITE_URL = 'https://discord.gg/Xg98UvdUEf';

export default function AppStoreBadge() {
  return (
    <a
      href={DISCORD_INVITE_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex flex-col items-start gap-0.5 rounded-xl border border-brand-border bg-brand-card px-5 py-3 dark:border-brand-border-dark dark:bg-brand-card-dark"
      aria-label="Coming soon to the App Store — join Discord for beta access"
    >
      <span className="text-xs text-brand-muted dark:text-brand-muted-dark">
        Coming Soon
      </span>
      <span className="text-sm font-semibold">Join Discord for beta access →</span>
    </a>
  );
}
