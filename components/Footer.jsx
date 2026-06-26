import Link from 'next/link';

const COLS = [
  {
    title: 'The product',
    links: [
      { href: '/download', label: 'Download' },
      { href: '/manifest', label: 'Manifest' },
      { href: '/waitlist', label: 'Waitlist' },
    ],
  },
  {
    title: 'The almanac',
    links: [
      { href: '/manifest', label: 'Engineering blog' },
      { href: '/manifest', label: 'Threat model' },
      { href: '/manifest', label: 'Press kit' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { href: 'https://github.com', label: 'GitHub' },
      { href: 'mailto:alione@alione.cc', label: 'alione@alione.cc' },
      { href: '/manifest', label: 'Contribute' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <span className="wordmark">AliBrowser</span>
            <p>
              Built by <a href="https://alione.cc" target="_blank" rel="noopener noreferrer"><strong>AliOne</strong></a> — a small, deliberate company that always
              listens to its community, and always will be.
            </p>
            <span className="footer__ownedby">
              An AliOne project · started 2026 · always listening
            </span>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('http') || l.href.startsWith('mailto:') ? (
                      <a href={l.href}>{l.label}</a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__caption">
          <span>© 2026 AliOne. AliBrowser is an AliOne project. No telemetry. No analytics. No newsletter.</span>
          <span className="build">Build a3f1c8e · <a href="https://alione.cc" target="_blank" rel="noopener noreferrer">Made by AliOne</a> · <a href="https://alione.cc" target="_blank" rel="noopener noreferrer" class="mono">alione.cc</a></span>
        </div>
      </div>
    </footer>
  );
}
