import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Support — Pigskin Picks',
};

export default function SupportPage() {
  return (
    <LegalLayout title="Support" subtitle="We're here to help with Pigskin Picks.">
      <h2>Contact Us</h2>
      <div className="legal-contact-grid">
        <div className="legal-contact-card">
          <div className="icon">✉️</div>
          <h3>Email</h3>
          <p><a href="mailto:chase@chaserushton.com">chase@chaserushton.com</a></p>
        </div>
        <div className="legal-contact-card">
          <div className="icon">🐛</div>
          <h3>Bug Reports</h3>
          <p><a href="mailto:chase@chaserushton.com?subject=Pigskin%20Picks%20Bug%20Report">Email a bug report</a></p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>

      <div className="legal-faq-item">
        <strong>How do I make a prediction?</strong>
        <p>Go to the Schedule tab, tap on a game, and select which team you think will win. You can change your pick anytime before kickoff.</p>
      </div>

      <div className="legal-faq-item">
        <strong>When do picks lock?</strong>
        <p>Picks lock at the start of each game (kickoff). You cannot change a pick once the game is in progress or final.</p>
      </div>

      <div className="legal-faq-item">
        <strong>How do leagues work?</strong>
        <p>Create a league from the Leagues tab and share the 8-character invite code with friends. League members can see each other&apos;s picks after games lock and compete on a private leaderboard.</p>
      </div>

      <div className="legal-faq-item">
        <strong>What is the Super Bowl Champion pick?</strong>
        <p>Before the season ends, pick which team you think will win the Super Bowl. This pick is displayed on the leaderboard and locked once the Super Bowl begins.</p>
      </div>

      <div className="legal-faq-item">
        <strong>How is accuracy calculated?</strong>
        <p>Accuracy = (correct picks / total graded picks) × 100. Pending picks (games not yet final) are not counted.</p>
      </div>

      <div className="legal-faq-item">
        <strong>Where do the scores and betting lines come from?</strong>
        <p>Game data, scores, betting lines, and injury reports are sourced from ESPN&apos;s public data. Betting lines are informational only — this app does not facilitate real-money gambling.</p>
      </div>

      <div className="legal-faq-item">
        <strong>How do I delete my account?</strong>
        <p>Go to Profile → scroll to the bottom → tap &quot;Delete Account.&quot; This permanently removes all your data including predictions, leagues, and login credentials.</p>
      </div>

      <div className="legal-faq-item">
        <strong>The app shows &quot;offline&quot; or won&apos;t load data.</strong>
        <p>Check your internet connection and try pulling down to refresh. The app caches your last-viewed schedule for offline access.</p>
      </div>

      <h2>Response Time</h2>
      <p>We aim to respond to all support emails within 48 hours. For bug reports, please include your device model, iOS version, and steps to reproduce the issue.</p>

      <div className="legal-card">
        <h3>App Info</h3>
        <p><strong>Developer:</strong> Chase Rushton</p>
        <p><strong>Platform:</strong> iOS 17+</p>
        <p><strong>Privacy Policy:</strong> <Link href="/privacy">View Privacy Policy</Link></p>
        <p style={{ marginBottom: 0 }}><strong>Terms of Service:</strong> <Link href="/terms">View Terms of Service</Link></p>
      </div>
    </LegalLayout>
  );
}
