import type { Metadata } from "next";
import { siteConfig } from "../../site.config";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  /* Full branded string for social cards (og/twitter ignore the root
     layout's title template). */
  const brandedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Web Development & Digital Solutions`;
  const pageDescription = description || siteConfig.description;

  return {
    /* Bare page title only — the root layout's title template appends
       "| JG Services LLC". An absolute title opts out of the template
       so the default never gets double-branded. */
    title: title ?? { absolute: brandedTitle },
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: brandedTitle,
      description: pageDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description: pageDescription,
    },
  };
}
