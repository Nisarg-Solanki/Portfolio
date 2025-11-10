import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const domain = process.env.NEXT_PUBLIC_DOMAIN || "";

export const metadata: Metadata = {
  title: "Portfolio - Nisarg Solanki",
  description: "MERN / Senior Frontend Developer Portfolio",

  openGraph: {
    title: "Portfolio - Nisarg Solanki",
    description: "MERN / Senior Frontend Developer Portfolio",
    url: domain,
    siteName: "Nisarg Solanki Portfolio",
    images: [
      {
        url: `${domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Preview image for Nisarg Solanki Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Nisarg Solanki",
    description: "MERN / Senior Frontend Developer Portfolio",
    images: [`${domain}/og-image.png`],
  },

  icons: {
    icon: "/favicon.svg",
  },
  
  other: {
    keywords:
      "Nisarg, Nisarg Solanki, MERN Stack Developer, Frontend Developer, React Developer, JavaScript, TypeScript, Node.js, Next.js, Web Developer, Portfolio, Full Stack Developer, UI Developer",
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
