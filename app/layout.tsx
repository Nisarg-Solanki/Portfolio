import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
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
    icon: "/favicon.svg",
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
        <meta name="robots" content="index, follow" />
        {/* 👇 Pre-hydration theme fix */}
        {/* <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored || (prefersDark ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (_) {}
            })();
          `}
        </Script> */}
      </head>

      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
