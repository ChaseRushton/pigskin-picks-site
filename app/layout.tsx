import type { Metadata } from 'next';
import { Big_Shoulders_Display, Public_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const display = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
});

const sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
