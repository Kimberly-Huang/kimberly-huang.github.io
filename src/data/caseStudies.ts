export type CaseStudy = {
  slug: string;
  thesis: string;
  role: string;
  context: string;
  metrics: { value: string; label: string }[];
  flow: { label: string; title: string; body: string; evidence: string }[];
  sections: { eyebrow: string; title: string; body: string[] }[];
  principles: string[];
  disclosure?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "dwt-enterprise-ai": {
    slug: "dwt-enterprise-ai",
    thesis:
      "Turn ambiguous internal requests into bounded, secure tools that fit the way employees already work.",
    role:
      "I owned the path from use-case discovery and platform capability testing through architecture, development, validation and stakeholder handoff.",
    context:
      "Deutsche Windtechnik operates across technical, finance and enterprise workflows where the source material is often unstructured, sensitive and tied to existing Office processes.",
    metrics: [
      { value: "04", label: "enterprise pilots built" },
      { value: "171", label: "PDF reports validated" },
      { value: "7,103", label: "embedded images reviewed" },
      { value: "0", label: "PDF parsing errors" },
    ],
    flow: [
      {
        label: "Discover",
        title: "Start with the workflow—not the model.",
        body: "Clarify the operator, source files, review decision, acceptable risk and evidence needed before choosing a technical path.",
        evidence: "Use cases across document generation, image QA, finance and local search.",
      },
      {
        label: "Test",
        title: "Verify the real system boundary.",
        body: "Test whether enterprise agents can actually access the required file content, image pixels and tool layer instead of relying on capability claims.",
        evidence: "Identified where SharePoint indexing exposed text but not embedded PDF image data.",
      },
      {
        label: "Build",
        title: "Use a hybrid AI + deterministic architecture.",
        body: "Apply generative AI where interpretation helps, then constrain layout, calculations, identity, evidence and export behavior with ordinary code.",
        evidence: "Editable Office generation, exact image matching and local browser data processing.",
      },
      {
        label: "Deliver",
        title: "Package the tool for the employee.",
        body: "Design zero-install or authenticated pilot experiences, document limitations and preserve a human approval boundary for consequential decisions.",
        evidence: "Private deployment, CI, branded outputs and stakeholder-ready handoff packages.",
      },
    ],
    sections: [
      {
        eyebrow: "The portfolio",
        title: "Four pilots, one delivery method.",
        body: [
          "A document-generation platform combines AI planning with deterministic PPTX and DOCX rendering, official templates, authentication and private file storage.",
          "An image QA workflow extracts embedded photos from supplier reports, finds exact reuse and presents side-by-side evidence without making the final compliance decision.",
          "A local accounts-receivable dashboard preserves the Finance team’s Excel source of truth while adding collection views, statement review and branded PDF output.",
          "A local document-notes search tool indexes Planner exports entirely in browser memory and returns explainable evidence without uploading company data.",
        ],
      },
      {
        eyebrow: "Product judgment",
        title: "The strongest decision was often what not to automate.",
        body: [
          "Exact duplicate detection can establish that two embedded image streams are identical; it cannot determine whether a particular reuse is operationally acceptable. The product therefore prioritizes evidence for a reviewer instead of labeling misconduct.",
          "The finance pilot reads the maintained workbook rather than replacing the team’s established process. This reduced implementation risk and kept employee-owned notes and source calculations intact.",
        ],
      },
    ],
    principles: [
      "Sensitive data stays inside the approved processing boundary.",
      "Every pilot states what it can and cannot conclude.",
      "AI is paired with deterministic guards and human review.",
      "Delivery includes the operator experience, not only the model call.",
    ],
    disclosure:
      "This case study intentionally uses aggregated metrics and architecture-level detail. Company files, internal interfaces, customer data and access credentials are not shown.",
  },
  crewverify: {
    slug: "crewverify",
    thesis:
      "Use AI for difficult visual transcription, deterministic code for observable checks and people for accountable approval.",
    role:
      "I designed and built the product boundary, authenticated extraction route, validation engine, review stages and audit-oriented interface.",
    context:
      "Paper timesheets remain practical on construction sites, but office review is repetitive and errors can affect payroll preparation, job costing and accountability.",
    metrics: [
      { value: "03", label: "synthetic failure scenarios" },
      { value: "02", label: "human approval stages" },
      { value: "07", label: "deterministic checks" },
      { value: "01", label: "approved CSV export" },
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
        body: "Claude Vision returns schema-constrained attendance fields and is instructed to leave unreadable values empty instead of guessing.",
        evidence: "The model does not match employees, calculate hours or approve a record.",
      },
      {
        label: "Validate",
        title: "Route exceptions using facts the application can verify.",
        body: "Code checks required fields, unique roster matches, title alignment, hours differences, duplicate rows and long shifts.",
        evidence: "Routing does not depend on an LLM’s self-reported confidence.",
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
        title: "AI reads. Deterministic code checks. People decide.",
        body: [
          "The initial idea could have been presented as a multi-agent review system. A narrower architecture was more credible: probabilistic perception only where it is useful, inspectable rules for routing and named human owners for judgment.",
          "This separation makes the workflow easier to test and prevents model confidence from being mistaken for evidence.",
        ],
      },
      {
        eyebrow: "Safety boundary",
        title: "The product deliberately stops before payroll and legal judgment.",
        body: [
          "CrewVerify does not certify payroll, interpret collective bargaining agreements, classify prevailing wages or make legal determinations.",
          "Uploaded images are processed server-side, the model key never reaches the browser and AI output cannot approve its own work.",
        ],
      },
    ],
    principles: [
      "Transcribe only visible evidence.",
      "Never silently repair the source record.",
      "Require explicit duplicate decisions.",
      "Preserve separate foreman and manager responsibility.",
    ],
  },
  "student-signal-copilot": {
    slug: "student-signal-copilot",
    thesis:
      "Treat the person closest to a problem as both a source of truth and the final verifier that reality changed.",
    role:
      "I co-built the multi-agent product, operator experience, confidence model and signal-to-verification narrative with Rosemary Li and Nuo Chen.",
    context:
      "Facilities teams receive fragmented observations and work orders. Important recurring issues can remain buried when reports are incomplete, disconnected or never verified after closure.",
    metrics: [
      { value: "3rd", label: "place overall" },
      { value: "07", label: "specialist agents" },
      { value: "04", label: "workflow stages" },
      { value: "02", label: "human roles in the loop" },
    ],
    flow: [
      {
        label: "Signal",
        title: "Capture field truth in one sentence.",
        body: "A student reports what they can directly observe, with an optional photo, before the system asks them to understand facilities terminology.",
        evidence: "The student’s own observation is the only claim labeled Verified at intake.",
      },
      {
        label: "Evidence",
        title: "Ground the report in real assets and public data.",
        body: "Specialists structure the report, match a CriticalAsset record and enrich it with relevant NYC DOB and 311 signals.",
        evidence: "Claims are labeled Verified, Likely, Inferred, Missing or Needs inspection.",
      },
      {
        label: "Action",
        title: "Draft the next best step without taking control.",
        body: "The supervisor assembles an auditable work order, evidence checklist and routing recommendation while humans retain execution authority.",
        evidence: "Agent sequence, model tier and routing reason remain visible to the operator.",
      },
      {
        label: "Verify",
        title: "Close the loop with the original reporter.",
        body: "The student confirms fixed, still happening or worse; unresolved issues reopen and feed the portfolio-level pattern view.",
        evidence: "Closure measures both resolution and reporter satisfaction.",
      },
    ],
    sections: [
      {
        eyebrow: "Why it stood out",
        title: "More agents did not mean more autonomy.",
        body: [
          "The system decomposes a complex reasoning task into narrow specialists, but deliberately gives none of them execution power. Grounding and public-data matching use deterministic rules; the most expensive model is reserved for cross-signal pattern recognition.",
          "A deterministic urgent guarantee raises high-severity, recurring and unresolved issues even if a model fails to recognize the pattern.",
        ],
      },
      {
        eyebrow: "Outcome",
        title: "A real operational workflow, not a hypothetical chatbot.",
        body: [
          "The team used the live CriticalAsset API and built both an operator dashboard and a streamed, inspectable copilot experience.",
          "The project earned 3rd Place Overall at The City Hacks The State during NYC Tech Week 2026.",
        ],
      },
    ],
    principles: [
      "Ground conclusions before recommending action.",
      "Label uncertainty instead of smoothing it over.",
      "Keep AI read-only and people accountable.",
      "Ask the original reporter whether the fix worked.",
    ],
  },
  "swift-omnichannel": {
    slug: "swift-omnichannel",
    thesis:
      "Build an executive decision chain that preserves analytical depth without making the audience navigate a report to find the recommendation.",
    role:
      "I structured the data pipeline, rules-based customer prioritization, validation strategy and interactive dashboard narrative.",
    context:
      "The analysis needed to identify physical-only customers most likely to make a first online purchase while keeping customer, channel and geography claims analytically separate.",
    metrics: [
      { value: "150M+", label: "transaction line items" },
      { value: "2.56M", label: "customers ranked" },
      { value: "25", label: "months analyzed" },
      { value: "17", label: "interactive charts" },
    ],
    flow: [
      {
        label: "Diagnose",
        title: "Establish where the conversion gap lives.",
        body: "Profile customer behavior, channel engagement, comments, timing and geography across complete historical coverage.",
        evidence: "Python and DuckDB scan partitioned Parquet data without loading the full dataset into memory.",
      },
      {
        label: "Prioritize",
        title: "Rank customers with an inspectable score.",
        body: "A rules-based Priority Score combines value, engagement, readiness, momentum and age into five activation bands.",
        evidence: "The score remains explainable to business stakeholders rather than hiding ranking logic in a black box.",
      },
      {
        label: "Design",
        title: "Keep two pilots analytically separate.",
        body: "Coordinate a customer-level CRM activation pilot with a geography-level store rollout without claiming a customer-to-store join the data cannot support.",
        evidence: "Every chart states its unit, period, population and source table.",
      },
      {
        label: "Validate",
        title: "Test the ranking against future behavior.",
        body: "Use observed month-over-month conversions outside the scoring window to verify that higher-priority bands convert at higher rates.",
        evidence: "The dashboard exposes success criteria, ruled-out hypotheses and data-availability safeguards.",
      },
    ],
    sections: [
      {
        eyebrow: "Decision product",
        title: "The overview answers what to do; the evidence tabs explain why.",
        body: [
          "The landing view presents five decisions—diagnose, prioritize, design, orchestrate and validate—plus two coordinated pilot plans.",
          "Detailed sections preserve methods, customer drill-downs, messaging evidence, channel findings, timing filters, geographic rollout controls and proof.",
        ],
      },
      {
        eyebrow: "Data responsibility",
        title: "Large-scale analysis without exposing customer-level data.",
        body: [
          "Offline processing produces aggregate arrays for the browser. The application does not query the 150M-row source at view time and no customer-level payload is shipped to the client.",
          "The public portfolio shows architecture and aggregate metrics only; access to the full strategy dashboard remains protected.",
        ],
      },
    ],
    principles: [
      "Make ranking logic explainable.",
      "Validate recommendations out of time.",
      "Label populations and units on every chart.",
      "Do not claim joins the source data cannot support.",
    ],
    disclosure:
      "The underlying dataset is proprietary. This case study uses aggregate scale, methods and product architecture; raw records and protected dashboard content are not published.",
  },
};
