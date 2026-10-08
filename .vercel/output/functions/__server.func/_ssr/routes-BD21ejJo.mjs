import { a as newSession, n as QUESTIONS, s as saveSession, t as DOMAINS } from "./quiz-DP2R4sEL.mjs";
import { S as require_jsx_runtime, b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BD21ejJo.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const navigate = useNavigate();
	function start(domain, mode) {
		saveSession(newSession(domain, mode));
		navigate({ to: "/quiz" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-copper uppercase",
						children: "Practice desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl leading-[1.05] text-ink sm:text-6xl",
						children: "Cloudline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg text-muted",
						children: "Scenario questions in the style of the Marketing Cloud Engagement Specialist exam — Northline Outfitters stories, one best tool, and a plain-language why."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-white p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: "Full bank"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted",
							children: [QUESTIONS.length, " original items across the five published sections. Study mode explains each answer immediately. Exam mode hides the why until the end and runs a 90-minute clock."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => start("all", "study"),
								className: "rounded-full bg-teal px-5 py-3 text-sm font-medium text-foam",
								children: ["Study all ", QUESTIONS.length]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => start("all", "exam"),
								className: "rounded-full border border-ink px-5 py-3 text-sm font-medium",
								children: "Timed exam"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs leading-relaxed text-muted",
							children: "These are original practice items aligned to public exam objectives and Salesforce docs — not a copy of the live exam. A 67% here is a readiness signal, not a guarantee."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-card bg-teal-deep p-6 text-foam",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-foam",
						children: "How the real exam is shaped"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm leading-relaxed text-foam/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "60 scored questions, about 90 minutes" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "67% to pass" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mostly “which feature?” scenarios" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Automation and data are the heaviest sections" })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Practice one section"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: DOMAINS.map((d) => {
						const n = QUESTIONS.filter((q) => q.domain === d.id).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card border border-line bg-white p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl",
										children: d.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: d.weight
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: d.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => start(d.id, "study"),
									className: "mt-4 text-sm font-medium text-teal underline decoration-line underline-offset-4",
									children: [n, " questions"]
								})
							]
						}, d.id);
					})
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
