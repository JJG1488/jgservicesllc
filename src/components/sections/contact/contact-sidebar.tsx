import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "../../../../site.config";

/* Contact sidebar: direct phone/email lines, schedule-a-call CTA,
   and social links — ported verbatim from the prototype's aside. */
export function ContactSidebar() {
  return (
    <Reveal>
      <aside className="surface flex flex-col gap-[1.4rem] p-[1.8rem]">
        <div>
          <h3 className="m-0 mb-4 text-[1.1rem] font-semibold text-ink-100">
            Reach us directly
          </h3>
          <a
            href={siteConfig.phoneHref}
            className="flex min-h-11 items-center gap-[0.7rem] py-2 text-ink-200"
          >
            <Icon name="phone" size={18} />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex min-h-11 items-center gap-[0.7rem] py-2 text-ink-200"
          >
            <Icon name="mail" size={18} />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        <div
          className="pt-[1.2rem]"
          style={{ borderTop: "1px solid var(--surface-border)" }}
        >
          <h3 className="m-0 mb-[0.6rem] text-[1.1rem] font-semibold text-ink-100">
            Prefer a call?
          </h3>
          <p className="m-0 mb-4 text-[0.9rem] leading-[1.6] text-ink-300">
            Grab a time that works for you and we&apos;ll talk through your
            project.
          </p>
          <Link href="/schedule" className="btn btn-ghost w-full justify-center">
            Schedule a call
          </Link>
        </div>

        <div
          className="pt-[1.2rem]"
          style={{ borderTop: "1px solid var(--surface-border)" }}
        >
          <h3 className="m-0 mb-[0.6rem] text-[1.1rem] font-semibold text-ink-100">
            Connect
          </h3>
          <div className="flex gap-[0.6rem]">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost flex-1 justify-center p-[0.6rem]"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost flex-1 justify-center p-[0.6rem]"
            >
              GitHub
            </a>
          </div>
        </div>
      </aside>
    </Reveal>
  );
}
