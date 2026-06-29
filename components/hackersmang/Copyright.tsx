import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Copyright() {
    return (
        <div className="flex flex-row items-center justify-between gap-4 w-full border-t border-neutral-100">
            <div className="h-full w-fit flex justify-start items-center text-sm py-4 cursor-pointer">
                <Link href="/" aria-label="Hackerspace Mangaluru home">
                    <Image
                        src="/icon.png"
                        alt="Hackerspace Mangaluru"
                        width={70}
                        height={70}
                        className="rounded-full cursor-pointer"
                    />
                </Link>
            </div>
            <div className='text-neutral-navy outfit-extra-light'>
                © 2025 Hackerspace Mangaluru. All rights reserved
            </div>
        </div>
    )
}
