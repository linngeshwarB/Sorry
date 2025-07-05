import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Shreya! 🎉",
  description: "A special apology website with love, laughter, and birthday wishes for the amazing Shreya!",
  keywords: ["birthday", "apology", "celebration", "friendship", "Shreya"],
  authors: [{ name: "Your Friend" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-emoji.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Happy Birthday Shreya! 🎉",
    description: "A special apology website with love, laughter, and birthday wishes!",
    type: "website",
    images: [
      {
        url: '/favicon.svg',
        width: 64,
        height: 64,
        alt: 'Birthday Cake',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Happy Birthday Shreya! 🎉",
    description: "A special apology website with love, laughter, and birthday wishes!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
