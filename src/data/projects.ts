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
      "Turns photographed construction timesheets into structured records, then routes observable exceptions through foreman and manager review.",
    contribution:
      "I defined the product boundary and built the authenticated extraction route, deterministic validation engine, review stages and audit-oriented interface.",
    outcome:
      "A functional end-to-end assessment prototype covering intake, extraction, seven inspectable checks, exception resolution, approval and CSV export.",
    proof: "Live end-to-end prototype",
    status: "Functional assessment prototype",
    tags: ["Next.js", "TypeScript", "Multimodal AI", "Rule engine"],
    preview: "crewverify",
    demo: "https://crewverify.vercel.app",
    repo: "https://github.com/Kimberly-Huang/crewverify",
  },
  {
    slug: "student-signal-copilot",
    number: "02",
    title: "Student Signal Copilot",
    eyebrow: "Multi-agent operations · NYC Tech Week",
    summary:
      "Turns a student’s observation into a grounded work order, exposes the reasoning trace and asks the original reporter whether the repair worked.",
    contribution:
      "I co-built the signal-to-verification workflow, confidence model, specialist-agent orchestration and auditable operator experience.",
    outcome:
      "A working operator dashboard and streamed copilot grounded in asset and public data; awarded 3rd Place Overall at The City Hacks The State.",
    proof: "3rd Place Overall",
    status: "Team hackathon build",
    tags: ["Agent orchestration", "TypeScript", "SSE", "Public data"],
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
      "Interactive STEM mini-labs that diagnose the learner’s mental model before offering the smallest useful Socratic hint.",
    contribution:
      "I designed and built the misconception-first learning flow, interactive experiments, coaching route and teacher-ready session report.",
    outcome:
      "Three deployed mini-labs spanning physics, calculus and chemistry, with a working AI coaching route and deterministic offline fallback.",
    proof: "3 deployed mini-labs",
    status: "Deployed learning prototype",
    tags: ["Next.js", "Learning design", "LLM orchestration", "Resilient UX"],
    preview: "lablens",
    demo: "https://lablens-gules.vercel.app",
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
    summary: "A local-first Chrome workspace that turns open tabs into focused missions without a backend.",
    contribution: "Designed the interaction model, provider-flexible AI setup and cross-device preference layer.",
    outcome: "A serverless Manifest V3 extension with local caching, custom rules and optional local-model support.",
    proof: "No-backend extension",
    status: "Open-source extension",
    tags: ["JavaScript", "Chrome MV3", "Local-first"],
    preview: "tabflow",
    repo: "https://github.com/Kimberly-Huang/Tabflow",
  },
  {
    slug: "signal-repairs",
    number: "05",
    title: "signal.repairs",
    eyebrow: "Software intelligence",
    summary: "Weak-signal monitoring and bounded repair guidance for software supply-chain risk.",
    contribution: "Built dependency analysis, web-signal collection, risk scoring and the repair dashboard.",
    outcome: "A full-stack hackathon prototype with a scheduled intelligence pipeline and inspectable repair actions.",
    proof: "Scheduled intelligence pipeline",
    status: "DeveloperWeek prototype",
    tags: ["FastAPI", "Next.js", "Web intelligence"],
    preview: "repairs",
    repo: "https://github.com/Kimberly-Huang/signal-repairs",
  },
];
