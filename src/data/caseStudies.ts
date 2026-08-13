export type CaseStudy = {
  slug: string;
  thesis: string;
  role: string;
  context: string;
  facts: { label: string; value: string }[];
  metrics: { value: string; label: string }[];
  flow: { label: string; title: string; body: string; evidence: string }[];
  sections: { eyebrow: string; title: string; body: string[] }[];
  gallery: { src: string; alt: string; label: string; caption: string }[];
  principles: string[];
  limitation: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  crewverify: {
    slug: "crewverify",
    thesis:
      "Use AI for difficult visual transcription, deterministic code for observable checks and people for accountable approval.",
    role:
      "I defined the product boundary and built the authenticated extraction route, validation engine, review stages and audit-oriented interface.",
    context:
      "Paper timesheets remain practical on construction sites, but office review is repetitive and errors can affect payroll preparation, job costing and accountability.",
    facts: [
      { label: "Responsibility", value: "Product definition + full-stack build" },
      { label: "Core stack", value: "Next.js 16 · React 19 · Claude multimodal" },
      { label: "Current scope", value: "Functional assessment prototype" },
    ],
    metrics: [
      { value: "8", label: "inspectable validation rules" },
      { value: "4", label: "stages from photo to export" },
      { value: "12", label: "seeded timesheet records" },
      { value: "3", label: "synthetic failure scenarios" },
    ],
    flow: [
      {
        label: "Capture",
        title: "Start from the photographed field record.",
        body: "A reviewer selects a synthetic sample or uploads a timesheet image through an authenticated application route.",
        evidence: "The demo samples exercise complete, ambiguous and duplicate-entry scenarios.",
      },
      {
        label: "Extract",
        title: "Ask the model to transcribe—not decide.",
        body: "The vision model returns schema-constrained attendance fields and leaves unreadable values empty instead of guessing.",
        evidence: "The model does not match employees, calculate hours or approve a record.",
      },
      {
        label: "Validate",
        title: "Route exceptions using observable facts.",
        body: "Code checks required fields, unique roster matches, title alignment, hours differences, duplicate rows and long shifts.",
        evidence: "Routing does not depend on a model’s self-reported confidence.",
      },
      {
        label: "Approve",
        title: "Keep consequential decisions with people.",
        body: "A foreman resolves row-level exceptions and a manager provides a separate final sign-off before export.",
        evidence: "Excluded records remain visible and every correction requires an explicit action.",
      },
    ],
    sections: [
      {
        eyebrow: "Product thesis",
        title: "A narrow architecture is more credible than broad autonomy.",
        body: [
          "Probabilistic perception is used only where it is valuable. Inspectable rules handle routing, and named human owners retain responsibility for judgment.",
          "This separation makes the workflow easier to test and prevents model confidence from being mistaken for evidence.",
        ],
      },
      {
        eyebrow: "Safety boundary",
        title: "The product deliberately stops before payroll judgment.",
        body: [
          "CrewVerify does not certify payroll, interpret agreements or make legal determinations.",
          "Uploaded images are processed server-side, credentials never reach the browser and AI output cannot approve its own work.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/work/crewverify-timesheets",
        alt: "CrewVerify timesheet directory listing twelve records across review, foreman and approval states",
        label: "Timesheet directory",
        caption:
          "Every paper sheet is tracked from intake to manager approval. The counters separate what needs a person from what is already cleared for export.",
      },
      {
        src: "/images/work/crewverify-rules",
        alt: "CrewVerify validation rules page showing WHEN and THEN conditions with block and review severities",
        label: "The rule engine, in the product",
        caption:
          "Each check is visible to the reviewer as a WHEN/THEN pair with its own severity. Routing is decided here, not by how confident the model sounded.",
      },
      {
        src: "/images/work/crewverify-review",
        alt: "CrewVerify review workspace with a photographed timesheet loaded and the four-stage progress indicator",
        label: "Review workspace",
        caption:
          "The photographed field record stays on screen next to the extracted values, so a reviewer can always check the transcription against the paper.",
      },
    ],
    principles: [
      "Transcribe only visible evidence.",
      "Never silently repair the source record.",
      "Require explicit duplicate decisions.",
      "Preserve separate foreman and manager responsibility.",
    ],
    limitation:
      "This is an assessment prototype using synthetic operational records. Workflow state is held in the browser session and one demo account exercises both review roles; production would require durable storage, role-based identity and a measured pilot against the existing process.",
  },
  "student-signal-copilot": {
    slug: "student-signal-copilot",
    thesis:
      "Treat the person closest to a problem as both a source of truth and the final verifier that reality changed.",
    role:
      "I co-built the multi-agent product, operator experience, confidence model and signal-to-verification narrative with Rosemary Li and Nuo Chen.",
    context:
      "Facilities teams receive fragmented observations and work orders. Recurring issues can remain buried when reports are incomplete, disconnected or never verified after closure.",
    facts: [
      { label: "Responsibility", value: "Workflow + confidence UX, team of three" },
      { label: "Core stack", value: "Express · TypeScript · Claude · SSE" },
      { label: "Recognition", value: "3rd Place Overall · NYC Tech Week" },
    ],
    metrics: [
      { value: "3rd", label: "place overall" },
      { value: "8", label: "specialist steps per signal" },
      { value: "5", label: "confidence labels on every claim" },
      { value: "4", label: "signal-to-verification stages" },
    ],
    flow: [
      {
        label: "Signal",
        title: "Capture field truth in one sentence.",
        body: "A student reports what they can directly observe, with an optional photo, before needing to understand facilities terminology.",
        evidence: "The student’s own observation is the only claim labeled Verified at intake.",
      },
      {
        label: "Evidence",
        title: "Ground the report in real assets and public data.",
        body: "Specialists structure the report, match an asset record and enrich it with relevant public signals.",
        evidence: "Claims are labeled Verified, Likely, Inferred, Missing or Needs inspection.",
      },
      {
        label: "Action",
        title: "Draft the next step without taking control.",
        body: "The system assembles an auditable work order, evidence checklist and routing recommendation while people retain execution authority.",
        evidence: "Agent sequence, model tier and routing reason remain visible to the operator.",
      },
      {
        label: "Verify",
        title: "Close the loop with the original reporter.",
        body: "The student confirms fixed, still happening or worse; unresolved issues reopen and feed a portfolio-level view.",
        evidence: "Closure measures both resolution and reporter satisfaction.",
      },
    ],
    sections: [
      {
        eyebrow: "System design",
        title: "More agents did not mean more autonomy.",
        body: [
          "The workflow decomposes a complex reasoning task into narrow specialists, but deliberately gives none of them execution power.",
          "A deterministic urgent guarantee raises severe, recurring and unresolved issues even if a model misses the pattern.",
        ],
      },
      {
        eyebrow: "Outcome",
        title: "A working operational workflow, not a hypothetical chatbot.",
        body: [
          "The team built both an operator dashboard and a streamed, inspectable copilot experience grounded in real asset and public data.",
          "The project earned 3rd Place Overall at The City Hacks The State during NYC Tech Week 2026.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/work/ssc-trace",
        alt: "Supervisor orchestration trace listing eight completed agents with routing reasons and timings",
        label: "Supervisor trace",
        caption:
          "One sentence in, eight specialist steps out. The operator can see which agent ran, why it was routed there and how long it took.",
      },
      {
        src: "/images/work/ssc-confidence",
        alt: "Confidence ledger labelling each claim Verified, Likely, Inferred or Missing with its basis",
        label: "Confidence ledger",
        caption:
          "Each claim carries its own label and basis. The student’s observation is the only thing marked Verified; everything the model inferred says so.",
      },
      {
        src: "/images/work/ssc-verification",
        alt: "Verification loop showing a work order closed after the original reporter confirmed the repair",
        label: "Closing the loop",
        caption:
          "A work order only closes when the original reporter confirms reality changed. \u201CStill happening\u201D reopens it and records the false closure.",
      },
    ],
    principles: [
      "Ground conclusions before recommending action.",
      "Label uncertainty instead of smoothing it over.",
      "Keep AI read-only and people accountable.",
      "Ask the original reporter whether the fix worked.",
    ],
    limitation:
      "The hackathon API token was read-only, so enriched signals persist to an in-memory store rather than writing back into the asset system. The product demonstrates the closed-loop interaction and audit trail, not a production facilities integration.",
  },
  lablens: {
    slug: "lablens",
    thesis:
      "An effective tutor should diagnose the misconception first, then offer the smallest useful intervention.",
    role:
      "I designed and built the interactive lab experience, misconception checks, coaching route, fallback behavior and teacher-facing session summary.",
    context:
      "Students often receive explanations before anyone checks why their mental model is failing. LabLens turns that diagnostic moment into the center of the learning flow.",
    facts: [
      { label: "Responsibility", value: "Product, learning flow + implementation" },
      { label: "Core stack", value: "Next.js · React · Qwen 2.5-72B" },
      { label: "Current scope", value: "3 deployed interactive mini-labs" },
    ],
    metrics: [
      { value: "3", label: "interactive mini-labs, deployed" },
      { value: "72B", label: "parameter model in the coaching route" },
      { value: "3", label: "hand-authored misconception maps" },
      { value: "0", label: "lessons broken when the model is down" },
    ],
    flow: [
      {
        label: "Predict",
        title: "Ask for a commitment before the experiment.",
        body: "The learner predicts an outcome and briefly explains their reasoning before seeing the result.",
        evidence: "The response creates a diagnostic signal rather than a passive completion event.",
      },
      {
        label: "Test",
        title: "Let the learner manipulate the system.",
        body: "A small interactive experiment makes the relevant relationship visible and repeatable.",
        evidence: "The interface links controls, observed behavior and the learner’s original prediction.",
      },
      {
        label: "Coach",
        title: "Respond to the misconception, not just the answer.",
        body: "The coaching route selects a concise Socratic prompt based on the learner’s reasoning and observed result.",
        evidence: "A deterministic fallback preserves the lesson when the AI route is unavailable.",
      },
      {
        label: "Reflect",
        title: "Check whether the model changed.",
        body: "A follow-up question asks the learner to apply the idea again and records the session for teacher review.",
        evidence: "The report distinguishes initial reasoning, intervention and follow-up response.",
      },
    ],
    sections: [
      {
        eyebrow: "Learning design",
        title: "The interaction is the evidence.",
        body: [
          "The product does not treat time-on-page as understanding. It captures a prediction, an observed experiment and a follow-up explanation.",
          "This creates a compact trail a teacher can inspect without turning the tutor into an automated grader.",
        ],
      },
      {
        eyebrow: "Resilience",
        title: "The core lesson should not depend on a model call.",
        body: [
          "Each lab includes a bounded offline path so the activity remains useful when an external model is unavailable.",
          "AI improves the specificity of the coaching prompt; it is not allowed to become the only source of instructional value.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/work/lablens-socratic",
        alt: "LabLens replying to a misconception with a water-pipe analogy question instead of the answer",
        label: "A real Socratic exchange",
        caption:
          "The learner says current gets used up by R1. LabLens does not correct them \u2014 it asks about water flowing through two connected pipes, and tags the misconception it detected.",
      },
      {
        src: "/images/work/lablens-lab",
        alt: "LabLens circuits mini-lab before submission, with the problem statement and reasoning composer",
        label: "Predict before you measure",
        caption:
          "Every lab asks for a commitment and the reasoning behind it before the experiment runs. That answer is the diagnostic signal.",
      },
      {
        src: "/images/work/lablens-architecture",
        alt: "LabLens technology page showing the request path from student input through the API route to the model",
        label: "The route, documented in-product",
        caption:
          "The technology page states the actual path \u2014 student input, Next.js route, Featherless, Qwen2.5-72B \u2014 and the structured JSON it returns.",
      },
    ],
    principles: [
      "Diagnose before explaining.",
      "Prefer one useful hint to a complete answer.",
      "Make reasoning visible to the learner and teacher.",
      "Keep the core learning experience resilient.",
    ],
    limitation:
      "The current build covers three hand-authored subject taxonomies and keeps history within one session. It does not yet provide persistent learner profiles, curriculum alignment or calibrated classification confidence.",
  },
};
