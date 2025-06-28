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
  title: "Asgaia Labs — Tools for Neurodivergent Minds",
  description: "Empowering neurodivergent individuals with inclusive, accessible tools.",
  openGraph: {
    title: "Asgaia Labs — Tools for Neurodivergent Minds",
    description: "Empowering neurodivergent individuals with inclusive, accessible tools.",
    url: "https://asgaialabs.com",
    siteName: "Asgaia Labs",
    images: [
      {
        url: "https://asgaialabs.com/asgaia.jpg", 
        width: 1200,
        height: 630,
        alt: "Asgaia Labs logo and tagline",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://asgaialabs.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Asgaia Labs — Tools for Neurodivergent Minds",
    description: "Empowering neurodivergent individuals with inclusive, accessible tools.",
    images: ["https://asgaialabs.com/asgaia.jpg"],
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
