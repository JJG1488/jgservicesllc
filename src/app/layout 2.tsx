import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JGServicesLLC - Professional Web Development",
  description: "Transforming everyday ideas into digital reality. Custom web development, responsive design, and SEO optimization services.",
  keywords: ["web development", "custom websites", "responsive design", "SEO optimization", "JGServicesLLC"],
  authors: [{ name: "James Gault" }],
  openGraph: {
    title: "JGServicesLLC - Professional Web Development",
    description: "Transforming everyday ideas into digital reality.",
    url: "https://jgservicesllc.com",
    siteName: "JGServicesLLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
