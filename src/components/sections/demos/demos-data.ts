/* Demo showcase content, ported verbatim from the design handoff's
   demos.html. Lives locally because src/data has no demos module and
   that tree is owned by another track. */

export type DemoIconName = "cart" | "food" | "art" | "wrench";

export interface Demo {
  icon: DemoIconName;
  /** Category chip floated over the placeholder shot. */
  tag: string;
  title: string;
  description: string;
  tags: string[];
}

export const demos: Demo[] = [
  {
    icon: "cart",
    tag: "E-Commerce",
    title: "Storefront",
    description:
      "Catalog, product pages, cart, and Stripe checkout - the full shopping experience.",
    tags: ["Catalog", "Cart", "Stripe"],
  },
  {
    icon: "food",
    tag: "Restaurant",
    title: "Eatery",
    description:
      "Menu, hours, reservations, and online ordering for food businesses.",
    tags: ["Menu", "Reservations", "Ordering"],
  },
  {
    icon: "art",
    tag: "Portfolio",
    title: "Creative",
    description:
      "A bold, image-forward portfolio for designers, photographers, and studios.",
    tags: ["Gallery", "Case studies", "Contact"],
  },
  {
    icon: "wrench",
    tag: "Service",
    title: "Local Pro",
    description:
      "Lead-focused site for trades and service businesses - quotes, booking, reviews.",
    tags: ["Quotes", "Booking", "Reviews"],
  },
];
