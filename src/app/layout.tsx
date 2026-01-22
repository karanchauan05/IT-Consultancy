import type { Metadata } from "next";
import { Inter, Roboto_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Temporary fix for build while using /# redirects elsewhere
  title: {
    template: '%s | NexusIT',
    default: 'NexusIT | Digital Transformation & Strategy',
  },
  description: "NexusIT helps organizations solve complexity through strategy, design, and technology. We drive digital transformation, scaling AI, and modernizing platforms for future growth.",
  keywords: ['Digital Transformation', 'AI Strategy', 'Software Engineering', 'Cloud Modernization', 'Data Analytics', 'Enterprise Tech'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/#/',
    siteName: 'NexusIT',
    title: 'NexusIT | Digital Transformation & Strategy',
    description: 'Solving complexity through strategy and design.',
    images: [
      {
        url: '/images/hero-impact.webp',
        width: 1200,
        height: 630,
        alt: 'NexusIT Digital Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusIT | Digital Transformation & Strategy',
    description: 'Solving complexity through strategy and design.',
    images: ['/images/hero-impact.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoSerif.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
