'use client'

import { useState } from 'react'
import Image from "next/image"
import { HyperText } from "@/components/magicui/hyper-text"
import Link from "next/link"
import { GoArrowUpRight } from 'react-icons/go'
import MenuFooter from './MenuFooter'
import SlidingMenu from './SlidingMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="p-2 lg:p-6 lg:pb-1 m-0 fixed top-0 left-0 right-0 z-50 bg-grainy">
        <div className="flex items-center justify-between h-16 outline outline-[1.5px] outline-charcoal">
          {/* Logo Section */}
          <div className="h-full w-20 lg:w-32 flex justify-center items-center text-sm p-0 cursor-pointer">
            <Link href="/" passHref>
              <Image
                src="/icon.png"
                alt="hackersmang-logo"
                width={48}
                height={48}
                className="rounded-full cursor-pointer"
              />
            </Link>
          </div>

          {/* Menu Button */}
          <div className="h-full w-20 lg:w-36 flex justify-center items-center outline outline-[1.5px] outline-charcoal text-sm p-0">
            <button onClick={toggleMenu} className="w-full h-full flex items-center justify-center">
              <HyperText
                className="outfit-bold text-secondary cursor-pointer"
                text={isMenuOpen ? "CLOSE" : "EVENTS"}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Sliding Menu */}
      <SlidingMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}