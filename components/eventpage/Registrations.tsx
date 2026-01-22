"use client";

import { CodeOfConduct } from "@/components/eventpage/CodeOfConduct";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface RegistrationOption {
    name: string;
    registrationLink: string;
    buttonText: string;
}

interface RegistrationsProps {
    registrations: RegistrationOption[];
    registrationStartOn?: Date | null;
    registrationEndOn?: Date | null;
}

const Registrations = ({ registrations, registrationStartOn, registrationEndOn }: RegistrationsProps): JSX.Element | null => {
    const now = new Date();
    const hasStarted = registrationStartOn ? now >= registrationStartOn : false;
    const hasEnded = registrationEndOn ? now.getTime() > registrationEndOn.getTime() + 24 * 60 * 60 * 1000 : false;

    // Return null if registration has not started
    if (!hasStarted) return null;

    // Return null if no registrations available
    if (!registrations || registrations.length === 0) return null;

    return (
        <>
            {/* Header */}
            <div className="text-center mb-8 lg:mb-12">
                <h3 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                    Choose Your Track
                </h3>
                <p className="text-lg text-neutral-navy outfit-extra-light leading-relaxed">
                    We have {registrations.length} tracks available. Select the track you&apos;d like to attend:
                </p>
            </div>

            {/* Registration Cards Grid */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 w-full">
                {registrations.map((registration) => (
                    <div key={registration.registrationLink || registration.name} className="animate-fade-in-up w-full">
                        <div className="bg-neutral-white/95 p-0 lg:p-10 relative overflow-hidden transition-all duration-500 md:hover:scale-[1.02] md:hover:shadow-lg group rounded-2xl md:rounded-none">
                            {/* Animated Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 via-transparent to-primary-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Interconnected Corner Cuts with Animation */}
                            <div className="hidden md:block absolute top-0 left-0 w-8 h-8 bg-secondary-yellow transform rotate-45 -translate-x-4 -translate-y-4 transition-all duration-300 group-hover:scale-110"></div>
                            <div className="hidden md:block absolute bottom-0 right-0 w-8 h-8 bg-secondary-yellow transform rotate-45 translate-x-4 translate-y-4 transition-all duration-300 group-hover:scale-110"></div>
                            <div className="hidden md:block absolute bottom-0 left-0 w-8 h-8 bg-secondary-yellow transform rotate-45 -translate-x-4 translate-y-4 transition-all duration-300 group-hover:scale-110"></div>
                            <div className="hidden md:block absolute top-0 right-0 w-8 h-8 bg-secondary-yellow transform rotate-45 translate-x-4 -translate-y-4 transition-all duration-300 group-hover:scale-110"></div>

                            {/* Floating Particles */}
                            <div className="hidden md:block absolute top-4 right-4 w-2 h-2 bg-secondary-yellow/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
                            <div className="hidden md:block absolute bottom-4 left-4 w-1.5 h-1.5 bg-secondary-yellow/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.6s' }}></div>
                            <div className="hidden md:block absolute top-1/2 right-8 w-1 h-1 bg-secondary-yellow/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>

                            <div className="relative z-10 flex flex-col items-start justify-start md:items-center md:justify-center gap-4">
                                {/* Title with Animation */}
                                <h4 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold tracking-tight transition-all duration-300">
                                    {registration.name}
                                </h4>

                                {/* Registration Button with Enhanced Animation */}
                                <Link
                                    href={registration.registrationLink ?? "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn relative w-full md:w-fit inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-green to-primary-green/80 text-neutral-white outfit-bold rounded-2xl border border-primary-green/30 transition-all duration-300 md:hover:from-primary-green/90 md:hover:to-primary-green/70 overflow-hidden text-lg lg:text-xl md:hover:scale-105 md:hover:shadow-xl"
                                    aria-disabled={hasEnded}
                                >
                                    {/* Animated Background Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-primary-green/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                                    {/* Button Content */}
                                    <div className="relative flex items-center gap-3">
                                        {/* Icon with Enhanced Animation */}
                                        {!hasEnded && (
                                            <div className="w-6 h-6 flex items-center justify-center">
                                                <ExternalLink
                                                    size={20}
                                                    className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12"
                                                />
                                            </div>
                                        )}

                                        {/* Text with Animation */}
                                        <span className="outfit-bold tracking-wide transition-all duration-300 group-hover/btn:tracking-wider">
                                            {hasEnded ? "Registration Closed" : registration.buttonText}
                                        </span>

                                        {/* Enhanced Animated Dot */}
                                        {!hasEnded && (
                                            <div className="w-2 h-2 bg-neutral-white rounded-full animate-pulse opacity-60 group-hover/btn:opacity-100 group-hover/btn:scale-125 transition-all duration-300"></div>
                                        )}
                                    </div>

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Code of Conduct */}
            <div className="mt-8 text-center">
                <CodeOfConduct />
            </div>
        </>
    );
};

export default Registrations;
