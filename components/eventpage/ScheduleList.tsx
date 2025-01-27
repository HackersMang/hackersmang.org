import React from 'react';
import Image from 'next/image';
import { Speaker } from '@/constants';

interface ScheduleListProps {
    speakers: Speaker[];
}

const ScheduleList: React.FC<ScheduleListProps> = ({ speakers }) => {
    return (
        <div className="flex flex-col gap-4 w-full lg:w-5/6">
            {speakers.map((speaker) => (
                <div
                    key={speaker.order}
                    className="flex flex-row items-center bg-[#1d1d1c] text-white rounded-lg shadow-lg p-4"
                >
                    {/* Speaker Image */}
                    <div className="flex-shrink-0 w-24 h-24 mb-2 lg:mb-0 lg:w-28 lg:h-28 relative">
                        <Image
                            src={speaker.image}
                            alt={speaker.name || 'Speaker'}
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>

                    {/* Speaker Details */}
                    <div className="flex flex-col flex-grow pl-2 lg:pl-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold">{speaker.topic}</h4>
                        <p className="text-sm md:text-base lg:text-lg text-neutral">{speaker.name}</p>
                    </div>

                    {/* Speaker Time */}
                    <div className="text-sm md:text-base lg:text-lg text-right font-medium ml-2 mt-4 lg:mt-0 lg:ml-auto lg:px-4 text-neutral">
                        {speaker.timeStart}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScheduleList;
