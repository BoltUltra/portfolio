import type { Metadata } from "next";
import { ClientLayout } from "@/components/layout/client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mayowa Sunusi | Frontend Engineer",
    template: "%s | Mayowa Sunusi",
  },
  description:
    "Portfolio of Mayowa Sunusi, a Frontend Engineer specializing in React, Next.js, Vue, and high-performance craft.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "Vue.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Mayowa Sunusi" }],
  creator: "Mayowa Sunusi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mayowasunusi.site",
    title: "Mayowa Sunusi | Frontend Engineer",
    description:
      "Portfolio of Mayowa Sunusi, a Frontend Engineer specializing in React, Next.js, Vue, and high-performance craft.",
    siteName: "Mayowa Sunusi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayowa Sunusi | Frontend Engineer",
    description:
      "Portfolio of Mayowa Sunusi, a Frontend Engineer specializing in React, Next.js, Vue, and high-performance craft.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          * {
            cursor: none !important;
          }
          html, body {
            cursor: none !important;
          }
          html {
            scroll-behavior: auto;
          }
        `}</style>
      </head>
      <body className="bg-black text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
