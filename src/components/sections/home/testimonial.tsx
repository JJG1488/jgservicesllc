import { Reveal } from "@/components/ui/reveal";
import { testimonial } from "@/data/home";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="stars" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m12 3 2.5 5.6 6.1.6-4.6 4 1.4 6L12 16.9 6.6 19.2l1.4-6L3.4 9.2l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonial() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="surface quote">
          <Stars n={5} />
          <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <div className="by">
            <b>{testimonial.name}</b> — {testimonial.role}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
