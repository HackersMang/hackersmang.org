"use client";

import React, { useEffect, useState } from "react";
import ErrorCard from "@/components/eventpage/ErrorCard";
import SessionList from "@/components/eventpage/SessionList";
import SessionListSkeleton from "@/components/eventpage/SessionListSkeleton";
import { GridSmart, ScheduleProps, SessionizeSpeakers } from "@/lib/types";
import { DEMO_API_ID, DUMMY_PROFILE_PICTURE } from "@/lib/constants";

const Schedule = ({ sessionId }: ScheduleProps): JSX.Element => {
    // State variables
    const [scheduleData, setScheduleData] = useState<GridSmart[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [fromCache, setFromCache] = useState<boolean>(false);
    const [cachedAt, setCachedAt] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchSpeakersAndSchedule = async () => {
        try {
            setLoading(true);

            const sessionizeApiId = sessionId ?? DEMO_API_ID;
            const publicApiUrl = window.location.origin;

            const speakerAPIEndpoint = `${publicApiUrl}/api/sessionize/Speakers?sessionId=${sessionizeApiId}`;
            const GridSmartAPIEndpoint = `${publicApiUrl}/api/sessionize/GridSmart?sessionId=${sessionizeApiId}`;

            const [speakerResponse, gridSmartResponse] = await Promise.all([
                fetch(speakerAPIEndpoint),
                fetch(GridSmartAPIEndpoint),
            ]);

            if (!speakerResponse.ok || !gridSmartResponse.ok) {
                throw new Error("Oops! Failed to fetch speaker or grid smart data. Looks like the internet took a coffee break! ☕😅");
            }

            const speakerResponseData = await speakerResponse.json();
            const gridSmartResponseData = await gridSmartResponse.json();

            const speakerData: SessionizeSpeakers[] = speakerResponseData.data;

            const gridSmartData: GridSmart[] = gridSmartResponseData.data;

            let scheduleData = [];

            if (gridSmartResponseData.fromCache || speakerResponseData.fromCache) {
                setFromCache(true);
                setCachedAt(gridSmartResponseData.cachedAt
                    ? new Date(gridSmartResponseData.cachedAt).toLocaleString()
                    : "Unknown time"
                );
            }

            // Map speaker profile pictures into the schedule
            scheduleData = gridSmartData.map((daySchedule) => ({
                ...daySchedule,
                rooms: daySchedule.rooms.map((room) => ({
                    ...room,
                    sessions: room.sessions
                        .filter((session) => session.speakers.length > 0)
                        .map((session) => ({
                            ...session,
                            speakers: session.speakers.map((sessionSpeaker) => {
                                const matchedSpeaker = speakerData.find(
                                    (speaker) => speaker.id === sessionSpeaker.id
                                );
                                return {
                                    ...sessionSpeaker,
                                    profilePicture: matchedSpeaker?.profilePicture ?? DUMMY_PROFILE_PICTURE,
                                };
                            }),
                        })),
                })),
            }));

            setScheduleData(scheduleData);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSpeakersAndSchedule();
    }, []);

    if (error) {
        return <ErrorCard message={error} />;
    }

    return (
        <section className="relative bg-primary-yellow/70 py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section - Matching Resources.tsx */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        Event Schedule
                    </span>
                    <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                        Schedule
                    </h3>
                </div>
                
                {loading ? (
                    <SessionListSkeleton />
                ) : (
                    <>
                        {scheduleData && scheduleData.length > 0 ? (
                            scheduleData.map((daySchedule, index) => (
                                <div key={index} className="w-full">
                                    {daySchedule.rooms.map((room) => (
                                        <div key={room.id} className="w-full mb-16 lg:mb-20">
                                            {/* Track Header - Eyebrow Style */}
                                            <div className="mb-12 lg:mb-16">
                                                <div className="relative inline-block">
                                                    {/* Eyebrow Background */}
                                                    <div className="absolute inset-0 bg-neutral-white/80 rounded-lg transform rotate-1"></div>
                                                    <div className="relative bg-gradient-to-r from-neutral-white/90 to-neutral-white/70 px-6 py-3 rounded-lg border border-primary-yellow/30">
                                                        <h3 className="text-xl lg:text-2xl font-bold text-neutral-navy uppercase tracking-wide outfit-extra-bold">
                                                            {room.name === 'Track1' ? 'Track 1' : room.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {room.sessions.length > 0 ? (
                                                <SessionList sessions={room.sessions} />
                                            ) : (
                                                <div className="w-full p-8 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-2xl text-center border border-primary-yellow/30">
                                                    <p className="text-lg text-neutral-navy/70 outfit-extra-light">No session available.</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div className="w-full p-8 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-2xl text-center border border-primary-yellow/30">
                                <p className="text-lg text-neutral-navy/70 outfit-extra-light">No session available.</p>
                            </div>
                        )}
                    </>
                )}
                {!loading && fromCache && cachedAt ? (
                    <div className="flex flex-row items-center justify-center gap-2 w-full mt-8">
                        <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 p-4 rounded-xl border border-primary-yellow/30">
                            <p className="text-sm text-center text-neutral-navy/70 outfit-extra-light">
                                ⚠️ This data is served from cache and was last updated at {cachedAt}.
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default Schedule;
