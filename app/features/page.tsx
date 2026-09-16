const ALL_FEATURES = [
  { title: 'Weekly Picks', body: 'Browse the full NFL schedule and predict game winners before kickoff; picks lock automatically at game time.' },
  { title: 'Live Scores', body: "Real-time game status, scores, betting lines, and broadcast info via ESPN." },
  { title: 'Injury Reports & Matchup Predictor', body: "Color-coded injury reports and ESPN's pregame win-probability for each matchup." },
  { title: 'Leaderboards', body: 'Track accuracy rankings globally or scoped to a league, with weekly and season-long views.' },
  { title: 'Leagues', body: "Create or join private leagues by invite code, and see the whole league's picks once games lock." },
  { title: 'Share a Pick', body: 'Share your prediction with friends via the native share sheet.' },
  { title: 'Super Bowl Pick', body: 'Lock in your preseason champion prediction, tracked separately from weekly picks.' },
  { title: 'Postseason Support', body: 'Wild Card, Divisional, Conference Championship, and Super Bowl rounds are all covered.' },
  { title: 'Auto-detect Current Week', body: 'The app opens to whatever week ESPN reports as active — no manual navigation needed.' },
  { title: 'Sign in with Apple', body: 'One-tap secure sign-in, alongside standard email/password.' },
  { title: 'Password Reset', body: 'A self-service forgot/reset password flow via email.' },
  { title: 'First-Run Onboarding', body: 'A short walkthrough for brand-new accounts.' },
  { title: 'Dark Mode', body: 'System, Light, or Dark appearance with a one-tap toggle in Settings.' },
  { title: 'Offline Support', body: 'Cached schedule and prediction data when you lose connectivity.' },
  { title: 'Secure Auth', body: 'JWT-based authentication with rotating access and refresh tokens, stored in the Keychain.' },
] as const;

export const metadata = {
  title: 'Features — Pigskin Picks',
};

export default function FeaturesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Everything you need to run your league</h1>
      <p className="mt-3 text-brand-muted dark:text-brand-muted-dark">
        Pigskin Picks covers the whole season, from Week 1 through the Super
        Bowl.
      </p>
      <dl className="mt-10 space-y-8">
        {ALL_FEATURES.map((feature) => (
          <div key={feature.title}>
            <dt className="font-semibold">{feature.title}</dt>
            <dd className="mt-1 text-sm text-brand-muted dark:text-brand-muted-dark">
              {feature.body}
            </dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
