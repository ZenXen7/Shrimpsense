import type { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Login - ShrimpSense",
  description: "Login to your ShrimpSense dashboard",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
     
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-blue-900">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <LoginForm />
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-[#2563EB] underline-offset-4 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:block relative bg-[#2563EB]/5">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-800/50"></div>
        <div className="relative h-full flex items-center justify-center p-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-[#2563EB]">ShrimpSense</h2>
            <p className="text-xl text-muted-foreground">Smarter farming, healthier shrimp.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

