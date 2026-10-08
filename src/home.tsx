import { DOMAINS, QUESTIONS, type DomainId } from "./data/questions";
import { newSession, saveSession, type Mode } from "./lib/quiz";
import { go } from "./lib/route";

export function Home() {
  function start(domain: DomainId | "all", mode: Mode) {
    saveSession(newSession(domain, mode));
    go("quiz");
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-14">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">Practice desk</p>
        <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-6xl">
          Cloudline
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Scenario questions in the style of the Marketing Cloud Engagement Specialist exam —
          Northline Outfitters stories, one best tool, and a plain-language why.
        </p>
      </header>

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-card border border-line bg-white p-6 sm:p-8">
          <h2 className="text-2xl">Full bank</h2>
          <p className="mt-2 text-muted">
            {QUESTIONS.length} original items across the five published sections. Study mode
            explains each answer immediately. Exam mode hides the why until the end and runs a
            90-minute clock.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => start("all", "study")}
              className="rounded-full bg-teal px-5 py-3 text-sm font-medium text-foam"
            >
              Study all {QUESTIONS.length}
            </button>
            <button
              type="button"
              onClick={() => start("all", "exam")}
              className="rounded-full border border-ink px-5 py-3 text-sm font-medium"
            >
              Timed exam
            </button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            These are original practice items aligned to public exam objectives and Salesforce
            docs — not a copy of the live exam. A 67% here is a readiness signal, not a guarantee.
          </p>
        </div>

        <aside className="rounded-card bg-teal-deep p-6 text-foam">
          <h2 className="text-2xl text-foam">How the real exam is shaped</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foam/90">
            <li>60 scored questions, about 90 minutes</li>
            <li>67% to pass</li>
            <li>Mostly “which feature?” scenarios</li>
            <li>Automation and data are the heaviest sections</li>
          </ul>
        </aside>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Practice one section</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {DOMAINS.map((d) => {
            const n = QUESTIONS.filter((q) => q.domain === d.id).length;
            return (
              <li key={d.id} className="rounded-card border border-line bg-white p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl">{d.label}</h3>
                  <span className="text-xs text-muted">{d.weight}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{d.blurb}</p>
                <button
                  type="button"
                  onClick={() => start(d.id, "study")}
                  className="mt-4 text-sm font-medium text-teal underline decoration-line underline-offset-4"
                >
                  {n} questions
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
