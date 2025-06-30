
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Serif_Display } from 'next/font/google';
import { Playfair_Display, Inter } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

// ✅ Metadata export
export const metadata: Metadata = {
  title: "Mulge",
  description: "Developer",
  keywords: [
    "Next.js",
    "Portfolio",
    "Web Development",
    "React",
    "GoLang",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Prisma",
    "GraphQL",
    "REST API",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "JWT",
    "Authentication",
    "Fullstack Development",
    "Frontend",
    "Backend",
    "Microservices",
    "Cloud Computing",
    "Git",
    "CI/CD",
    "JavaScript",
    "API Development",
    "Web3",
    "Real-time Apps",
    "Redis",
    "gRPC",
    "SQL",
    "NoSQL",
    "Serverless",
    "Open Source",
    "Software Engineering"
  ],  
  authors: [{ name: "Channveer Mulge", url: "https://github.com/c-mulge" }],
  creator: "Channveer Mulge",
  openGraph: {
    title: "C-Mulge-Portfolio",
    description: "Developer",
    url: "https://github.com/c-mulge",
    siteName: "C-Mulge Portfolio",
    images: [
      {
        url: "./profile_pic.png",
        width: 1200,
        height: 630,
        alt: "OG Image Alt Text",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/profile_pic.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
