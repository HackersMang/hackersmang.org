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
        <div className="w-full bg-neutral-white/95 pt-4 lg:pt-8 border-t border-neutral-navy/30 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left Side - Time and Content */}
                <div className="flex-1 w-full lg:w-auto">
                    {/* Time Slot */}
                    <div className="mb-6">
                        <span className="text-sm font-mono text-neutral-navy/70 outfit-extra-light bg-primary-yellow/10 px-3 py-1 rounded-full">
                            [ {formatTime(session.startsAt)}–{formatTime(session.endsAt)} ]
                        </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl lg:text-2xl font-bold text-neutral-navy mb-4 uppercase tracking-wide outfit-extra-bold">
                        {session.title}
                    </h4>

                    {/* Description */}
                    <div className="mb-6">
                        <motion.div
                            animate={{ height: isExpanded ? "auto" : maxHeight }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden relative"
                        >
                            <p className="text-base lg:text-lg text-neutral-navy/80 leading-relaxed outfit-extra-light">
                                {session.description}
                            </p>
                        </motion.div>
                        {session.description.length > 300 && (
                            <button
                                onClick={toggleExpand}
                                className="text-sm text-neutral-navy hover:text-neutral-navy/80 focus:outline-none mt-3 transition-colors outfit-extra-light font-semibold underline hover:no-underline"
                            >
                                {isExpanded ? "Read Less" : "Read More"}
                            </button>
                        )}
                    </div>

                    {/* Tags */}
                    {sessionTags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {sessionTags.map((tag) => (
                                <span 
                                    key={tag.id}
                                    className="inline-block px-3 py-1 text-xs bg-primary-yellow/20 text-neutral-navy rounded-full font-medium outfit-extra-light border border-primary-yellow/30"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side - Speaker Images */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="flex flex-wrap justify-start lg:justify-end gap-4 lg:gap-6">
                        {session.speakers.map((speaker, index) => (
                            <div key={speaker.id} className="flex flex-col items-start justify-start lg:items-center lg:justify-center group">
                                <div className="relative">
                                    <Image
                                        src={speaker.profilePicture ?? "https://sessionize.com/image/8db9-400o400o1-test4.jpg"}
                                        alt={`${speaker.name} profile`}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover border-2 border-primary-yellow/30 group-hover:border-primary-yellow/60 transition-all duration-300"
                                    />
                                    {/* Speaker Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-neutral-navy text-xs font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <span className="text-xs lg:text-sm text-neutral-navy/70 outfit-extra-light mt-3 text-center max-w-20 lg:max-w-24 truncate">
                                    {speaker.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const SessionList: React.FC<SessionListProps> = ({ sessions }) => {
    return (
        <div className="w-full space-y-8 lg:space-y-12">
            {sessions.map((session) => (
                <SessionCard key={session.id} session={session} />
            ))}
        </div>
    )
}

export default SessionList

