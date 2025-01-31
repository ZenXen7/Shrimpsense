
import { NAV_LINKS } from "@/constants"
import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link"
import { Book } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/Shrimp.png" alt="logo" width={70} height={60} />
        <h1 className="text-xl font-semibold text-cyan-900 leading-tight tracking-tight">Shrimp<i className="font-medium">Sense </i></h1>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button variant="outline" className="bg-green-600 text-white">
          <Book /> Book a demo
        </Button>
        <Button asChild variant="outline" className="bg-blue-700 text-white ml-3">
        <Link href="/login">
        
            <CircleUserRound /> Login to your account
          </Link>
        </Button>
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar
