import React from 'react';
import CreativeElements from './CreativeElements';

export default function Hero() {
  return (
    <section className="relative pt-20 lg:pt-24 h-full bg-neutral-white">
      {/* Hero Card - Main Branding */}
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-16 flex flex-col lg:flex-row justify-center items-center relative overflow-hidden min-h-[85vh]">
        {/* Left Side - Text Content */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl lg:mr-16 mb-12 lg:mb-0">
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-yellow rounded-full mb-6">
            <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse"></div>
            <span className="text-sm outfit-extra-light text-neutral-navy font-bold">
              A vibrant community of tech enthusiasts
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy leading-[0.9] mb-8">
            Hackerspace Mangaluru
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed mb-10 max-w-2xl">
            A community-driven open-source group. Together with the HackersMang community, we host tech talks, workshops, and events aimed at fostering innovation and knowledge-sharing.
          </p>

          {/* Interactive Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div className="group bg-secondary-yellow p-6 lg:p-8 rounded-2xl border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all duration-300 hover:scale-105 cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl lg:text-4xl outfit-extra-bold text-neutral-navy">12+</div>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div className="text-sm outfit-extra-light text-neutral-navy mb-3">Events Hosted</div>
            </div>
            <div className="group bg-secondary-yellow p-6 lg:p-8 rounded-2xl border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all duration-300 hover:scale-105 cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl lg:text-4xl outfit-extra-bold text-neutral-navy">500+</div>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.5 6h2l-2.5-6H12v6h2v-6h2.5l2.5 6h2l-2.5-6H20v6h2z"/>
                  </svg>
                </div>
              </div>
              <div className="text-sm outfit-extra-light text-neutral-navy mb-3">Active Members</div>
            </div>

          </div>
        </div>

        {/* Right Side - Creative Elements */}
        <CreativeElements />
      </div>
    </section>
  );
}
