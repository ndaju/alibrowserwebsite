import { NextResponse } from 'next/server';
import { addToWaitlist, isValidEmail, getWaitlistCount } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const email = (body?.email ?? '').toString().trim().toLowerCase();

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'That doesn’t look like a valid email.' },
      { status: 400 }
    );
  }

  try {
    const { position, total, already } = addToWaitlist(email);
    return NextResponse.json({ ok: true, email, position, total, already });
  } catch (err) {
    console.error('waitlist insert failed', err);
    return NextResponse.json(
      { error: 'Something went wrong saving your email. Try again in a moment.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ total: getWaitlistCount() });
}
