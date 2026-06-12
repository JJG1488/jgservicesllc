"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { siteConfig } from "../../../site.config";
import { MOCK_FONTS, MOCK_THEMES } from "./mock-data";

type SettingsTab = "profile" | "appearance";
type SurfaceMode = "glass" | "solid";

/* Lazy state initializers: re-sync picker state with any overrides
   already on <html> (the view remounts when switching admin tabs).
   On the server (and a fresh load) there are no overrides, so the
   defaults match and hydration stays consistent. */
function readInitialSurface(): SurfaceMode {
  if (typeof document === "undefined") return "glass";
  return document.documentElement.getAttribute("data-surface") === "solid" ? "solid" : "glass";
}

function readInitialTheme(): number {
  if (typeof document === "undefined") return 0;
  const a = document.documentElement.style.getPropertyValue("--accent-a").trim();
  if (!a) return 0;
  const idx = MOCK_THEMES.findIndex((t) => t.a === a);
  return idx >= 0 ? idx : 0;
}

function readInitialFont(): number {
  if (typeof document === "undefined") return 0;
  const f = document.documentElement.style.getPropertyValue("--font-display");
  const idx = MOCK_FONTS.findIndex((opt) => f.includes(opt.name));
  return idx >= 0 ? idx : 0;
}

/* Settings: profile fields (mock — nothing persists) and appearance
   pickers that write live to the document — accent palette via
   --accent-a/--accent-b, display font via --font-display, and the
   glass/solid surface toggle via [data-surface]. */
export function SettingsView() {
  const [tab, setTab] = useState<SettingsTab>("profile");
  const [themeIdx, setThemeIdx] = useState(readInitialTheme);
  const [fontIdx, setFontIdx] = useState(readInitialFont);
  const [surface, setSurface] = useState<SurfaceMode>(readInitialSurface);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  function pickTheme(i: number) {
    setThemeIdx(i);
    const t = MOCK_THEMES[i];
    document.documentElement.style.setProperty("--accent-a", t.a);
    document.documentElement.style.setProperty("--accent-b", t.b);
  }

  function pickFont(i: number) {
    setFontIdx(i);
    document.documentElement.style.setProperty("--font-display", MOCK_FONTS[i].stack);
  }

  function pickSurface(mode: SurfaceMode) {
    setSurface(mode);
    if (mode === "solid") {
      document.documentElement.setAttribute("data-surface", "solid");
    } else {
      document.documentElement.removeAttribute("data-surface");
    }
  }

  function save() {
    /* Mock save — presentational only — wire to Supabase with RLS. */
    setToastVisible(true);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastVisible(false), 2200);
  }

  return (
    <>
      <Reveal className="surface max-w-[680px] p-8">
        <div className="tabs" role="tablist" aria-label="Settings sections">
          <button
            type="button"
            role="tab"
            id="settings-tab-profile"
            aria-selected={tab === "profile"}
            aria-controls="settings-panel-profile"
            className={cn("tab", tab === "profile" && "active")}
            onClick={() => setTab("profile")}
          >
            Profile
          </button>
          <button
            type="button"
            role="tab"
            id="settings-tab-appearance"
            aria-selected={tab === "appearance"}
            aria-controls="settings-panel-appearance"
            className={cn("tab", tab === "appearance" && "active")}
            onClick={() => setTab("appearance")}
          >
            Appearance
          </button>
        </div>

        <div
          role="tabpanel"
          id="settings-panel-profile"
          aria-labelledby="settings-tab-profile"
          hidden={tab !== "profile"}
        >
          <div className="form-grid">
            <div className="field">
              <label htmlFor="set-business">Business name</label>
              <input id="set-business" className="input" defaultValue={siteConfig.name} />
            </div>
            <div className="field">
              <label htmlFor="set-owner">Owner</label>
              <input id="set-owner" className="input" defaultValue={siteConfig.owner} />
            </div>
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="set-email">Email</label>
              <input
                id="set-email"
                type="email"
                className="input"
                defaultValue={siteConfig.email}
              />
            </div>
            <div className="field">
              <label htmlFor="set-phone">Phone</label>
              <input id="set-phone" type="tel" className="input" defaultValue={siteConfig.phone} />
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          id="settings-panel-appearance"
          aria-labelledby="settings-tab-appearance"
          hidden={tab !== "appearance"}
        >
          <div className="field">
            <label id="set-theme-label">Theme</label>
            <div className="pills" role="group" aria-labelledby="set-theme-label">
              {MOCK_THEMES.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  className={cn(
                    "pill inline-flex items-center gap-[0.45rem]",
                    themeIdx === i && "active"
                  )}
                  aria-pressed={themeIdx === i}
                  onClick={() => pickTheme(i)}
                >
                  <span
                    aria-hidden="true"
                    className="h-3.5 w-3.5 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${t.a}, ${t.b})` }}
                  />
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label id="set-font-label">Display font</label>
            <div className="pills" role="group" aria-labelledby="set-font-label">
              {MOCK_FONTS.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  className={cn("pill", fontIdx === i && "active")}
                  aria-pressed={fontIdx === i}
                  onClick={() => pickFont(i)}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label id="set-surface-label">Surface</label>
            <div className="pills" role="group" aria-labelledby="set-surface-label">
              {(["glass", "solid"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className={cn("pill", surface === mode && "active")}
                  aria-pressed={surface === mode}
                  onClick={() => pickSurface(mode)}
                >
                  {mode === "glass" ? "Glass" : "Solid"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-primary mt-[0.6rem]" onClick={save}>
          Save changes
        </button>
      </Reveal>

      {/* Save toast (emerald check = success signal only) */}
      <div
        className="surface surface-strong fixed bottom-[1.4rem] left-1/2 z-[80]"
        style={{
          transform: toastVisible
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(40px)",
          opacity: toastVisible ? 1 : 0,
          transition: "all 0.4s var(--ease)",
          pointerEvents: "none",
        }}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-[0.6rem] px-[1.4rem] py-[0.8rem] text-ink-100">
          <span className="text-emerald-400">
            <Icon name="check" size={16} />
          </span>
          <span>{toastVisible ? "Settings saved" : null}</span>
        </div>
      </div>
    </>
  );
}
