import { CodeOfConduct } from '@/components/eventpage/CodeOfConduct';
import { RegisterProps } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import ComingSoon from './ComingSoon';
import { ExternalLink } from 'lucide-react';
import Register from './Register';

const CallForSpeaker = ({ registrationLink, registrationStartOn, registrationEndOn }: RegisterProps): JSX.Element | null => {
    // Convert registration dates to Date objects
    const now = new Date();
    const hasStarted = now >= (registrationStartOn ?? 0);
    const hasEnded = now.getTime() > ((registrationEndOn instanceof Date ? registrationEndOn.getTime() : registrationEndOn ?? 0) + 24 * 60 * 60 * 1000);

    // Return null if registration has not started or the link does not exist
    if (!hasStarted || !registrationLink || hasEnded) return null;

    // Return a ComingSoon component if registration has started but the link does not exist.
    if (hasStarted && !registrationLink) {
        return (
            <ComingSoon title="Call For Speakers" message="CFA link will be available soon. Stay tuned! 🌟" />
        );
    }

    // Return the Register component if registration has started and the link exists
    return (
        <section className="relative bg-neutral-white/95 py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section - Matching Resources.tsx */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        Call For Speakers
                    </span>
                    <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                        Share your knowledge
                    </h3>
                    <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed max-w-4xl">
                        We&apos;re looking for passionate speakers to share their expertise and inspire our tech community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="relative bg-secondary-yellow p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
                        <div className="relative z-10">
                            {/* Title */}
                            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                Lightning Talks
                            </h4>

                            {/* Description */}
                            <p className="text-neutral-navy leading-relaxed outfit-extra-light mb-6">
                                Short and impactful presentations that deliver maximum value in minimal time.
                            </p>

                            {/* Features */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        5-10 minute presentations
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        Quick insights and tips
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        Perfect for beginners
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-secondary-yellow p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
                        <div className="relative z-10">
                            {/* Title */}
                            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                Talks with Demos
                            </h4>

                            {/* Description */}
                            <p className="text-neutral-navy leading-relaxed outfit-extra-light mb-6">
                                Share your research, innovative projects, or practical demonstrations with the community.
                            </p>

                            {/* Features */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        20-30 minute presentations
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        Live coding and demos
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        Interactive Q&A sessions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-secondary-yellow p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
                        <div className="relative z-10">
                            {/* Title */}
                            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                Workshops
                            </h4>

                            {/* Description */}
                            <p className="text-neutral-navy leading-relaxed outfit-extra-light mb-6">
                                Hands-on sessions to teach skills and engage participants in practical learning.
                            </p>

                            {/* Features */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        45-60 minute sessions
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        Hands-on practice
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-white/95 hover:bg-neutral-white/80 text-neutral-navy rounded-xl border border-primary-yellow/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-neutral-navy rounded-full"></div>
                                    <span className="text-sm font-medium outfit-extra-light">
                                        Take-home projects
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed mb-8 text-center mt-8">
                    This is your chance to inspire and share your knowledge with the tech community. 🌟
                </p>
            </div>

            <Register
                registrationLink={registrationLink}
                registrationStartOn={registrationStartOn}
                registrationEndOn={registrationEndOn}
                buttonText="Submit Your Proposal"
            />
        </section>
    );
};

export default CallForSpeaker;
