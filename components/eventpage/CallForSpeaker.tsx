import { CodeOfConduct } from '@/components/eventpage/CodeOfConduct';
import { RegisterProps } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import ComingSoon from './ComingSoon';
import { ExternalLink } from 'lucide-react';

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
        <div className="w-full flex flex-col items-center justify-center text-center mt-8 lg:my-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm outfit-extra-light text-neutral-navy font-medium">
                    Call For Speakers
                </span>
            </div>
            
            <div className="max-w-4xl w-full">
                <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-6">Call For Speakers</h3>
                
                <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 backdrop-blur-sm text-neutral-navy p-8 rounded-2xl border border-primary-yellow/30 shadow-lg">
                    <p className="text-lg lg:text-xl text-neutral-navy/80 outfit-extra-light leading-relaxed mb-6">
                        We are looking for:
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-primary-yellow/20">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                            <div>
                                <h4 className="font-semibold outfit-extra-bold text-neutral-navy mb-1">Lightning Talks</h4>
                                <p className="text-sm text-neutral-navy/70 outfit-extra-light">Short and impactful presentations.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-primary-yellow/20">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                            <div>
                                <h4 className="font-semibold outfit-extra-bold text-neutral-navy mb-1">Talks with Demos</h4>
                                <p className="text-sm text-neutral-navy/70 outfit-extra-light">Share research, innovative projects, or practical demos.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-primary-yellow/20">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                            <div>
                                <h4 className="font-semibold outfit-extra-bold text-neutral-navy mb-1">Workshops</h4>
                                <p className="text-sm text-neutral-navy/70 outfit-extra-light">Hands-on sessions to teach skills and engage participants.</p>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-lg lg:text-xl text-neutral-navy/80 outfit-extra-light leading-relaxed mb-6">
                        This is your chance to inspire and share your knowledge with the tech community. 🌟
                    </p>
                    
                    <Link
                        href={registrationLink ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 text-neutral-navy font-semibold rounded-2xl border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary-yellow/90 hover:to-primary-yellow/70 overflow-hidden text-lg lg:text-xl"
                        aria-disabled={hasEnded}
                    >
                        {/* Button Content */}
                        <div className="relative flex items-center gap-3">
                            {/* Icon */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                {!hasEnded && (
                                    <ExternalLink 
                                        size={20} 
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                                    />
                                )}
                            </div>
                            
                            {/* Text */}
                            <span className="outfit-bold tracking-wide">
                                {hasEnded ? "Registration Closed" : "Submit Your Proposal"}
                            </span>
                            
                            {/* Animated Dot */}
                            {!hasEnded && (
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                            )}
                        </div>
                    </Link>

                    <CodeOfConduct />
                </div>
            </div>
        </div>
    );
};

export default CallForSpeaker;
