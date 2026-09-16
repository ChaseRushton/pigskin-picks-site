import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Privacy Policy — Pigskin Picks',
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Last updated: September 16, 2026">
      <p>Pigskin Picks (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is an NFL game prediction app developed by Chase Rushton. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>

      <h2>1. Information We Collect</h2>
      <div className="legal-card">
        <p><strong>Account Information</strong></p>
        <ul>
          <li>Username (chosen by you)</li>
          <li>Email address</li>
          <li>Password (hashed — we never store or see your plain-text password)</li>
          <li>Favorite NFL team (optional)</li>
        </ul>
        <p><strong>Usage Data</strong></p>
        <ul>
          <li>Game predictions you submit</li>
          <li>Super Bowl champion pick</li>
          <li>League memberships and invitations</li>
        </ul>
        <p><strong>Technical Data</strong></p>
        <ul>
          <li>IP address (for security and audit logging)</li>
          <li>Device user-agent string</li>
        </ul>
        <p><strong>Discord Account Linking (optional)</strong></p>
        <ul>
          <li>Your Discord user ID — only if you choose to link your Discord account using the <code>/link</code> command in our Discord bot</li>
        </ul>
      </div>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li><strong>Account management:</strong> To create and maintain your account, authenticate your identity, and enable login.</li>
        <li><strong>Core functionality:</strong> To record your predictions, calculate your accuracy, and display your stats on leaderboards.</li>
        <li><strong>Leagues:</strong> To manage league memberships, share invite codes, and display league members&apos; picks after games lock.</li>
        <li><strong>Security:</strong> To prevent abuse, enforce rate limits, and maintain audit logs of write operations.</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <ul>
        <li><strong>ESPN API:</strong> We fetch publicly available NFL game data (schedules, scores, team info, betting lines, injury reports) from ESPN&apos;s public endpoints. No personal data is shared with ESPN.</li>
        <li><strong>Apple (Sign in with Apple):</strong> If you use Sign in with Apple, Apple provides us with a user identifier and, optionally, your email. We do not receive your Apple password.</li>
        <li><strong>Discord:</strong> If you link your Discord account via the <code>/link</code> command in our Discord bot, we store your Discord user ID so bot commands (like <code>/mypicks</code>) can be matched to your Pigskin Picks account. We do not receive your Discord username, avatar, email, or message content. You can remove this link at any time with the <code>/unlink</code> command.</li>
      </ul>

      <h2>4. Data Storage &amp; Security</h2>
      <ul>
        <li>All API traffic is encrypted via HTTPS (TLS 1.2+).</li>
        <li>Passwords are hashed with bcrypt before storage.</li>
        <li>Authentication tokens are stored in the iOS Keychain (hardware-encrypted on device).</li>
        <li>Our database is encrypted at rest via the hosting provider.</li>
        <li>Audit logs are append-only and cannot be deleted.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <p>We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes. Your data may be visible to other users only in the following ways:</p>
      <ul>
        <li>Your username and prediction accuracy appear on public leaderboards.</li>
        <li>Your picks are visible to league members after a game locks (kicks off).</li>
        <li>Your Super Bowl champion pick is displayed on the leaderboard.</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>We retain your account data for as long as your account is active. Audit logs are retained for a minimum of one year for security purposes.</p>

      <h2>7. Account Deletion</h2>
      <p>You can delete your account at any time from the <strong>Profile</strong> tab in the app. Deletion is permanent and removes:</p>
      <ul>
        <li>Your account and login credentials</li>
        <li>All predictions and Super Bowl picks</li>
        <li>All league memberships and invitations</li>
      </ul>
      <p>Audit log entries referencing your account are retained per our security policy but are not publicly accessible.</p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>The app is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal data, please contact us and we will delete it.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of the app after changes constitutes acceptance of the revised policy.</p>

      <h2>10. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or your data, please contact us:</p>
      <div className="legal-card">
        <p><strong>Email:</strong> <a href="mailto:chase@chaserushton.com">chase@chaserushton.com</a></p>
      </div>
    </LegalLayout>
  );
}
