import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pigskin Picks',
  description:
    'Predict NFL game winners every week, compete on leaderboards, and go head-to-head with friends in private leagues.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
