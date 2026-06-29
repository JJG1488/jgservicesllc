"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { saveSettings } from "@/app/admin/settings-actions";
import { MOCK_FONTS, MOCK_THEMES } from "./mock-data";
import type { SiteSettings } from "@/types";

type SettingsTab = "profile" | "appearance";
type SurfaceMode = "glass" | "solid";

/* Resolve saved appearance back to picker indices (fall back to the first
   option, which equals the CSS design-token defaults). */
function themeIndexFor(accentA?: string): number {
  if (!accentA) return 0;
  const i = MOCK_THEMES.findIndex(
    (t) => t.a.toLowerCase() === accentA.toLowerCase(),
  );
  return i >= 0 ? i : 0;
}
function fontIndexFor(name?: string): number {
  if (!name) return 0;
  const i = MOCK_FONTS.findIndex((f) => f.name === name);
  return i >= 0 ? i : 0;
}

/* Settings: profile fields + appearance pickers, persisted to Firestore.
   Appearance pickers write live to the document (--accent-a/--accent-b,
   --font-display, [data-surface]); "Save changes" persists everything. */
export function SettingsView({ settings }: { settings: SiteSettings }) {
  const [tab, setTab] = useState<SettingsTab>("profile");

  const [businessName, setBusinessName] = useState(settings.businessName);
  const [owner, setOwner] = useState(settings.owner);
  const [email, setEmail] = useState(settings.email);
  const [phone, setPhone] = useState(settings.phone);

  const [themeIdx, setThemeIdx] = useState(() => themeIndexFor(settings.accentA));
  const [fontIdx, setFontIdx] = useState(() => fontIndexFor(settings.fontName));
  const [surface, setSurface] = useState<SurfaceMode>(settings.surface ?? "glass");

  const [pending, startTransition] = useTransition();
  const [toast, setToast] = useState<{ ok: boolean; msg: string } | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  function applyAppearance(ti: number, fi: number, mode: SurfaceMode) {
    const root = document.documentElement;
    root.style.setProperty("--accent-a", MOCK_THEMES[ti].a);
    root.style.setProperty("--accent-b", MOCK_THEMES[ti].b);
    root.style.setProperty("--font-display", MOCK_FONTS[fi].stack);
    if (mode === "solid") root.setAttribute("data-surface", "solid");
    else root.removeAttribute("data-surface");
  }

  /* Restore the saved appearance to the document on mount. */
  useEffect(() => {
    applyAppearance(themeIdx, fontIdx, surface);
    return () => window.clearTimeout(toastTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function pickTheme(i: number) {
    setThemeIdx(i);
    applyAppearance(i, fontIdx, surface);
  }
  function pickFont(i: number) {
    setFontIdx(i);
    applyAppearance(themeIdx, i, surface);
  }
  function pickSurface(mode: SurfaceMode) {
    setSurface(mode);
    applyAppearance(themeIdx, fontIdx, mode);
  }

  function showToast(ok: boolean, msg: string) {
    setToast({ ok, msg });
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }

  function save() {
    const payload: SiteSettings = {
      businessName: businessName.trim(),
      owner: owner.trim(),
      email: email.trim(),
      phone: phone.trim(),
      accentA: MOCK_THEMES[themeIdx].a,
      accentB: MOCK_THEMES[themeIdx].b,
      fontName: MOCK_FONTS[fontIdx].name,
      surface,
    };
    startTransition(async () => {
      const result = await saveSettings(payload);
      showToast(
        result.success,
        result.success ? "Settings saved" : result.error ?? "Could not save",
      );
    });
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
              <input
                id="set-business"
                className="input"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="set-owner">Owner</label>
              <input
                id="set-owner"
                className="input"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
            </div>
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="set-email">Email</label>
              <input
                id="set-email"
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="set-phone">Phone</label>
              <input
                id="set-phone"
                type="tel"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <p className="form-note mt-[0.4rem]">
            Saved to your admin record. The public site renders from
            site.config.ts, so changing these here does not republish the
            marketing pages.
          </p>
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

        <button
          type="button"
          className="btn btn-primary mt-[0.6rem]"
          onClick={save}
          disabled={pending}
        >
          {pending ? "Saving…" : "Save changes"}
        </button>
      </Reveal>

      {/* Save toast (emerald check = success; amber = error) */}
      <div
        className="surface surface-strong fixed bottom-[1.4rem] left-1/2 z-[80]"
        style={{
          transform: toast
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(40px)",
          opacity: toast ? 1 : 0,
          transition: "all 0.4s var(--ease)",
          pointerEvents: "none",
        }}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-[0.6rem] px-[1.4rem] py-[0.8rem] text-ink-100">
          <span className={toast?.ok === false ? "text-[#fcd34d]" : "text-emerald-400"}>
            <Icon name="check" size={16} />
          </span>
          <span>{toast?.msg ?? null}</span>
        </div>
      </div>
    </>
  );
}
