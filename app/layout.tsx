import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://hackersmang.org'),
  title: "Hackerspace Mangaluru",
  description: "Hackerspace Mangaluru - Hosts Talks & Workshops on latest Open Source technologies & works towards building a thriving tech ecosystem in Mangaluru.",
  generator: 'Hackerspace Mangaluru',
  applicationName: 'Hackerspace Mangaluru',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Hackerspace' }, { name: 'Mangaluru', url: 'https://hackersmang.org' }],
  creator: 'Mashfooq Hussain',
  publisher: 'Hackerspace Mangaluru',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Hackerspace Mangaluru',
    description: 'Hackerspace Mangaluru - Hosts Talks & Workshops on latest Open Source technologies & works towards building a thriving tech ecosystem in Mangaluru.',
    url: 'https://hackersmang.org',
    siteName: 'Hackerspace Mangaluru',
    images: [
      {
        url: 'https://hackersmang.org/opengraph-image.jpeg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://hackersmang.org/opengraph-image.jpeg',
        width: 1800,
        height: 1600,
        alt: 'Hackerspace Mangaluru',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hackerspace Mangaluru',
    description: 'Hackerspace Mangaluru - Hosts Talks & Workshops on latest Open Source technologies & works towards building a thriving tech ecosystem in Mangaluru.',
    images: 'https://hackersmang.org/twitter-image.jpeg'
  },
  bookmarks: ['https://hackersmang.org'],
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
