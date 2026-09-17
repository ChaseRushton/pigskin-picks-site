import '../app/legal.css';

export default function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-4xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-1 text-sm text-brand-muted dark:text-brand-muted-dark">
        {subtitle}
      </p>
      <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert [&_.legal-card]:legal-card [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold">
        {children}
      </div>
    </main>
  );
}
