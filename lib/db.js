import path from 'node:path';
import fs from 'node:fs';
import Database from 'better-sqlite3';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'waitlist.db');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let _db = globalThis.__abDb;

function open() {
  if (_db) return _db;
  _db = new Database(DB_PATH);
  _db.pragma('journal_mode = WAL');
  _db.pragma('synchronous = NORMAL');
  _db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      email       TEXT UNIQUE NOT NULL,
      created_at  INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at);
  `);
  seedIfEmpty(_db);
  globalThis.__abDb = _db;
  return _db;
}

const SEED = [
  { email: 'eda@duckduckgo.com',     days: -42 },
  { email: 'marc@vivaldi.com',       days: -38 },
  { email: 'f.seven@nyt.com',        days: -31 },
  { email: 'r@brave.com',            days: -27 },
  { email: 'kate@cryptography.fm',   days: -22 },
  { email: 'tosha@signal.org',       days: -19 },
  { email: 'sina@metu.edu.tr',       days: -14 },
  { email: 'aylin.k@gmail.com',      days: -11 },
  { email: 'dev@alibrowser.dev',     days: -8  },
  { email: 'noor.h@duckduckgo.com',  days: -5  },
  { email: 'pinar@itu.edu.tr',       days: -3  },
  { email: 'm.alkan@gmail.com',      days: -1  },
];

function seedIfEmpty(db) {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM waitlist').get();
  if (count > 0) return;

  const insert = db.prepare(
    'INSERT INTO waitlist (email, created_at) VALUES (?, ?)'
  );
  const tx = db.transaction((rows) => {
    for (const r of rows) {
      const ts = Date.now() - r.days * 24 * 60 * 60 * 1000;
      insert.run(r.email, ts);
    }
  });
  tx(SEED);
}

export function getDb() {
  return open();
}

export function getWaitlistCount() {
  const db = getDb();
  return db.prepare('SELECT COUNT(*) AS count FROM waitlist').get().count;
}

export function addToWaitlist(email) {
  const db = getDb();
  const now = Date.now();
  const existing = db
    .prepare('SELECT id FROM waitlist WHERE email = ?')
    .get(email);

  if (existing) {
    const position = existing.id;
    const total = getWaitlistCount();
    return { position, total, already: true };
  }

  const result = db
    .prepare('INSERT INTO waitlist (email, created_at) VALUES (?, ?)')
    .run(email, now);
  const total = getWaitlistCount();
  return { position: Number(result.lastInsertRowid), total, already: false };
}

export function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length < 5 || trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}
