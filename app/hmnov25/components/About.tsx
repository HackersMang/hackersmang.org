import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <section className="relative bg-primary-yellow/70 py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section - Matching Resources.tsx */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        About Hackerspace Mangaluru
                    </span>
                    <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                        Building the future of tech
                    </h3>
                    <p className="text-lg lg:text-xl text-neutral-navy/80 outfit-extra-light leading-relaxed max-w-4xl">
                        We're passionate about fostering innovation, knowledge sharing, and building a vibrant tech community in Mangaluru.
                    </p>
                </div>

                <div className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 group">
                    {/* Interconnected Corner Cut */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 -translate-x-4 -translate-y-4"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 translate-x-4 translate-y-4"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 -translate-x-4 translate-y-4"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 translate-x-4 -translate-y-4"></div>
                    
                    <div className="relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <p className="w-full text-lg lg:text-xl leading-relaxed mb-6 text-neutral-navy outfit-extra-light">
                                <Link href="https://hackersmang.org/" target="_blank" rel="noopener noreferrer" className="text-neutral-navy hover:underline transition-colors font-semibold">Hackerspace Mangaluru</Link> is the largest <span className="font-semibold text-neutral-navy">Open Source</span> group in Mangaluru and we organize its longest-running tech meetup, in association with&nbsp;
                                <Link href="https://www.hackmum.in" target="_blank" rel="noopener noreferrer" className="text-neutral-navy hover:underline transition-colors font-semibold">Hackerspace Mumbai</Link>.
                                Our journey spans over 6 years of building a vibrant tech community.
                            </p>

                            <p className="w-full text-lg lg:text-xl leading-relaxed mb-2 text-neutral-navy outfit-extra-light">
                                All our past events have been free for everyone and will continue to do so in the future. We are committed to a diverse and inclusive roster of speakers, and attendees. We especially encourage folks that identify themselves as part of an underrepresented group in Mangaluru, to apply. Everyone associated with our events, including speakers, needs to adhere to our <Link href="/cofc" passHref target="_blank" className="text-neutral-navy hover:underline transition-colors font-semibold">Code of Conduct</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
