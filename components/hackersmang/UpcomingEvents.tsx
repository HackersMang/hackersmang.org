import React from 'react';
import Register from '../eventpage/Register';
import { PAST_EVENTS } from '@/lib/events';

const RECENT_EVENT = PAST_EVENTS[0];

export default function UpcomingEvents() {
    return (
        <section className="bg-neutral-white relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 text-left md:text-center flex flex-col items-start md:items-center justify-center gap-4 lg:gap-8">
                <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                    Recent Event
                </span>
                <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                    {RECENT_EVENT.title}, {RECENT_EVENT.subtitle}
                </h3>
                <p className="text-neutral-navy text-lg lg:text-xl mb-4 lg:mb-6 leading-relaxed max-w-3xl outfit-extra-light">
                    Thanks to everyone who joined us. Visit the event page for schedules, speakers, and resources.
                </p>
            </div>
            <Register
                registrationLink={RECENT_EVENT.href}
                registrationStartOn={new Date("05/01/2026")}
                registrationEndOn={new Date("06/27/2026")}
                buttonText="View event page"
                disableCodeOfConduct={true}
                target="_self"
            />
        </section>
    );
}
