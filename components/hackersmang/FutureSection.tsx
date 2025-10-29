import React from 'react';

export default function FutureSection() {
  return (
    <section className="relative bg-secondary-yellow py-20 lg:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
            <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                The future is now
            </span>
            <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                A dynamic environment designed to foster learning, connection, and inspiration.
            </h3>
        </div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Top Left - LEARN FROM OTHERS */}
          <div className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
            <div className="relative z-10">
              {/* Icon - Three Users */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.5 6h2l-2.5-6H12v6h2v-6h2.5l2.5 6h2l-2.5-6H20v6h2z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                Learn from others
              </h3>
              
              {/* Description */}
              <p className="text-neutral-navy leading-relaxed outfit-extra-light">
                Hear from experts and peers and get new ideas. See how others tackle similar challenges, and gain fresh perspectives on your own work. Share experiences and learn together.
              </p>
            </div>
          </div>

          {/* Top Right - CONNECT */}
          <div className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
            <div className="relative z-10">
              {/* Icon - Handshake */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                Connect with others
              </h3>
              
              {/* Description */}
              <p className="text-neutral-navy leading-relaxed outfit-extra-light">
                Connect with like-minded people. Build relationships that can last beyond the event. Help grow your network for future opportunities.
              </p>
            </div>
          </div>

          {/* Bottom Left - GROW */}
          <div className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
            <div className="relative z-10">
              {/* Icon - Shooting Star */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                Grow yourself
              </h3>
              
              {/* Description */}
              <p className="text-neutral-navy leading-relaxed outfit-extra-light">
                Gain new skills, insights, and strategies to move forward. Apply what you learn, improve your work, and grow as an individual.
              </p>
            </div>
          </div>

          {/* Bottom Right - GET INSPIRED */}
          <div className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
            <div className="relative z-10">
              {/* Icon - Lightbulb */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
                Get inspired
              </h3>
              
              {/* Description */}
              <p className="text-neutral-navy leading-relaxed outfit-extra-light">
                Hear stories, ideas, and experiences that spark creativity. Walk away with fresh motivation and the energy to tackle new challenges with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
