import Logo from '@/components/Logo';

export const metadata = {
  title: 'Download — AliBrowser',
  description: 'AliBrowser is still in the workshop. No public builds yet, but you can follow along.',
};

const PLATFORMS = [
  {
    name: 'Windows',
    status: 'In development',
    statusClass: 'platform__status--soon',
    note: 'Windows 10 / 11 · 64-bit · First public build is being assembled.',
    cta: 'Not released yet',
    href: '#',
    size: '—',
    disabled: true,
  },
  {
    name: 'macOS',
    status: 'In development',
    statusClass: 'platform__status--soon',
    note: 'Universal binary · Notarized · Coming after the Windows build stabilises.',
    cta: 'Not released yet',
    href: '#',
    size: '—',
    disabled: true,
  },
  {
    name: 'Linux',
    status: 'Future',
    statusClass: 'platform__status--src',
    note: 'Source build & AppImage · x86_64 & aarch64 · Once we have a stable release.',
    cta: 'Not released yet',
    href: '#',
    size: '—',
    disabled: true,
  },
];

const CHECKSUMS = [];

const MISSING = [
  { when: 'Q3 · 2026', title: 'First public build',  p: 'Windows alpha. Rough, minimal, but functional. This is where it starts.' },
  { when: 'Q4 · 2026', title: 'Sync',                 p: 'End-to-end encrypted, peer-to-peer. Not just “encrypted at rest” — encrypted everywhere, including from us.' },
  { when: '2027',      title: 'macOS & Linux',        p: 'Once Windows stabilises. We ship on one platform well before we ship on three badly.' },
];

export default function DownloadPage() {
  return (
    <section className="download">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="download__logo reveal">
          <Logo size={120} ariaLabel="AliBrowser logo, large" />
        </div>

        <h1 className="download__head h-mega reveal d-1">
          AliBrowser is <em className="accent">not ready</em> yet.
        </h1>

        <p className="lede download__lede reveal d-2">
          We are still building. No public builds, no betas, no "download now" buttons.
          Sign up for the waitlist — you will be the first to know when something ships.
        </p>

        {/* ============== PLATFORM PILLS ============== */}
        <div className="platform-pills">
          {PLATFORMS.map((p, i) => {
            const className = `platform reveal d-${3 + i} ${p.disabled ? 'platform--disabled' : ''}`;
            const inner = (
              <>
                <div className="platform__row">
                  <span className="platform__name">{p.name}</span>
                  <span className={`platform__status ${p.statusClass}`}>{p.status}</span>
                </div>
                <p className="platform__note">{p.note}</p>
                <span className="platform__cta">
                  <span>{p.cta}</span>
                  <span className="arrow">→</span>
                </span>
              </>
            );
            return p.disabled ? (
              <div
                key={p.name}
                className={className}
                role="link"
                aria-disabled="true"
              >
                {inner}
              </div>
            ) : (
              <a key={p.name} href={p.href} className={className}>
                {inner}
              </a>
            );
          })}
        </div>

        {/* ============== WAITLIST CTA ============== */}
        <div className="download__waitlist reveal d-6">
          <h3>Want to know when it ships?</h3>
          <p>Join the waitlist — you will be the first to download.</p>
          <a href="/waitlist" className="cta__button">
            Join the waitlist <span className="arrow">→</span>
          </a>
        </div>

        {/* ============== WHAT WE'RE BUILDING ============== */}
        <div className="missing reveal d-7">
          <h3>↳ What we’re building (and when)</h3>
          <div className="missing__grid">
            {MISSING.map((m) => (
              <div key={m.title} className="missing__item">
                <span className="when">{m.when}</span>
                <h4>{m.title}</h4>
                <p>{m.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
