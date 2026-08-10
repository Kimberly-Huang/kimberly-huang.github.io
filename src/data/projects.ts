export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  outcome: string;
  tags: string[];
  preview: "dwt" | "crewverify" | "signal" | "swift" | "lablens" | "tabflow" | "repairs";
  demo?: string;
  repo?: string;
  award?: string;
  confidential?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "dwt-enterprise-ai",
    number: "01",
    title: "Enterprise AI systems at DWT",
    eyebrow: "AI & Data Engineer Intern · 2026",
    summary:
      "Four internal pilots that turn documents, images and finance workflows into secure, reviewable tools for nontechnical teams.",
    contribution:
      "Owned discovery, capability testing, architecture, development, validation and stakeholder handoff across the full delivery cycle.",
    outcome:
      "One workflow reviewed 171 PDFs and 7,103 embedded images with zero parsing errors, surfacing 67 exact duplicate pairs for human QA.",
    tags: ["Applied AI", "Python", "Document AI", "Human-in-the-loop"],
    preview: "dwt",
    confidential: true,
  },
  {
    slug: "crewverify",
    number: "02",
    title: "CrewVerify",
    eyebrow: "AI operations product · 2026",
    summary:
      "An AI-assisted paper-timesheet review workflow for construction teams, built around accountable human approval.",
    contribution:
      "Designed the product boundary, multimodal extraction route, deterministic validation engine and foreman-to-manager review experience.",
    outcome:
      "Converts photographed attendance sheets into structured records while routing only verifiable exceptions for human judgment.",
    tags: ["Next.js", "TypeScript", "Claude Vision", "Validation"],
    preview: "crewverify",
    demo: "https://crewverify.vercel.app",
    repo: "https://github.com/Kimberly-Huang/crewverify",
  },
  {
    slug: "student-signal-copilot",
    number: "03",
    title: "Student Signal Copilot",
    eyebrow: "Multi-agent workflow · NYC Tech Week",
    summary:
      "A closed-loop facilities copilot that turns student observations into grounded work orders and verifies whether reality changed.",
    contribution:
      "Co-built the signal-to-verification product, confidence model, agent orchestration and auditable operator experience.",
    outcome:
      "Won 3rd Place Overall at The City Hacks The State during NYC Tech Week 2026.",
    tags: ["Agentic AI", "TypeScript", "CriticalAsset", "Public data"],
    preview: "signal",
    repo: "https://github.com/lvelf/Student-Signal-Copilot",
    award: "3rd Place Overall",
  },
  {
    slug: "swift-omnichannel",
    number: "04",
    title: "Swift Omnichannel Strategy",
    eyebrow: "Decision analytics · 2026",
    summary:
      "An executive decision system for identifying, activating and validating first-online-conversion opportunities.",
    contribution:
      "Structured the analytical narrative, customer scoring, out-of-time validation and interactive decision dashboard.",
    outcome:
      "Processed 150M+ transaction line items and ranked 2.56M physical-only customers across a 25-month dataset.",
    tags: ["Python", "DuckDB", "Parquet", "Chart.js"],
    preview: "swift",
    demo: "https://mtd-website-tau.vercel.app",
    repo: "https://github.com/Kimberly-Huang/mtd-website",
    confidential: true,
  },
];

export const additionalProjects: Project[] = [
  {
    slug: "lablens",
    number: "05",
    title: "LabLens",
    eyebrow: "Socratic STEM tutor",
    summary: "Interactive mini-labs that diagnose misconceptions before offering a targeted hint.",
    contribution: "Built a misconception-first learning experience with live experiments and teacher-ready reports.",
    outcome: "Three working STEM labs with a deployed AI coaching flow and offline fallback.",
    tags: ["Next.js", "Qwen", "Learning design"],
    preview: "lablens",
    demo: "https://lablens-gules.vercel.app",
    repo: "https://github.com/Kimberly-Huang/Lablens",
  },
  {
    slug: "tabflow",
    number: "06",
    title: "TabFlow",
    eyebrow: "Chrome productivity extension",
    summary: "A privacy-aware new-tab workspace that groups browser tabs into AI-generated missions.",
    contribution: "Designed the local-first interaction model, provider-flexible AI setup and tab-management experience.",
    outcome: "A serverless Manifest V3 extension with caching, custom rules and cross-device sync.",
    tags: ["JavaScript", "Chrome MV3", "Local-first"],
    preview: "tabflow",
    repo: "https://github.com/Kimberly-Huang/Tabflow",
  },
  {
    slug: "signal-repairs",
    number: "07",
    title: "signal.repairs",
    eyebrow: "DeveloperWeek hackathon",
    summary: "Early warning and repair guidance for weak signals in open-source software supply chains.",
    contribution: "Built the dependency analysis, web-signal pipeline, AI assessment and repair dashboard experience.",
    outcome: "A full-stack prototype combining live web intelligence, scheduled pipelines and bounded repair actions.",
    tags: ["FastAPI", "Next.js", "Web intelligence"],
    preview: "repairs",
    repo: "https://github.com/Kimberly-Huang/signal-repairs",
  },
];
