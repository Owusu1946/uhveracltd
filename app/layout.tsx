import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ogImage, siteConfig, siteUrl } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.legalName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Uhverac",
    "Ghana",
    "IT services",
    "consultancy",
    "trading",
    "travel",
    "Accra",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: siteConfig.legalName,
    title: siteConfig.ogTitle,
    description: siteConfig.description,
    images: [
      {
        url: ogImage.path,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.ogTitle,
    description: siteConfig.description,
    images: [ogImage.path],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
