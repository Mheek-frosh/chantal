import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import { StructuredData } from "@/components/structured-data";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], display: "swap", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ShapeHaus | Postpartum Recovery, Core Strength & Body Revitalization",
  description: "Premium, personalized postpartum recovery, core restoration, mobility, and body revitalization for women and men.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website", url: "/", siteName: "ShapeHaus",
    title: "ShapeHaus | Come Back To Your Strength.",
    description: "Personalized postpartum recovery, core restoration, mobility, and body revitalization for women and men.",
    images: [{ url: "/og.png", width: 1792, height: 922, alt: "ShapeHaus — Come Back To Your Strength." }],
  },
  twitter: { card: "summary_large_image", title: "ShapeHaus | Come Back To Your Strength.", description: "Expert-guided recovery and intelligent strength for women and men.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <div id="main-content">{children}</div>
        <StructuredData />
      </body>
    </html>
  );
}
