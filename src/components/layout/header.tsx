"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../../../site.config";
import { BrandMark } from "@/components/ui/brand-mark";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the drawer whenever the route changes (covers link taps + back/fwd).
     Adjust-state-during-render is React's recommended alternative to a
     setState-in-effect for "reset on prop change". */
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  /* While the drawer is open: lock body scroll, close on Escape, close if the
     viewport grows past the mobile breakpoint, and move focus into the drawer. */
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 940) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  /* Return focus to the toggle for keyboard/AT users after a deliberate close. */
  const closeAndFocusToggle = () => {
    setOpen(false);
    burgerRef.current?.focus();
  };

  return (
    <nav className={cn("nav", scrolled && "scrolled")} aria-label="Main">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="JG Services LLC home">
          <BrandMark />
          <span className="brand-word grad-text">JG Services LLC</span>
        </Link>

        <div className="nav-links desktop">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("nav-link", pathname === item.href && "active")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/intake"
            className="btn btn-primary"
            style={{ padding: "0.6rem 1.1rem", fontSize: "0.9rem" }}
          >
            Start a project
          </Link>
        </div>

        <button
          ref={burgerRef}
          type="button"
          className="nav-burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Icon name="menu" />
        </button>
      </div>

      {/* Backdrop — tap to dismiss. */}
      <div
        className={cn("nav-scrim", open && "open")}
        onClick={closeAndFocusToggle}
        aria-hidden="true"
      />

      {/* Slide-in drawer. */}
      <aside
        id="mobile-menu"
        className={cn("nav-drawer", open && "open")}
        inert={!open}
        aria-label="Site menu"
      >
        <div className="nav-drawer-head">
          <span className="brand-word grad-text">JG Services LLC</span>
          <button
            ref={closeBtnRef}
            type="button"
            className="nav-burger"
            onClick={closeAndFocusToggle}
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="nav-drawer-links">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(pathname === item.href && "active")}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/intake"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Start a project
          </Link>
        </div>
      </aside>
    </nav>
  );
}
