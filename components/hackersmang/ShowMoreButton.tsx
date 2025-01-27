'use client'

import { useState } from 'react'
import { HyperText } from "@/components/magicui/hyper-text"
import Link from "next/link"
import { FaArrowRightLong } from 'react-icons/fa6'
import { RiCloseLargeFill } from "react-icons/ri";

export default function ShowMoreButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <button onClick={toggleMenu} className='flex flex-row space-x-3 justify-center text-center outline outline-[1.5px] outline-charcoal p-4 text-neutral hover:text-secondary hover:bg-charcoal' >
                <div className="text-lg font-semibold transition">Show more</div>
                <FaArrowRightLong size={24} className='mt-1' />
            </button>

            {/* Sliding Menu */}
            <div
                className={`fixed inset-0 bg-grainy transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-600 ease-in-out z-40 pt-20`} 
            >
                <button onClick={toggleMenu} className='absolute mt-2 right-6 flex flex-row space-x-3 justify-center text-center outline outline-[1.5px] outline-charcoal p-4 text-neutral hover:text-secondary' >
                    <RiCloseLargeFill size={24} />
                </button>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl text-secondary">
                    <span className='font-medium text-base italic'>Upcoming Events</span>
                    <Link href="/techmang25" className="hover:text-gray-300 transition-colors">
                        <HyperText text="#TechMang25" className="outfit-bold text-gray-20 cursor-pointer" />
                    </Link>
                    <span className='font-medium text-base italic'>Recent Events</span>
                    <Link href="/2024-november" className="hover:text-gray-300 transition-colors">
                        <HyperText text="2024 November Edition" className="outfit-bold text-gray-20 cursor-pointer" />
                    </Link>
                    <Link href="/ai-techverse" className="hover:text-gray-300 transition-colors">
                        <HyperText text="AI TechVerse" className="outfit-bold text-gray-20 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </>
    )
}
