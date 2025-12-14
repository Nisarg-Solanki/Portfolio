import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

export const metadata: Metadata = {
  title: "Nisarg Solanki | MERN Stack & Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Nisarg Solanki, a MERN Stack and Frontend Developer specializing in React, Next.js, and modern web applications.",
  keywords: [
    "Nisarg Portfolio",
    "Nisarg CV",
    "Nisarg Solanki",
    "MERN Stack Developer",
    "Portfolio",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Full Stack Developer",
  ],

  openGraph: {
    title: "Nisarg Solanki | MERN Stack & Frontend Developer Portfolio",
    description:
      "Explore the professional portfolio of Nisarg Solanki — MERN Stack & Frontend Developer.",
    url: domain,
    siteName: "Nisarg Solanki Portfolio",
    images: [
      {
        url: `${domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Nisarg Solanki Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nisarg Solanki | MERN Stack & Frontend Developer Portfolio",
    description:
      "Portfolio of Nisarg Solanki — showcasing React, Next.js, and MERN stack projects.",
    images: [`${domain}/og-image.png`],
  },

  icons: {
    icon: [
      { url: `${domain}/favicon.ico`, sizes: "any" },
      { url: `${domain}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${domain}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${domain}/favicon-48x48.png`, sizes: "48x48", type: "image/png" },
    ],
    shortcut: [{ url: `${domain}/favicon.ico` }],
    apple: [{ url: `${domain}/apple-touch-icon.png`, sizes: "180x180" }],
    other: [
      {
        rel: "manifest",
        url: `${domain}/site.webmanifest`,
      },
      {
        rel: "icon",
        url: `${domain}/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: `${domain}/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
      </head>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
