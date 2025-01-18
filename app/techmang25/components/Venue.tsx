import Link from 'next/link';
import React from 'react';

const Venue = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-2">
            <h3 className="text-2xl font-bold text-primary">Happening On</h3>
            <p className="w-full h-full p-4 text-lg md:text-xl">
                Saturday <span className="whitespace-nowrap">1st February, 2025</span>&nbsp;at&nbsp;<Link href="https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7" target="_blank" rel="noopener noreferrer" className='underline'>UniCourt</Link> Mangaluru.
            </p>
        </div>
    );
};

export default Venue;
