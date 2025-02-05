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
          <div className="space-y-3 text-center">
            
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight tracking-tight">
        ShrimpSense
        </h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account.</p>
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

      <div className="hidden lg:block relative bg-[url('/loginShrimp.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-800/50"></div>
        <div className="relative h-full flex items-center justify-center p-8">
        
        </div>
      </div>
    </div>
  )
}

