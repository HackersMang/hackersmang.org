import React from 'react';
import { SPEAKERS_TRACK_1, SPEAKERS_TRACK_2 } from '../constants';
import ScheduleList from '@/components/eventpage/ScheduleList';

const Schedule = () => {
    // Sorting the speakers array by order
    const sortedSpeakersTrack1 = [...SPEAKERS_TRACK_1].sort((a, b) => a.order - b.order);
    const sortedSpeakersTrack2 = [...SPEAKERS_TRACK_2].sort((a, b) => a.order - b.order);

    return (
        <section className="flex flex-col px-4 py-8 items-center justify-center">
            <h2 className="text-xl lg:text-2xl text-primary pb-4">Schedule</h2>
            <h3 className="text-sm lg:text-xl pb-4 text-neutral">Track 1</h3>
            <ScheduleList speakers={sortedSpeakersTrack1} />
            <h3 className="text-sm lg:text-xl py-4 lg:pt-8 text-neutral">Track 2</h3>
            <ScheduleList speakers={sortedSpeakersTrack2} />
        </section>
    );
};

export default Schedule;
