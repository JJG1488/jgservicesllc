import { Icon } from "@/components/ui/icons";
import { techStack } from "@/data/tech-stack";

/* Infinite tech marquee: the track is doubled so the keyframe loop is
   seamless; the duplicate half is hidden from assistive tech. */
export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="section-tight">
      <div className="wrap">
        <div className="marquee">
          <div className="marquee-track">
            {items.map((t, i) => (
              <span
                className="marquee-item"
                key={`${t.name}-${i}`}
                aria-hidden={i >= techStack.length || undefined}
              >
                <Icon name="bolt" size={15} sw={0} /> {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
