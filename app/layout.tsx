import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riteshkushwaha-portfolio.vercel.app"),
  title: {
    default: "Ritesh Kushwaha | Software Developer",
    template: "%s | Ritesh Kushwaha",
  },
  description: "Portfolio of Ritesh Kushwaha, a software developer focused on full-stack development, MERN applications, and competitive programming.",
  keywords: [
    "Ritesh Kushwaha",
    "Software Developer",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Portfolio",
    "Competitive Programmer",
  ],
  authors: [{ name: "Ritesh Kushwaha" }],
  creator: "Ritesh Kushwaha",
  openGraph: {
    title: "Ritesh Kushwaha | Software Developer",
    description: "Full-stack developer portfolio featuring projects, skills, resume, and experience.",
    url: "https://riteshkushwaha-portfolio.vercel.app",
    siteName: "Ritesh Kushwaha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritesh Kushwaha | Software Developer",
    description: "Full-stack developer portfolio featuring projects, skills, resume, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

