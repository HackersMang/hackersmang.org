import { CodeOfConduct } from '@/components/eventpage/CodeOfConduct';
import { CallForSpeakerSubmission, RegisterProps } from '@/lib/types';
import React from 'react';
import ComingSoon from './ComingSoon';
import { ExternalLink } from 'lucide-react';
import Register from './Register';
import Link from 'next/link';

const CallForSpeaker = ({
    registrationLink,
    registrationStartOn,
    registrationEndOn,
    submissions,
}: RegisterProps): JSX.Element | null => {
    const now = new Date();
    const hasStarted = now >= (registrationStartOn ?? 0);
    const hasEnded = now.getTime() > ((registrationEndOn instanceof Date ? registrationEndOn.getTime() : registrationEndOn ?? 0) + 24 * 60 * 60 * 1000);

    const cfpLinks: CallForSpeakerSubmission[] =
        submissions && submissions.length > 0
            ? submissions
            : registrationLink
                ? [{ name: 'Call For Speakers', link: registrationLink, buttonText: 'Submit Your Proposal' }]
                : [];

    if (!hasStarted || hasEnded) return null;

    if (hasStarted && cfpLinks.length === 0) {
        return (
            <ComingSoon title="Call For Speakers" message="CFA link will be available soon. Stay tuned! 🌟" />
        );
    }

    return (
        <section className="relative bg-neutral-white/95 py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
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
                            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                Lightning Talks
                            </h4>
                            <p className="text-neutral-navy leading-relaxed outfit-extra-light mb-6">
                                Short and impactful presentations that deliver maximum value in minimal time.
                            </p>
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
                            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                Talks with Demos
                            </h4>
                            <p className="text-neutral-navy leading-relaxed outfit-extra-light mb-6">
                                Share your research, innovative projects, or practical demonstrations with the community.
                            </p>
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
                            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                Workshops
                            </h4>
                            <p className="text-neutral-navy leading-relaxed outfit-extra-light mb-6">
                                Hands-on sessions to teach skills and engage participants in practical learning.
                            </p>
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

            {cfpLinks.length > 1 ? (
                <div className="relative bg-neutral-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10 w-full">
                        <div className="text-center mb-8">
                            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-3 tracking-tight">
                                Choose Your CFP Track
                            </h4>
                            <p className="text-lg text-neutral-navy outfit-extra-light leading-relaxed">
                                Submit to the track that best matches you:
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-10 w-full">
                            {cfpLinks.map((submission) => (
                                <div
                                    key={submission.link}
                                    className="flex-1 bg-neutral-white/95 p-6 lg:p-8 border border-primary-yellow/40 transition-all duration-300 md:hover:shadow-lg"
                                >
                                    <h5 className="text-xl lg:text-2xl outfit-extra-bold text-neutral-navy mb-2 tracking-tight">
                                        {submission.name}
                                    </h5>
                                    {submission.description && (
                                        <p className="text-neutral-navy outfit-extra-light mb-6 leading-relaxed">
                                            {submission.description}
                                        </p>
                                    )}
                                    <Link
                                        href={submission.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-green to-primary-green/80 text-neutral-white font-semibold rounded-2xl border border-primary-green/30 transition-all duration-300 overflow-hidden text-lg hover:md:scale-105 hover:md:shadow-xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-primary-green/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative flex items-center gap-3">
                                            <ExternalLink
                                                size={20}
                                                className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12"
                                            />
                                            <span className="outfit-bold tracking-wide">
                                                {submission.buttonText ?? `Submit — ${submission.name}`}
                                            </span>
                                            <div className="w-2 h-2 bg-neutral-white rounded-full animate-pulse opacity-60"></div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <CodeOfConduct />
                        </div>
                    </div>
                </div>
            ) : (
                <Register
                    registrationLink={cfpLinks[0]?.link}
                    registrationStartOn={registrationStartOn}
                    registrationEndOn={registrationEndOn}
                    buttonText={cfpLinks[0]?.buttonText ?? 'Submit Your Proposal'}
                />
            )}
        </section>
    );
};

export default CallForSpeaker;
