import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mendo Grass - Premium Organic Microgreens & Wheatgrass | Mendocino County, CA",
    template: "%s | Mendo Grass"
  },
  description: "Fresh, sun-grown organic microgreens and wheatgrass delivered weekly in Mendocino County. Farm-to-table nutrition with convenient subscription service. USDA Certified Organic.",
  keywords: [
    "microgreens",
    "wheatgrass", 
    "organic",
    "Mendocino County",
    "Ukiah",
    "farm fresh",
    "CSA",
    "subscription",
    "farmers market",
    "local delivery",
    "nutrition",
    "superfood"
  ],
  authors: [{ name: "Mendo Grass" }],
  creator: "Mendo Grass",
  publisher: "Mendo Grass",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mendograss.com',
    siteName: 'Mendo Grass',
    title: 'Mendo Grass - Premium Organic Microgreens & Wheatgrass',
    description: 'Fresh, sun-grown organic microgreens and wheatgrass delivered weekly in Mendocino County. USDA Certified Organic.',
    images: [
      {
        url: '/images/hero.svg',
        width: 1200,
        height: 630,
        alt: 'Mendo Grass - Fresh Organic Microgreens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mendo Grass - Premium Organic Microgreens & Wheatgrass',
    description: 'Fresh, sun-grown organic microgreens and wheatgrass delivered weekly in Mendocino County.',
    images: ['/images/hero.svg'],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://mendograss.com',
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        <link rel="canonical" href="https://mendograss.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}
