import Image from 'next/image';

const SCREENSHOTS = [
  { src: '/01-schedule.png', alt: 'Weekly NFL schedule screen' },
  { src: '/02-game-detail.png', alt: 'Game detail screen with predictions' },
  { src: '/03-leaderboard.png', alt: 'Leaderboard screen' },
  { src: '/04-league-week.png', alt: 'League week screen showing the whole league\'s picks' },
  { src: '/05-profile.png', alt: 'Profile screen with stats and Super Bowl pick' },
] as const;

export default function ScreenshotGallery() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SCREENSHOTS.map((shot) => (
          <div
            key={shot.src}
            className="overflow-hidden rounded-2xl border border-brand-border dark:border-brand-border-dark"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={390}
              height={844}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
