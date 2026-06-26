export const metadata = {
  title: 'Status — AliBrowser',
  description: 'Current development status of AliBrowser.',
};

const STATUS = [
  {
    phase: 'Phase 1',
    title: 'Core engine',
    status: 'In development',
    pct: 40,
    note: 'Rendering engine, tab management, basic chrome. The browser that loads a page.',
  },
  {
    phase: 'Phase 2',
    title: 'Containers & privacy',
    status: 'In development',
    pct: 25,
    note: 'Container tabs, per-container cookie jars, network isolation.',
  },
  {
    phase: 'Phase 3',
    title: 'Bookmarks & history',
    status: 'Planning',
    pct: 10,
    note: 'Local-first, encrypted sync across devices (end of 2026).',
  },
  {
    phase: 'Phase 4',
    title: 'Extensions & theming',
    status: 'Not started',
    pct: 0,
    note: 'Compatible with Chrome extension API, custom theme engine.',
  },
];

const UPDATES = [
  { date: '26 June 2026', text: 'Website launched. Development is active on the rendering engine.' },
  { date: 'Q3 2026', text: 'First public alpha (Windows). Expect rough edges and missing features.' },
  { date: 'Q4 2026', text: 'Sync (E2EE, P2P). Bookmarks and history sharing across devices.' },
  { date: '2027', text: 'macOS & Linux builds. Stabilisation and security audits.' },
];

export default function StatusPage() {
  return (
    <section className="waitlist" style={{ paddingTop: 80 }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <header className="waitlist__head reveal">
          <span className="eyebrow">
            <span className="num">↳</span>
            <span>Development status</span>
          </span>
          <h1 className="waitlist__title">
            What we are <em className="accent">building</em> right now.
          </h1>
          <p className="waitlist__lede">
            No betas, no release dates, no hype. Here is exactly what is being worked on and what comes next.
          </p>
        </header>

        <div className="status__phases reveal d-2">
          {STATUS.map((p) => (
            <div key={p.phase} className="status__phase">
              <div className="status__phase-head">
                <span className="status__phase-label">{p.phase}</span>
                <span className="status__phase-title">{p.title}</span>
                <span className="status__phase-status">{p.status}</span>
                <span className="status__phase-pct">{p.pct}%</span>
              </div>
              <div className="status__phase-bar">
                <div className="status__phase-fill" style={{ width: `${p.pct}%` }} />
              </div>
              <p className="status__phase-note">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="missing reveal d-4" style={{ marginTop: 64 }}>
          <h3>↳ Timeline</h3>
          <div className="missing__grid">
            {UPDATES.map((u) => (
              <div key={u.date} className="missing__item">
                <span className="when">{u.date}</span>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
