import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-8 lg:my-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm outfit-extra-light text-neutral-navy font-medium">
                    About Hackerspace Mangaluru
                </span>
            </div>
            
            <div className="max-w-4xl">
                <p className="w-full text-lg lg:text-xl leading-relaxed mb-6 text-neutral-navy outfit-extra-light">
                    <Link href="https://hackersmang.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-semibold">Hackerspace Mangaluru</Link> is the largest <span className="font-semibold text-neutral-navy">Open Source</span> group in Mangaluru and we organize its longest-running tech meetup, in association with&nbsp;
                    <Link href="https://www.hackmum.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-semibold">Hackerspace Mumbai</Link>.
                    Our journey spans over 6 years of building a vibrant tech community.
                </p>

                <p className="w-full text-lg lg:text-xl leading-relaxed mb-2 text-neutral-navy outfit-extra-light">
                    All our past events have been free for everyone and will continue to do so in the future. We are committed to a diverse and inclusive roster of speakers, and attendees. We especially encourage folks that identify themselves as part of an underrepresented group in Mangaluru, to apply. Everyone associated with our events, including speakers, needs to adhere to our <Link href="/cofc" passHref target="_blank" className="text-primary hover:text-primary/80 transition-colors font-semibold">Code of Conduct</Link>.
                </p>
            </div>
        </div>
    );
};

export default About;
