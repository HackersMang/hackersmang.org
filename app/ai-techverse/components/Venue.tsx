import React from 'react';

const Venue = () => {
    return (
        <div className="lg:flex-1 nav-link-outline rounded-3xl md:col-span-2 md:grid md:grid-cols-2 w-full text-left">
            <div className="md:col-span-2 nav-link-outline-bottom rounded-t-3xl pt-3 mx-4">
                <div className="grid grid-cols-[auto_1fr] items-center gap-1">
                    <span className="text-sm">Location</span>
                    <img
                        src="/ai-techverse/location.svg"
                        alt="Share Icon"
                        width={10}
                        height={10}
                        className="buttonIcon justify-self-start h-3.5 w-3.5 animate-pulse"
                    />
                </div>
                <h3 className="text-2xl text-[#d4e20b]">Happening In</h3>
            </div>
            <div className="col-span-1">
                <a href="https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/unicourt-logo.png"
                        alt="UniCourt-logo"
                        width={500}
                        height={90}
                        className="rounded-2xl object-cover p-3 max-w-64"
                    />
                </a>
            </div>
            <div className="col-span-1 w-full h-full leading-loose p-4 font-semibold items-start">
                The AI TECHVERSE event by HackersMang will be held at <span className='whitespace-nowrap'>UniCourt, Mangaluru.</span>
            </div>
        </div>
    );
};

export default Venue;
