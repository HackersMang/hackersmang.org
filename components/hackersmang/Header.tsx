'use client'

import { useState } from 'react'
import Image from "next/image"
import { HyperText } from "@/components/magicui/hyper-text"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="m-2 mt-2 lg:m-6 lg:mb-1 p-0 outline outline-[1.5px] outline-[#2b2828] fixed top-0 left-0 right-0 z-50 bg-grainy">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="h-full w-20 lg:w-32 flex justify-center items-center text-sm p-0 cursor-pointer">
            <Link href="/" passHref>
              <Image
                src="/hackerspace-mangalore-logo.PNG"
                alt="hackersmang-logo"
                width={48}
                height={48}
                className="rounded-full cursor-pointer"
              />
            </Link>
          </div>

          {/* Title Section */}
          {/* <div className="hidden flex-grow lg:flex justify-center items-center">
            <h1 className="text-4xl outfit-bold">HackersMang</h1>
          </div> */}

          {/* Menu Button */}
          <div className="h-full w-20 lg:w-36 flex justify-center items-center outline outline-[1.5px] outline-[#2b2828] text-sm p-0">
            <button onClick={toggleMenu}>
              <HyperText
                className="outfit-bold text-white cursor-pointer"
                text={isMenuOpen ? "CLOSE" : "EVENTS"}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Sliding Menu */}
      <div
        className={`fixed inset-0 bg-grainy transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-300 ease-in-out z-40 pt-20`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl">
            <label className='font-medium text-base underline'>Upcoming Events</label>
            <Link href="/techmang25" className="hover:text-gray-300 transition-colors">
              <HyperText text="#TechMang25" className="outfit-bold text-gray-20 cursor-pointer" />
            </Link>
            <label className='font-medium text-base underline'>Recent Events</label>
            <Link href="/2024-november" className="hover:text-gray-300 transition-colors">
              <HyperText text="2024 November" className="outfit-bold text-gray-20 cursor-pointer" />
            </Link>
            <Link href="/ai-techverse" className="hover:text-gray-300 transition-colors">
              <HyperText text="AI TechVerse" className="outfit-bold text-gray-20 cursor-pointer" />
            </Link>
        </div>
      </div>
    </>
  )
}