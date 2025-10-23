import React from 'react';
import EventCard, { EventLink } from './EventCard';

type RecentEventsProps = {
  title?: string;
  events?: EventLink[];
  maxEvents?: number;
  className?: string;
};

export default function RecentEvents({ 
  title = "Recent Events", 
  events,
  maxEvents,
  className = ""
}: RecentEventsProps) {
  // Default events if none provided
  const defaultEvents: EventLink[] = [
    { href: "/2025-august", title: "#HMAug25", subtitle: "HackersMang 2025 August edition" },
    { href: "/2025-april", title: "#HMApr25", subtitle: "HackersMang 2025 April edition" },
    { href: "/techmang25", title: "#TechMang25", subtitle: "Mangaluru Tech Day 2025" },
    { href: "/2024-november", title: "#HMNov24", subtitle: "HackersMang 2024 November edition" },
    { href: "/ai-techverse", title: "#AiTechVerse", subtitle: "Ai TechVerse by HackersMang" },
    {
      href: "https://www.eventbrite.com/e/mangaluru-tech-day-2024-tickets-795844441147",
      title: "#TechMang24",
      subtitle: "Mangaluru Tech Day 2024",
      isExternal: true
    },
    {
      href: "https://www.eventbrite.com/e/mangaluru-tech-day-3-techmang3-tickets-82910289909",
      title: "#TechMang3",
      subtitle: "Mangaluru Tech Day 2023",
      isExternal: true
    }
  ];

  const allEvents = events || defaultEvents;
  
  // If maxEvents is provided, use it; otherwise split into Recent (3) and Past (remaining)
  if (maxEvents) {
    const displayEvents = allEvents.slice(0, maxEvents);
    return (
      <div className={`flex flex-col items-start justify-start w-full gap-3 md:gap-6 ${className}`}>
        {title && <h4 className="text-lg lg:text-2xl outfit-bold text-neutral-navy">{title}</h4>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 min-h-24">
          {displayEvents.map((event, index) => (
            <EventCard key={`recent-${index}`} event={event} />
          ))}
        </div>
      </div>
    );
  }

  // Auto-split: Latest 3 as Recent, remaining as Past
  const recentEvents = allEvents.slice(0, 3);
  const pastEvents = allEvents.slice(3);

  return (
    <div className={`flex flex-col items-start justify-start w-full gap-8 ${className}`}>
      {/* Recent Events Section */}
      <div className="space-y-6 w-full">
        <div className="border-b border-neutral-200/50 pb-2">
          <h3 className="text-xl outfit-extra-bold text-neutral-navy">Recent Events</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentEvents.map((event, index) => (
            <EventCard key={`recent-${index}`} event={event} />
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <div className="space-y-6 w-full">
          <div className="border-b border-neutral-200/50 pb-2">
            <h3 className="text-xl outfit-extra-bold text-neutral-navy">Past Events</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event, index) => (
              <EventCard key={`past-${index}`} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}