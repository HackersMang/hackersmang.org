import React from 'react';
import MenuFooter from './MenuFooter';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

type SlidingMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-grainy h-full transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out z-40 pt-20`}
    >
      {/* Three column layout */}
      <div className="flex flex-col lg:flex-row gap-4 px-4 my-24 lg:mx-6 text-neutral text-base md:text-lg text-center lg:text-left font-bold outfit-extra-light">
        <div className="lg:w-1/3 flex flex-col justify-between mt-2"></div>

        <div className="lg:w-1/3 lg:justify-between text-center">
          <div className="flex flex-col">
            <div className="text-xl mt-4 mb-2 italic text-secondary">Upcoming events</div>
            <Link
              href="/techmang25"
              aria-label="2024 November Edition"
              className="flex flex-row space-x-3 justify-center text-center p-4 text-neutral hover:text-secondary hover:bg-charcoal"
            >
              <div className="text-lg font-semibold transition">#TechMang25</div>
              <GoArrowUpRight size={24} className="mt-1" />
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="text-xl mt-4 mb-2 italic text-secondary">Recent events</div>
            <Link
              href="/2024-november"
              aria-label="2024 November"
              className="flex flex-row space-x-3 justify-center text-center p-4 text-neutral hover:text-secondary hover:bg-charcoal"
            >
              <div className="text-lg font-semibold transition">HackersMang 2024 November</div>
              <GoArrowUpRight size={24} className="mt-1" />
            </Link>
            <Link
              href="/ai-techverse"
              aria-label="Ai TechVerse"
              className="flex flex-row space-x-3 justify-center text-center p-4 text-neutral hover:text-secondary hover:bg-charcoal"
            >
              <div className="text-lg font-semibold transition">Ai TechVerse by HackersMang</div>
              <GoArrowUpRight size={24} className="mt-1" />
            </Link>
            <Link
              href="https://www.eventbrite.com/e/mangaluru-tech-day-2024-tickets-795844441147?aff=oddtdtcreator"
              aria-label="Mangaluru Tech Day 2024"
              className="flex flex-row space-x-3 justify-center text-center p-4 text-neutral hover:text-secondary hover:bg-charcoal"
            >
              <div className="text-lg font-semibold transition">Mangaluru Tech Day 2024</div>
              <GoArrowUpRight size={24} className="mt-1" />
            </Link>
            <Link
              href="https://www.eventbrite.com/e/mangaluru-tech-day-3-techmang3-tickets-82910289909?aff=oddtdtcreator"
              aria-label="Mangaluru Tech Day 2024"
              className="flex flex-row space-x-3 justify-center text-center p-4 text-neutral hover:text-secondary hover:bg-charcoal"
            >
              <div className="text-lg font-semibold transition">Mangaluru Tech Day 2023</div>
              <GoArrowUpRight size={24} className="mt-1" />
            </Link>
          </div>
        </div>

        <div></div>
      </div>

      <MenuFooter />
    </div>
  );
};

export default SlidingMenu;
