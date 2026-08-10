export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  outcome: string;
  tags: string[];
  preview: "crewverify" | "signal" | "lablens" | "tabflow" | "repairs";
  demo?: string;
  repo?: string;
  award?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "crewverify",
    number: "01",
    title: "CrewVerify",
    eyebrow: "AI operations product · 2026",
    summary:
      "A review workflow that converts photographed construction timesheets into structured records while preserving accountable human approval.",
    contribution:
      "Defined the product boundary and built the multimodal extraction route, deterministic validation engine and two-stage review experience.",
    outcome:
      "A deployed workflow with synthetic test scenarios, inspectable exceptions and an explicit approval boundary before export.",
    tags: ["Next.js", "TypeScript", "Vision AI", "Validation"],
    preview: "crewverify",
    repo: "https://github.com/Kimberly-Huang/crewverify",
  },
  {
    slug: "student-signal-copilot",
    number: "02",
    title: "Student Signal Copilot",
    eyebrow: "Multi-agent workflow · NYC Tech Week",
    summary:
      "A facilities copilot that turns student observations into grounded work orders and verifies whether a reported issue was actually resolved.",
    contribution:
      "Co-built the signal-to-verification workflow, confidence model, specialist-agent orchestration and auditable operator experience.",
    outcome:
      "Awarded 3rd Place Overall at The City Hacks The State during NYC Tech Week 2026.",
    tags: ["Agentic AI", "TypeScript", "Public data", "Human review"],
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
      "Interactive STEM mini-labs that diagnose a learner’s misconception before offering a targeted Socratic hint.",
    contribution:
      "Designed and built the misconception-first learning flow, interactive experiments and teacher-ready session reports.",
    outcome:
      "Three deployed mini-labs with a working AI coaching route and a resilient offline fallback.",
    tags: ["Next.js", "Learning design", "LLM orchestration"],
    preview: "lablens",
    demo: "https://lablens-gules.vercel.app",
    repo: "https://github.com/Kimberly-Huang/Lablens",
  },
];

export const additionalProjects: Project[] = [
  {
    slug: "tabflow",
    number: "04",
    title: "TabFlow",
    eyebrow: "Browser productivity",
    summary: "A privacy-aware new-tab workspace that organizes open tabs into focused missions.",
    contribution: "Designed the local-first interaction model and provider-flexible AI setup.",
    outcome: "A serverless Manifest V3 extension with custom rules and cross-device sync.",
    tags: ["JavaScript", "Chrome MV3", "Local-first"],
    preview: "tabflow",
    repo: "https://github.com/Kimberly-Huang/Tabflow",
  },
  {
    slug: "signal-repairs",
    number: "05",
    title: "signal.repairs",
    eyebrow: "Software intelligence",
    summary: "Early-warning signals and repair guidance for open-source software supply chains.",
    contribution: "Built dependency analysis, web-signal collection and the repair dashboard.",
    outcome: "A full-stack prototype with scheduled intelligence and bounded repair actions.",
    tags: ["FastAPI", "Next.js", "Web intelligence"],
    preview: "repairs",
    repo: "https://github.com/Kimberly-Huang/signal-repairs",
  },
];
