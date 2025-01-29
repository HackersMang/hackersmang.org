"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { User, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface SessionListProps {
    sessions: {
        id: string
        title: string
        description: string
        startsAt: string
        endsAt: string
        isServiceSession: boolean
        isPlenumSession: boolean
        speakers: {
            id: string
            name: string
            profilePicture?: string
        }[]
    }[]
}

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

    return (
        <div className="flex flex-col bg-[#1d1d1c] rounded-lg shadow-lg">
            {/* Main Content Row */}
            <div className="flex flex-row items-start p-2 lg:p-4">
                {/* Session Image */}
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 relative">
                    <Image
                        src={session.speakers[0]?.profilePicture ?? "https://sessionize.com/image/8db9-400o400o1-test4.jpg"}
                        alt={`session ${session.speakers[0]?.name ?? "unknown speaker"}`}
                        width={150}
                        height={150}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>

                {/* Title, Speaker, and Time for Mobile */}
                <div className="flex flex-col flex-grow min-w-0 pl-3 md:pl-4 lg:pl-6">
                    <div className="flex justify-between items-start gap-2">
                        <div className="flex-grow">
                            <h4 className="text-base md:text-xl lg:text-2xl font-bold mb-1">{session.title}</h4>
                            <div className="flex items-center gap-1">
                                <User size={14} className="text-neutral" />
                                <span className="text-sm text-neutral">{session.speakers[0]?.name ?? "unknown speaker"}</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                            <span className="text-xs md:text-base whitespace-nowrap text-primary/50">{formatTime(session.startsAt)}</span>
                        </div>
                    </div>

                    {/* Description - Desktop Only */}
                    <div className="hidden md:block mt-2">
                        <motion.div
                            animate={{ height: isExpanded ? "auto" : maxHeight }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden relative"
                        >
                            <p className="text-sm md:text-base text-neutral">{session.description}</p>
                        </motion.div>
                        {session.description.length > 200 && (
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
                    className="w-full px-4 py-2 flex items-center justify-center text-xs text-primary hover:text-primary/90 focus:outline-none border-t border-neutral/20"
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
                            <p className="px-4 pb-4 text-sm text-neutral">{session.description}</p>
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

