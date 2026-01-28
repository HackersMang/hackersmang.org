"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SessionListProps } from "@/lib/types"
import { extractTagsFromSession } from "@/lib/utils"

// Constants
const DESCRIPTION_MAX_HEIGHT = 54
const OVERFLOW_TOLERANCE = 2
const RETRY_DELAY = 100
const MEASUREMENT_DELAY = 50
const DUMMY_PROFILE_PICTURE = "https://sessionize.com/image/8db9-400o400o1-test4.jpg"

// Utility function to format time
const formatTime = (date: string): string => {
    const timeObj = new Date(date)
    const hours = timeObj.getHours()
    const minutes = timeObj.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
}

interface SessionCardProps {
    session: SessionListProps["sessions"][0]
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOverflowing, setIsOverflowing] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const toggleExpand = useCallback(() => {
        setIsExpanded((prev) => !prev)
    }, [])

    // Memoize computed values
    const sessionTags = useMemo(() => extractTagsFromSession(session), [session])
    const isServiceSession = useMemo(() => session.isServiceSession, [session.isServiceSession])
    const hasDescription = Boolean(session.description)
    const hasSpeakers = session.speakers.length > 0

    // Check if description content overflows
    useEffect(() => {
        if (!containerRef.current || !hasDescription) {
            return
        }

        const checkOverflow = (): void => {
            const container = containerRef.current
            if (!container) {
                return
            }

            // Wait for container to have width
            if (container.offsetWidth === 0) {
                retryTimeoutRef.current = setTimeout(checkOverflow, RETRY_DELAY)
                return
            }

            // Temporarily remove height constraint to measure full content
            const originalHeight = container.style.height
            const originalOverflow = container.style.overflow
            container.style.height = "auto"
            container.style.overflow = "visible"

            // Force a reflow to ensure accurate measurement
            const _unused = container.offsetHeight
            const fullHeight = container.scrollHeight

            // Restore original styles
            container.style.height = originalHeight
            container.style.overflow = originalOverflow

            // Check if content height exceeds maxHeight (with tolerance)
            setIsOverflowing(fullHeight > DESCRIPTION_MAX_HEIGHT + OVERFLOW_TOLERANCE)
        }

        // Use requestAnimationFrame to ensure layout is complete
        const rafId = requestAnimationFrame(() => {
            setTimeout(checkOverflow, MEASUREMENT_DELAY)
        })

        // Check on window resize
        globalThis.addEventListener("resize", checkOverflow)

        return () => {
            cancelAnimationFrame(rafId)
            if (retryTimeoutRef.current) {
                clearTimeout(retryTimeoutRef.current)
            }
            globalThis.removeEventListener("resize", checkOverflow)
        }
    }, [hasDescription])

    // Memoize className strings
    const cardClassName = useMemo(
        () =>
            `w-full pt-4 lg:pt-8 pb-4 lg:pb-8 border-t border-neutral-navy/30 transition-all duration-300 hover:scale-[1.02] ${
                isServiceSession ? "bg-secondary-yellow/10" : "bg-neutral-white/95"
            }`,
        [isServiceSession]
    )

    const titleClassName = useMemo(
        () =>
            `text-xl lg:text-2xl font-bold text-neutral-navy ${
                isServiceSession ? "mb-0" : "mb-4"
            } tracking-wide ${
                isServiceSession ? "outfit-extra-light italic px-2" : "outfit-extra-bold"
            }`,
        [isServiceSession]
    )

    return (
        <div className={cardClassName}>
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left Side - Time and Content */}
                <div className="flex-1 w-full lg:w-auto">
                    {/* Time Slot and Tags Row */}
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-sm font-mono text-neutral-navy outfit-extra-light bg-primary-yellow/10 px-3 py-1 rounded-full">
                            [ {formatTime(session.startsAt)}–{formatTime(session.endsAt)} ]
                        </span>

                        {/* Tags */}
                        {sessionTags.length > 0 && (
                            <div className="flex flex-wrap gap-2 justify-end">
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

                    {/* Speaker Images - Mobile Only */}
                    {hasSpeakers && (
                        <div className="mb-6 lg:hidden">
                            <div className="flex gap-4">
                                {session.speakers.map((speaker) => (
                                    <div
                                        key={speaker.id}
                                        className="flex flex-col items-start group flex-[0_0_50%]"
                                    >
                                        <div className="relative">
                                            <Image
                                                src={speaker.profilePicture ?? DUMMY_PROFILE_PICTURE}
                                                alt={`${speaker.name} profile`}
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 rounded-2xl object-cover border-2 border-primary-yellow/30 group-hover:border-primary-yellow/60 transition-all duration-300"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start mt-2 w-full">
                                            <span className="text-xs text-neutral-navy outfit-extra-light text-left">
                                                {speaker.name}
                                            </span>
                                            {speaker.tagLine && (
                                                <span className="text-[10px] text-neutral-navy/70 outfit-extra-light text-left mt-1 leading-tight whitespace-normal break-words">
                                                    {speaker.tagLine}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Title */}
                    <h4 className={titleClassName}>{session.title}</h4>

                    {/* Description */}
                    {hasDescription && (
                        <div className="mb-6">
                            <motion.div
                                ref={containerRef}
                                animate={{ height: isExpanded ? "auto" : DESCRIPTION_MAX_HEIGHT }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden relative"
                            >
                                <p className="text-base lg:text-lg text-neutral-navy leading-relaxed outfit-extra-light">
                                    {session.description}
                                </p>
                            </motion.div>
                            {isOverflowing && (
                                <button
                                    onClick={toggleExpand}
                                    aria-expanded={isExpanded}
                                    aria-label={isExpanded ? "Collapse description" : "Expand description"}
                                    className="text-sm text-neutral-navy hover:text-neutral-navy focus:outline-none mt-3 transition-colors outfit-extra-light font-semibold underline hover:no-underline"
                                >
                                    {isExpanded ? "Read Less" : "Read More"}
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Side - Speaker Images - Desktop Only */}
                {hasSpeakers && (
                    <div className="hidden lg:flex flex-shrink-0 w-auto">
                        <div className="flex flex-wrap justify-end gap-3">
                            {session.speakers.map((speaker) => (
                                <div key={speaker.id} className="flex flex-col items-center group w-40">
                                    <div className="relative">
                                        <Image
                                            src={speaker.profilePicture ?? DUMMY_PROFILE_PICTURE}
                                            alt={`${speaker.name} profile`}
                                            width={80}
                                            height={80}
                                            className="w-24 h-24 rounded-2xl object-cover border-2 border-primary-yellow/30 group-hover:border-primary-yellow/60 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center mt-3 w-full">
                                        <span className="text-sm text-neutral-navy outfit-extra-light text-center">
                                            {speaker.name}
                                        </span>
                                        {speaker.tagLine && (
                                            <span className="text-xs text-neutral-navy/70 outfit-extra-light text-center mt-1 leading-tight whitespace-normal break-words w-full">
                                                {speaker.tagLine}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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

