export type ChangelogEntry = {
  date: string; // ISO 8601, e.g. '2026-09-16'
  title: string;
  body: string;
};

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    date: '2026-09-16',
    title: 'Link your Discord account',
    body: 'You can now link your Pigskin Picks account to our Discord server for personalized pick reminders and announcements, right from the app.',
  },
];
