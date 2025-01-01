import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Mode from "@/components/darkMode";
import Footer from "@/components/footer/footer";
import Herosec from "@/components/herosec/herosec";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "The Blog - Explore insightful blogs on technology, programming, and development. Stay updated with expert tips, tutorials, and the latest trends in web development and AI.",
    template:
      "%s - Explore insightful blogs on technology, programming, and development. Stay updated with expert tips, tutorials, and the latest trends in web development and AI.",
  },
  description:
    "Explore expert-written blogs on technology, coding, and innovation. Unlock knowledge with guides, tips, and industry updates designed for developers",

    twitter: {
    card: "summary_large_image", // Use a large image card for better visibility
    title:
      "The Blog - Explore insightful blogs on technology, programming, and development. Stay updated with expert tips, tutorials, and the latest trends in web development and AI",
    description:
      "Explore expert-written blogs on technology, coding, and innovation. Unlock knowledge with guides, tips, and industry updates designed for developers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Mode}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} max-w-[1300px] mx-auto dark:text-gray-300 dark:bg-[#090d1f] antialiased`}
      >
        <div className="min-h-screen w-full flex flex-col justify-between">
          <div>
            <Header />
            <Herosec />
            <main>{children}</main>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
