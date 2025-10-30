import { VenueInfoProps } from "@/lib/types";
import { formatEventDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Register from "./Register";
import { ExternalLink } from "lucide-react";

const Venue = ({ locationName, locationUrl, happeningOn }: VenueInfoProps): JSX.Element => {
    const formattedDate = formatEventDate(happeningOn.toUTCString());

    return (
        <section className="relative bg-secondary-yellow py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Event Details Card */}
                    <div className="relative">
                        <div className="bg-neutral-white/95 p-8 lg:p-12 rounded-3xl border border-primary-yellow/30 relative overflow-hidden">
                            <div className="relative z-10">
                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-6 tracking-tight">
                                    When & Where
                                </h3>

                                {/* Date */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-semibold text-neutral-navy outfit-extra-bold">Date</span>
                                    </div>
                                    <p className="text-xl lg:text-2xl text-neutral-navy outfit-extra-light ml-11">
                                        {formattedDate}
                                    </p>
                                </div>

                                {/* Location */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-semibold text-neutral-navy outfit-extra-bold">Venue</span>
                                    </div>
                                    <Link
                                        href={locationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl lg:text-2xl text-neutral-navy hover:text-neutral-navy transition-colors font-semibold outfit-extra-light ml-11 hover:underline"
                                    >
                                        {locationName}
                                    </Link>
                                </div>

                                {/* Action Button */}
                                <div className="w-full flex flex-col items-center justify-center text-center">
                                    <div className="bg-neutral-white/95 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-lg group w-full">
                                        <div className="relative z-10 flex flex-col items-start justify-start md:items-center md:justify-center">
                                            <Link href={locationUrl} target="_blank" rel="noopener noreferrer" className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 text-neutral-navy font-semibold rounded-2xl border border-primary-yellow/30 transition-all duration-300 hover:from-primary-yellow/90 hover:to-primary-yellow/70 overflow-hidden text-lg lg:text-xl hover:scale-105 hover:shadow-xl">
                                                <ExternalLink
                                                    size={20}
                                                    className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12"
                                                />
                                                <span className="outfit-bold tracking-wide transition-all duration-300 group-hover/btn:tracking-wider">
                                                    Get Directions
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side - Event Information */}
                    <div className="relative">
                        <div className="bg-neutral-white/95 p-8 lg:p-12 rounded-3xl border border-primary-yellow/30 relative overflow-hidden">
                            <div className="relative z-10">
                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-6 tracking-tight">
                                    Event Highlights
                                </h3>

                                {/* Event Features */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-neutral-navy outfit-extra-bold mb-2">Expert Speakers</h4>
                                            <p className="text-neutral-navy outfit-extra-light leading-relaxed">
                                                Learn from industry experts and thought leaders sharing their insights and experiences.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.5 6h2l-2.5-6H12v6h2v-6h2.5l2.5 6h2l-2.5-6H20v6h2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-neutral-navy outfit-extra-bold mb-2">Networking Opportunities</h4>
                                            <p className="text-neutral-navy outfit-extra-light leading-relaxed">
                                                Connect with like-minded professionals and expand your network in the tech community.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-neutral-navy outfit-extra-bold mb-2">Hands-on Workshops</h4>
                                            <p className="text-neutral-navy outfit-extra-light leading-relaxed">
                                                Participate in interactive sessions and gain practical skills you can apply immediately.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
