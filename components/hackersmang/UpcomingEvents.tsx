import { EVENT_DETAIL } from '@/app/hmnov25/constants';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Register from '../eventpage/Register';


export default function UpcomingEvents() {
    return (
        <div className="bg-neutral-white relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 text-left md:text-center flex flex-col items-start md:items-center justify-center gap-4 lg:gap-8">
                <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                    Upcoming event
                </span>
                <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                    #HMNov25, HackersMang 2025 November Edition on AI
                </h3>
                <p className="text-neutral-navy text-lg lg:text-xl mb-4 lg:mb-6 leading-relaxed max-w-3xl outfit-extra-light">
                    Explore exciting lightning talks, insightful demos, and interactive workshops, designed to spark curiosity and expand knowledge.
                </p>
            </div>
                <Register registrationLink={EVENT_DETAIL.pageUrl} registrationStartOn={EVENT_DETAIL.registrationStartOn} registrationEndOn={EVENT_DETAIL.registrationEndOn} buttonText="Visit Event Page" disableCodeOfConduct={true} target="_self" />
        </div>
    );
}