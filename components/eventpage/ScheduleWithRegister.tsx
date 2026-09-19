"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import ErrorCard from "@/components/eventpage/ErrorCard";
import SessionList from "@/components/eventpage/SessionList";
import SessionListSkeleton from "@/components/eventpage/SessionListSkeleton";
import { GridSmart, ScheduleWithRegisterProps, SessionizeSpeakers } from "@/lib/types";
import { DEMO_API_ID, DUMMY_PROFILE_PICTURE } from "@/lib/constants";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CodeOfConduct } from "./CodeOfConduct";
import ComingSoonBanner from "./ComingSoonBanner";
import Registrations from "./Registrations";

const ScheduleWithRegister = ({
    sessionId,
    trackRegistrations,
    registrationStartOn,
    registrationEndOn,
    showComingSoonBanner = false,
    independentRegistrations,
    sessionizeScheduleAppUrl,
}: ScheduleWithRegisterProps): JSX.Element => {
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

    const fetchSpeakersAndSchedule = useCallback(async () => {
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
                const speakerError = speakerResponse.ok ? null : await speakerResponse.json().catch(() => ({ error: "Unknown error" }));
                const gridSmartError = gridSmartResponse.ok ? null : await gridSmartResponse.json().catch(() => ({ error: "Unknown error" }));

                const errorMessage = gridSmartError?.error || speakerError?.error || "Failed to fetch schedule data";
                const errorDetails = gridSmartError?.details || speakerError?.details || "";

                console.error("API Error:", {
                    speakerError,
                    gridSmartError,
                    speakerStatus: speakerResponse.status,
                    gridSmartStatus: gridSmartResponse.status
                });

                throw new Error(`${errorMessage}${errorDetails ? `: ${errorDetails}` : ""}`);
            }

            const speakerResponseData = await speakerResponse.json();
            const gridSmartResponseData = await gridSmartResponse.json();

            if (!speakerResponseData.data || !gridSmartResponseData.data) {
                console.error("Invalid response structure:", {
                    speakerResponseData,
                    gridSmartResponseData
                });
                throw new Error("Invalid data structure received from API");
            }

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
                        .filter((session) => session.speakers.length > 0 || session.isServiceSession)
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
                                    tagLine: matchedSpeaker?.tagLine,
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
    }, [sessionId]);

    useEffect(() => {
        fetchSpeakersAndSchedule();
    }, [fetchSpeakersAndSchedule]);

    // Collect all unique rooms/tracks from schedule data
    const allTracks = useMemo(() => {
        if (!scheduleData) return [];
        const tracks: Array<{ name: string; id: number }> = [];
        scheduleData.forEach(daySchedule => {
            daySchedule.rooms.forEach(room => {
                if (!tracks.find(t => t.id === room.id)) {
                    tracks.push({ name: room.name, id: room.id });
                }
            });
        });
        return tracks;
    }, [scheduleData]);

    const hasMultipleTracks = allTracks.length > 1;

    // Track jump nav: which track is currently in view
    const [activeTrackId, setActiveTrackId] = useState<number | null>(null);

    const scrollToTrack = useCallback((trackId: number) => {
        const el = document.getElementById(`track-${trackId}`);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveTrackId(trackId);
    }, []);

    useEffect(() => {
        if (!hasMultipleTracks || !scheduleData) return;

        setActiveTrackId((prev) => prev ?? allTracks[0]?.id ?? null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible[0]) {
                    const id = Number((visible[0].target as HTMLElement).dataset.trackId);
                    if (!Number.isNaN(id)) setActiveTrackId(id);
                }
            },
            {
                // Treat a track as active when its header sits in the upper viewport
                rootMargin: "-15% 0px -55% 0px",
                threshold: [0, 0.1, 0.25],
            }
        );

        allTracks.forEach((track) => {
            const el = document.getElementById(`track-${track.id}`);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [hasMultipleTracks, scheduleData, allTracks]);

    // Determine which registration mode to use
    const useTrackBasedRegistration = trackRegistrations && trackRegistrations.length > 0;

    if (error) {
        return <ErrorCard message={error} />;
    }

    const RegistrationButton = ({ roomName, trackNumber }: { roomName: string, trackNumber: number }) => {
        if (!trackRegistrations) return null;

        const trackRegistration = trackRegistrations.find(
            tr => tr.track.toLowerCase() === roomName.toLowerCase()
        );

        if (!trackRegistration?.registrationLink) return null;

        return (
            <div className="animate-fade-in-up w-full">
                <div className="bg-neutral-white/95 p-0 lg:p-10 relative overflow-hidden transition-all duration-500 md:hover:scale-[1.02] md:hover:shadow-lg group rounded-2xl md:rounded-none">
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 via-transparent to-primary-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Interconnected Corner Cuts with Animation */}
                    <div className="hidden md:block absolute top-0 left-0 w-8 h-8 bg-secondary-yellow transform rotate-45 -translate-x-4 -translate-y-4 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="hidden md:block absolute bottom-0 right-0 w-8 h-8 bg-secondary-yellow transform rotate-45 translate-x-4 translate-y-4 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="hidden md:block absolute bottom-0 left-0 w-8 h-8 bg-secondary-yellow transform rotate-45 -translate-x-4 translate-y-4 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="hidden md:block absolute top-0 right-0 w-8 h-8 bg-secondary-yellow transform rotate-45 translate-x-4 -translate-y-4 transition-all duration-300 group-hover:scale-110"></div>

                    {/* Floating Particles */}
                    <div className="hidden md:block absolute top-4 right-4 w-2 h-2 bg-secondary-yellow/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
                    <div className="hidden md:block absolute bottom-4 left-4 w-1.5 h-1.5 bg-secondary-yellow/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.6s' }}></div>
                    <div className="hidden md:block absolute top-1/2 right-8 w-1 h-1 bg-secondary-yellow/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10 flex flex-col items-start justify-start md:items-center md:justify-center gap-4">
                        <div className="inline-flex items-center gap-2 text-sm font-mono text-neutral-navy outfit-extra-light bg-primary-yellow/10 px-3 py-1 rounded-full">
                            <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse"></div>
                            <span className="text-sm outfit-extra-light text-neutral-navy font-bold">Track {trackNumber}</span>
                        </div>
                        {/* Title with Animation */}
                        <h4 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold tracking-tight transition-all duration-300">
                            {roomName}
                        </h4>

                        {/* Registration Button with Enhanced Animation */}
                        <Link
                            href={trackRegistration.registrationLink ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative w-full md:w-fit inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-green to-primary-green/80 text-neutral-white outfit-bold rounded-2xl border border-primary-green/30 transition-all duration-300 md:hover:from-primary-green/90 md:hover:to-primary-green/70 overflow-hidden text-lg lg:text-xl md:hover:scale-105 md:hover:shadow-xl"
                            aria-disabled={hasEnded}
                        >
                            {/* Animated Background Layer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-primary-green/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                            {/* Button Content */}
                            <div className="relative flex items-center gap-3">
                                {/* Icon with Enhanced Animation */}
                                {!hasEnded && (
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <ExternalLink
                                            size={20}
                                            className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12"
                                        />
                                    </div>
                                )}


                                {/* Text with Animation */}
                                <span className="outfit-bold tracking-wide transition-all duration-300 group-hover/btn:tracking-wider">
                                    {hasEnded ? "Registration Closed" : trackRegistration.buttonText}
                                </span>

                                {/* Enhanced Animated Dot */}
                                {!hasEnded && (
                                    <div className="w-2 h-2 bg-neutral-white rounded-full animate-pulse opacity-60 group-hover/btn:opacity-100 group-hover/btn:scale-125 transition-all duration-300"></div>
                                )}
                            </div>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="relative bg-neutral-white py-20 lg:py-32">
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
                            scheduleData.map((daySchedule, dayIndex) => (
                                <div key={dayIndex} className="w-full">
                                    {daySchedule.rooms.map((room, roomIndex) => {
                                        const totalTracks = daySchedule.rooms.length;
                                        return (
                                            <div
                                                key={room.id}
                                                id={`track-${room.id}`}
                                                data-track-id={room.id}
                                                className="w-full mb-16 lg:mb-20 scroll-mt-28 lg:scroll-mt-32"
                                            >
                                                {/* Enhanced Track Header - sticky just below site header */}
                                                <div className="sticky top-20 z-20 -mx-5 px-5 lg:-mx-12 lg:px-12 py-4 mb-0 lg:mb-16 bg-neutral-white border-b border-primary-yellow/20">

                                                    {/* Track indicator badge */}
                                                    {hasMultipleTracks && (
                                                        <div className="flex items-start justify-start md:items-center md:justify-center mb-2">
                                                            <div className="inline-flex items-center gap-2 text-sm font-mono text-neutral-navy outfit-extra-light bg-primary-yellow/10 px-3 py-1 rounded-full">
                                                                <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse"></div>
                                                                <span className="text-sm text-neutral-navy outfit-extra-light font-bold">
                                                                    Track {roomIndex + 1} of {totalTracks}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="flex items-start justify-start md:items-center md:justify-center text-center">
                                                        <div className="relative inline-block">
                                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl outfit-extra-bold text-neutral-navy tracking-tight">
                                                                {room.name}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                {room.sessions.length > 0 ? (
                                                    <>
                                                        <SessionList sessions={room.sessions} />
                                                        {!loading && showComingSoonBanner && <ComingSoonBanner message="More sessions coming soon" className="justify-center" />}
                                                    </>
                                                ) : (
                                                    <div className="w-full p-8 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-2xl text-center border border-primary-yellow/30">
                                                        <p className="text-lg text-neutral-navy outfit-extra-light">No session available.</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))
                        ) : (
                            <div className="w-full p-8 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-2xl text-center border border-primary-yellow/30">
                                <p className="text-lg text-neutral-navy outfit-extra-light">No session available.</p>
                            </div>
                        )}
                    </>
                )}

                {/* Track Registration Overview - Show at top if multiple tracks (backward compatible) */}
                {!loading && hasStarted && allTracks.length > 0 && useTrackBasedRegistration && (
                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                Choose Your Track
                            </h3>
                            <p className="text-lg text-neutral-navy outfit-extra-light leading-relaxed">
                                We have {allTracks.length} tracks available. Select the track you&apos;d like to attend:
                            </p>
                        </div>

                        {/* Track Cards Grid */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 w-full">
                            {allTracks.map((track, index) => {
                                const trackNumber = index + 1;
                                return (
                                    <div key={track.id} className="flex flex-col items-center justify-center gap-4 w-full border border-neutral-200/50 rounded-2xl md:rounded-none">
                                        <RegistrationButton key={track.id} roomName={track.name} trackNumber={trackNumber} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Code of Conduct */}
                        <div className="mt-8 text-center">
                            <CodeOfConduct />
                        </div>
                    </div>
                )}

                {/* Independent Registrations Component (new approach) */}
                {!loading && !useTrackBasedRegistration && independentRegistrations && independentRegistrations.length > 0 && (
                    <Registrations
                        registrations={independentRegistrations}
                        registrationStartOn={registrationStartOn}
                        registrationEndOn={registrationEndOn}
                    />
                )}

                {/* Cache Disclaimer */}
                {!loading && fromCache && cachedAt ? (
                    <div className="flex flex-row items-center justify-center gap-2 w-full mt-8">
                        <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 p-4 rounded-xl border border-primary-yellow/30">
                            <p className="text-sm text-center text-neutral-navy outfit-extra-light">
                                ⚠️ This data is served from cache and was last updated at {cachedAt}.
                            </p>
                        </div>
                    </div>
                ) : null}

                {/* Sessionize App Install Button */}
                {!loading &&
                    scheduleData &&
                    scheduleData.length > 0 &&
                    sessionizeScheduleAppUrl && (
                    <div className="flex flex-col items-center justify-center w-full mt-12 lg:mt-16 gap-4 bg-primary-yellow/10 p-8 rounded-2xl border border-primary-yellow/30">
                        <p className="text-sm text-neutral-navy/70 outfit-extra-light text-center max-w-2xl">
                            Install the Sessionize app for easy access to the schedule and speakers on your mobile device. Works offline and can be installed like a native app.
                        </p>
                        <Link
                            href={sessionizeScheduleAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative w-full md:w-fit inline-flex items-center justify-center gap-3 md:py-4 md:px-8 text-neutral-navy font-semibold rounded-2xl transition-all duration-300 overflow-hidden text-lg lg:text-xl hover:md:scale-105 hover:md:shadow-xl"
                        >
                            {/* Animated Background Layer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/20 to-primary-yellow/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                            {/* Button Content */}
                            <div className="relative flex items-center gap-3">
                                {/* Icon with Enhanced Animation */}
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <ExternalLink
                                        size={20}
                                        className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12"
                                    />
                                </div>

                                {/* Text with Animation */}
                                <span className="outfit-bold tracking-wide transition-all duration-300 group-hover/btn:tracking-wider">
                                    Install Schedule App
                                </span>

                                {/* Enhanced Animated Dot */}
                                <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse opacity-60 group-hover/btn:opacity-100 group-hover/btn:scale-125 transition-all duration-300"></div>
                            </div>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-neutral-navy/10 to-transparent"></div>
                        </Link>
                    </div>
                )}
            </div>

            {/* Outside z-10 stacking context so it stays above sibling sections */}
            {!loading && hasMultipleTracks && (
                <>
                    <div className="hidden md:block fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50">
                        <nav
                            aria-label="Jump to track"
                            className="flex flex-col gap-2 animate-fade-in-up"
                        >
                            {allTracks.map((track, index) => {
                                const isActive = activeTrackId === track.id;
                                return (
                                    <div key={track.id} className="relative group">
                                        <button
                                            type="button"
                                            onClick={() => scrollToTrack(track.id)}
                                            aria-current={isActive ? "true" : undefined}
                                            aria-describedby={`track-tip-${track.id}`}
                                            className={`min-w-[5.5rem] px-3 py-2.5 text-left border outfit-bold text-sm transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
                                                isActive
                                                    ? "bg-primary-yellow text-neutral-navy border-primary-yellow shadow-sm"
                                                    : "bg-neutral-white/95 text-neutral-navy border-primary-yellow/40 hover:border-primary-yellow hover:bg-primary-yellow/10"
                                            }`}
                                        >
                                            Track {index + 1}
                                        </button>

                                        <span
                                            id={`track-tip-${track.id}`}
                                            role="tooltip"
                                            className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap px-3 py-1.5 bg-neutral-white text-neutral-navy text-xs outfit-bold border border-primary-yellow/40 shadow-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-300 ease-out"
                                        >
                                            {track.name}
                                            <span
                                                aria-hidden
                                                className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-neutral-white drop-shadow-sm"
                                            />
                                        </span>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>

                    <nav
                        aria-label="Jump to track"
                        className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-1 w-full px-4 py-3 bg-neutral-white/95 border-t border-primary-yellow/40 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm animate-fade-in-up"
                    >
                        {allTracks.map((track, index) => {
                            const isActive = activeTrackId === track.id;
                            return (
                                <button
                                    key={track.id}
                                    type="button"
                                    onClick={() => scrollToTrack(track.id)}
                                    aria-current={isActive ? "true" : undefined}
                                    aria-label={`${track.name}, Track ${index + 1}`}
                                    className={`flex-1 text-center px-3 py-2.5 text-sm outfit-bold transition-colors duration-300 ease-out ${
                                        isActive
                                            ? "bg-primary-yellow text-neutral-navy"
                                            : "bg-transparent text-neutral-navy/70"
                                    }`}
                                >
                                    Track {index + 1}
                                </button>
                            );
                        })}
                    </nav>
                </>
            )}
        </section>
    );
};

export default ScheduleWithRegister; 