// client/app/login/layout.tsx
import type { Metadata } from "next";
import "../globals.css";



export const metadata: Metadata = {
  title: "Login",
  description: "Login page for Shrimp Health Management",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
