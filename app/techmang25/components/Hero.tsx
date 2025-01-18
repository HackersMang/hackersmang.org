"use client";

import Image from "next/image";
// import Register from "./Register";
import Venue from "./Venue";
import Link from "next/link";
import About from "./About";

const Hero = () => {
  return (
    <section className="relative h-60 lg:h-96 w-full bg-grainy flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-[#9fb2b2] font-extrabold text-center transition-all">
          #TechMang25
        </h1>
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
