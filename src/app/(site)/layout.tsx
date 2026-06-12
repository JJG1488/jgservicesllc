import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/* Marketing chrome: every public page gets the glass nav + footer.
   The /admin app shell deliberately lives outside this group. */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
