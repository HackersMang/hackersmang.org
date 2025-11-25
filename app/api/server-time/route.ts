import { NextResponse } from 'next/server'

export async function GET() {
    const now = new Date()
    
    // Get server timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timezoneOffset = now.getTimezoneOffset()
    const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60)
    const offsetMinutes = Math.abs(timezoneOffset) % 60
    const timezoneOffsetHours = `${timezoneOffset <= 0 ? '+' : '-'}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`
    
    // Check if DST
    const january = new Date(now.getFullYear(), 0, 1)
    const july = new Date(now.getFullYear(), 6, 1)
    const stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset())
    const isDST = now.getTimezoneOffset() < stdTimezoneOffset
    
    return NextResponse.json({
        // ISO string (UTC)
        isoString: now.toISOString(),
        // Unix timestamp (milliseconds)
        timestamp: now.getTime(),
        // Server timezone info
        timezone: timezone,
        timezoneOffset: timezoneOffset,
        timezoneOffsetHours: timezoneOffsetHours,
        isDST: isDST,
        // Formatted strings
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
        utcDate: now.toUTCString(),
        // Date components
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        milliseconds: now.getMilliseconds(),
        dayOfWeek: now.toLocaleDateString('en-US', { weekday: 'long' }),
        monthName: now.toLocaleDateString('en-US', { month: 'long' }),
    })
}

