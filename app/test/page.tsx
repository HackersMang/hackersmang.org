"use client"

import { useEffect, useState } from "react"
import Header from "@/components/hackersmang/Header"
import { Footer } from "@/components/hackersmang/Footer"

interface DateTimeInfo {
    currentDate: string
    currentTime: string
    fullDateTime: string
    isoString: string
    timestamp: number
    timezone: string
    timezoneOffset: number
    timezoneOffsetHours: string
    utcDate: string
    utcTime: string
    utcFullDateTime: string
    dayOfWeek: string
    dayOfYear: number
    weekOfYear: number
    monthName: string
    year: number
    month: number
    date: number
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
    isDST: boolean
    localeString: string
    toLocaleDateString: string
    toLocaleTimeString: string
    toLocaleString: string
}

function TestPage() {
    const [dateTimeInfo, setDateTimeInfo] = useState<DateTimeInfo | null>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        updateDateTimeInfo()
        
        // Update every second
        const interval = setInterval(updateDateTimeInfo, 1000)
        
        return () => clearInterval(interval)
    }, [])

    const updateDateTimeInfo = () => {
        const now = new Date()
        
        // Get timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        
        // Get timezone offset
        const timezoneOffset = now.getTimezoneOffset()
        const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60)
        const offsetMinutes = Math.abs(timezoneOffset) % 60
        const timezoneOffsetHours = `${timezoneOffset <= 0 ? '+' : '-'}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`
        
        // Get UTC date
        const utcDate = now.toUTCString()
        const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000))
        
        // Calculate day of year
        const startOfYear = new Date(now.getFullYear(), 0, 0)
        const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000)
        
        // Calculate week of year
        const startOfYearForWeek = new Date(now.getFullYear(), 0, 1)
        const daysSinceStart = Math.floor((now.getTime() - startOfYearForWeek.getTime()) / 86400000)
        const weekOfYear = Math.ceil((daysSinceStart + startOfYearForWeek.getDay() + 1) / 7)
        
        // Check if DST (Daylight Saving Time) - simplified check
        const january = new Date(now.getFullYear(), 0, 1)
        const july = new Date(now.getFullYear(), 6, 1)
        const stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset())
        const isDST = now.getTimezoneOffset() < stdTimezoneOffset
        
        const info: DateTimeInfo = {
            currentDate: now.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }),
            currentTime: now.toLocaleTimeString('en-US', { 
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }),
            fullDateTime: now.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }),
            isoString: now.toISOString(),
            timestamp: now.getTime(),
            timezone: timezone,
            timezoneOffset: timezoneOffset,
            timezoneOffsetHours: timezoneOffsetHours,
            utcDate: now.toUTCString().split(' ').slice(0, 4).join(' '),
            utcTime: now.toUTCString().split(' ').slice(4).join(' '),
            utcFullDateTime: utcDate,
            dayOfWeek: now.toLocaleDateString('en-US', { weekday: 'long' }),
            dayOfYear: dayOfYear,
            weekOfYear: weekOfYear,
            monthName: now.toLocaleDateString('en-US', { month: 'long' }),
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            date: now.getDate(),
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            milliseconds: now.getMilliseconds(),
            isDST: isDST,
            localeString: now.toLocaleString(),
            toLocaleDateString: now.toLocaleDateString(),
            toLocaleTimeString: now.toLocaleTimeString(),
            toLocaleString: now.toLocaleString()
        }
        
        setDateTimeInfo(info)
    }

    if (!isClient || !dateTimeInfo) {
        return (
            <main className="relative bg-white outfit-extra-light min-h-screen">
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-neutral-navy">Loading...</h1>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="relative bg-white outfit-extra-light min-h-screen">
            <Header />
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl lg:text-4xl font-bold text-neutral-navy mb-8 outfit-extra-bold">
                        Date & Time Information
                    </h1>
                    
                    <div className="bg-neutral-white/95 rounded-lg border border-neutral-navy/20 p-6 lg:p-8 space-y-6">
                        {/* Current Date & Time */}
                        <section className="border-b border-neutral-navy/10 pb-6">
                            <h2 className="text-xl font-bold text-neutral-navy mb-4 outfit-extra-bold">
                                Current Date & Time
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Date</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.currentDate}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Time</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.currentTime}
                                    </p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Full Date & Time</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.fullDateTime}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Timezone Information */}
                        <section className="border-b border-neutral-navy/10 pb-6">
                            <h2 className="text-xl font-bold text-neutral-navy mb-4 outfit-extra-bold">
                                Timezone Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Timezone</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.timezone}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Offset (UTC)</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.timezoneOffsetHours} ({dateTimeInfo.timezoneOffset} minutes)
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Daylight Saving Time</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.isDST ? 'Yes' : 'No'}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* UTC Information */}
                        <section className="border-b border-neutral-navy/10 pb-6">
                            <h2 className="text-xl font-bold text-neutral-navy mb-4 outfit-extra-bold">
                                UTC (Coordinated Universal Time)
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">UTC Date & Time</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.utcFullDateTime}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">ISO 8601 Format</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold break-all">
                                        {dateTimeInfo.isoString}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Date Components */}
                        <section className="border-b border-neutral-navy/10 pb-6">
                            <h2 className="text-xl font-bold text-neutral-navy mb-4 outfit-extra-bold">
                                Date Components
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Year</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.year}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Month</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.monthName} ({dateTimeInfo.month})
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Day</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.date}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Day of Week</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.dayOfWeek}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Day of Year</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.dayOfYear}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Week of Year</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.weekOfYear}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Time Components */}
                        <section className="border-b border-neutral-navy/10 pb-6">
                            <h2 className="text-xl font-bold text-neutral-navy mb-4 outfit-extra-bold">
                                Time Components
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Hours</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.hours.toString().padStart(2, '0')}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Minutes</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.minutes.toString().padStart(2, '0')}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Seconds</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.seconds.toString().padStart(2, '0')}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Milliseconds</p>
                                    <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.milliseconds}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Timestamp */}
                        <section className="border-b border-neutral-navy/10 pb-6">
                            <h2 className="text-xl font-bold text-neutral-navy mb-4 outfit-extra-bold">
                                Timestamp
                            </h2>
                            <div>
                                <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">Unix Timestamp (milliseconds)</p>
                                <p className="text-lg font-semibold text-neutral-navy outfit-extra-bold break-all">
                                    {dateTimeInfo.timestamp}
                                </p>
                                <p className="text-sm text-neutral-navy/70 outfit-extra-light mt-2">
                                    Unix Timestamp (seconds): {Math.floor(dateTimeInfo.timestamp / 1000)}
                                </p>
                            </div>
                        </section>

                        {/* Locale Strings */}
                        <section>
                            <h2 className="text-xl font-bold text-neutral-navy mb-4 outfit-extra-bold">
                                Locale Formats
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">toLocaleString()</p>
                                    <p className="text-base font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.toLocaleString}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">toLocaleDateString()</p>
                                    <p className="text-base font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.toLocaleDateString}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light mb-1">toLocaleTimeString()</p>
                                    <p className="text-base font-semibold text-neutral-navy outfit-extra-bold">
                                        {dateTimeInfo.toLocaleTimeString}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-6 text-center text-sm text-neutral-navy/70 outfit-extra-light">
                        <p>This page updates every second</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default TestPage

