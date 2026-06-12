import { Playfair_Display, Sora, JetBrains_Mono, Ephesis } from "next/font/google";

/* Sapphire Atelier type system:
   Playfair Display — display headings (.display)
   Sora             — UI / body (workhorse)
   JetBrains Mono   — kickers, chips, metadata, terminal
   Ephesis          — "JG Services LLC" wordmark only */

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
});

export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const ephesis = Ephesis({
  subsets: ["latin"],
  variable: "--font-ephesis",
  display: "swap",
  weight: "400",
});
