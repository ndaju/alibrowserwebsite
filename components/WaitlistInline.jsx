'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WaitlistInline({ compact = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(data?.error || 'Something went wrong.');
        return;
      }
      setStatus('success');
      setMessage(data.already ? 'You were already on the list.' : 'Saved. Check your inbox for a confirmation soon.');
    } catch {
      setStatus('error');
      setMessage('Network error. Try again.');
    }
  }

  if (status === 'success') {
    return (
      <form
        className={`cta-strip__form ${compact ? 'cta-strip__form--compact' : ''}`}
        onSubmit={(e) => e.preventDefault()}
        style={{ background: 'var(--paper)', padding: '10px 16px' }}
      >
        <span style={{ flex: 1, fontFamily: 'var(--f-mono)', fontSize: 13, color: 'var(--ink)' }}>
          {message}
        </span>
      </form>
    );
  }

  return (
    <form className="cta-strip__form" onSubmit={onSubmit} noValidate>
      <input
        className="cta-strip__input"
        type="email"
        required
        placeholder="you@somewhere.good"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        aria-label="Email for the next build"
      />
      <button className="cta-strip__submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Saving…' : 'Join the list'}
        <span aria-hidden="true" style={{ fontFamily: 'var(--f-serif)', fontSize: 16 }}>→</span>
      </button>
    </form>
  );
}
