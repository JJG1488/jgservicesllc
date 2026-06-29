"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { submitIntake } from "@/app/(site)/intake/actions";
import type { IntakeFormData } from "@/lib/intake-schema";
import {
  STEPS,
  PROJECT_TYPES,
  FEATURES,
  TIMELINES,
  fmt,
  calcEstimate,
  estimateRange,
} from "./wizard-data";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type InfoField = "name" | "email" | "company" | "details";

interface WizardState {
  step: number;
  done: boolean;
  type: string;
  features: string[];
  timeline: string;
  name: string;
  email: string;
  company: string;
  details: string;
  errors: { name: boolean; email: boolean };
}

type WizardAction =
  | { type: "selectType"; id: string }
  | { type: "toggleFeature"; id: string }
  | { type: "selectTimeline"; id: string }
  | { type: "setField"; field: InfoField; value: string }
  | { type: "next" }
  | { type: "back" }
  | { type: "goto"; step: number };

const initialState: WizardState = {
  step: 0,
  done: false,
  type: "site",
  features: [],
  timeline: "std",
  name: "",
  email: "",
  company: "",
  details: "",
  errors: { name: false, email: false },
};

function reducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "selectType":
      return { ...state, type: action.id };
    case "toggleFeature":
      return {
        ...state,
        features: state.features.includes(action.id)
          ? state.features.filter((id) => id !== action.id)
          : [...state.features, action.id],
      };
    case "selectTimeline":
      return { ...state, timeline: action.id };
    case "setField":
      return {
        ...state,
        [action.field]: action.value,
        errors:
          action.field === "name" || action.field === "email"
            ? { ...state.errors, [action.field]: false }
            : state.errors,
      };
    case "next": {
      if (state.step === 3) {
        const nameErr = state.name.trim() === "";
        const emailErr = !EMAIL_RE.test(state.email.trim());
        if (nameErr || emailErr) {
          return { ...state, errors: { name: nameErr, email: emailErr } };
        }
      }
      if (state.step === STEPS.length - 1) return { ...state, done: true };
      return { ...state, step: state.step + 1 };
    }
    case "back":
      return state.step > 0 ? { ...state, step: state.step - 1 } : state;
    case "goto":
      return action.step <= state.step && !state.done
        ? { ...state, step: action.step }
        : state;
    default:
      return state;
  }
}

/* ---------- option card (multi-select checkbox style) ---------- */

interface OptionCardProps {
  selected: boolean;
  title: string;
  desc: string;
  price?: string;
  onSelect: () => void;
}

function OptionCard({ selected, title, desc, price, onSelect }: OptionCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn("opt-card w-full text-left", selected && "sel")}
    >
      <span className="box" aria-hidden="true">
        {selected && <Icon name="check" size={14} sw={2} />}
      </span>
      <div>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      {price && <span className="price">{price}</span>}
    </button>
  );
}

/* ---------- single-select radio group ---------- */

interface RadioOption {
  id: string;
  title: string;
  desc: string;
  price?: string;
}

/* Proper radio semantics for the single-select steps: role="radiogroup"
   labelled by the step heading, role="radio" + aria-checked options with
   a roving tabindex. Arrow keys move (and select) with wrap-around;
   Space/Enter select via the native button click. */
function OptionRadioGroup({
  labelledBy,
  listClassName,
  options,
  value,
  onChange,
}: {
  labelledBy: string;
  listClassName: string;
  options: RadioOption[];
  value: string;
  onChange: (id: string) => void;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (from: number, dir: 1 | -1) => {
    const next = (from + dir + options.length) % options.length;
    onChange(options[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className={listClassName} role="radiogroup" aria-labelledby={labelledBy}>
      {options.map((opt, i) => {
        const selected = opt.id === value;
        return (
          <button
            key={opt.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            className={cn("opt-card w-full text-left", selected && "sel")}
            onClick={() => onChange(opt.id)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                e.preventDefault();
                move(i, 1);
              } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                e.preventDefault();
                move(i, -1);
              }
            }}
          >
            <span className="box round" aria-hidden="true">
              {selected && <Icon name="check" size={14} sw={2} />}
            </span>
            <div>
              <h5>{opt.title}</h5>
              <p>{opt.desc}</p>
            </div>
            {opt.price && <span className="price">{opt.price}</span>}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- step heading ---------- */

function StepHead({
  title,
  sub,
  headingRef,
  id,
}: {
  title: string;
  sub: string;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  id?: string;
}) {
  return (
    <>
      <h2 ref={headingRef} id={id} tabIndex={-1} className="outline-none">
        {title}
      </h2>
      <p className="sub">{sub}</p>
    </>
  );
}

/* ---------- wizard ---------- */

export function IntakeWizard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);

  /* Final step: persist the lead server-side before showing the success
     screen. The estimate/labels are re-derived on the server from the ids,
     so we only send the raw selections + contact info. */
  async function handleSend() {
    setSubmitError("");
    setSubmitting(true);
    const payload: IntakeFormData = {
      type: state.type as IntakeFormData["type"],
      features: state.features as IntakeFormData["features"],
      timeline: state.timeline as IntakeFormData["timeline"],
      name: state.name.trim(),
      email: state.email.trim(),
      company: state.company.trim() || undefined,
      details: state.details.trim() || undefined,
    };
    try {
      const result = await submitIntake(payload);
      if (result.success) {
        dispatch({ type: "next" });
      } else {
        setSubmitError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  /* Move focus to the step heading on step change / completion. */
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [state.step, state.done]);

  /* Scroll to top when the project is sent, like the prototype. */
  useEffect(() => {
    if (!state.done) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [state.done]);

  const estimateText =
    state.step === 0 && !state.done
      ? fmt(calcEstimate(state.type, state.features, state.timeline))
      : estimateRange(state.type, state.features, state.timeline);
  const progress = state.done ? 100 : ((state.step + 1) / STEPS.length) * 100;
  const lastStep = state.step === STEPS.length - 1;

  const selectedType =
    PROJECT_TYPES.find((t) => t.id === state.type) ?? PROJECT_TYPES[0];
  const selectedFeatures = FEATURES.filter((f) => state.features.includes(f.id));
  const selectedTimeline =
    TIMELINES.find((t) => t.id === state.timeline) ?? TIMELINES[1];
  const firstName = state.name.trim().split(" ")[0] || "there";

  return (
    <div className="wiz">
      {/* ---------- progress rail ---------- */}
      <aside className="surface wiz-rail" aria-label="Progress">
        <div
          className="wiz-prog"
          role="progressbar"
          aria-label="Intake progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div className="bar" style={{ width: `${progress}%` }} />
        </div>
        <ol className="wiz-steps list-none p-0 m-0">
          {STEPS.map((label, i) => {
            const cls =
              i === state.step ? "active" : i < state.step ? "done" : "";
            return (
              <li key={label}>
                <button
                  type="button"
                  className={cn(
                    "wiz-step w-full text-left disabled:cursor-default",
                    cls,
                  )}
                  disabled={i > state.step || state.done}
                  aria-current={i === state.step ? "step" : undefined}
                  onClick={() => dispatch({ type: "goto", step: i })}
                >
                  <span className="dot" aria-hidden="true">
                    {i < state.step ? <Icon name="check" size={14} sw={2} /> : i + 1}
                  </span>
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="estimate" style={{ marginTop: "1.6rem" }}>
          <span className="lbl">Ballpark</span>
          <span className="amt grad-text" aria-live="polite">
            {estimateText}
          </span>
        </div>
      </aside>

      {/* ---------- panel ---------- */}
      <div className="surface wiz-panel">
        {state.done ? (
          <div className="form-ok m-auto">
            <div className="ic">
              <Icon name="check" size={30} sw={2} />
            </div>
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="outline-none"
              style={{ fontSize: "1.5rem" }}
            >
              Project received
            </h2>
            <p className="text-ink-300 m-0 max-w-[42ch]">
              {"Thanks, " + firstName + "! Your ballpark is "}
              <b className="text-ink-100">{estimateText}</b>
              {". We'll review the details and email you within one business day to book a discovery call."}
            </p>
            <div className="mt-[0.8rem] flex flex-wrap justify-center gap-[0.7rem]">
              <Link href="/schedule" className="btn btn-primary">
                Book the call now
              </Link>
              <Link href="/projects" className="btn btn-ghost">
                See our work
              </Link>
            </div>
          </div>
        ) : (
          <>
            {state.step === 0 && (
              <>
                <StepHead
                  headingRef={headingRef}
                  id="wiz-type-heading"
                  title="What are we building?"
                  sub="Pick the closest match — we'll fine-tune later."
                />
                <OptionRadioGroup
                  labelledBy="wiz-type-heading"
                  listClassName="opt-list two"
                  value={state.type}
                  options={PROJECT_TYPES.map((t) => ({
                    id: t.id,
                    title: t.name,
                    desc: t.desc,
                    price: fmt(t.base) + "+",
                  }))}
                  onChange={(id) => dispatch({ type: "selectType", id })}
                />
              </>
            )}

            {state.step === 1 && (
              <>
                <StepHead
                  headingRef={headingRef}
                  title="Which features do you need?"
                  sub="Select all that apply. The estimate updates live."
                />
                <div className="opt-list two" role="group" aria-label="Features">
                  {FEATURES.map((f) => (
                    <OptionCard
                      key={f.id}
                      selected={state.features.includes(f.id)}
                      title={f.name}
                      desc={f.desc}
                      price={"+" + fmt(f.cost)}
                      onSelect={() => dispatch({ type: "toggleFeature", id: f.id })}
                    />
                  ))}
                </div>
              </>
            )}

            {state.step === 2 && (
              <>
                <StepHead
                  headingRef={headingRef}
                  id="wiz-timeline-heading"
                  title="What's your timeline?"
                  sub="This affects scheduling and price."
                />
                <OptionRadioGroup
                  labelledBy="wiz-timeline-heading"
                  listClassName="opt-list"
                  value={state.timeline}
                  options={TIMELINES.map((t) => ({
                    id: t.id,
                    title: t.name,
                    desc: t.desc,
                    price: "×" + t.mult,
                  }))}
                  onChange={(id) => dispatch({ type: "selectTimeline", id })}
                />
              </>
            )}

            {state.step === 3 && (
              <>
                <StepHead
                  headingRef={headingRef}
                  title="Where can we reach you?"
                  sub="So we can send your estimate and book a call."
                />
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="intake-name">
                      Name <span className="req">*</span>
                    </label>
                    <input
                      id="intake-name"
                      className={cn("input", state.errors.name && "field-error")}
                      value={state.name}
                      placeholder="Jane Doe"
                      autoComplete="name"
                      aria-invalid={state.errors.name || undefined}
                      aria-describedby={
                        state.errors.name ? "intake-name-err" : undefined
                      }
                      onChange={(e) =>
                        dispatch({
                          type: "setField",
                          field: "name",
                          value: e.target.value,
                        })
                      }
                    />
                    <span
                      className="err-msg"
                      id="intake-name-err"
                      hidden={!state.errors.name}
                    >
                      Enter your name.
                    </span>
                  </div>
                  <div className="field">
                    <label htmlFor="intake-email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="intake-email"
                      type="email"
                      className={cn("input", state.errors.email && "field-error")}
                      value={state.email}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      aria-invalid={state.errors.email || undefined}
                      aria-describedby={
                        state.errors.email ? "intake-email-err" : undefined
                      }
                      onChange={(e) =>
                        dispatch({
                          type: "setField",
                          field: "email",
                          value: e.target.value,
                        })
                      }
                    />
                    <span
                      className="err-msg"
                      id="intake-email-err"
                      hidden={!state.errors.email}
                    >
                      Enter a valid email.
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="intake-company">
                    Company <span className="text-ink-400">(optional)</span>
                  </label>
                  <input
                    id="intake-company"
                    className="input"
                    value={state.company}
                    placeholder="Acme Inc."
                    autoComplete="organization"
                    onChange={(e) =>
                      dispatch({
                        type: "setField",
                        field: "company",
                        value: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="field">
                  <label htmlFor="intake-details">
                    Anything else? <span className="text-ink-400">(optional)</span>
                  </label>
                  <textarea
                    id="intake-details"
                    className="textarea"
                    value={state.details}
                    placeholder="Links, deadlines, must-haves…"
                    onChange={(e) =>
                      dispatch({
                        type: "setField",
                        field: "details",
                        value: e.target.value,
                      })
                    }
                  />
                </div>
              </>
            )}

            {state.step === 4 && (
              <>
                <StepHead
                  headingRef={headingRef}
                  title="Review & send"
                  sub="Here's your project at a glance."
                />
                <dl className="m-0">
                  <div className="summary-row">
                    <dt className="k">Project type</dt>
                    <dd className="v m-0">{selectedType.name}</dd>
                  </div>
                  <div className="summary-row">
                    <dt className="k">Features</dt>
                    <dd className="v m-0">
                      {selectedFeatures.length
                        ? selectedFeatures.map((f) => f.name).join(", ")
                        : "Core only"}
                    </dd>
                  </div>
                  <div className="summary-row">
                    <dt className="k">Timeline</dt>
                    <dd className="v m-0">{selectedTimeline.name}</dd>
                  </div>
                  <div className="summary-row">
                    <dt className="k">Contact</dt>
                    <dd className="v m-0">
                      {(state.name || "—") +
                        (state.email ? " · " + state.email : "")}
                    </dd>
                  </div>
                </dl>
                <div className="estimate" style={{ marginTop: "1.4rem" }}>
                  <span className="lbl">Estimated range</span>
                  <span className="amt grad-text">{estimateText}</span>
                </div>
                <p className="form-note" style={{ marginTop: ".9rem" }}>
                  {"This is a ballpark from your selections — your real quote comes after a quick discovery call. No commitment."}
                </p>
              </>
            )}

            {submitError && (
              <p className="err-msg mt-[0.9rem]" role="alert">
                {submitError}
              </p>
            )}

            <div className="wiz-nav">
              <button
                type="button"
                className={cn("btn btn-ghost", state.step === 0 && "invisible")}
                disabled={submitting}
                onClick={() => dispatch({ type: "back" })}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={submitting}
                onClick={() => (lastStep ? handleSend() : dispatch({ type: "next" }))}
              >
                {lastStep ? (submitting ? "Sending…" : "Send project →") : "Continue →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
