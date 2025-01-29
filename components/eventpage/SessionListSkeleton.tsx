import React from 'react';

const SessionListSkeleton: React.FC = () => {
  return (
    <>
      <div className="h-3 lg:h-4 bg-[#1d1d1c] mb-4 rounded w-1/6"></div>

      <div className="flex flex-col gap-4 w-full lg:w-5/6 animate-pulse">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row bg-[#1d1d1c] rounded-lg shadow-lg p-4"
          >
            {/* Skeleton for Image */}
            <div className="flex-shrink-0 w-24 h-24 lg:w-36 lg:h-36 bg-gray-700 rounded-lg"></div>

            {/* Skeleton for Speaker Details */}
            <div className="flex flex-col flex-grow pl-2 lg:pl-4 justify-center">
              <div className="h-4 lg:h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 lg:h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 lg:h-4 bg-gray-600 rounded w-1/2"></div>
            </div>

            {/* Skeleton for Speaker Time */}
            <div className="text-sm md:text-base lg:text-lg text-right font-medium ml-2 mt-4 lg:mt-0 lg:ml-auto lg:px-4">
              <div className="h-3 lg:h-4 bg-gray-600 rounded w-12"></div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default SessionListSkeleton;
