import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import SocialMedia from './SocialMedia';

export default function Hero() {
  return (
    <section className="relative pt-20 lg:pt-24  pb-4 px-2 lg:px-6 h-full">
      {/* Top Section */}
      <div className='outline outline-[1.5px] outline-[#2b2828] px-2'>

        <h1 className="text-center text-base font-bold outfit-extra-light p-2 text-neutral">
          A vibrant community of tech enthusiasts
        </h1>

        {/* Three Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 py-4 lg:py-24 lg:px-8 text-neutral">
          {/* Column 1 */}
          <div className="lg:w-1/3 flex flex-col justify-between gap-1">
            <p className="text-neutral text-lg lg:text-xl text-center lg:text-start">
              <span className="text-3xl lg:text-6xl outfit-bold text-secondary">Hackerspace Mangaluru</span> is a community-driven open-source group. Together with the HackersMang community, we host tech talks, workshops, and events aimed at fostering innovation and knowledge-sharing.
            </p>
            <div className="hidden lg:block w-full">
              <SocialMedia />
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/3 flex flex-col justify-between items-center gap-1">
            <div className="text-base italic pt-2">Upcoming event</div>
            <h2 className="text-3xl lg:text-6xl outfit-extra-bold text-secondary">#TechMang25</h2>
            <p className="text-neutral text-lg lg:text-xl text-center">
             On Saturday, 1st February at UniCourt Mangaluru. Explore exciting lightning talks, insightful demos, and interactive workshops, designed to spark curiosity and expand knowledge.            </p>
            <Link href="/techmang25" aria-label="#TechMang" className="flex items-center justify-center gap-2 w-full py-4 text-center text-neutral hover:text-secondary hover:bg-[#2b2828] p-4 outline outline-[1.5px] outline-[#2b2828]">
              <span className="text-lg font-semibold">Visit event page</span>
              <GoArrowUpRight size={24} />
            </Link>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/3 flex flex-col justify-between items-center w-full gap-1">
            <div className="text-base italic text-center p-2">Recent events</div>
            <Link href="/2024-november" aria-label="2024 November Edition" className="flex items-center justify-center gap-2 w-full py-4 text-center hover:text-secondary hover:bg-[#2b2828]">
              <span className="text-lg font-semibold">HackersMang 2024 November</span>
              <GoArrowUpRight size={24} />
            </Link>
            <Link href="/ai-techverse" aria-label="Ai TechVerse" className="flex items-center justify-center gap-2 w-full py-4 text-center hover:text-secondary hover:bg-[#2b2828]">
              <span className="text-lg font-semibold">Ai TechVerse by HackersMang</span>
              <GoArrowUpRight size={24} />
            </Link>
            <Link href="https://www.eventbrite.com/e/mangaluru-tech-day-2024-tickets-795844441147?aff=oddtdtcreator" aria-label="Mangaluru Tech Day 2024" className="flex items-center justify-center gap-2 w-full py-4 text-center hover:text-secondary hover:bg-[#2b2828]">
              <span className="text-lg font-semibold">Mangaluru Tech Day 2024</span>
              <GoArrowUpRight size={24} />
            </Link>
            <Link href="https://www.eventbrite.com/e/mangaluru-tech-day-3-techmang3-tickets-82910289909?aff=oddtdtcreator" aria-label="Mangaluru Tech Day 2023" className="flex items-center justify-center gap-2 w-full py-4 text-center hover:text-secondary hover:bg-[#2b2828]">
              <span className="text-lg font-semibold">Mangaluru Tech Day 2023</span>
              <GoArrowUpRight size={24} />
            </Link>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center text-[2rem] md:text-7xl lg:text-[7.5rem] outfit-black text-secondary">
          Hackerspace Mangaluru
        </div>
      </div>
    </section>
  );
}
