import React from 'react';
import MenuFooter from './MenuFooter';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

type SlidingMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

// Define event types for better type safety
type EventLink = {
  href: string;
  label: string;
  isExternal?: boolean;
};

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isMenuOpen }) => {
  // Define events with proper typing
  const upcomingEvents: EventLink[] = [
    // Add upcoming event details
    { href: "/hmnov25", label: "HackersMang 2025 November" }
  ];

  const recentEvents: EventLink[] = [
    { href: "/2025-august", label: "HackersMang 2025 August" },
    { href: "/2025-april", label: "HackersMang 2025 April" },
    { href: "/techmang25", label: "#TechMang25" },
    { href: "/2024-november", label: "HackersMang 2024 November" },
    { href: "/ai-techverse", label: "Ai TechVerse by HackersMang" },
    { 
      href: "https://www.eventbrite.com/e/mangaluru-tech-day-2024-tickets-795844441147",
      label: "Mangaluru Tech Day 2024",
      isExternal: true
    },
    {
      href: "https://www.eventbrite.com/e/mangaluru-tech-day-3-techmang3-tickets-82910289909",
      label: "Mangaluru Tech Day 2023",
      isExternal: true
    }
  ];

  // Event link component for reusability
  const EventLink = ({ event }: { event: EventLink }) => (
    <Link
      href={event.href}
      aria-label={event.label}
      target={event.isExternal ? "_blank" : undefined}
      rel={event.isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center justify-center gap-3 p-4 text-neutral hover:text-secondary hover:bg-charcoal/50 rounded-sm transition-all group"
    >
      <span className="text-lg font-medium">{event.label}</span>
      <GoArrowUpRight 
        size={24} 
        className={`transition-transform ${event.isExternal ? "" : "group-hover:translate-x-1"}`}
      />
    </Link>
  );

  return (
    <div
      className={`fixed inset-0 bg-grainy overflow-hidden transition-[opacity,visibility] duration-300 ease-in-out z-40
        ${isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible pointer-events-none'}`}
      aria-hidden={!isMenuOpen}
    >
      <div className={`relative flex flex-col justify-between w-full h-full transform transition-transform duration-300 pt-20 
        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-6xl mx-auto px-4 py-4">
            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Empty for balance */}
              <div className="hidden lg:block" />
              
              {/* Middle Column - Events */}
              <div className="space-y-8">
                {/* Upcoming Events */}
                {upcomingEvents.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-xl italic text-secondary text-center">Upcoming events</h2>
                    <div className="space-y-2">
                      {upcomingEvents.map((event, index) => (
                        <EventLink key={`upcoming-${index}`} event={event} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Recent Events */}
                {recentEvents.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-xl italic text-secondary text-center">Recent events</h2>
                    <div className="space-y-2">
                      {recentEvents.map((event, index) => (
                        <EventLink key={`recent-${index}`} event={event} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Empty for balance */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Footer - Always visible at bottom */}
        <div className="mt-auto">
          <MenuFooter />
        </div>
      </div>
    </div>
  );
};

export default SlidingMenu;
