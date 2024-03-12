import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { siteConfig } from "@/config/site";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seiwarriors.xyz"),
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/images/warriors-logo.png",
      href: "/images/warriors-logo.png",
    },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "seiwarriors.xyz",
    siteName: "Sei Warriors",
    images: [
      {
        url: "/images/banner-red.png",
        width: 1200,
        height: 630,
        alt: "Sei Warriors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    site: "@SeiWarriorNFT",
    images: [
      {
        url: "/images/banner-red.png",
        width: 1200,
        height: 630,
        alt: "Sei Warriors",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex h-screen">{children}</main>
      </body>
    </html>
  );
}
