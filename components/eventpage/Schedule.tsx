"use client";

import React, { useEffect, useState } from "react";
import ErrorCard from "@/components/eventpage/ErrorCard";
import SessionList from "@/components/eventpage/SessionList";
import SessionListSkeleton from "@/components/eventpage/SessionListSkeleton";
import { GridSmart, ScheduleProps, SessionizeSpeakers } from "@/lib/types";
import { TriangleAlert } from "lucide-react";
import { DEMO_API_ID, DUMMY_PROFILE_PICTURE } from "@/lib/constants";

const Schedule = ({ sessionId }: ScheduleProps): JSX.Element => {
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
                throw new Error("Failed to fetch data");
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
        return <ErrorCard />;
    }

    return (
        <section className="flex flex-col px-2 pt-2 lg:px-4 lg:py-4 items-center justify-center w-full">
            <h2 className="text-xl lg:text-2xl text-primary pb-2 lg:pb-4">Schedule</h2>
            {loading ? (
                <SessionListSkeleton />
            ) : (
                <>
                    {scheduleData && scheduleData.length > 0 ? (
                        scheduleData.map((daySchedule, index) => (
                            <div key={index} className="w-full flex flex-col items-center justify-center">
                                {daySchedule.rooms.map((room) => (
                                    <div key={room.id} className="w-full mb-6 lg:w-5/6">
                                        <h3 className="text-lg lg:text-xl pb-4 text-primary/60 text-center">
                                            {room.name === 'Track1' ? 'Track 1' : room.name}
                                        </h3>
                                        {room.sessions.length > 0 ? (
                                            <SessionList sessions={room.sessions} />
                                        ) : (
                                            <div className="w-full p-4 bg-charcoal rounded-lg">
                                                <p className="text-sm text-center text-neutral">No session available.</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="w-full p-4 bg-charcoal rounded-lg">
                            <p className="text-sm text-center text-neutral">No session available.</p>
                        </div>
                    )}
                </>
            )}
            {!loading && fromCache && cachedAt ? (
                <div className="flex flex-row items-center justify-center gap-2 w-full mx-2">
                    <p className="text-sm text-center text-neutral">
                        ⚠️ This data is served from cache and was last updated at {cachedAt}.
                    </p>
                </div>
            ) : null}
        </section>
    );
};

export default Schedule;
