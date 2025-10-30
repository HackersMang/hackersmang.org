import React from 'react';
import EventCard, { EventLink } from './EventCard';
import RecentEvents from './RecentEvents';

type SlidingMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};


const SlidingMenu: React.FC<SlidingMenuProps> = ({ isMenuOpen, toggleMenu }) => {

  // Define events lists
  const upcomingEvents: EventLink[] = [
    { href: "/hmnov25", title: "#HMNov25", subtitle: "HackersMang 2025 November edition" }
  ];

  const recentEvents: EventLink[] = [
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

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={toggleMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* Popup Menu */}
      <div
        className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition-all duration-300 pointer-events-none
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`bg-neutral-white/95 rounded-xl p-8 lg:p-12 pr-6 lg:pr-10 max-w-7xl w-full max-h-[80vh] overflow-y-auto transform transition-all duration-300 pointer-events-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-primary/80 [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:mr-2
            ${isMenuOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#F59E0B transparent',
            scrollbarGutter: 'stable'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-left md:text-center flex-1">
              <h2 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-2">
                Our Events
              </h2>
              <p className="text-neutral-navy outfit-extra-light">
                Discover upcoming tech events and conferences
              </p>
            </div>
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-neutral-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="flex flex-col gap-8 mb-8">
            {/* Left Column - Upcoming Events */}
            <div className="space-y-6">
              <div className="border-b border-neutral-200/50 pb-2">
                <h3 className="text-xl outfit-extra-bold text-neutral-navy">Upcoming Events</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={`upcoming-${index}`} event={event} />
                ))}
              </div>
            </div>

            {/* Right Column - Recent Events */}
            <div className="space-y-6">
              <RecentEvents 
                title=""
                events={recentEvents} 
                className="gap-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidingMenu;
