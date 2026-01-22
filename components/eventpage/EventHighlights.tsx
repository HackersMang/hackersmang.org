"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { SessionizeSessionsResponse } from '@/lib/types';

interface Highlight {
    title: string;
    description: string;
    icon?: string;
}

interface EventHighlightsProps {
    sessionId?: string | null;
    title?: string;
    subtitle?: string;
    columns?: 1 | 2 | 3 | 4;
    backgroundColor?: string;
    className?: string;
}

// Icon SVG paths for different highlight types (Material Design style)
const getIconForHighlight = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('session')) {
        // Calendar/Event icon
        return 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z';
    } else if (lowerTitle.includes('speaker')) {
        // Users/People icon (matching FutureSection style)
        return 'M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.5 6h2l-2.5-6H12v6h2v-6h2.5l2.5 6h2l-2.5-6H20v6h2z';
    } else if (lowerTitle.includes('track')) {
        // Layers/Stack icon
        return 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5';
    } else if (lowerTitle.includes('networking') || lowerTitle.includes('connect')) {
        // Handshake/Connection icon
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z';
    } else if (lowerTitle.includes('workshop') || lowerTitle.includes('learning')) {
        // Book/Education icon
        return 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z';
    } else {
        // Lightbulb/Sparkles icon (matching FutureSection style)
        return 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';
    }
};

// Extract key topics/themes from session titles
const extractTopics = (sessions: SessionizeSessionsResponse[]): string[] => {
    const topics = new Set<string>();
    const keywords = ['AI', 'Web3', 'MCP', 'Workshop', 'Tech', 'Cloud', 'DevOps', 'IoT'];
    
    sessions.forEach(group => {
        group.sessions.forEach(session => {
            keywords.forEach(keyword => {
                if (session.title.toUpperCase().includes(keyword.toUpperCase())) {
                    topics.add(keyword);
                }
            });
        });
    });
    
    return Array.from(topics).slice(0, 3);
};

// Generate dynamic highlights from sessions data
const generateHighlights = (sessionsData: SessionizeSessionsResponse[]): Highlight[] => {
    if (!sessionsData || sessionsData.length === 0) {
        return [
            {
                title: 'Expert Speakers',
                description: 'Learn from industry leaders and innovators sharing cutting-edge insights.',
                icon: getIconForHighlight('Speakers')
            },
            {
                title: 'Hands-on Workshops',
                description: 'Get practical experience through interactive workshops designed to enhance your skills.',
                icon: getIconForHighlight('Workshops')
            },
            {
                title: 'Networking Opportunities',
                description: 'Connect with like-minded professionals, developers, and tech enthusiasts.',
                icon: getIconForHighlight('Networking')
            },
            {
                title: 'Latest Trends',
                description: 'Stay ahead with the latest developments in AI, cloud computing, and emerging technologies.',
                icon: getIconForHighlight('Trends')
            },
        ];
    }

    // Aggregate data from all groups
    const allSessions = sessionsData.flatMap(group => group.sessions);
    const uniqueSpeakers = new Set(allSessions.flatMap(session => session.speakers.map(s => s.id)));
    const uniqueRooms = new Set(allSessions.map(session => session.room).filter(Boolean));
    const topics = extractTopics(sessionsData);
    
    const highlights: Highlight[] = [];

    // Highlight 1: Number of sessions
    if (allSessions.length > 0) {
        highlights.push({
            title: `${allSessions.length}+ Sessions`,
            description: `Explore ${allSessions.length} diverse sessions covering cutting-edge topics and practical insights.`,
            icon: getIconForHighlight('Sessions')
        });
    }

    // Highlight 2: Number of speakers
    if (uniqueSpeakers.size > 0) {
        highlights.push({
            title: `${uniqueSpeakers.size}+ Speakers`,
            description: `Learn from ${uniqueSpeakers.size} industry experts and thought leaders sharing their knowledge and experiences.`,
            icon: getIconForHighlight('Speakers')
        });
    }

    // Highlight 3: Tracks/rooms
    if (uniqueRooms.size > 0) {
        const roomsList = Array.from(uniqueRooms).join(', ');
        highlights.push({
            title: `${uniqueRooms.size} Tracks`,
            description: `Choose from ${uniqueRooms.size} specialized tracks: ${roomsList}.`,
            icon: getIconForHighlight('Tracks')
        });
    }

    // Highlight 4: Topics/themes
    if (topics.length > 0) {
        highlights.push({
            title: topics.join(' & '),
            description: `Dive deep into ${topics.join(', ')} and other emerging technologies shaping the future.`,
            icon: getIconForHighlight('Topics')
        });
    }

    // Fill remaining slots with default highlights if needed
    const defaultHighlights: Highlight[] = [
        {
            title: 'Networking Opportunities',
            description: 'Connect with like-minded professionals, developers, and tech enthusiasts in your community.',
            icon: getIconForHighlight('Networking')
        },
        {
            title: 'Hands-on Learning',
            description: 'Get practical experience through interactive sessions and workshops designed to enhance your skills.',
            icon: getIconForHighlight('Learning')
        },
    ];

    while (highlights.length < 4) {
        highlights.push(defaultHighlights[highlights.length % defaultHighlights.length]);
    }

    return highlights.slice(0, 4);
};

export default function EventHighlights({
    sessionId,
    title = "Why Attend?",
    subtitle,
    columns = 4,
    backgroundColor = "bg-secondary-yellow",
    className = "",
}: Readonly<EventHighlightsProps>) {
    const [highlights, setHighlights] = useState<Highlight[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [dynamicSubtitle, setDynamicSubtitle] = useState<string>(
        "Join us for an unforgettable experience filled with learning, networking, and innovation"
    );

    const fetchSessions = useCallback(async () => {
        if (!sessionId) {
            // Use default highlights if no sessionId provided
            setHighlights(generateHighlights([]));
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            const publicApiUrl = window.location.origin;
            const sessionsAPIEndpoint = `${publicApiUrl}/api/sessionize/Sessions?sessionId=${sessionId}`;

            const response = await fetch(sessionsAPIEndpoint);

            if (!response.ok) {
                throw new Error("Failed to fetch sessions data");
            }

            const responseData = await response.json();
            const sessionsData: SessionizeSessionsResponse[] = responseData.data;

            const generatedHighlights = generateHighlights(sessionsData);
            setHighlights(generatedHighlights);

            // Generate dynamic subtitle
            const allSessions = sessionsData.flatMap(group => group.sessions);
            const uniqueSpeakers = new Set(allSessions.flatMap(session => session.speakers.map(s => s.id)));
            
            if (allSessions.length > 0 && uniqueSpeakers.size > 0) {
                setDynamicSubtitle(
                    `Join ${uniqueSpeakers.size}+ expert speakers across ${allSessions.length}+ sessions covering the latest in technology and innovation`
                );
            }
        } catch (error) {
            console.error("Error fetching sessions:", error);
            // Fallback to default highlights on error
            setHighlights(generateHighlights([]));
        } finally {
            setLoading(false);
        }
    }, [sessionId]);

    useEffect(() => {
        fetchSessions();
    }, [fetchSessions]);

    if (loading) {
        return (
            <div className={`${backgroundColor} relative py-20 lg:py-32 overflow-hidden ${className}`}>
                <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                    <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                        <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                            {title}
                        </span>
                        {subtitle && (
                            <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                                {subtitle}
                            </h3>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl animate-pulse">
                                <div className="w-16 h-16 mb-6 bg-neutral-navy/20 rounded"></div>
                                <div className="h-8 bg-neutral-navy/20 rounded mb-4"></div>
                                <div className="h-4 bg-neutral-navy/20 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${backgroundColor} relative py-20 lg:py-32 overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section - Matching FutureSection style */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        {title}
                    </span>
                    {(subtitle || dynamicSubtitle) && (
                        <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                            {subtitle || dynamicSubtitle}
                        </h3>
                    )}
                </div>

                {/* 2x2 Grid Cards - Matching FutureSection style */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
                            <div className="relative z-10">
                                {/* Icon */}
                                {highlight.icon && (
                                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={highlight.icon} />
                                        </svg>
                                    </div>
                                )}
                                
                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                                    {highlight.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-neutral-navy leading-relaxed outfit-extra-light">
                                    {highlight.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
