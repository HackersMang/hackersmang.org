"use client"

import { NAV_LINKS } from "@/app/ai-techverse/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexCenter md:flexBetween padding-container relative z-30 py-5">
      <Link href="/" className="view pt-2">
        <Image src="/ai-techverse/ai-techverse.svg" alt="ai-techverse logo" width={120} height={45} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden flex-row fixed top-3 right-5 gap-6 md:flex nav-bar-right-top">
        {
          NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 backdrop-blur-lg text-[#9b9b9b] hover:text-black flexCenter transition-all nav-link py-2 px-4 rounded-lg">
              {link.label}
            </Link>
          ))
        }
      </ul>

      {/* Mobile Menu */}
      <ul className="md:hidden flex flex-col fixed bottom-20 right-4 nav-bar-right-bottom">
        {
          NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="backdrop-blur-lg text-[#9b9b9b] hover:text-black regular-16 rounded-lg flexCenter mb-2 last:mb-0 px-2 py-6 transition-all nav-link">
              {link.label}
            </Link>
          ))
        }
      </ul>

    </nav>
  )
}

export default Navbar