import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";

const siteUrl = "https://mayowa-sunusi.dev";
const defaultOgImage = `${siteUrl}/og.png`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Mayowa Sunusi Usman – Premium Frontend Portfolio",
  description:
    "Frontend developer crafting premium React, Next.js, Vue, Nuxt experiences with motion, performance, and polish.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Frontend developer",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "GSAP",
    "Framer Motion",
    "UI engineer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Mayowa Sunusi Usman", url: siteUrl }],
  creator: "Mayowa Sunusi Usman",
  publisher: "Mayowa Sunusi Usman",
  applicationName: "Mayowa Sunusi Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mayowa Sunusi Usman",
    description:
      "Frontend developer crafting premium React, Next.js, Vue, Nuxt experiences with motion, performance, and polish.",
    url: siteUrl,
    siteName: "Mayowa Sunusi Usman",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Mayowa Sunusi Usman Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayowa Sunusi Usman",
    description:
      "Frontend developer crafting premium React, Next.js, Vue, Nuxt experiences with motion, performance, and polish.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mayowa Sunusi Usman",
    url: siteUrl,
    jobTitle: "Frontend Engineer",
    sameAs: [siteUrl],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mayowa Sunusi Usman Portfolio",
    url: siteUrl,
    description:
      "Frontend developer crafting premium React, Next.js, Vue, Nuxt experiences with motion, performance, and polish.",
    inLanguage: "en",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-gray-950 text-gray-100 antialiased dark:bg-gray-950 dark:text-gray-100",
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <ThemeProvider>
          <LenisProvider>
            <div id="main-content">{children}</div>
          </LenisProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
