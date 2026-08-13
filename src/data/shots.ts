export type PreviewKind = "crewverify" | "signal" | "lablens" | "tabflow" | "repairs";

export type Shot = {
  /** Path without extension. A .webp and a .jpg of the same name must both exist. */
  src: string;
  /** Text shown in the window chrome, left of centre. */
  window: string;
  /** Short state badge shown at the right of the window chrome. */
  badge: string;
  /** One line under the frame stating exactly what the reader is looking at. */
  note: string;
  /** Accessible description, used when the shot is presented as content rather than decoration. */
  alt: string;
};

/**
 * Screenshots captured from the running applications. Nothing here is a mockup:
 * each file is a browser capture of the real interface at 1440x900.
 */
export const productShots: Partial<Record<PreviewKind, Shot>> = {
  crewverify: {
    src: "/images/work/crewverify-timesheets",
    window: "CrewVerify · Timekeeping",
    badge: "Running build",
    note: "Screenshot · CrewVerify running locally on synthetic project data",
    alt: "CrewVerify timesheet directory showing 12 records across review, foreman and approval states",
  },
  signal: {
    src: "/images/work/ssc-trace",
    window: "Student Signal Copilot · Supervisor trace",
    badge: "Running build",
    note: "Screenshot · the supervisor's eight-agent trace for a submitted signal",
    alt: "Student Signal Copilot orchestration trace listing eight completed agents with routing reasons and timings",
  },
  lablens: {
    src: "/images/work/lablens-socratic",
    window: "LabLens · Circuits mini-lab",
    badge: "Live product",
    note: "Screenshot · a real Socratic exchange after a misconception answer",
    alt: "LabLens returning an analogy-based Socratic question with cognitive annotation chips instead of the answer",
  },
};

export type GalleryItem = { src: string; caption: string; alt: string };
