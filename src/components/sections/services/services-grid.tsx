import { services } from "@/data/services";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "./service-card";

/* 3-up grid of expandable service cards (.svc-grid), fed by the typed
   data layer. Each card scroll-reveals like the prototype. */
export function ServicesGrid() {
  return (
    <div className="svc-grid">
      {services.map((service) => (
        <Reveal key={service.id} className="h-full">
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );
}
