import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";




export const metadata: Metadata = {
  title: "Shrimp",
  description: "Shrimp ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar/>
        <main className="relative overflow-hidden">

        {children}
        </main>
        
        <FooterSection/>
      </body>
    </html>
  );
}
