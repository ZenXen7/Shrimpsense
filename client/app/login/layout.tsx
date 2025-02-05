import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Login - ShrimpSense",
  description: "Login to your ShrimpSense dashboard",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

