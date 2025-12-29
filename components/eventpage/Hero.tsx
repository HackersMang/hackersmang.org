import { IntroProps } from "@/lib/types";
import React from "react";
import SummitCoBranding from "./SummitCoBranding";


const Intro = ({ title, subtitle, summitAffiliation, eventTag = "HackersMang Event" }: IntroProps): JSX.Element => {
  return (
    <section className="relative pt-20 lg:pt-24 h-full">
      {/* Hero Card - Main Branding */}
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-16 flex flex-col justify-center items-center relative overflow-hidden min-h-[60vh]">
        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center w-full">
          {/* Subtitle */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-yellow rounded-full">
              <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse"></div>
              <span className="text-sm outfit-extra-light text-neutral-navy font-bold">
                {eventTag}
              </span>
            </div>


            {summitAffiliation?.isEnabled && (
              <>
                <span className="text-sm outfit-extra-light text-neutral-navy font-bold m-2">X</span>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-yellow rounded-full">
                  <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse"></div>
                  <span className="text-sm outfit-extra-light text-neutral-navy font-bold">
                    {summitAffiliation?.summitName}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy leading-[0.9] mb-8 tracking-tight">
            {title}
          </h1>

          {/* Description */}
          {subtitle && (
            <p className="text-lg lg:text-4xl text-neutral-navy outfit-extra-light leading-relaxed mb-10 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}

          {summitAffiliation?.isEnabled && (
            <SummitCoBranding config={summitAffiliation} />
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Intro);
