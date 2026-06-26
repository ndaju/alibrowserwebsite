import { getWaitlistCount } from '@/lib/db';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata = {
  title: 'Waitlist — AliBrowser',
  description: 'Get the next build. One email. No newsletter, no drip campaign, no “you might also like”.',
};

export const dynamic = 'force-dynamic';

export default function WaitlistPage() {
  const count = getWaitlistCount();

  return (
    <section className="waitlist">
      <header className="waitlist__head reveal">
        <span className="eyebrow">
          <span className="num">№ 07</span>
          <span>— The waitlist</span>
        </span>
        <h1 className="waitlist__title">
          Get the <em className="accent">next</em> build.
        </h1>
        <p className="waitlist__lede">
          One email. We write once, when the next build is ready, with a
          download link and a single line of plain text. The list lives in a
          single SQLite file on a single server. It has <span className="mono mono--ink" style={{ fontSize: 14 }}>{count.toLocaleString()}</span> entries on it.
        </p>
      </header>

      <WaitlistForm initialCount={count} />

      <p
        className="mono"
        style={{
          marginTop: 24,
          textAlign: 'center',
          color: 'var(--ink-4)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        Filed under: promises we intend to keep
      </p>
    </section>
  );
}
