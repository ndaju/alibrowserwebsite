'use client';

import { useState } from 'react';

export default function CopyButton({ value, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    try {
      await navigator?.clipboard?.writeText?.(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="copy"
      onClick={onClick}
      aria-label={`Copy ${label}`}
    >
      {copied ? 'Copied' : label}
    </button>
  );
}
