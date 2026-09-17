import Image from 'next/image';
import AppStoreBadge from './AppStoreBadge';

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
            Predict NFL games.
            <br />
            Beat your friends&rsquo; picks.
          </h1>
          <p className="mt-6 max-w-md text-lg text-brand-muted dark:text-brand-muted-dark">
            Pigskin Picks turns every NFL Sunday into a friendly competition
            — pick winners, climb the leaderboard, and settle the score in a
            private league with your friends.
          </p>
          <div className="mt-8">
            <AppStoreBadge />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-[320px]">
          <div
            className="absolute inset-0 -rotate-6 rounded-[2rem] bg-brand-flag dark:bg-brand-flag-dark"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-border bg-brand-card shadow-2xl rotate-3 dark:border-brand-border-dark dark:bg-brand-card-dark">
            <Image
              src="/01-schedule.png"
              alt="Pigskin Picks schedule screen showing this week's NFL games"
              width={390}
              height={844}
              priority
              sizes="(min-width: 1024px) 320px, 280px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
