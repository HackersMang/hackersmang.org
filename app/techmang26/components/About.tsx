import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <section className="relative bg-secondary-yellow py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        About TechMang
                    </span>
                    <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                        Mangaluru&apos;s Premier Tech Conference
                    </h3>
                    <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed max-w-4xl">
                        TechMang is the annual flagship tech conference that brings together developers, innovators, and technology enthusiasts from across Karnataka and beyond.
                    </p>
                </div>

                <div className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 group">
                    <div className="relative z-10">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <p className="w-full text-lg lg:text-xl leading-relaxed text-neutral-navy outfit-extra-light">
                                <span className="font-semibold text-neutral-navy">TechMang</span>, also known as <span className="font-semibold text-neutral-navy">Mangaluru Tech Day</span>, is the longest-running and most prestigious tech conference in Mangaluru. Organized by <Link href="https://hackersmang.org/" target="_blank" rel="noopener noreferrer" className="text-neutral-navy hover:underline transition-colors font-semibold">Hackerspace Mangaluru</Link>—the largest <span className="font-semibold text-neutral-navy">Open Source</span> community in the region—in association with <Link href="https://www.hackmum.in" target="_blank" rel="noopener noreferrer" className="text-neutral-navy hover:underline transition-colors font-semibold">Hackerspace Mumbai</Link>, TechMang has been a cornerstone of Mangaluru&apos;s tech ecosystem for over 6 years.
                            </p>

                            <p className="w-full text-lg lg:text-xl leading-relaxed text-neutral-navy outfit-extra-light">
                                What started as a local tech meetup has evolved into an annual flagship event that attracts hundreds of participants, featuring cutting-edge talks on <span className="font-semibold text-neutral-navy">Artificial Intelligence</span> and emerging technologies. <span className="font-semibold text-neutral-navy">#TechMang26</span> continues this legacy, bringing together industry leaders, developers, students, and tech enthusiasts for a day of learning, networking, and innovation.
                            </p>

                            <p className="w-full text-lg lg:text-xl leading-relaxed text-neutral-navy outfit-extra-light">
                                As Mangaluru&apos;s premier tech conference, TechMang is committed to fostering diversity, inclusion, and knowledge sharing. All our events have been <span className="font-semibold text-neutral-navy">free and open to everyone</span>, and we actively encourage participation from underrepresented groups in technology. We believe in creating a welcoming environment where everyone can learn, share, and grow together.
                            </p>

                            <p className="w-full text-lg lg:text-xl leading-relaxed mb-2 text-neutral-navy outfit-extra-light">
                                Everyone associated with TechMang, including speakers, attendees, and organizers, is expected to adhere to our <Link href="/cofc" passHref target="_blank" className="text-neutral-navy hover:underline transition-colors font-semibold">Code of Conduct</Link>, ensuring a safe, respectful, and inclusive experience for all participants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
