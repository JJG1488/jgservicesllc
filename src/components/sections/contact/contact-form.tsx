"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { submitContact } from "@/app/(site)/contact/actions";
import {
  BUDGET_RANGES,
  contactSchema,
  PROJECT_TYPES,
  type ContactFormData,
} from "@/lib/contact-schema";

/* Honeypot field styling: keep the input out of sight and out of the tab
   order, but NOT display:none/sr-only — bots skip fields they can detect
   as hidden, so it must stay "visible" to them. */
const HONEYPOT_STYLE: CSSProperties = {
  position: "absolute",
  left: "-9999px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
};

export function ContactForm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: PROJECT_TYPES[0], budget: BUDGET_RANGES[0] },
  });

  /* Mirror the prototype: scroll the success card into view once it renders,
     and move focus to its heading so screen readers announce the result. */
  useEffect(() => {
    if (submittedName === null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    wrapRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    successHeadingRef.current?.focus({ preventScroll: true });
  }, [submittedName]);

  async function onSubmit(data: ContactFormData) {
    setServerError("");
    const result = await submitContact(data);
    if (result.success) {
      setSubmittedName(data.name.split(" ")[0]);
    } else {
      setServerError(result.error ?? "Failed to send message. Please try again.");
    }
  }

  if (submittedName !== null) {
    return (
      <div className="surface p-8" ref={wrapRef}>
        <div className="form-ok" role="status">
          <div className="ic">
            <Icon name="check" size={30} sw={2} />
          </div>
          <h3
            ref={successHeadingRef}
            tabIndex={-1}
            className="m-0 mt-[0.4rem] text-[1.4rem] font-bold text-ink-100 outline-none"
          >
            Message sent
          </h3>
          <p className="m-0 max-w-[38ch] text-ink-300">
            Thanks, {submittedName} &mdash; we&apos;ll get back to you within one
            business day. Want to skip ahead?
          </p>
          <div className="mt-[0.6rem] flex flex-wrap justify-center gap-[0.7rem]">
            <Link href="/intake" className="btn btn-primary">
              Start the intake
            </Link>
            <Link href="/schedule" className="btn btn-ghost">
              Book a call
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="surface p-8" ref={wrapRef}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot — humans never see this field; the server silently drops
            any submission where it is filled in. */}
        <div style={HONEYPOT_STYLE} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">
              Name <span className="req">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className={cn("input", errors.name && "field-error")}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-err" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <span className="err-msg" id="name-err">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="field">
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="jane@company.com"
              className={cn("input", errors.email && "field-error")}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-err" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <span className="err-msg" id="email-err">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="type">Project type</label>
            <select id="type" className="select" {...register("type")}>
              {PROJECT_TYPES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="budget">Budget range</label>
            <select id="budget" className="select" {...register("budget")}>
              {BUDGET_RANGES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">
            Project details <span className="req">*</span>
          </label>
          <textarea
            id="message"
            placeholder="What are you building? What problem does it solve? Any deadlines we should know about?"
            className={cn("textarea", errors.message && "field-error")}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-err" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <span className="err-msg" id="message-err">
              {errors.message.message}
            </span>
          )}
        </div>

        {serverError && (
          <p className="err-msg mb-[0.9rem]" role="alert">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary w-full justify-center"
          disabled={isSubmitting}
        >
          Send message
        </button>
        <p className="form-note mt-[0.9rem] text-center">
          By sending, you agree to our{" "}
          <Link href="/privacy" className="text-sapphire-300">
            privacy policy
          </Link>
          . We never share your info.
        </p>
      </form>
    </div>
  );
}
