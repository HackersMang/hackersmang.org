"use client"

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexCenter padding-container relative z-30 py-5">
      <Link href="/ai-techverse" className="view pt-2">
        <Image src="/ai-techverse/ai-techverse.svg" alt="ai-techverse logo" width={120} height={45} className="w-40 h-auto" />
      </Link>
    </nav>
  )
}

export default Navbar