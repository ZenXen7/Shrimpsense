// client/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import FooterSection from "@/components/landing/FooterSection";

export const metadata: Metadata = {
  title: "Shrimp",
  description: "Shrimp Health Management",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
