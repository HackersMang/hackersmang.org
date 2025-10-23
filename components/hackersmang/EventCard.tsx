import React from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

type EventLink = {
  href: string;
  title: string;
  subtitle: string;
  isExternal?: boolean;
};

type EventCardProps = {
  event: EventLink;
  className?: string;
};

const EventCard: React.FC<EventCardProps> = ({ event, className = "" }) => {
  return (
    <Link
      href={event.href}
      aria-label={event.title}
      target={event.isExternal ? "_blank" : undefined}
      rel={event.isExternal ? "noopener noreferrer" : undefined}
      className={`group bg-neutral-white/95 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-neutral-200/50 ${className}`}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg outfit-extra-bold text-neutral-navy mb-3 transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-neutral-navy/80 outfit-extra-light leading-relaxed flex-1">
          {event.subtitle}
        </p>
        <div className="mt-4 flex items-center text-neutral-navy group-hover:translate-x-1 transition-transform">
          <span className="text-sm outfit-bold">Learn more</span>
          <GoArrowUpRight size={16} className="ml-2 text-neutral-navy" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
export type { EventLink };
