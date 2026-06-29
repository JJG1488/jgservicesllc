"use client";

import { useActionState } from "react";
import { login, type LoginResult } from "@/app/admin/auth-actions";

/* Admin sign-in form. Submits the password to the `login` server action via
   useActionState; on success the action sets the session cookie and redirects,
   so this only ever renders the error path. */
export function LoginForm({ from }: { from?: string }) {
  const [state, formAction, pending] = useActionState<
    LoginResult | undefined,
    FormData
  >(login, undefined);

  return (
    <form action={formAction}>
      <input type="hidden" name="from" value={from ?? "/admin"} />
      <div className="field">
        <label htmlFor="admin-password">Password</label>
        <input
          id="admin-password"
          name="password"
          type="password"
          className="input"
          autoComplete="current-password"
          autoFocus
          required
          aria-describedby={state?.error ? "admin-password-err" : undefined}
        />
      </div>
      {state?.error && (
        <p className="err-msg mb-[0.9rem]" id="admin-password-err" role="alert">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        className="btn btn-primary w-full justify-center"
        disabled={pending}
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
