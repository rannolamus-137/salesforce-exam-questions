import { QUESTIONS, type DomainId, type Question } from "../data/questions";

export type Mode = "study" | "exam";

export type Session = {
  ids: string[];
  index: number;
  answers: Record<string, string[]>;
  revealed: Record<string, boolean>;
  mode: Mode;
  startedAt: number;
  finishedAt?: number;
  limitMs: number | null;
};

const KEY = "cloudline-session-v1";

export function questionsByIds(ids: string[]): Question[] {
  const map = new Map(QUESTIONS.map((q) => [q.id, q]));
  return ids.map((id) => map.get(id)).filter((q): q is Question => Boolean(q));
}

export function bankFor(domain: DomainId | "all"): Question[] {
  const list = domain === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.domain === domain);
  return list;
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function newSession(domain: DomainId | "all", mode: Mode): Session {
  const bank = shuffle(bankFor(domain));
  return {
    ids: bank.map((q) => q.id),
    index: 0,
    answers: {},
    revealed: {},
    mode,
    startedAt: Date.now(),
    limitMs: mode === "exam" ? 90 * 60 * 1000 : null,
  };
}

export function loadSession(): Session | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return memorySession;
    const parsed = JSON.parse(raw) as Session;
    if (!parsed.ids?.length) return null;
    return parsed;
  } catch {
    return memorySession;
  }
}

// Fallback for browsers that block storage (some private windows):
// the quiz still works, it just won't survive a page refresh.
let memorySession: Session | null = null;

export function saveSession(session: Session | null) {
  memorySession = session;
  try {
    if (!session) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, JSON.stringify(session));
  } catch {
    // storage unavailable — memorySession keeps the quiz going
  }
}

export function isCorrect(q: Question, picked: string[] | undefined): boolean {
  if (!picked?.length) return false;
  if (picked.length !== q.correct.length) return false;
  const a = [...picked].sort().join("|");
  const b = [...q.correct].sort().join("|");
  return a === b;
}

export function scoreSession(session: Session) {
  const qs = questionsByIds(session.ids);
  let correct = 0;
  const byDomain: Record<string, { correct: number; total: number }> = {};
  for (const q of qs) {
    const ok = isCorrect(q, session.answers[q.id]);
    if (ok) correct += 1;
    const bucket = byDomain[q.domain] ?? { correct: 0, total: 0 };
    bucket.total += 1;
    if (ok) bucket.correct += 1;
    byDomain[q.domain] = bucket;
  }
  return { correct, total: qs.length, byDomain };
}
