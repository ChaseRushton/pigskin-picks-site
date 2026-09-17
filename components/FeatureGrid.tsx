const HOME_FEATURES = [
  {
    title: 'Weekly Picks',
    body: 'Browse the full NFL schedule and predict game winners before kickoff — picks lock automatically at game time.',
  },
  {
    title: 'Live Scores',
    body: 'Real-time game status, scores, betting lines, and broadcast info via ESPN.',
  },
  {
    title: 'Leaderboards',
    body: 'Track accuracy rankings globally or scoped to a league, with weekly and season-long views.',
  },
  {
    title: 'Leagues',
    body: "Create or join private leagues by invite code, and see the whole league's picks once games lock.",
  },
  {
    title: 'Super Bowl Pick',
    body: 'Lock in your preseason champion prediction, tracked separately from weekly picks.',
  },
  {
    title: 'Dark Mode',
    body: 'System, Light, or Dark appearance with a one-tap toggle in Settings.',
  },
] as const;

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        What you get
      </h2>
      <div className="mt-6 divide-y divide-brand-border dark:divide-brand-border-dark">
        {HOME_FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
          >
            <h3 className="font-display text-xl font-extrabold text-brand-accent dark:text-brand-accent-dark">
              {feature.title}
            </h3>
            <p className="text-brand-muted dark:text-brand-muted-dark">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
