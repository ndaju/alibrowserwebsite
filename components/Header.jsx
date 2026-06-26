import Link from 'next/link';
import Logo from './Logo';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/download', label: 'Download' },
  { href: '/manifest', label: 'Manifest' },
  { href: '/status', label: 'Status' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__brand" aria-label="AliBrowser home">
          <Logo size={36} />
          <span className="wordmark">AliBrowser</span>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>

        <Link href="/status" className="header__cta">
          Dev status
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
