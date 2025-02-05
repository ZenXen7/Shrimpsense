"use client";

import Example from "@/components/landing/Example";

import Guide from "@/components/landing/Guide";
import Hero from "@/components/landing/Hero";
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import ServicesOffered from "@/components/landing/ServicesOffered";



export default function Home() {
  const router = useRouter()

  useEffect(() => {
   
    router.refresh()
  }, [router])

  
  return (
    <>
       <Hero />
       <Example/>
       <Guide/>
      <ServicesOffered/>
    </>
  )
}
