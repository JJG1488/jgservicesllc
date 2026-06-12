"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/* E-sign island for the service agreement. Typing a full legal name and
   checking the agreement card enable the "Sign & accept" button; signing
   swaps the form for a confirmation panel showing the typed name in the
   script font plus a human-readable timestamp (formatted in the click
   handler — a client event, so no hydration concern). Client-side only —
   there is no e-sign/audit backend behind this flow. */
export function SignPanel() {
  const nameId = useId();
  const errId = useId();
  const okHeadingRef = useRef<HTMLHeadingElement>(null);
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [touched, setTouched] = useState(false);
  const [signedAt, setSignedAt] = useState<string | null>(null);

  /* After signing, move focus to the confirmation heading. */
  useEffect(() => {
    if (signedAt) okHeadingRef.current?.focus();
  }, [signedAt]);

  const nameValid = name.trim().length > 1;
  const canSign = nameValid && agreed;
  const showError = touched && !nameValid;

  if (signedAt) {
    return (
      <div className="form-ok" style={{ padding: "1rem" }} role="status">
        <div className="ic" aria-hidden="true">
          <Icon name="check" size={30} sw={2} />
        </div>
        <h3
          ref={okHeadingRef}
          tabIndex={-1}
          className="outline-none"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "1.3rem",
            color: "var(--ink-100)",
            margin: "0.2rem 0 0",
            fontWeight: 700,
          }}
        >
          Agreement signed
        </h3>
        <div
          className="script grad-text"
          style={{ fontSize: "2.6rem", lineHeight: 1, margin: "0.4rem 0" }}
        >
          {name.trim()}
        </div>
        <p className="mono" style={{ color: "var(--ink-400)", fontSize: "0.78rem", margin: 0 }}>
          Signed {signedAt}
        </p>
        <p style={{ color: "var(--ink-300)", maxWidth: "40ch", margin: "0.6rem 0 0" }}>
          A countersigned copy and your deposit invoice are on the way to your inbox.
        </p>
        <Link href="/schedule" className="btn btn-primary" style={{ marginTop: "0.6rem" }}>
          Schedule kickoff call
        </Link>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        if (!canSign) return;
        const now = new Date();
        setSignedAt(
          now.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
            " at " +
            now.toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
            }),
        );
      }}
    >
      <div className="field">
        <label htmlFor={nameId}>
          Full legal name <span className="req">*</span>
        </label>
        <input
          id={nameId}
          className={cn("input", showError && "field-error")}
          placeholder="Jane Doe"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={showError || undefined}
          aria-describedby={showError ? errId : undefined}
        />
        {showError && (
          <span className="err-msg" id={errId}>
            Please type your full name to sign.
          </span>
        )}
      </div>

      <label
        className={cn(
          "opt-card has-[:focus-visible]:[outline:2px_solid_var(--accent-a)] has-[:focus-visible]:outline-offset-2",
          agreed && "sel",
        )}
        style={{ marginBottom: "1.2rem" }}
      >
        <span className="box" aria-hidden="true">
          {agreed && <Icon name="check" size={14} sw={2.4} />}
        </span>
        <input
          type="checkbox"
          className="sr-only"
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
        />
        <div>
          <h5>I have read and agree to this agreement</h5>
          <p>You&apos;re agreeing to the terms above on behalf of yourself or your company.</p>
        </div>
      </label>

      <button
        type="submit"
        className="btn btn-primary w-full justify-center"
        disabled={!canSign}
      >
        Sign &amp; accept
      </button>
    </form>
  );
}
