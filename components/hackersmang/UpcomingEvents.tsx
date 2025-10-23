import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

export default function UpcomingEvents() {
    return (
        <div className="bg-neutral-white relative py-20 lg:py-32 px-5 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto text-left md:text-center flex flex-col items-start md:items-center justify-center gap-4 lg:gap-8">
                <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                    Upcoming event
                </span>
                <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                    #HMNov25, HackersMang 2025 November Edition
                </h3>
                <p className="text-neutral-navy text-lg lg:text-xl mb-4 leading-relaxed max-w-3xl outfit-extra-light">
                    Explore exciting lightning talks, insightful demos, and interactive workshops, designed to spark curiosity and expand knowledge.
                </p>
                <Link
                    href="/hmnov25"
                    aria-label="HackersMang 2025 November Edition"
                    className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 text-neutral-navy font-semibold rounded-2xl border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary-yellow/90 hover:to-primary-yellow/70 overflow-hidden text-lg lg:text-xl"
                >
                    {/* Button Content */}
                    <div className="relative flex items-center gap-3">
                        {/* Icon */}
                        <div className="w-6 h-6 flex items-center justify-center">
                            <GoArrowUpRight 
                                size={20} 
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                            />
                        </div>
                        
                        {/* Text */}
                        <span className="outfit-bold tracking-wide">
                            Register for free
                        </span>
                        
                        {/* Animated Dot */}
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}