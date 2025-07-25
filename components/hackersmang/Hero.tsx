import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import SocialMedia from './SocialMedia';
import { Footer } from './Footer';

export default function Hero() {
  return (
    <section className="relative pt-20 lg:pt-0  pb-4 px-2 lg:px-6 h-full">
      {/* Top Section */}
      <div className='outline outline-[1.5px] outline-charcoal px-2'>

        <h1 className="lg:pt-24 text-center text-base font-bold outfit-extra-light p-2 text-neutral">
          A vibrant community of tech enthusiasts
        </h1>

        {/* Three Column Layout */}
        <div className="flex flex-col text-neutral w-full lg:max-w-fit mx-auto gap-4 lg:gap-8">
          {/* Column 1 */}
          <div className="flex flex-col justify-center items-center gap-1 h-[50dvh] lg:h-[80dvh]">
            <span className="text-3xl lg:text-8xl outfit-extra-bold text-secondary text-center">Hackerspace Mangaluru</span>
            <p className="text-neutral text-lg lg:text-xl text-center outfit-extra-light max-w-screen-lg px-4">
              A community-driven open-source group. Together with the HackersMang community, we host tech talks, workshops, and events aimed at fostering innovation and knowledge-sharing.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-center items-center gap-1 h-[30dvh] lg:h-[80dvh] relative mt-8 lg:mt-0">
            <div className="text-base italic pt-2 text-neutral">Upcoming event</div>
            <h2 className="text-3xl lg:text-6xl outfit-bold text-secondary">#HMAug25</h2>
            <h2 className="text-xl lg:text-2xl outfit-extra-light text-secondary">HackersMang, 2025 August Edition</h2>
            <p className="text-neutral text-lg lg:text-xl text-center outfit-extra-light max-w-screen-lg px-4 lg:px-6">
              On Saturday, 23rd August at UniCourt Mangaluru. Explore exciting lightning talks, insightful demos, and interactive workshops, designed to spark curiosity and expand knowledge.</p>
            <div className="w-full max-w-screen-lg relative z-10 mt-4">
              <Link
                href="/2025-august"
                aria-label="HackersMang 2025 August Edition"
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg text-neutral hover:text-secondary hover:bg-charcoal p-4 active:scale-95 transition-transform outline outline-[1.5px] outline-charcoal"
              >
                Visit event page
                <GoArrowUpRight size={24} />
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-center items-center w-full gap-1 h-[80dvh] lg:h-[65dvh] outfit-extra-light mt-8 lg:mt-0">
            <div className="text-base italic text-center p-2 text-secondary/90">Recent events</div>
            <div className="w-full max-w-md space-y-2 relative z-10">
              <Link
                href="/2025-april"
                aria-label="HackersMang 2025 April Edition"
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg text-neutral hover:text-secondary hover:bg-charcoal p-4 active:scale-95 transition-transform"
              >
                HackersMang, 2025 April
                <GoArrowUpRight size={24} />
              </Link>
              <Link
                href="/techmang25"
                aria-label="TechMang 2025"
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg text-neutral hover:text-secondary hover:bg-charcoal p-4 active:scale-95 transition-transform"
              >
                #TechMang25
                <GoArrowUpRight size={24} />
              </Link>
              <Link
                href="/2024-november"
                aria-label="2024 November Edition"
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg text-neutral hover:text-secondary hover:bg-charcoal p-4 active:scale-95 transition-transform"
              >
                HackersMang, 2024 November
                <GoArrowUpRight size={24} />
              </Link>
              <Link
                href="/ai-techverse"
                aria-label="Ai TechVerse"
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg text-neutral hover:text-secondary hover:bg-charcoal p-4 active:scale-95 transition-transform"
              >
                Ai TechVerse by HackersMang
                <GoArrowUpRight size={24} />
              </Link>
              <Link
                href="https://www.eventbrite.com/e/mangaluru-tech-day-2024-tickets-795844441147?aff=oddtdtcreator"
                aria-label="Mangaluru Tech Day 2024"
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg text-neutral hover:text-secondary hover:bg-charcoal p-4 active:scale-95 transition-transform"
              >
                Mangaluru Tech Day 2024
                <GoArrowUpRight size={24} />
              </Link>
              <Link
                href="https://www.eventbrite.com/e/mangaluru-tech-day-3-techmang3-tickets-82910289909?aff=oddtdtcreator"
                aria-label="Mangaluru Tech Day 2023"
                className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg text-neutral hover:text-secondary hover:bg-charcoal p-4 active:scale-95 transition-transform"
              >
                Mangaluru Tech Day 2023
                <GoArrowUpRight size={24} />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <SocialMedia />
          </div>
        </div>

        {/* Bottom Section */}
        <Footer />
      </div>
    </section>
  );
}
