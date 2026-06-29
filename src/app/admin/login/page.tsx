import type { Metadata } from "next";
import { BrandMark } from "@/components/ui/brand-mark";
import { LoginForm } from "@/components/admin/login-form";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Admin sign in",
    description: "Sign in to the JG Services LLC admin dashboard.",
    path: "/admin/login",
  }),
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;

  return (
    <main className="grid min-h-screen place-items-center p-6">
      <div className="surface w-full max-w-[380px] p-8">
        <div className="brand mb-6 flex items-center gap-[0.5rem]">
          <BrandMark />
          <span className="brand-word grad-text">JG Admin</span>
        </div>
        <h1 className="display mb-[0.3rem] text-[1.5rem]">Sign in</h1>
        <p className="mb-6 text-[0.9rem] text-ink-300">
          Enter the admin password to continue.
        </p>
        <LoginForm from={from} />
      </div>
    </main>
  );
}
