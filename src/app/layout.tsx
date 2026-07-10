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
  title: "Spur AI — Turn LinkedIn Into Your #1 B2B Lead Source",
  description:
    "AI-powered LinkedIn content engine for B2B consultants, coaches, and agency owners. Generate compelling posts, attract ideal clients, and close more deals.",
  keywords: [
    "LinkedIn content AI",
    "B2B leads LinkedIn",
    "LinkedIn growth tool",
    "AI post generator",
    "agency owner LinkedIn",
  ],
  openGraph: {
    title: "Spur AI — Turn LinkedIn Into Your #1 B2B Lead Source",
    description:
      "AI-powered LinkedIn content engine for B2B consultants, coaches, and agency owners.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spur AI — LinkedIn Lead Machine",
    description: "Stop losing clients to competitors who post consistently on LinkedIn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
