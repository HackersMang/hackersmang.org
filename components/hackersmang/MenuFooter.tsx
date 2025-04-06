import React from 'react'
import SocialMedia from './SocialMedia'

export default function MenuFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='w-full bg-charcoal flex flex-col lg:flex-row items-center justify-between p-2 lg:p-8'>
            <div className='flex items-center justify-center lg:justify-start'>
                <SocialMedia />
            </div>
            <div className='text-neutral text-center lg:text-right mt-4 lg:mt-0'>
                © {currentYear} Hackerspace Mangaluru. All rights reserved
            </div>
        </div>
    )
}
