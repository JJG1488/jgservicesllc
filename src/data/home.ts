import type { HomeStat, Testimonial, TrustItem, WhyItem } from "@/types";

/** Hero trust chips. */
export const trust: TrustItem[] = [
  { value: "50+", label: "sites shipped" },
  { value: "95+", label: "Lighthouse score" },
  { value: "<2.8s", label: "avg load time" },
];

/** Count-up stat band. */
export const stats: HomeStat[] = [
  { value: 50, suffix: "+", label: "Websites delivered" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 2.8, prefix: "<", suffix: "s", label: "Average load time", decimals: 1 },
  { value: 95, suffix: "+", label: "Lighthouse score" },
];

/** "Why us" cards. Icon names map to @/components/ui/icons. */
export const why: WhyItem[] = [
  {
    icon: "tag",
    title: "Transparent pricing",
    desc: "A clear quote with a line-item breakdown. No hidden fees, no scope-creep invoices.",
  },
  {
    icon: "chat",
    title: "Talk to your developer",
    desc: "Weekly updates and a direct line to the person writing the code — never a call center.",
  },
  {
    icon: "sparkle",
    title: "Code you own",
    desc: "Clean, documented, maintainable code handed over in full. It's yours, forever.",
  },
  {
    icon: "clock",
    title: "On-time delivery",
    desc: "Realistic timelines with buffer built in, and early word the moment anything shifts.",
  },
  {
    icon: "hands",
    title: "Post-launch support",
    desc: "Thirty days of free bug fixes after launch, plus an optional care plan.",
  },
  {
    icon: "rocket",
    title: "Modern, lasting stack",
    desc: "Current, widely-supported tech chosen to age well — not the framework of the month.",
  },
];

export const testimonial: Testimonial = {
  quote:
    "James took a vague idea and turned it into a product our customers actually use every day. Fast, communicative, and the code was spotless when he handed it over.",
  name: "A&M Construction",
  role: "Owner, A&M Construction",
};
