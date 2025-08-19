"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { User, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SessionListProps } from "@/lib/types"
import { extractTagsFromSession } from "@/lib/utils"

const SessionCard: React.FC<{ session: SessionListProps["sessions"][0] }> = ({ session }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const descriptionLines = 3
    const lineHeight = 1 // Assuming default line height
    const fontSize = 16 // Base font size in pixels
    const maxHeight = descriptionLines * lineHeight * fontSize

    const toggleExpand = () => setIsExpanded(!isExpanded)

    // Function to format time
    const formatTime = (date: string) => {
        const timeObj = new Date(date)
        const hours = timeObj.getHours()
        const minutes = timeObj.getMinutes()
        const ampm = hours >= 12 ? "PM" : "AM"
        const formattedHours = hours % 12 || 12
        return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
    }

    // Extract all tags from the session
    const sessionTags = extractTagsFromSession(session)

    return (
        <div className="flex flex-col bg-[#1d1d1c] rounded-lg shadow-lg">
            {/* Main Content Row */}
            <div className="flex flex-row items-start p-2 lg:p-4">
                {/* Speaker Images Section - Mobile: Horizontal, Desktop: Vertical */}
                <div className="flex-shrink-0 mr-2 md:mr-4 lg:mr-6">
                    {/* Mobile: Horizontal layout */}
                    <div className="flex flex-col gap-1 md:hidden">
                        {session.speakers.slice(0, 3).map((speaker, index) => (
                            <div key={speaker.id} className="flex flex-col items-center">
                                <div className="w-24 h-24 relative">
                                    <Image
                                        src={speaker.profilePicture ?? "https://sessionize.com/image/8db9-400o400o1-test4.jpg"}
                                        alt={`${speaker.name} profile`}
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-cover w-full h-full"
                                    />
                                </div>
                                <span className="hidden md:block text-xs text-neutral text-center max-w-20 truncate mt-1">{speaker.name}</span>
                            </div>
                        ))}
                        {session.speakers.length > 3 && (
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <span className="text-xs text-primary">+{session.speakers.length - 3}</span>
                                </div>
                                <span className="text-xs text-neutral text-center max-w-12 truncate mt-1">More</span>
                            </div>
                        )}
                    </div>
                    
                    {/* Tablet/Desktop: Vertical layout */}
                    <div className="hidden md:flex flex-col gap-2 justify-start items-start">
                        {session.speakers.map((speaker, index) => (
                            <div key={speaker.id} className="flex flex-col items-start mb-2">
                                <div className="w-32 h-32 relative">
                                    <Image
                                        src={speaker.profilePicture ?? "https://sessionize.com/image/8db9-400o400o1-test4.jpg"}
                                        alt={`${speaker.name} profile`}
                                        width={96}
                                        height={96}
                                        className="rounded-lg object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex items-center gap-1 mt-2">
                                    <User size={12} className="text-neutral" />
                                    <span className="text-xs text-neutral text-center max-w-24 truncate">{speaker.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Title, Speaker, Time and Tags */}
                <div className="flex flex-col flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-2">
                        <div className="flex-grow">
                            {/* Display all tags */}
                            <div className="flex flex-wrap gap-1">
                                {sessionTags.map((tag) => (
                                    <span 
                                        key={tag.id}
                                        className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary/70 rounded-md border border-secondary/30"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                            <span className="text-xs md:text-base whitespace-nowrap text-primary/50">{formatTime(session.startsAt)} - {formatTime(session.endsAt)}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <h4 className="text-sm md:text-xl lg:text-2xl text-secondary text-left font-bold mb-1">{session.title}</h4>
                        {/* Show all speakers in the main content area */}
                        <div className="flex flex-wrap items-center gap-2">
                            {session.speakers.map((speaker, index) => (
                                <div key={speaker.id} className="flex items-center gap-1">
                                    <User size={12} className="text-neutral md:text-sm" />
                                    <span className="text-xs text-neutral md:text-sm">{speaker.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description - Desktop Only */}
                    <div className="hidden md:block mt-2">
                        <motion.div
                            animate={{ height: isExpanded ? "auto" : maxHeight }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden relative"
                        >
                            <p className="text-base md:text-base text-left text-neutral">{session.description}</p>
                        </motion.div>
                        {session.description.length > 300 && (
                            <button
                                onClick={toggleExpand}
                                className="text-xs text-secondary focus:outline-none mt-1"
                            >
                                {isExpanded ? "[-] Read Less" : "[+] Read More"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Description - Expandable Section */}
            <div className="md:hidden">
                <button
                    onClick={toggleExpand}
                    className="w-full px-4 py-2 flex items-center justify-center text-xs text-primary/50 focus:outline-none border-t border-neutral/20"
                >
                    {isExpanded ? (
                        <ChevronUp size={14} className="ml-1" />
                    ) : (
                        <ChevronDown size={14} className="ml-1" />
                    )}
                </button>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="px-4 pb-4 text-base text-left text-neutral">{session.description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

const SessionList: React.FC<SessionListProps> = ({ sessions }) => {
    return (
        <div className="flex flex-col gap-4 w-full">
            {sessions.map((session) => (
                <SessionCard key={session.id} session={session} />
            ))}
        </div>
    )
}

export default SessionList

