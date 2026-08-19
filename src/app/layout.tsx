import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nakka Ram Uttang Naidu | Backend AI Engineer",
  description:
    "Personal portfolio of Nakka Ram Uttang Naidu — B.Tech AI & ML student at ACE Engineering College Hyderabad, GATE DA AIR 2604, Backend AI Engineer Intern at FlyRank AI. Specializing in FastAPI, RAG, AI Agents, and full-stack development.",
  keywords: [
    "Nakka Ram Uttang Naidu",
    "Backend AI Engineer",
    "FlyRank AI",
    "AI ML developer",
    "FastAPI",
    "RAG",
    "GATE DA",
    "ACE Engineering College",
    "portfolio",
  ],
  authors: [{ name: "Nakka Ram Uttang Naidu" }],
  openGraph: {
    title: "Nakka Ram Uttang Naidu | Backend AI Engineer",
    description:
      "B.Tech AI & ML student, GATE DA AIR 2604, Backend AI Engineer Intern at FlyRank AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakka Ram Uttang Naidu | Backend AI Engineer",
    description:
      "B.Tech AI & ML student, GATE DA AIR 2604, Backend AI Engineer Intern at FlyRank AI",
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
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="bg-[#030712] text-white min-h-screen antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
