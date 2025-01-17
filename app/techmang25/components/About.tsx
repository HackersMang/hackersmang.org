import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-2 shadow-lg">
            <div className="p-4">
                <h3 className="text-2xl text-[#d4e20b] pt-3 mx-4">About TechMang</h3>
                <p className="w-full text-lg md:text-xl leading-relaxed mt-6 mb-6">
                    We are the largest <span className="font-semibold">#OSS</span> group in Mangaluru and we organize its longest-running tech meetup, <span className="font-semibold">[#TechMang]</span>, in association with&nbsp;
                    <Link href="https://www.hackmum.in" target="_blank" rel="noopener noreferrer" className="underline">Hackerspace Mumbai</Link>.
                    Our journey spans over 6 years of building a vibrant tech community.
                </p>

                <p className="w-full text-lg md:text-xl leading-relaxed mb-2">
                    All our past events have been free for everyone and will continue to do so in the future. We are committed to a diverse and inclusive roster of speakers, and attendees. We especially encourage folks that identify themselves as part of an underrepresented group in Mangaluru, to apply. Everyone associated with our events, including speakers, needs to adhere to our Code of Conduct.
                </p>
                <div className="p-6 shadow-md mt-4">
                    <h4 className="text-md mb-4 text-[#d4e20b]">Past Events</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="https://tdmjul18.eventbrite.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-stone-950">
                            <div className="nav-link-outline p-4 shadow">
                                <p className="text-lg underline">
                                    2018 - I
                                </p>
                            </div>
                        </Link>
                        <Link href="https://techmang2.eventbrite.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-stone-950">
                            <div className="nav-link-outline p-4 shadow">
                                <p className="text-lg underline">
                                    2018 - II
                                </p>
                            </div>
                        </Link>
                        <Link href="https://techmang3.eventbrite.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-stone-950">
                            <div className="nav-link-outline p-4 shadow">
                                <p className="text-lg underline">
                                    2019
                                </p>
                            </div>
                        </Link>
                        <Link href="https://techmang24.eventbrite.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-stone-950">
                            <div className="nav-link-outline p-4 shadow">
                                <p className="text-lg underline">
                                    2024
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
