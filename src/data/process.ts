import type { ProcessPhase } from "@/types";

export const processPhases: ProcessPhase[] = [
  {
    n: "01",
    title: "Idea & Blueprint",
    tag: "Week 1",
    blurb: "We pin down the real problem before a line of code.",
    detail:
      "We start with your goals, your users, and your constraints — then turn the fuzzy idea into a concrete, scoped plan with fixed deliverables and a timeline you can hold us to.",
    points: [
      "Discovery session + goal mapping",
      "Scope, milestones, and fixed quote",
      "Architecture and tech decisions, explained",
      "No surprises — you approve before we build",
    ],
  },
  {
    n: "02",
    title: "Design & Development",
    tag: "Weeks 2–N",
    blurb: "Intuitive interfaces, robust engineering, weekly demos.",
    detail:
      "We design the interface and build the system in parallel, shipping working previews every week. You see real progress on a real URL — not status emails.",
    points: [
      "Interactive design you can click through",
      "Typed, tested, documented code you own",
      "Weekly demo builds on a live preview link",
      "Direct line to the developer — no account managers",
    ],
  },
  {
    n: "03",
    title: "Launch & Support",
    tag: "Launch + 30 days",
    blurb: "A clean launch, then we stick around.",
    detail:
      "We handle deployment, monitoring, and a careful go-live — then back it with 30 days of free fixes and an optional care plan so it keeps performing.",
    points: [
      "Zero-downtime deployment + monitoring",
      "Performance and SEO verified post-launch",
      "30 days of free bug fixes, guaranteed",
      "Optional ongoing care plan",
    ],
  },
];
