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
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HOME_FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-brand-border bg-brand-card p-6 dark:border-brand-border-dark dark:bg-brand-card-dark"
          >
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-brand-muted dark:text-brand-muted-dark">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
