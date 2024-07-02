import Link from 'next/link';
import React from 'react';

const Venue = () => {
    return (
        <div className="nav-link-outline rounded-3xl w-full flex flex-col items-center justify-center text-center mt-2">
            <h3 className="text-2xl text-[#d4e20b] pt-3 mx-4">Happening In</h3>
            <Link href="https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7" target="_blank" rel="noopener noreferrer">
                <img
                    src="/unicourt-logo.png"
                    alt="UniCourt logo"
                    className="rounded-2xl object-cover p-3 max-w-44 lg:max-w-64"
                />
            </Link>
            <p className="w-full h-full leading-loose p-4">
                The AI TECHVERSE event by HackersMang will be held at&nbsp;<Link href="https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7" target="_blank" rel="noopener noreferrer" className='underline'>UniCourt, Mangaluru</Link>.
            </p>
        </div>
    );
};

export default Venue;
