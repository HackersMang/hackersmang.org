"use client";

import Image from "next/image";
// import Register from "./Register";
import Venue from "./Venue";
import Link from "next/link";
import About from "./About";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-12 w-full flex items-center justify-center outfit-">
      <div className="flex flex-col items-center justify-end w-full px-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-[#9fb2b2] outfit-bold text-center transition-all">
          #TechMang25
        </h1>
        <h2 className="text-xl text-neutral lg:text-3xl mx-3 text-center">Mangaluru Tech<span className="text-neutral whitespace-nowrap curved-undeline"> Day 2025</span></h2>
        {/* <div className="absolute bottom-36 md:bottom-20 animate-pulse">
          <img
            src="/ai-techverse/chevron-down.svg"
            alt="Arrow down"
            className="h-5 w-5"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
