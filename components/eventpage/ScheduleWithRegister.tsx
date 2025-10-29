"use client";

import React, { useEffect, useState } from "react";
import ErrorCard from "@/components/eventpage/ErrorCard";
import SessionList from "@/components/eventpage/SessionList";
import SessionListSkeleton from "@/components/eventpage/SessionListSkeleton";
import { GridSmart, ScheduleWithRegisterProps, SessionizeSpeakers } from "@/lib/types";
import { DEMO_API_ID, DUMMY_PROFILE_PICTURE } from "@/lib/constants";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CodeOfConduct } from "./CodeOfConduct";

const ScheduleWithRegister = ({ sessionId, trackRegistrations, registrationStartOn, registrationEndOn }: ScheduleWithRegisterProps): JSX.Element => {
    // State variables
    const [scheduleData, setScheduleData] = useState<GridSmart[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [fromCache, setFromCache] = useState<boolean>(false);
    const [cachedAt, setCachedAt] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Registration state
    const now = new Date();
    const hasStarted = registrationStartOn ? now >= registrationStartOn : false;
    const hasEnded = registrationEndOn ? now.getTime() > registrationEndOn.getTime() + 24 * 60 * 60 * 1000 : false;

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
                            categories: session.categories || [],
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

    const RegistrationButton = ({ roomName }: { roomName: string }) => {
        const trackRegistration = trackRegistrations.find(
            tr => tr.track.toLowerCase() === roomName.toLowerCase()
        );

        if (!trackRegistration?.registrationLink) return null;

        return (
            <div className="mt-12 lg:mt-16 animate-fade-in-up">
                <div className="bg-neutral-white/95 p-8 lg:p-10 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-lg group">
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 via-transparent to-primary-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Interconnected Corner Cuts with Animation */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-primary-yellow transform rotate-45 -translate-x-4 -translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary-yellow transform rotate-45 translate-x-4 translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary-yellow transform rotate-45 -translate-x-4 translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-primary-yellow transform rotate-45 translate-x-4 -translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary-yellow/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.6s' }}></div>
                    <div className="absolute top-1/2 right-8 w-1 h-1 bg-primary/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                    
                    <div className="relative z-10 flex flex-col items-start justify-start md:items-center md:justify-center">
                        {/* Title with Animation */}
                        <h4 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-6 tracking-tight transition-all duration-300">
                            Register for {roomName}
                        </h4>
                        
                        {/* Registration Button with Enhanced Animation */}
                        <Link
                            href={trackRegistration.registrationLink ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 text-neutral-navy font-semibold rounded-2xl border border-primary-yellow/30 transition-all duration-300 hover:from-primary-yellow/90 hover:to-primary-yellow overflow-hidden text-lg lg:text-xl hover:scale-105 hover:shadow-xl"
                            aria-disabled={hasEnded}
                        >
                            {/* Animated Background Layer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/20 to-primary-yellow/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Button Content */}
                            <div className="relative flex items-center gap-3">
                                {/* Icon with Enhanced Animation */}
                                <div className="w-6 h-6 flex items-center justify-center">
                                    {!hasEnded && (
                                        <ExternalLink 
                                            size={20} 
                                            className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12" 
                                        />
                                    )}
                                </div>
                                
                                {/* Text with Animation */}
                                <span className="outfit-bold tracking-wide transition-all duration-300 group-hover/btn:tracking-wider">
                                    {hasEnded ? "Registration Closed" : trackRegistration.buttonText}
                                </span>
                                
                                {/* Enhanced Animated Dot */}
                                {!hasEnded && (
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse opacity-60 group-hover/btn:opacity-100 group-hover/btn:scale-125 transition-all duration-300"></div>
                                )}
                            </div>
                            
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </Link>
                        
                        <div className="mt-6 transition-all duration-300 group-hover:translate-y-1">
                            <CodeOfConduct />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="relative bg-neutral-white py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section - Matching Resources.tsx */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        Event Schedule
                    </span>
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
                                            <div className="mb-12 lg:mb-16 flex items-start justify-start md:items-center md:justify-center text-center">
                                                <div className="relative inline-block">
                                                    {/* Eyebrow Background */}
                                                    <div className="absolute inset-0 bg-neutral-white/80 rounded-lg transform rotate-1"></div>
                                                    <div className="relative">
                                                        <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                                                            {room.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {room.sessions.length > 0 ? (
                                                <>
                                                    <SessionList sessions={room.sessions} />
                                                    {hasStarted && <RegistrationButton roomName={room.name} />}
                                                </>
                                            ) : (
                                                <div className="w-full p-8 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-2xl text-center border border-primary-yellow/30">
                                                    <p className="text-lg text-neutral-navy outfit-extra-light">No session available.</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div className="w-full p-8 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-2xl text-center border border-primary-yellow/30">
                                <p className="text-lg text-neutral-navy outfit-extra-light">No session available.</p>
                            </div>
                        )}
                    </>
                )}
                {!loading && fromCache && cachedAt ? (
                    <div className="flex flex-row items-center justify-center gap-2 w-full mt-8">
                        <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 p-4 rounded-xl border border-primary-yellow/30">
                            <p className="text-sm text-center text-neutral-navy outfit-extra-light">
                                ⚠️ This data is served from cache and was last updated at {cachedAt}.
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default ScheduleWithRegister; 