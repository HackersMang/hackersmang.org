"use client";

import React, { useEffect, useState } from "react";
import ErrorCard from "@/components/eventpage/ErrorCard";
import SessionList from "@/components/eventpage/SessionList";
import SessionListSkeleton from "@/components/eventpage/SessionListSkeleton";

// Define the SessionizeSpeakers interface
export interface SessionizeSpeakers {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    tagLine: string;
    profilePicture: string;
    isTopSpeaker: boolean;
}

// Define the GridSmart interface
interface GridSmart {
    rooms: {
        id: number;
        name: string;
        sessions: {
            id: string;
            title: string;
            description: string;
            startsAt: string;
            endsAt: string;
            isServiceSession: boolean;
            isPlenumSession: boolean;
            speakers: {
                id: string;
                name: string;
                // Updated to include profile picture
                profilePicture?: string;
            }[];
        }[];
    }[];
}

const Schedule = () => {
    const [scheduleData, setScheduleData] = useState<GridSmart[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Function to fetch and process speakers and schedule data
    const fetchSpeakersAndSchedule = async () => {
        try {
            setLoading(true);

            const sessionizeApiId = process.env.NEXT_PUBLIC_SESSIONIZE_API_ID ?? 'jl4ktls0' // API id from sessionize doc.
            const speakerAPIEndpoint = `https://sessionize.com/api/v2/${sessionizeApiId}/view/Speakers`;
            const GridSmartAPIEndpoint = `https://sessionize.com/api/v2/${sessionizeApiId}/view/GridSmart`;

            // Fetch speakers
            const speakerResponse = await fetch(
                speakerAPIEndpoint
            );
            if (!speakerResponse.ok) {
                throw new Error("Failed to fetch speakers");
            }

            const speakerResponseData: SessionizeSpeakers[] = await speakerResponse.json();

            // Fetch schedule (GridSmart)
            const gridSmartResponse = await fetch(
                GridSmartAPIEndpoint
            );
            if (!gridSmartResponse.ok) {
                throw new Error("Failed to fetch schedule data");
            }

            let gridSmartData: GridSmart[] = await gridSmartResponse.json();

            // Map speaker profile pictures into the schedule
            gridSmartData = gridSmartData.map((daySchedule) => ({
                ...daySchedule,
                rooms: daySchedule.rooms.map((room) => ({
                    ...room,
                    sessions: room.sessions
                        .filter((session) => session.speakers.length > 0) // Filter out sessions with no speakers
                        .map((session) => ({
                            ...session,
                            speakers: session.speakers.map((sessionSpeaker) => {
                                const matchedSpeaker = speakerResponseData.find(
                                    (speaker) => speaker.id === sessionSpeaker.id
                                );
                                return {
                                    ...sessionSpeaker,
                                    profilePicture: matchedSpeaker?.profilePicture ?? "https://sessionize.com/image/8db9-400o400o1-test4.jpg", // Add profile picture
                                };
                            }),
                        })),
                })),
            }));

            // Store updated schedule data
            setScheduleData(gridSmartData);
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
        </section>
    );
};

export default Schedule;
