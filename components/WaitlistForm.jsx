'use client';

import { useState } from 'react';

export default function WaitlistForm({ initialCount = 0 }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');
  const [result, setResult] = useState(null); // { position, total, already }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setError(data?.error || 'Something went wrong.');
        return;
      }
      setResult(data);
      setStatus('success');
    } catch {
      setStatus('error');
      setError('Network error. Try again in a moment.');
    }
  }

  function reset() {
    setEmail('');
    setStatus('idle');
    setError('');
    setResult(null);
  }

  if (status === 'success' && result) {
    return (
      <div className="waitlist__success reveal">
        <span className="check">Confirmed</span>
        <h3>
          You’re <em>#{result.position}</em> on the list.
        </h3>
        <p>
          We’ll write once, when the next build is ready, with a download link
          and a single line of plain text. No drip campaign. No “you might also
          like”. No tracking pixel.
        </p>
        <div className="waitlist__position">
          <span className="num">{result.total.toLocaleString()}</span>
          <span className="label">
            on the list · {result.already ? 'Welcome back' : 'including you'}
          </span>
        </div>
        <button
          type="button"
          onClick={reset}
          style={{
            alignSelf: 'flex-start',
            marginTop: 8,
            fontFamily: 'var(--f-mono)',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'rgba(243, 236, 220, 0.6)',
            background: 'none',
            border: '1px solid rgba(243, 236, 220, 0.25)',
            padding: '8px 14px',
            borderRadius: 999,
            cursor: 'pointer',
          }}
        >
          Add another email ↺
        </button>
      </div>
    );
  }

  return (
    <form className="waitlist__form reveal d-2" onSubmit={onSubmit} noValidate>
      <label className="waitlist__label" htmlFor="wl-email">
        ↳ Your email
      </label>
      <input
        id="wl-email"
        className="waitlist__input"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="you@somewhere.good"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === 'error') {
            setStatus('idle');
            setError('');
          }
        }}
        disabled={status === 'loading'}
        aria-invalid={status === 'error' ? 'true' : 'false'}
        aria-describedby="wl-meta"
      />

      {status === 'error' && error && (
        <span className="waitlist__error" role="alert">
          ✕ {error}
        </span>
      )}

      <button className="waitlist__submit" type="submit" disabled={status === 'loading'}>
        <span>{status === 'loading' ? 'Saving…' : 'Put me on the list'}</span>
        <span className="arrow" aria-hidden="true">→</span>
      </button>

      <div className="waitlist__meta" id="wl-meta">
        <span>No spam · No newsletter</span>
        <span>
          {initialCount.toLocaleString()} on the list already
        </span>
      </div>
    </form>
  );
}
