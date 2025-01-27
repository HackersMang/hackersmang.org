import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-4 shadow-lg">
            <h3 className="text-xl lg:text-2xl text-primary mb-2 outfit-extra-light">About TechMang</h3>
            <div className="lg:w-1/2 mx-6 lg:mx-0">
                <p className="w-full text-lg md:text-xl leading-relaxed mb-6 outfit-extra-light">
                    We are the largest <span className="font-semibold">#OSS</span> group in Mangaluru and we organize its longest-running tech meetup, <span className="font-semibold">[#TechMang]</span>, in association with&nbsp;
                    <Link href="https://www.hackmum.in" target="_blank" rel="noopener noreferrer" className="underline">Hackerspace Mumbai</Link>.
                    Our journey spans over 6 years of building a vibrant tech community.
                </p>

                <p className="w-full text-lg md:text-xl leading-relaxed mb-2 outfit-extra-light">
                    All our past events have been free for everyone and will continue to do so in the future. We are committed to a diverse and inclusive roster of speakers, and attendees. We especially encourage folks that identify themselves as part of an underrepresented group in Mangaluru, to apply. Everyone associated with our events, including speakers, needs to adhere to our <Link href="https://github.com/HackerspaceMangaluru/code-of-conduct/blob/main/coc.md" passHref target="_blank" className="underline">Code of Conduct</Link>.
                </p>
            </div>
        </div>
    );
};

export default About;
