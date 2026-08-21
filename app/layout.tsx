import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://debuglab-eta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "DebugLab | Web Developer & Application Support",
    template: "%s | DebugLab",
  },

  description:
    "DebugLab is the portfolio of a junior web developer and application support specialist focused on debugging React, Next.js, TypeScript, Supabase, APIs and deployment issues.",

  keywords: [
    "Junior Web Developer",
    "Application Support",
    "Web Developer",
    "Debugging",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Supabase",
    "API Troubleshooting",
    "JavaScript Developer",
    "Remote Developer",
    "Technical Support",
    "Software Troubleshooting",
  ],

  authors: [
    {
      name: "DebugLab",
    },
  ],

  creator: "DebugLab",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "DebugLab",
    title: "DebugLab | Web Developer & Application Support",
    description:
      "Junior web developer and application support specialist focused on debugging modern web applications, APIs, databases and deployment issues.",
  },

  twitter: {
    card: "summary_large_image",
    title: "DebugLab | Web Developer & Application Support",
    description:
      "Junior web developer and application support specialist focused on debugging React, Next.js, TypeScript, Supabase, APIs and deployment issues.",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
  {children}

  <Script
    src="https://platform.linkedin.com/badges/js/profile.js"
    strategy="afterInteractive"
  />
</body>
    </html>
  );
}