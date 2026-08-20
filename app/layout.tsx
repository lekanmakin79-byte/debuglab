import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debugging & Application Support | Web Developer",
  description:
    "Junior web developer specialising in debugging, application support, Next.js, React, TypeScript, Supabase and API troubleshooting.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}