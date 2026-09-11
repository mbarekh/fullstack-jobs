import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "./components/site-header";
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
  metadataBase: new URL("https://fullstackjobs.dev"),
  title: "Fullstack Jobs",
  description: "Developers jobs with insight into salary, scope, and stack.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Fullstack Jobs",
    title: "Fullstack Jobs",
    description: "Developers jobs with insight into salary, scope, and stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fullstack Jobs",
    description: "Developers jobs with insight into salary, scope, and stack.",
    images: ["/opengraph-image"],
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
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
