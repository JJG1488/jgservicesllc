import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingBudgetCTA from "@/components/FloatingBudgetCTA";
import DynamicTechBackground from "@/components/DynamicTechBackground";
import ZapierChatbot from "@/components/ZapierChatbot";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

// Zapier chatbot types are defined in /src/types/zapier.d.ts

export const metadata: Metadata = {
  title: "JGServicesLLC - Professional Web Development",
  description: "Transforming everyday ideas into digital reality. Custom web development, responsive design, and SEO optimization services.",
  keywords: ["web development", "custom websites", "responsive design", "SEO optimization", "JGServicesLLC"],
  authors: [{ name: "James Gault" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "JGServicesLLC - Professional Web Development",
    description: "Transforming everyday ideas into digital reality.",
    url: "https://jgservicesllc.com",
    siteName: "JGServicesLLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jgservicesllc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "JGServicesLLC - Professional Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JGServicesLLC - Professional Web Development",
    description: "Transforming everyday ideas into digital reality.",
    images: ["https://jgservicesllc.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force dark mode always
                document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
        <script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script>
        
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
      <body className="min-h-screen flex flex-col bg-[#0a0e17] text-gray-100 transition-colors">
        <ThemeProvider>
          <AuthProvider>
            <DynamicTechBackground mode="page-specific" />
            <div className="relative z-0">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <ZapierChatbot chatbotId="cmhb5x5nh00awbrhjoqwao638" />
              
              <Footer />
            </div>
            <FloatingBudgetCTA />
          </AuthProvider>
        </ThemeProvider>
        
      </body>
      
    </html>
  );
}
