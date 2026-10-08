import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Check, X } from "lucide-react";
import { DOMAINS, type Question } from "@/data/questions";
import {
  isCorrect,
  loadSession,
  questionsByIds,
  saveSession,
  scoreSession,
  type Session,
} from "@/lib/quiz";

function formatClock(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function QuizScreen() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setSession(loadSession());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!session?.limitMs || session.finishedAt) return;
    const t = window.setInterval(() => {
      const left = session.limitMs! - (Date.now() - session.startedAt);
      setNow(Date.now());
      if (left <= 0) {
        const finished = { ...session, finishedAt: Date.now() };
        setSession(finished);
        saveSession(finished);
      }
    }, 1000);
    return () => window.clearInterval(t);
  }, [session]);

  const questions = useMemo(
    () => (session ? questionsByIds(session.ids) : []),
    [session],
  );

  function commit(next: Session) {
    setSession(next);
    saveSession(next);
  }

  if (!ready) {
    return <main className="mx-auto max-w-3xl px-5 py-16 text-muted">Loading your set…</main>;
  }

  if (!session || questions.length === 0) {
    return (
      <main className="mx-auto max-w-xl px-5 py-20">
        <h1 className="text-3xl text-ink">No quiz in progress</h1>
        <p className="mt-3 text-muted">Start a study set or a timed exam from the desk.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-teal px-5 py-3 text-foam">
          Back to Cloudline
        </Link>
      </main>
    );
  }

  if (session.finishedAt) {
    return <Results session={session} questions={questions} onAgain={() => navigate({ to: "/" })} />;
  }

  const q = questions[session.index];
  const picked = session.answers[q.id] ?? [];
  const multi = q.correct.length > 1;
  const revealed = Boolean(session.revealed[q.id]);
  const remaining = session.limitMs ? session.limitMs - (now - session.startedAt) : null;

  function toggle(id: string) {
    if (revealed) return;
    const current = session!.answers[q.id] ?? [];
    const nextPicked = multi
      ? current.includes(id)
        ? current.filter((c) => c !== id)
        : [...current, id]
      : [id];
    commit({ ...session!, answers: { ...session!.answers, [q.id]: nextPicked } });
  }

  function revealOrNext() {
    if (session!.mode === "study" && !revealed) {
      if (!picked.length) return;
      commit({ ...session!, revealed: { ...session!.revealed, [q.id]: true } });
      return;
    }
    if (session!.index + 1 >= questions.length) {
      const finished: Session = {
        ...session!,
        revealed: { ...session!.revealed, [q.id]: true },
        finishedAt: Date.now(),
      };
      commit(finished);
      return;
    }
    commit({
      ...session!,
      index: session!.index + 1,
      revealed: session!.mode === "study" ? { ...session!.revealed, [q.id]: true } : session!.revealed,
    });
  }

  function finishEarly() {
    commit({ ...session!, finishedAt: Date.now() });
  }

  const domain = DOMAINS.find((d) => d.id === q.domain);

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <header className="mb-6 flex items-center justify-between gap-3">
        <Link to="/" className="font-display text-lg text-teal-deep">
          Cloudline
        </Link>
        <div className="flex items-center gap-3 text-sm text-muted">
          <span>
            {session.index + 1} / {questions.length}
          </span>
          {remaining !== null && (
            <span className={remaining < 5 * 60 * 1000 ? "text-bad" : ""}>
              {formatClock(remaining)}
            </span>
          )}
          <button type="button" onClick={finishEarly} className="underline decoration-line underline-offset-4">
            End
          </button>
        </div>
      </header>

      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-paper-deep">
        <div
          className="h-full bg-teal transition-all"
          style={{ width: `${((session.index + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <article className="rounded-card border border-line bg-white p-5 shadow-[0_12px_40px_rgba(20,36,44,0.06)] sm:p-8">
        <p className="text-xs font-medium tracking-wide text-teal uppercase">
          {domain?.label}
          {multi ? " · choose 2" : ""}
        </p>
        <h1 className="mt-3 text-2xl leading-snug text-ink sm:text-[1.7rem]">{q.prompt}</h1>

        <ul className="mt-6 space-y-3">
          {q.choices.map((choice) => {
            const on = picked.includes(choice.id);
            const good = revealed && q.correct.includes(choice.id);
            const bad = revealed && on && !q.correct.includes(choice.id);
            return (
              <li key={choice.id}>
                <button
                  type="button"
                  onClick={() => toggle(choice.id)}
                  className={[
                    "flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition",
                    good
                      ? "border-good bg-good-bg"
                      : bad
                        ? "border-bad bg-bad-bg"
                        : on
                          ? "border-teal bg-foam"
                          : "border-line bg-paper hover:border-teal",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border text-xs font-semibold",
                      good ? "border-good text-good" : bad ? "border-bad text-bad" : on ? "border-teal text-teal" : "border-line text-muted",
                    ].join(" ")}
                  >
                    {good ? <Check className="size-3.5" /> : bad ? <X className="size-3.5" /> : choice.id.toUpperCase()}
                  </span>
                  <span className="text-[15px] leading-snug">{choice.text}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {revealed && (
          <div className="mt-6 rounded-2xl bg-foam px-4 py-4 text-sm leading-relaxed text-ink">
            <p className="font-semibold text-teal-deep">
              {isCorrect(q, picked) ? "Correct" : "Not quite"} — {q.correct.map((id) => id.toUpperCase()).join(" & ")}
            </p>
            <p className="mt-2 text-ink">{q.why}</p>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            disabled={!picked.length && !revealed}
            onClick={revealOrNext}
            className="rounded-full bg-teal px-5 py-3 text-sm font-medium text-foam disabled:opacity-40"
          >
            {session.mode === "study" && !revealed
              ? "Check answer"
              : session.index + 1 >= questions.length
                ? "See results"
                : "Next question"}
          </button>
        </div>
      </article>
    </main>
  );
}

function Results({
  session,
  questions,
  onAgain,
}: {
  session: Session;
  questions: Question[];
  onAgain: () => void;
}) {
  const { correct, total, byDomain } = scoreSession(session);
  const pct = Math.round((correct / total) * 100);
  const pass = pct >= 67;
  const [open, setOpen] = useState<string | null>(questions.find((q) => !isCorrect(q, session.answers[q.id]))?.id ?? null);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-xs font-medium tracking-wide text-teal uppercase">
        {session.mode === "exam" ? "Timed exam" : "Study set"}
      </p>
      <h1 className="mt-2 text-4xl text-ink">{pass ? "Passing range" : "Keep going"}</h1>
      <p className="mt-2 text-muted">
        {correct} of {total} correct · {pct}%. The real exam’s published cut score is 67%.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {DOMAINS.map((d) => {
          const row = byDomain[d.id];
          if (!row) return null;
          const p = Math.round((row.correct / row.total) * 100);
          return (
            <div key={d.id} className="rounded-2xl border border-line bg-white px-4 py-3">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium">{d.label}</p>
                <p className="text-sm text-muted">
                  {row.correct}/{row.total}
                </p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper-deep">
                <div className="h-full bg-teal" style={{ width: `${p}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="mt-10 text-2xl">Review</h2>
      <ul className="mt-4 space-y-3">
        {questions.map((q, i) => {
          const ok = isCorrect(q, session.answers[q.id]);
          const shown = open === q.id;
          return (
            <li key={q.id} className="rounded-2xl border border-line bg-white">
              <button
                type="button"
                onClick={() => setOpen(shown ? null : q.id)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left"
              >
                <span className={ok ? "text-good" : "text-bad"}>{ok ? "Right" : "Miss"}</span>
                <span className="text-sm leading-snug">
                  {i + 1}. {q.prompt}
                </span>
              </button>
              {shown && (
                <div className="border-t border-line px-4 py-3 text-sm">
                  <p className="text-muted">
                    Answer {q.correct.map((id) => id.toUpperCase()).join(" & ")}:{" "}
                    {q.choices
                      .filter((c) => q.correct.includes(c.id))
                      .map((c) => c.text)
                      .join(" · ")}
                  </p>
                  <p className="mt-2">{q.why}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <button type="button" onClick={onAgain} className="mt-8 rounded-full bg-ink px-5 py-3 text-sm text-paper">
        New set
      </button>
    </main>
  );
}
