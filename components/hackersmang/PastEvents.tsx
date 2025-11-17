import React from 'react';
import EventCard, { EventLink } from './EventCard';
import { PAST_EVENTS } from '@/lib/events';

type RecentEventsProps = {
  title?: string;
  events?: EventLink[];
  maxEvents?: number;
  className?: string;
};

export default function PastEvents({ 
  title = "Past events", 
  events,
  maxEvents,
  className = ""
}: RecentEventsProps) {
  const allEvents = events || PAST_EVENTS;
  
  // If maxEvents is provided, use it; otherwise split into Recent (3) and Past (remaining)
  if (maxEvents) {
    const displayEvents = allEvents.slice(0, maxEvents);
    return (
      <div className={`flex flex-col items-start justify-start w-full gap-3 md:gap-6 ${className}`}>
        {title && <h4 className="text-lg lg:text-2xl outfit-bold text-neutral-navy">{title}</h4>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 min-h-24">
          {displayEvents.map((event, index) => (
            <EventCard key={`past-${index}`} event={event} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start justify-start w-full gap-8 ${className}`}>
      {allEvents.length > 0 && (
        <div className="space-y-6 w-full">
          <div className="border-b border-neutral-200/50 pb-2">
            <h3 className="text-xl outfit-extra-bold text-neutral-navy">Past Events</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allEvents.map((event, index) => (
              <EventCard key={`past-${index}`} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}