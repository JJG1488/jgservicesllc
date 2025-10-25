import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingBudgetCTA from "@/components/FloatingBudgetCTA";
import DynamicTechBackground from "@/components/DynamicTechBackground";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = theme || systemTheme;
                  if (initialTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Ephesis&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <AuthProvider>
            <DynamicTechBackground mode="page-specific" />
            <div className="relative z-0">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <FloatingBudgetCTA />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
