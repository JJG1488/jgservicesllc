import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/home/hero";
import { TechMarquee } from "@/components/sections/home/tech-marquee";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { ProcessPreview } from "@/components/sections/home/process-preview";
import { WorkBento } from "@/components/sections/home/work-bento";
import { Stats } from "@/components/sections/home/stats";
import { Why } from "@/components/sections/home/why";
import { Testimonial } from "@/components/sections/home/testimonial";
import { CTABanner } from "@/components/sections/home/cta-banner";

export const metadata = createMetadata({
  title: "Custom Web Development",
  description:
    "JG Services LLC — custom web applications and high-performance websites. We turn everyday ideas into digital reality.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ServicesPreview />
      <ProcessPreview />
      <WorkBento />
      <Stats />
      <Why />
      <Testimonial />
      <CTABanner />
    </>
  );
}
