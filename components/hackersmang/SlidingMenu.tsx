import React from 'react';
import MenuFooter from './MenuFooter';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

type SlidingMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-grainy overflow-hidden transition-[opacity,visibility] duration-300 ease-in-out z-40
        ${isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible pointer-events-none'}`}
      aria-hidden={!isMenuOpen}
    >
      <div className={`relative flex flex-col justify-between w-full h-full transform transition-transform duration-300 pt-24 
        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-6xl mx-auto px-4">
            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Empty for balance */}
              <div className="hidden lg:block"></div>
              
              {/* Middle Column - Events */}
              <div className="space-y-8">
                {/* Upcoming Events */}
                <div className="space-y-4">
                  <h2 className="text-xl italic text-secondary text-center">Upcoming events</h2>
                  <Link
                    href="/2025-april"
                    aria-label="HackersMang 2025 April"
                    className="flex items-center justify-center gap-3 p-4 text-neutral hover:text-secondary hover:bg-charcoal/50 rounded-sm transition-all"
                  >
                    <span className="text-lg font-medium">HackersMang 2025 April</span>
                    <GoArrowUpRight size={24} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Recent Events */}
                <div className="space-y-4">
                  <h2 className="text-xl italic text-secondary text-center">Recent events</h2>
                  <div className="space-y-2">
                    {[
                      { href: "/techmang25", label: "#TechMang25" },
                      { href: "/2024-november", label: "HackersMang 2024 November" },
                      { href: "/ai-techverse", label: "Ai TechVerse by HackersMang" },
                      { 
                        href: "https://www.eventbrite.com/e/mangaluru-tech-day-2024-tickets-795844441147?aff=oddtdtcreator",
                        label: "Mangaluru Tech Day 2024"
                      },
                      {
                        href: "https://www.eventbrite.com/e/mangaluru-tech-day-3-techmang3-tickets-82910289909?aff=oddtdtcreator",
                        label: "Mangaluru Tech Day 2023"
                      }
                    ].map((event, index) => (
                      <Link
                        key={index}
                        href={event.href}
                        aria-label={event.label}
                        className="flex items-center justify-center gap-3 p-4 text-neutral hover:text-secondary hover:bg-charcoal/50 rounded-sm transition-all group"
                      >
                        <span className="text-lg font-medium">{event.label}</span>
                        <GoArrowUpRight size={24} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Empty for balance */}
              <div className="hidden lg:block"></div>
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
