import React from 'react';
import Register from '../eventpage/Register';
import { UPCOMING_EVENTS } from '@/lib/events';


export default function UpcomingEvents() {
    return (
        <section className="bg-neutral-white relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 text-left md:text-center flex flex-col items-start md:items-center justify-center gap-4 lg:gap-8">
                <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                    Upcoming event
                </span>
                <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                    {UPCOMING_EVENTS[0].title}, {UPCOMING_EVENTS[0].subtitle}
                </h3>
                <p className="text-neutral-navy text-lg lg:text-xl mb-4 lg:mb-6 leading-relaxed max-w-3xl outfit-extra-light">
                    On 31st January 2026, explore exciting lightning talks, insightful demos, and interactive workshops, designed to spark curiosity and expand knowledge.
                </p>
            </div>
            <Register registrationLink={UPCOMING_EVENTS[0].href} registrationStartOn={new Date("01/01/2026")} registrationEndOn={new Date("01/31/2026")} buttonText="Visit Event Page" disableCodeOfConduct={true} target="_self" />
        </section>
    );
}