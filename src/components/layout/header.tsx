"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

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
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className="mobile-menu wrap"
        inert={!open}
        style={{ maxHeight: open ? 420 : 0, transition: "max-height 0.4s var(--ease)" }}
      >
        <div className="inner">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/intake"
            className="btn btn-primary"
            style={{ marginTop: "0.6rem", justifyContent: "center" }}
            onClick={closeMenu}
          >
            Start a project
          </Link>
        </div>
      </div>
    </nav>
  );
}
