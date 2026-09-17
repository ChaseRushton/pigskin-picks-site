import Image from 'next/image';

const SCREENSHOTS = [
  { src: '/01-schedule.png', alt: 'Weekly NFL schedule screen' },
  { src: '/02-game-detail.png', alt: 'Game detail screen with predictions' },
  { src: '/03-leaderboard.png', alt: 'Leaderboard screen' },
  { src: '/04-league-week.png', alt: "League week screen showing the whole league's picks" },
  { src: '/05-profile.png', alt: 'Profile screen with stats and Super Bowl pick' },
] as const;

export default function ScreenshotGallery() {
  return (
    <section className="py-16 sm:py-20" aria-label="App screenshots">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          See it in action
        </h2>
      </div>
      <div className="relative mx-auto mt-8 max-w-5xl">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4">
          {SCREENSHOTS.map((shot) => (
            <div
              key={shot.src}
              className="w-[240px] shrink-0 snap-center overflow-hidden rounded-2xl border border-brand-border dark:border-brand-border-dark sm:w-[260px]"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={390}
                height={844}
                sizes="260px"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-brand-bg to-transparent dark:from-brand-bg-dark sm:w-16"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
