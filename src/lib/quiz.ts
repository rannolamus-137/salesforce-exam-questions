import { QUESTIONS, type Choice, type DomainId, type Question } from "../data/questions";

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
  /** Shuffled choice ids per question, so the right answer lands on a random letter. */
  order?: Record<string, string[]>;
};

const LETTERS = "ABCDEFGH";

/** The question's choices in the order this session shows them. */
export function choicesInOrder(q: Question, session: Session): Choice[] {
  const ids = session.order?.[q.id];
  if (!ids) return q.choices;
  const byId = new Map(q.choices.map((c) => [c.id, c]));
  const ordered = ids.map((id) => byId.get(id)).filter((c): c is Choice => Boolean(c));
  return ordered.length === q.choices.length ? ordered : q.choices;
}

/** The on-screen letter (A, B, C…) at a given position. */
export function letterAt(index: number): string {
  return LETTERS[index] ?? String(index + 1);
}

/** On-screen letters of the correct answers, e.g. "B" or "A & D". */
export function correctLetters(q: Question, session: Session): string {
  return choicesInOrder(q, session)
    .map((c, i) => (q.correct.includes(c.id) ? letterAt(i) : null))
    .filter(Boolean)
    .join(" & ");
}

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
    order: Object.fromEntries(bank.map((q) => [q.id, shuffle(q.choices.map((c) => c.id))])),
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
