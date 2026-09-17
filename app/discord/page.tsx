const DISCORD_INVITE_URL = 'https://discord.gg/Xg98UvdUEf';

export const metadata = {
  title: 'Discord Community — Pigskin Picks',
};

export default function DiscordPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        Join the Pigskin Picks community
      </h1>
      <p className="mt-4 text-brand-muted dark:text-brand-muted-dark">
        Our Discord server is where the Pigskin Picks community hangs out
        during the season. Get weekly pick reminders, injury-report digests,
        and NFL news posted automatically, and link your Pigskin Picks
        account to the server for personalized announcements.
      </p>
      <a
        href={DISCORD_INVITE_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block rounded-full bg-brand-accent px-8 py-3 font-display text-base font-extrabold uppercase tracking-wide text-brand-bg dark:bg-brand-accent-dark dark:text-brand-bg-dark"
      >
        Join the Discord
      </a>
    </main>
  );
}
