import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hackerspace Mangaluru",
  description: "Hackerspace Mangaluru - Hosts Talks & Workshops on latest Open Source technologies & works towards building a thriving tech ecosystem in Mangaluru.",
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
      </body>
    </html>
  );
}
