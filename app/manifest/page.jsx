import Link from 'next/link';

export const metadata = {
  title: 'The manifest — AliBrowser',
  description: 'Five pages on what we will and won’t do, and why we’re building a browser that doesn’t watch you.',
};

const TOC = [
  { num: '01', href: '#why',         label: 'Why we’re building this' },
  { num: '02', href: '#will-wont',   label: 'What we will and won’t do' },
  { num: '03', href: '#privacy',     label: 'Privacy' },
  { num: '04', href: '#funding',     label: 'Funding' },
  { num: '05', href: '#how-to-help', label: 'How to help' },
];

export default function ManifestPage() {
  return (
    <article className="manifest">
      {/* ============== HEAD ============== */}
      <header className="manifest__head reveal">
        <span className="eyebrow">
          <span className="num">№ 00</span>
          <span>— The manifest</span>
        </span>
        <h1 className="manifest__title">
          Five pages, one browser, no <em className="accent">surprises.</em>
        </h1>
        <p className="manifest__sub">
          This is the part where most browser companies would put a marketing
          video. We’re putting a wall of text. Read it. Or don’t. We won’t
          know either way — we don’t track you.
        </p>
      </header>

      <div className="manifest__body">
        {/* ============== TOC ============== */}
        <nav className="manifest__toc reveal" aria-label="Manifest contents">
          {TOC.map((t) => (
            <a key={t.href} href={t.href}>
              <span className="toc-num">{t.num}</span>
              <span>{t.label}</span>
            </a>
          ))}
        </nav>

        {/* ============== SECTIONS ============== */}
        <div className="manifest__sections">
          {/* 01 · WHY */}
          <section className="manifest__section" id="why">
            <span className="eyebrow">
              <span className="num">№ 01</span>
              <span>— Why we’re building this</span>
            </span>
            <h2>The browser is the most intimate piece of software you own.</h2>
            <p>
              It sees every page you visit. Every search. Every half-finished
              sentence in a private doc. Every small act of curiosity you would
              rather not explain. We think a thing like that ought to be small,
              auditable, written by people who read the source, and{' '}
              <em className="accent">never</em> sold to you as a free product with
              a hidden price.
            </p>
            <p>
              AliBrowser is a fork of Gecko (the engine Firefox uses). It
              strips out the parts that phone home, keeps the parts that make
              the modern web actually work, and ships under MIT. It is built by{' '}
              <strong>AliOne</strong> — a small, deliberate company in Istanbul —
              in the time between other things.
            </p>
            <p>
              We are not trying to compete with Chrome. We are trying to make a
              browser that you can <em className="accent">trust</em> — the way
              you trust a good knife, or a faithful calendar, or a friend who
              doesn’t bring up your search history.
            </p>

            <div className="manifest__pull">
              AliOne — the company behind AliBrowser — always listens to its
              community, and <em className="accent">always will be.</em> That
              isn’t a slogan. It is the entire operating principle.
            </div>
          </section>

          {/* 02 · WILL & WON'T */}
          <section className="manifest__section" id="will-wont">
            <span className="eyebrow">
              <span className="num">№ 02</span>
              <span>— What we will and won’t do</span>
            </span>
            <h2>Promises, in writing.</h2>

            <p>We will:</p>
            <ul>
              <li>Keep the source code public, buildable, and forkable forever.</li>
              <li>Patch Gecko security advisories within seven days of upstream.</li>
              <li>Show you exactly what leaves your device. Spoiler: nothing.</li>
              <li>Maintain a public threat model, updated each quarter.</li>
              <li>Take donations. Refuse venture capital. Refuse acquisition offers.</li>
            </ul>

            <p style={{ marginTop: 32 }}>We will not:</p>
            <ul>
              <li>Add telemetry. Ever. The kill switch would be a print statement, and we won’t write one.</li>
              <li>Default-on sync to our servers. Sync, when it ships, will be peer-to-peer.</li>
              <li>Bundle a “recommended” shopping, news, or search partner. You are not inventory.</li>
              <li>Ship a cryptominer in the installer. Yes, this has to be said.</li>
              <li>Run growth-hacked onboarding. The first screen is the URL bar.</li>
            </ul>

            <div className="manifest__pull">
              The job of a browser is to load pages. That is the entire job.
              <em className="accent"> Anything else is optional, and most of it is the problem.</em>
            </div>
          </section>

          {/* 03 · PRIVACY */}
          <section className="manifest__section" id="privacy">
            <span className="eyebrow">
              <span className="num">№ 03</span>
              <span>— Privacy</span>
            </span>
            <h2>What we collect, what we don’t, and why.</h2>
            <p>
              Nothing leaves your device unless you, the human at the keyboard,
              explicitly send it. There is no analytics SDK, no “anonymized”
              telemetry, no crash reporter that pings a server, no A/B testing
              framework. There is no background process phoning home to check
              for updates — updates check in when you open the app, and only
              then, and only against the GitHub releases endpoint, which you can
              read.
            </p>
            <p>
              We keep no data. There is no analytics, no telemetry, no user
              database. The only thing that exists is the code and this page.
              That is the entire data policy. It will stay that way.
            </p>
            <p>
              When you install AliBrowser, the only outbound network request the
              app makes is the one you make — to the URL you typed. We have
              verified this on a clean machine with a packet sniffer and a
              notebook. It is, in a meaningful sense, a private browser.
            </p>
            <p>
              <em className="accent">The threat model</em> is published on the
              almanac and updated every quarter. The current version is dated{' '}
              <span className="mono mono--ink">2026.Q1</span>. Read it. Disagree
              with it. Send a patch.
            </p>
          </section>

          {/* 04 · FUNDING */}
          <section className="manifest__section" id="funding">
            <span className="eyebrow">
              <span className="num">№ 04</span>
              <span>— Funding (it’s free, here’s how)</span>
            </span>
            <h2>How a free browser stays free.</h2>
            <p>
              AliBrowser is and will remain free of charge, free of ads, free
              of telemetry, and free of “pro” upsells. There is no business
              model that requires your data. The business model is small and
              boring, on purpose.
            </p>
            <p>The funding, in order of size:</p>
            <ul>
              <li>Donations from people who use the browser. Roughly $4,200/month at the time of writing.</li>
              <li>A small grant from the Open Source Collective, earmarked for security audits.</li>
              <li>Personal savings. Mine. The rest of the runway.</li>
            </ul>
            <p>
              There is no venture capital. There will be no acquisition. If, at
              some point, the donation total is not enough to keep the lights
              on, we will say so — publicly, with a date and a number — and ask
              the people who use the browser to chip in. The whole budget fits
              in a spreadsheet you can read.
            </p>
            <p>
              If you would like to donate, the link is in the footer. It is a
              plain Open Collective page. We will not email you about it.
            </p>
          </section>

          {/* 05 · HOW TO HELP */}
          <section className="manifest__section" id="how-to-help">
            <span className="eyebrow">
              <span className="num">№ 05</span>
              <span>— How to help</span>
            </span>
            <h2>Pull requests, opinions, and one specific spreadsheet.</h2>
            <p>
              We are a tiny project. The list of things that would actually move
              the needle is short, and we keep it short on purpose.
            </p>
            <ul>
              <li>File issues. Especially the gnarly, reproducible kind, with a HAR file.</li>
              <li>Translate. We have a Weblate, and the strings are short.</li>
              <li>Read the threat model. Send a patch if you find a hole.</li>
              <li>Run the alpha on a weird machine. ARM, PowerPC, an old ThinkPad, your cousin’s PC.</li>
              <li>Tell a friend. Or don’t. There is no list, but word of mouth works.</li>
            </ul>
            <p>
              If you would like to write code, the good first issues are tagged{' '}
              <span className="mono mono--ink">good-first-issue</span> on the
              repo. None of them are glamorous. Several of them are important.
            </p>
          </section>

          {/* ============== ONE CTA, IN THE MIDDLE ============== */}
          <div className="manifest__sign">
            <span className="eyebrow">
              <span className="num">↳ One link, the only one on this page</span>
            </span>
            <p
              className="manifest__sub"
              style={{ textAlign: 'center', maxWidth: '40ch' }}
            >
              If you read this far, see what we are building right now.
            </p>
          <Link href="/status">
              View development status
              <span aria-hidden="true" style={{ fontFamily: 'var(--f-serif)', fontSize: 17 }}>→</span>
            </Link>
            <span
              className="mono"
              style={{ marginTop: 16, color: 'var(--ink-4)' }}
            >
              No tracking, no newsletter, no nonsense.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
