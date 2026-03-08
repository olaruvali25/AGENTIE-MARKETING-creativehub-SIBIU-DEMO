import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Agenție de Marketing în România | PPC, SEO și Landing Pages",
  description:
    "Agenție de marketing din România specializată în Google Ads, Meta Ads, SEO și landing pages orientate spre lead-uri și vânzări.",
  keywords: [
    "agenție marketing România",
    "Google Ads România",
    "Meta Ads România",
    "SEO România",
    "landing page marketing",
    "agenție PPC Sibiu"
  ],
  openGraph: {
    title: "Agenție de Marketing în România | PPC, SEO și Landing Pages",
    description:
      "Strategii de marketing plătit, SEO și pagini de conversie pentru branduri care vor creștere reală.",
    type: "website",
    locale: "ro_RO"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
