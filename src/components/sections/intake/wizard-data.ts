/* Intake wizard content + pricing model, lifted verbatim from the design
   handoff's intake.html inline script (STEPS / TYPES / FEATURES / TIMELINES). */

export interface ProjectTypeOption {
  id: string;
  name: string;
  desc: string;
  base: number;
}

export interface FeatureOption {
  id: string;
  name: string;
  desc: string;
  cost: number;
}

export interface TimelineOption {
  id: string;
  name: string;
  desc: string;
  mult: number;
}

export const STEPS = [
  "Project type",
  "Features",
  "Timeline",
  "Your info",
  "Review",
] as const;

export const PROJECT_TYPES: ProjectTypeOption[] = [
  { id: "site", name: "Responsive website", desc: "Marketing site, 3–8 pages.", base: 3000 },
  { id: "app", name: "Custom web app", desc: "Logins, data, dashboards.", base: 8000 },
  { id: "ecom", name: "E-commerce store", desc: "Catalog, cart, checkout.", base: 8000 },
  { id: "other", name: "Something else", desc: "SEO, API, or not sure yet.", base: 1500 },
];

export const FEATURES: FeatureOption[] = [
  { id: "design", name: "Custom design", desc: "Bespoke UI, not a template.", cost: 1500 },
  { id: "cms", name: "Content management", desc: "Edit content yourself.", cost: 1200 },
  { id: "auth", name: "User accounts", desc: "Sign-up, login, roles.", cost: 2000 },
  { id: "pay", name: "Payments", desc: "Stripe checkout.", cost: 1500 },
  { id: "seo", name: "SEO package", desc: "Technical SEO + Core Web Vitals.", cost: 1500 },
  { id: "intg", name: "Integrations", desc: "CRM, email, third-party APIs.", cost: 2000 },
];

export const TIMELINES: TimelineOption[] = [
  { id: "flex", name: "Flexible", desc: "No firm deadline — best value.", mult: 0.95 },
  { id: "std", name: "Standard", desc: "The normal timeline for the scope.", mult: 1 },
  { id: "rush", name: "Rush", desc: "Prioritized; +40% rush fee.", mult: 1.4 },
];

/** "$3,000" — matches the prototype's fmt(). */
export function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

/** (base + selected feature costs) x timeline multiplier. */
export function calcEstimate(
  typeId: string,
  featureIds: readonly string[],
  timelineId: string,
): number {
  const base = PROJECT_TYPES.find((t) => t.id === typeId)?.base ?? 0;
  const sum = FEATURES.reduce(
    (acc, f) => (featureIds.includes(f.id) ? acc + f.cost : acc),
    base,
  );
  const mult = TIMELINES.find((t) => t.id === timelineId)?.mult ?? 1;
  return sum * mult;
}

/** "$3,000–$3,900" — cost to cost x 1.3, matching estRange(). */
export function estimateRange(
  typeId: string,
  featureIds: readonly string[],
  timelineId: string,
): string {
  const c = calcEstimate(typeId, featureIds, timelineId);
  return fmt(c) + "–" + fmt(c * 1.3);
}
