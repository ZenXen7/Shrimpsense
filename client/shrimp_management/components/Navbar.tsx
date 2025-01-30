import { NAV_LINKS } from "@/constants"
import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomBtn"


const Navbar = () => {
  return (
    <nav className="flexBetween
     max-container padding-container relative z-30 py-5">
        <Link href="/">
        <Image src="/shrimp.svg" alt="logo" width={150} height={30} />
        
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button variant="outline" className="bg-blue-700 text-white">Login</Button>
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
