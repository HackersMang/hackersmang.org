'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import SlidingMenu from './SlidingMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] bg-neutral-white shadow-md py-2">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-5">
          {/* Logo Section */}
          <div className="h-full w-fit flex justify-center items-center text-sm p-0 cursor-pointer">
            <Link href="/" passHref>
              <Image
                src="/icon.png"
                alt="hackersmang-logo"
                width={70}
                height={70}
                className="rounded-full cursor-pointer"
              />
            </Link>
          </div>

          {/* Modern Events Button */}
          <button
            onClick={toggleMenu}
            className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 text-neutral-navy font-semibold rounded-2xl border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary-yellow/90 hover:to-primary-yellow/70 overflow-hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open events menu"}
          >
            {/* Button Content */}
            <div className="relative flex items-center gap-2">
              {/* Icon */}
              <div className="w-5 h-5 flex items-center justify-center">
                {isMenuOpen ? (
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              
              {/* Text */}
              <span className="text-sm outfit-bold tracking-wide">
                {isMenuOpen ? "Close" : "Events"}
              </span>
              
              {/* Animated Dot */}
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Sliding Menu */}
      <SlidingMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}