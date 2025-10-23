import React from 'react'
import RecentEvents from './RecentEvents'
import SocialMedia from './SocialMedia'
import Copyright from './Copyright'

export const Footer = () => {
    return (
        <footer className="bg-neutral-white py-5 pt-20 lg:py-32 lg:pb-10 px-5 lg:px-12 ">
            <div className="max-w-7xl mx-auto flex flex-col items-start md:items-center justify-between gap-6 md:gap-12">
                <RecentEvents maxEvents={3} />
                <SocialMedia />
                <Copyright />
            </div>
        </footer>
    )
}
