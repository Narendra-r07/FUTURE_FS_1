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
  title: "Narendra Rajput | AI & Data Science Engineer | Portfolio",

  description:
    "Narendra Rajput's portfolio — AI & Data Science Engineer, Machine Learning and Python Developer from Mumbai, India.",

  keywords: [
    "Narendra Rajput",
    "Narendra Rajput portfolio",
    "Narendra Rajput AI",
    "Narendra Rajput Data Science",
    "Narendra Rajput Machine Learning",
    "Narendra Rajput Python Developer",
    "AI Data Science Engineer",
    "Machine Learning Developer",
    "Python Developer Mumbai",
  ],

  authors: [{ name: "Narendra Rajput" }],
  creator: "Narendra Rajput",

  metadataBase: new URL("https://narendra-rajput-portfolio.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Narendra Rajput | AI & Data Science Engineer",
    description:
      "Portfolio of Narendra Rajput — AI, Machine Learning, Data Science and Full Stack Development.",
    url: "https://narendra-rajput-portfolio.vercel.app",
    siteName: "Narendra Rajput Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/ironman.png",
    shortcut: "/ironman.png",
    apple: "/ironman.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}