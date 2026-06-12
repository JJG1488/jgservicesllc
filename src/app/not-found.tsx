import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Page not found",
  description: "The page you are looking for does not exist or has been moved.",
});

export default function NotFound() {
  return (
    <main className="section flex min-h-svh items-center">
      <div className="wrap">
        <div className="surface mx-auto max-w-2xl p-10 text-center sm:p-14">
          <p className="kicker">Error 404</p>
          <h1 className="display page-title">
            <span className="grad-text">404</span> — Page not found
          </h1>
          <p className="mx-auto max-w-[44ch] leading-relaxed text-ink-300">
            The page you are looking for does not exist or has been moved. Head
            back home, or reach out and we will point you in the right
            direction.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <Link href="/" className="btn btn-primary">
              Back home
              <Icon name="arrow" size={18} className="arrow" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
