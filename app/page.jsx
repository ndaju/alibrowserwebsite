import Link from 'next/link';

export const metadata = {
  title: 'AliBrowser — A browser that doesn’t watch you. Yet.',
};

const FEATURE_CARDS = [
  {
    slug: 'containers',
    pill: 'Privacy',
    pillColor: 'var(--purple)',
    rating: '★★★★★',
    title: <>Containers that <em className="accent">actually</em> contain</>,
    lede: 'Per-site identities so Facebook can’t read your work email. Theoretically.',
    meta: ['4,128 testers', 'v0.9.4-alpha'],
    href: '/manifest#containers',
    variant: 'a',
  },
  {
    slug: 'reader',
    pill: 'Reading',
    pillColor: 'var(--amber)',
    rating: '★★★★★',
    title: <>Reader mode that <em className="accent">respects</em> images</>,
    lede: 'No layout reflow, no missing captions, no “subscribe to read”.',
    meta: ['2,031 testers', 'v0.9.4-alpha'],
    href: '/manifest#reader',
    variant: 'b',
  },
  {
    slug: 'sync',
    pill: 'Sync',
    pillColor: 'var(--teal-green)',
    rating: '★★★★☆',
    title: <>Sync <em className="accent">without</em> a server</>,
    lede: 'End-to-end encrypted, peer-to-peer. Your history is yours, not ours.',
    meta: ['In private beta', 'v0.9.4-alpha'],
    href: '/manifest#sync',
    variant: 'c',
  },
];

const CATEGORY_PILLS = [
  { label: 'Privacy',    color: 'purple' },
  { label: 'Performance', color: 'amber' },
  { label: 'UI',         color: 'ink' },
  { label: 'Sync',       color: 'teal' },
  { label: 'Devtools',   color: 'blue' },
  { label: 'Themes',     color: 'orange' },
];

const FEATURE_LARGE = {
  pill: 'The flagship',
  pillColor: 'var(--purple)',
  title: <>A browser that <em className="accent">doesn’t</em> phone home.</>,
  lede: 'No telemetry endpoints. No crash reports leaving the device. No “anonymous usage data”. No background pings to anyone. The whole project is small enough to read in an afternoon, and we mean that literally.',
  meta: ['Read the threat model', '↗'],
  href: '/manifest#privacy',
};

const FEATURE_NARROW = [
  {
    pill: 'Reader',
    pillColor: 'var(--amber)',
    title: <>Reader mode that <em className="accent">respects</em> the page.</>,
    lede: 'Full-bleed images kept intact. Captions preserved. Footnotes reattached at the bottom.',
    meta: ['Available now', 'v0.9.4'],
    href: '/manifest#reader',
  },
  {
    pill: 'Sync',
    pillColor: 'var(--teal-green)',
    title: <>Sync <em className="accent">without</em> a server in the middle.</>,
    lede: 'E2E-encrypted, peer-to-peer over WebRTC. Zero-knowledge, even to us.',
    meta: ['Private beta', 'Q3 2026'],
    href: '/manifest#sync',
  },
];

const SPECS = [
  { prefix: '> ENGINE',     value: 'Gecko ESR 115',       note: 'Patched weekly. No code older than 18 months.' },
  { prefix: '> STACK',      value: 'C++ · Rust · JS',     note: 'Rust in the compositor, JS for the UI, C++ where it earns its keep.' },
  { prefix: '> TELEMETRY',  value: '0 endpoints',         note: 'Not "off by default". Off. The kill switch would be a print statement.' },
  { prefix: '> LICENSE',    value: 'MIT',                  note: 'The whole thing. Fork it, ship it, sell it, just don’t surveil people.' },
];

const TIMELINE = [
  { q: 'Q1', y: '2026', state: 'done',    title: 'Gecko ESR 115 fork bootstrapped',                note: 'Compiled, runs, opens one tab.' },
  { q: 'Q2', y: '2026', state: 'current', title: 'Public alpha for Windows · first 1,000 testers', note: 'You might be one of them.' },
  { q: 'Q3', y: '2026', state: 'next',    title: 'Sync, reader mode, theme engine, containers',     note: 'The boring features done properly.' },
  { q: 'Q4', y: '2026', state: 'next',    title: 'macOS build · Linux source · translation infra', note: 'And a proper website. With paper grain.' },
];

const ALMANAC = [
  { num: 'Doc 01', title: 'Engineering blog',     desc: 'Notes from the Gecko fork, weekly.',         href: '/manifest' },
  { num: 'Doc 02', title: 'Threat model',         desc: 'What we collect, what we don’t, and why.',   href: '/manifest#privacy' },
  { num: 'Doc 03', title: 'Press kit',            desc: 'Logos, screenshots, the boring legal stuff.', href: '/manifest' },
  { num: 'Doc 04', title: 'The manifest',         desc: 'Five pages on what we will and won’t do.',    href: '/manifest' },
  { num: 'Doc 05', title: 'Contribute',           desc: 'PRs welcome, opinions more so.',              href: '/manifest#how-to-help' },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  1 · HERO                                                    */}
      {/* ============================================================ */}
      <section className="hero">
        <div className="container">
          <div className="reveal d-1">
            <span className="hero__eyebrow">
              <span className="hero__dot" />
              <span>Edition 014 · Spring 2026</span>
            </span>
          </div>

          <h1 className="hero__title reveal d-2">
            A browser that doesn’t watch you.{' '}
            <em className="accent">Yet.</em>{' '}
            <mark className="hl">Eventually</mark> it will load this page.
          </h1>

          <p className="lede hero__lede reveal d-3">
            AliBrowser is a privacy-first, Firefox-based browser built slowly, on purpose, by{' '}
            <strong>AliOne</strong> — a small company in Istanbul that always listens to its
            community, and always will be. It runs on Gecko, ships under MIT, and doesn’t phone
            home. It is, by every reasonable measure, almost ready.
          </p>

          <div className="hero__stats reveal d-4">
            <div className="hero__stat">
              <span className="stat-label">Founded</span>
              <span className="stat-value">2024 · IST</span>
            </div>
            <div className="hero__stat">
              <span className="stat-label">Lines of Gecko</span>
              <span className="stat-value">26.4M</span>
            </div>
            <div className="hero__stat">
              <span className="stat-label">Languages</span>
              <span className="stat-value">C++ · Rust · JS</span>
            </div>
            <div className="hero__stat">
              <span className="stat-label">Telemetry</span>
              <span className="stat-value" style={{ color: 'var(--teal-green)' }}>none</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2 · FEATURE STRIP (3 cards, rotated)                        */}
      {/* ============================================================ */}
      <section className="container">
        <div className="feature-strip">
          {FEATURE_CARDS.map((card, i) => (
            <Link
              key={card.slug}
              href={card.href}
              className={`feature-card feature-card--${card.variant} reveal d-${5 + i}`}
            >
              <div className="feature-card__top">
                <span
                  className="feature-card__pill"
                  style={{ borderColor: card.pillColor, color: 'var(--ink)' }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: card.pillColor,
                      display: 'inline-block',
                    }}
                  />
                  {card.pill}
                </span>
                <span className="feature-card__rating">{card.rating}</span>
              </div>

              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__lede">{card.lede}</p>

              <div className="feature-card__meta">
                <span>{card.meta[0]}</span>
                <span className="dot">·</span>
                <span>{card.meta[1]}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3 · SEARCH-STYLE CTA STRIP (status prompt)                  */}
      {/* ============================================================ */}
      <section className="container">
        <div className="cta-strip reveal d-8">
          <div className="cta-strip__text">
            <span className="cta-strip__sub">↳ Current status</span>
            <h2 className="cta-strip__title">
              In development. <em style={{ color: 'var(--teal)' }}>Shipping when it is ready.</em>
            </h2>
          </div>
          <Link href="/status" className="cta__button">
            View status <span className="arrow">→</span>
          </Link>
        </div>

        <div className="pill-row reveal d-9">
          {CATEGORY_PILLS.map((p) => (
            <span key={p.label} className="pill">
              <span className={`pip pip--${p.color}`} />
              {p.label}
            </span>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4 · SECTION № 01 — WHAT WE'RE BUILDING                      */}
      {/* ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal d-9">
            <div className="section-head__rule">
              <span className="eyebrow">
                <span className="num">№ 01</span>
                <span>— Featured</span>
              </span>
            </div>
            <div className="section-head__title">
              <h2>What we’re building.</h2>
            </div>
            <p className="section-head__lede">
              Three things, done properly, before we touch anything else. This is the part of
              the year where we make promises we intend to keep.
            </p>
          </div>

          <div className="feat-grid">
            <Link href={FEATURE_LARGE.href} className="feat-card feat-card--lg reveal d-10">
              <span
                className="eyebrow eyebrow--light"
                style={{
                  background: 'rgba(243, 236, 220, 0.06)',
                  padding: '6px 12px',
                  border: '1px solid rgba(243, 236, 220, 0.18)',
                  borderRadius: 999,
                  alignSelf: 'flex-start',
                }}
              >
                <span className="num">↳ The flagship</span>
              </span>

              <h3 className="feat-card__title">
                {FEATURE_LARGE.title}
              </h3>

              <p className="feat-card__lede">
                {FEATURE_LARGE.lede}
              </p>

              <div className="feat-card__bottom">
                <span>{FEATURE_LARGE.meta[0]}</span>
                <span className="arrow">↗</span>
              </div>
            </Link>

            <div style={{ gridColumn: 'span 4', display: 'grid', gap: 24 }}>
              {FEATURE_NARROW.map((f, i) => (
                <Link
                  key={f.title}
                  href={f.href}
                  className={`feat-card feat-card--md reveal d-${11 + i}`}
                >
                  <span
                    className="eyebrow"
                    style={{
                      background: 'var(--paper-2)',
                      padding: '6px 12px',
                      border: '1px solid var(--ink)',
                      borderRadius: 999,
                      alignSelf: 'flex-start',
                    }}
                  >
                    <span className="num">↳ {f.pill}</span>
                  </span>

                  <h3 className="feat-card__title">{f.title}</h3>
                  <p className="feat-card__lede">{f.lede}</p>

                  <div className="feat-card__bottom">
                    <span>{f.meta[0]}</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5 · SECTION № 02 — THE BORING STUFF WE'RE PROUD OF          */}
      {/* ============================================================ */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-head__rule">
              <span className="eyebrow">
                <span className="num">№ 02</span>
                <span>— The boring stuff</span>
              </span>
            </div>
            <div className="section-head__title">
              <h2>The boring stuff we’re proud of.</h2>
            </div>
            <p className="section-head__lede">
              The footnotes that don’t make the keynote but, honestly, should.
            </p>
          </div>

          <div className="spec-grid">
            {SPECS.map((s) => (
              <div key={s.prefix} className="spec-cell">
                <span className="spec-cell__prefix">{s.prefix}</span>
                <span className="spec-cell__value">{s.value}</span>
                <p className="spec-cell__note">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6 · EDITORIAL DARK STRIP — MANIFESTO                        */}
      {/* ============================================================ */}
      <section className="editorial-strip">
        <div className="container">
          <div style={{ maxWidth: 880 }}>
            <span className="eyebrow eyebrow--light" style={{ marginBottom: 24, display: 'inline-flex' }}>
              <span className="num">№ 02.5</span>
              <span>— The credo</span>
            </span>

            <p className="editorial-strip__quote reveal">
              The browser is the most intimate piece of software you own.
              <em className="accent"> It sees everything.</em> It deserves
              to be small, slow, careful, and written by people who read
              the source — and a company that{' '}
              <em className="accent">always listens</em> to the people it’s for.
            </p>

            <div className="editorial-strip__body">
              <p className="editorial-strip__signoff">
                — Ali, on behalf of <strong style={{ color: 'var(--amber)', fontStyle: 'normal', fontWeight: 500 }}>AliOne</strong>,
                Istanbul, on a Tuesday in March, with the windows open and the
                kettle going.
                <strong>Yours, in private.</strong>
              </p>
              <p className="editorial-strip__promise">
                <span aria-hidden="true">↳</span>
                AliOne always listens to its community, and always will be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7 · SECTION № 03 — ON THE ROADMAP (vertical timeline)       */}
      {/* ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-head__rule">
              <span className="eyebrow">
                <span className="num">№ 03</span>
                <span>— On the roadmap</span>
              </span>
            </div>
            <div className="section-head__title">
              <h2>Four quarters, four promises.</h2>
            </div>
            <p className="section-head__lede">
              The 2026 plan, in plain language. Dates may move; the work won’t.
            </p>
          </div>

          <div className="timeline">
            {TIMELINE.map((row) => (
              <div
                key={row.q}
                className={`timeline__row timeline__row--${row.state}`}
              >
                <div className="timeline__date">
                  <span className="q">{row.q}</span>
                  <span className="y">{row.y}</span>
                </div>
                <div className="timeline__node" />
                <div className="timeline__content">
                  <span className="timeline__title">{row.title}</span>
                  <span className="timeline__note">
                    {row.state === 'done' && '↳ Shipped'}
                    {row.state === 'current' && '↳ In progress'}
                    {row.state === 'next' && '↳ Planned'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8 · SECTION № 04 — A NOTE FROM THE FOUNDER (on behalf of AliOne) */}
      {/* ============================================================ */}
      <section className="section section--tight">
        <div className="container">
          <div className="engineer-note">
            <div className="engineer-note__meta">
              <span className="eyebrow">
                <span className="num">№ 04</span>
                <span>— A note from the founder</span>
              </span>
              <span className="mono" style={{ marginTop: 12 }}>
                Filed · 04.03.2026 · For <strong style={{ color: 'var(--ink)' }}>AliOne</strong>
              </span>
            </div>

            <div>
              <p className="engineer-note__body reveal">
                I started AliBrowser on behalf of <strong style={{ color: 'var(--ink)' }}>AliOne</strong> —
                the small company that ships it — because every browser I tried wanted
                something from the people using it in exchange for loading a webpage. We
                wanted one that <em className="accent">didn’t.</em> Some days it’s two lines
                of Rust and a very specific kind of headache. Most days it’s reading the
                Gecko source and quietly weeping. The whole company fits in a small room
                in Istanbul. So does the kettle.
              </p>
              <p className="engineer-note__sig">
                — <strong>Ali</strong>, on behalf of AliOne · 2026 · Written at 2&nbsp;a.m., edited at 9.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  9 · DEV BANNER (black pill CTA)                             */}
      {/* ============================================================ */}
      <section className="container">
        <div className="dev-banner reveal">
          <div>
            <span className="eyebrow">
              <span className="num">↳ For the curious</span>
            </span>
            <h3 className="dev-banner__title">
              Read the <em className="accent">manifest</em>. It’s short, honest, and won’t ask for your email.
            </h3>
            <p className="dev-banner__sub">Five pages · No CTAs · Two metaphors about lighthouses</p>
          </div>
          <Link href="/manifest" className="dev-banner__cta">
            Read the manifest
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10 · THE FULL ALMANAC (3-col grid)                           */}
      {/* ============================================================ */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-head__rule">
              <span className="eyebrow">
                <span className="num">№ 05</span>
                <span>— The full almanac</span>
              </span>
            </div>
            <div className="section-head__title">
              <h2>Everything we’ve written down.</h2>
            </div>
          </div>

          <div className="almanac">
            {ALMANAC.map((a) => (
              <Link key={a.title} href={a.href} className="almanac__cell">
                <span className="num">{a.num}</span>
                <h3 className="almanac__title">{a.title}</h3>
                <p className="almanac__desc">{a.desc}</p>
                <span className="almanac__more">
                  Open
                  <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
