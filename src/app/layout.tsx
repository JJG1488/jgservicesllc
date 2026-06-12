import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { playfair, sora, jetbrainsMono, ephesis } from "@/lib/fonts";
import { ScrollProvider } from "@/components/layout/scroll-provider";
import { siteConfig } from "../../site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JG Services LLC | Web Development & Digital Solutions",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "JG Services LLC | Web Development & Digital Solutions",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sora.variable} ${jetbrainsMono.variable} ${ephesis.variable}`}
    >
      <body className="antialiased">
        {/* Jewel-tone backdrop + drifting aurora (decorative) */}
        <div className="app-bg" aria-hidden="true" />
        <div className="aurora a" aria-hidden="true" />
        <div className="aurora b" aria-hidden="true" />
        <div className="aurora c" aria-hidden="true" />
        <MotionConfig reducedMotion="user">
          <ScrollProvider>{children}</ScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
