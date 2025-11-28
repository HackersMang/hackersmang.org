import React from 'react'
import PastEvents from './PastEvents'
import SocialMedia from './SocialMedia'
import Copyright from './Copyright'
import Legal from './Legal'

type FooterProps = {
    hidePastEvents?: boolean;
};

export const Footer = ({ hidePastEvents = false }: FooterProps) => {
    return (
        <footer className="bg-neutral-white py-5 pt-20 lg:py-32 lg:pb-10">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 flex flex-col items-start md:items-center justify-between gap-6 md:gap-12">
                {!hidePastEvents && <PastEvents maxEvents={3} />}
                <div className="flex flex-col md:flex-row items-start justify-start w-full gap-6">
                    <div className="flex flex-col items-start justify-start w-full md:w-5/6 gap-3 md:gap-6 order-2 md:order-1">
                        <SocialMedia />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full md:w-1/6 gap-3 md:gap-6 order-1 md:order-2">
                        <Legal />
                    </div>
                </div>
                <Copyright />
            </div>
        </footer>
    )
}
