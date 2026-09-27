import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { salon } from "@/data/salon";
import "./globals.css";

// latin-ext je obavezan za č, ć, đ, š, ž u svim težinama
const heading = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["800", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(salon.siteUrl),
  title: `${salon.name} — ${salon.tagline}`,
  description: salon.description,
  applicationName: salon.name,
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: salon.name,
    title: `${salon.name} — naručite se u deset sekundi`,
    description: salon.description,
    url: salon.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${salon.name} — naručite se u deset sekundi`,
    description: salon.description,
  },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F4F6F5",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-svh">{children}</body>
    </html>
  );
}
