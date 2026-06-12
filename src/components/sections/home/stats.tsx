import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { stats } from "@/data/home";

/* Count-up stat band on a strong glass surface. */
export function Stats() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal className="surface surface-strong stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num grad-text">
                <CountUp
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
