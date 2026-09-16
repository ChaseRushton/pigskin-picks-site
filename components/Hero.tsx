import AppStoreBadge from './AppStoreBadge';

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Predict NFL games. Beat your friends&rsquo; picks.
      </h1>
      <p className="mt-4 text-lg text-brand-muted dark:text-brand-muted-dark">
        Pigskin Picks turns every NFL Sunday into a friendly competition —
        pick winners, climb the leaderboard, and settle the score in a
        private league with your friends.
      </p>
      <div className="mt-8 flex justify-center">
        <AppStoreBadge />
      </div>
    </section>
  );
}
