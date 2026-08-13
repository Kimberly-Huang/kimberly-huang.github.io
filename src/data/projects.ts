export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  outcome: string;
  proof: string;
  status: string;
  tags: string[];
  preview: "crewverify" | "signal" | "lablens" | "tabflow" | "repairs";
  demo?: string;
  demoLabel?: string;
  video?: string;
  repo?: string;
  award?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "crewverify",
    number: "01",
    title: "CrewVerify",
    eyebrow: "Multimodal operations · 2026",
    summary:
      "Reads a photographed construction timesheet with a vision model, then lets eight deterministic rules—not the model’s confidence—decide which rows a person has to look at.",
    contribution:
      "I defined the product boundary and built the authenticated extraction route, the rule engine, the two review stages and the audit trail behind them.",
    outcome:
      "A running four-stage workflow—intake, extraction, eight inspectable checks, foreman and manager sign-off—over 12 seeded timesheets and three synthetic failure scenarios.",
    proof: "8 deterministic checks",
    status: "Functional assessment prototype",
    tags: ["Next.js 16", "React 19", "Claude vision", "Rule engine"],
    preview: "crewverify",
    demo: "https://crewverify.vercel.app",
    demoLabel: "Open the prototype",
    repo: "https://github.com/Kimberly-Huang/crewverify",
  },
  {
    slug: "student-signal-copilot",
    number: "02",
    title: "Student Signal Copilot",
    eyebrow: "Multi-agent operations · NYC Tech Week",
    summary:
      "Turns one sentence from a student into a grounded work order, shows the eight-step agent trace that produced it, then asks the original reporter whether the repair actually worked.",
    contribution:
      "I co-built the signal-to-verification workflow, the confidence ledger, specialist-agent orchestration and the auditable operator experience.",
    outcome:
      "An operator dashboard with an eight-step supervisor trace, per-claim confidence labels and a closure loop that reopens false fixes. 3rd Place Overall at The City Hacks The State.",
    proof: "3rd Place Overall",
    status: "Team hackathon build",
    tags: ["Agent orchestration", "Claude Haiku + Sonnet", "SSE", "NYC open data"],
    preview: "signal",
    repo: "https://github.com/lvelf/Student-Signal-Copilot",
    award: "3rd Place Overall",
  },
  {
    slug: "lablens",
    number: "03",
    title: "LabLens",
    eyebrow: "AI learning product · 2026",
    summary:
      "Interactive STEM mini-labs that classify what the learner actually misunderstands, then reply with the smallest useful Socratic question instead of the solution.",
    contribution:
      "I designed and built the misconception-first learning flow, the interactive experiments, the coaching route and the teacher-ready session report.",
    outcome:
      "Three mini-labs deployed across physics, calculus and chemistry on Qwen2.5-72B, with a deterministic fallback that keeps the lesson working when the model is unreachable.",
    proof: "Deployed · 3 mini-labs",
    status: "Deployed learning product",
    tags: ["Next.js", "Qwen2.5-72B", "Learning design", "Offline fallback"],
    preview: "lablens",
    demo: "https://lablens-gules.vercel.app",
    demoLabel: "Live product",
    video: "https://www.youtube.com/watch?v=TtZT0p-GlPQ",
    repo: "https://github.com/Kimberly-Huang/Lablens",
  },
];

export const additionalProjects: Project[] = [
  {
    slug: "tabflow",
    number: "04",
    title: "TabFlow",
    eyebrow: "Browser productivity",
    summary:
      "A Chrome MV3 new-tab workspace that groups open tabs locally and only calls a model when you ask it to name the missions.",
    contribution:
      "Designed the interaction model, the provider-agnostic AI setup and the cross-device preference layer.",
    outcome:
      "About 3,200 lines of vanilla JavaScript across 12 features, with no build step and no backend—local grouping works offline, and the AI pass runs against OpenAI, DeepSeek, Claude, Gemini or a local Ollama model.",
    proof: "No backend · 12 features",
    status: "Open-source extension",
    tags: ["Chrome MV3", "Vanilla JS", "Local-first"],
    preview: "tabflow",
    repo: "https://github.com/Kimberly-Huang/Tabflow",
  },
  {
    slug: "signal-repairs",
    number: "05",
    title: "signal.repairs",
    eyebrow: "Software supply-chain intelligence",
    summary:
      "Reads a dependency manifest, crawls live web signals for seven categories of supply-chain risk, and returns a scored report with copy-paste repair commands.",
    contribution:
      "Built the dependency analysis, web-signal collection, risk scoring and the repair dashboard.",
    outcome:
      "A FastAPI and Next.js prototype with six API endpoints, eight dashboard components and a scheduled pipeline that re-collects signals every 15 minutes.",
    proof: "Pipeline every 15 min",
    status: "DeveloperWeek prototype",
    tags: ["FastAPI", "Next.js", "Web intelligence"],
    preview: "repairs",
    repo: "https://github.com/Kimberly-Huang/signal-repairs",
  },
];
