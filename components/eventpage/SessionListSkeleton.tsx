import React from 'react';

const SessionListSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-8 lg:space-y-12">
      <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
        <div className="h-24 bg-neutral-navy/20 rounded w-2/3"></div>
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="w-full bg-neutral-white/95 pt-4 lg:pt-8 border-t border-neutral-navy/30 animate-pulse"
        >
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Side - Time and Content */}
            <div className="flex-1 w-full lg:w-auto">
              {/* Time Slot and Tags Row */}
              <div className="flex justify-between items-start mb-6">
                {/* Time Slot Skeleton */}
                <div className="h-6 bg-neutral-navy/20 rounded-full w-32"></div>
                
                {/* Tags Skeleton */}
                <div className="flex gap-2">
                  <div className="h-5 bg-neutral-navy/20 rounded-full w-16"></div>
                  <div className="h-5 bg-neutral-navy/20 rounded-full w-20"></div>
                </div>
              </div>

              {/* Speaker Images - Mobile Only */}
              <div className="mb-6 lg:hidden">
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-neutral-navy/20 rounded-2xl"></div>
                    <div className="h-3 bg-neutral-navy/20 rounded w-16 mt-2"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-neutral-navy/20 rounded-2xl"></div>
                    <div className="h-3 bg-neutral-navy/20 rounded w-14 mt-2"></div>
                  </div>
                </div>
              </div>

              {/* Title Skeleton */}
              <div className="h-6 lg:h-8 bg-neutral-navy/30 rounded w-3/4 mb-4"></div>

              {/* Description Skeleton */}
              <div className="mb-6 space-y-2">
                <div className="h-4 lg:h-5 bg-neutral-navy/20 rounded w-full"></div>
                <div className="h-4 lg:h-5 bg-neutral-navy/20 rounded w-5/6"></div>
                <div className="h-4 lg:h-5 bg-neutral-navy/20 rounded w-4/5"></div>
              </div>
            </div>

            {/* Right Side - Speaker Images - Desktop Only */}
            <div className="hidden lg:flex flex-shrink-0 w-auto">
              <div className="flex flex-wrap justify-end gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-neutral-navy/20 rounded-2xl"></div>
                  <div className="h-3 bg-neutral-navy/20 rounded w-20 mt-3"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-neutral-navy/20 rounded-2xl"></div>
                  <div className="h-3 bg-neutral-navy/20 rounded w-18 mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionListSkeleton;
