import { i as __toESM } from "../_runtime.mjs";
import { c as scoreSession, i as loadSession, o as questionsByIds, r as isCorrect, s as saveSession, t as DOMAINS } from "./quiz-DP2R4sEL.mjs";
import { J as require_react, S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Check, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-Dd2nd4em.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatClock(ms) {
	const s = Math.max(0, Math.floor(ms / 1e3));
	return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function QuizScreen() {
	const navigate = useNavigate();
	const [session, setSession] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		setSession(loadSession());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!session?.limitMs || session.finishedAt) return;
		const t = window.setInterval(() => {
			const left = session.limitMs - (Date.now() - session.startedAt);
			setNow(Date.now());
			if (left <= 0) {
				const finished = {
					...session,
					finishedAt: Date.now()
				};
				setSession(finished);
				saveSession(finished);
			}
		}, 1e3);
		return () => window.clearInterval(t);
	}, [session]);
	const questions = (0, import_react.useMemo)(() => session ? questionsByIds(session.ids) : [], [session]);
	function commit(next) {
		setSession(next);
		saveSession(next);
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-5 py-16 text-muted",
		children: "Loading your set…"
	});
	if (!session || questions.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl text-ink",
				children: "No quiz in progress"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Start a study set or a timed exam from the desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-flex rounded-full bg-teal px-5 py-3 text-foam",
				children: "Back to Cloudline"
			})
		]
	});
	if (session.finishedAt) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {
		session,
		questions,
		onAgain: () => navigate({ to: "/" })
	});
	const q = questions[session.index];
	const picked = session.answers[q.id] ?? [];
	const multi = q.correct.length > 1;
	const revealed = Boolean(session.revealed[q.id]);
	const remaining = session.limitMs ? session.limitMs - (now - session.startedAt) : null;
	function toggle(id) {
		if (revealed) return;
		const current = session.answers[q.id] ?? [];
		const nextPicked = multi ? current.includes(id) ? current.filter((c) => c !== id) : [...current, id] : [id];
		commit({
			...session,
			answers: {
				...session.answers,
				[q.id]: nextPicked
			}
		});
	}
	function revealOrNext() {
		if (session.mode === "study" && !revealed) {
			if (!picked.length) return;
			commit({
				...session,
				revealed: {
					...session.revealed,
					[q.id]: true
				}
			});
			return;
		}
		if (session.index + 1 >= questions.length) {
			commit({
				...session,
				revealed: {
					...session.revealed,
					[q.id]: true
				},
				finishedAt: Date.now()
			});
			return;
		}
		commit({
			...session,
			index: session.index + 1,
			revealed: session.mode === "study" ? {
				...session.revealed,
				[q.id]: true
			} : session.revealed
		});
	}
	function finishEarly() {
		commit({
			...session,
			finishedAt: Date.now()
		});
	}
	const domain = DOMAINS.find((d) => d.id === q.domain);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-lg text-teal-deep",
					children: "Cloudline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							session.index + 1,
							" / ",
							questions.length
						] }),
						remaining !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: remaining < 3e5 ? "text-bad" : "",
							children: formatClock(remaining)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: finishEarly,
							className: "underline decoration-line underline-offset-4",
							children: "End"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 h-1.5 overflow-hidden rounded-full bg-paper-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-teal transition-all",
					style: { width: `${(session.index + (revealed ? 1 : 0)) / questions.length * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-line bg-white p-5 shadow-[0_12px_40px_rgba(20,36,44,0.06)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-wide text-teal uppercase",
						children: [domain?.label, multi ? " · choose 2" : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-2xl leading-snug text-ink sm:text-[1.7rem]",
						children: q.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: q.choices.map((choice) => {
							const on = picked.includes(choice.id);
							const good = revealed && q.correct.includes(choice.id);
							const bad = revealed && on && !q.correct.includes(choice.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggle(choice.id),
								className: ["flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition", good ? "border-good bg-good-bg" : bad ? "border-bad bg-bad-bg" : on ? "border-teal bg-foam" : "border-line bg-paper hover:border-teal"].join(" "),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: ["mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border text-xs font-semibold", good ? "border-good text-good" : bad ? "border-bad text-bad" : on ? "border-teal text-teal" : "border-line text-muted"].join(" "),
									children: good ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : bad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }) : choice.id.toUpperCase()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[15px] leading-snug",
									children: choice.text
								})]
							}) }, choice.id);
						})
					}),
					revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-2xl bg-foam px-4 py-4 text-sm leading-relaxed text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold text-teal-deep",
							children: [
								isCorrect(q, picked) ? "Correct" : "Not quite",
								" — ",
								q.correct.map((id) => id.toUpperCase()).join(" & ")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink",
							children: q.why
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !picked.length && !revealed,
							onClick: revealOrNext,
							className: "rounded-full bg-teal px-5 py-3 text-sm font-medium text-foam disabled:opacity-40",
							children: session.mode === "study" && !revealed ? "Check answer" : session.index + 1 >= questions.length ? "See results" : "Next question"
						})
					})
				]
			})
		]
	});
}
function Results({ session, questions, onAgain }) {
	const { correct, total, byDomain } = scoreSession(session);
	const pct = Math.round(correct / total * 100);
	const pass = pct >= 67;
	const [open, setOpen] = (0, import_react.useState)(questions.find((q) => !isCorrect(q, session.answers[q.id]))?.id ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-teal uppercase",
				children: session.mode === "exam" ? "Timed exam" : "Study set"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-ink",
				children: pass ? "Passing range" : "Keep going"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [
					correct,
					" of ",
					total,
					" correct · ",
					pct,
					"%. The real exam’s published cut score is 67%."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: DOMAINS.map((d) => {
					const row = byDomain[d.id];
					if (!row) return null;
					const p = Math.round(row.correct / row.total * 100);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-line bg-white px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: d.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									row.correct,
									"/",
									row.total
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1.5 overflow-hidden rounded-full bg-paper-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-teal",
								style: { width: `${p}%` }
							})
						})]
					}, d.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-2xl",
				children: "Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: questions.map((q, i) => {
					const ok = isCorrect(q, session.answers[q.id]);
					const shown = open === q.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-line bg-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(shown ? null : q.id),
							className: "flex w-full items-start gap-3 px-4 py-3 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: ok ? "text-good" : "text-bad",
								children: ok ? "Right" : "Miss"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm leading-snug",
								children: [
									i + 1,
									". ",
									q.prompt
								]
							})]
						}), shown && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-line px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									"Answer ",
									q.correct.map((id) => id.toUpperCase()).join(" & "),
									":",
									" ",
									q.choices.filter((c) => q.correct.includes(c.id)).map((c) => c.text).join(" · ")
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2",
								children: q.why
							})]
						})]
					}, q.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAgain,
				className: "mt-8 rounded-full bg-ink px-5 py-3 text-sm text-paper",
				children: "New set"
			})
		]
	});
}
var SplitComponent = QuizScreen;
//#endregion
export { SplitComponent as component };
