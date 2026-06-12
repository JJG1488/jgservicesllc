"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { faqCategories } from "@/data/faq";

const ALL = "All";

interface FlatFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

/* Flatten the typed category tree into the prototype's flat list shape
   (stable ids for accordion state + aria wiring). */
const FLAT: FlatFaq[] = faqCategories.flatMap((cat) =>
  cat.items.map((item, i) => ({
    id: `${cat.id}-${i}`,
    category: cat.label,
    question: item.question,
    answer: item.answer,
  })),
);

const FILTERS: { label: string; count: number }[] = [
  { label: ALL, count: FLAT.length },
  ...faqCategories.map((cat) => ({ label: cat.label, count: cat.items.length })),
];

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: FlatFaq;
  open: boolean;
  onToggle: () => void;
}) {
  const buttonId = `faq-q-${item.id}`;
  const bodyId = `faq-a-${item.id}`;

  return (
    <Reveal className={cn("surface acc-item", open && "open")}>
      <button
        type="button"
        id={buttonId}
        className="acc-q"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={onToggle}
      >
        {item.question}
        <Icon name="chevron" size={20} sw={2} className="chev" />
      </button>
      <div id={bodyId} className="acc-body" aria-hidden={!open}>
        <div>
          <p>{item.answer}</p>
        </div>
      </div>
    </Reveal>
  );
}

/* Search + category pills + accordion, the React counterpart of the
   prototype faq.html inline script (filter by topic, search question
   and answer text, grid-rows 0fr -> 1fr open animation via .acc-body). */
export function FaqExplorer() {
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FLAT.filter((f) => {
      const okCat = active === ALL || f.category === active;
      const okQ = !q || `${f.question} ${f.answer}`.toLowerCase().includes(q);
      return okCat && okQ;
    });
  }, [active, query]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      <section className="section-tight">
        <div className="wrap flex flex-col gap-[1.2rem]">
          <Reveal>
            <input
              className="input w-full max-w-[420px]"
              type="search"
              placeholder="Search questions…"
              aria-label="Search questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Reveal>
          <Reveal delay={60}>
            <div className="pills" role="group" aria-label="Filter by topic">
              {FILTERS.map((f) => (
                <button
                  key={f.label}
                  type="button"
                  className={cn("pill", f.label === active && "active")}
                  aria-pressed={f.label === active}
                  onClick={() => setActive(f.label)}
                >
                  {f.label} ({f.count})
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <p className="sr-only" role="status" aria-live="polite">
            {list.length === 1 ? "1 question shown" : `${list.length} questions shown`}
          </p>
          <div className="acc">
            {list.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                open={openIds.has(item.id)}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
          {list.length === 0 && (
            <Reveal>
              <p className="mt-8 text-center text-ink-400">No questions match that search.</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
