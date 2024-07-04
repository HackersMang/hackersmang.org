"use client";

import Image from "next/image";
import Register from "./Register";
import Venue from "./Venue";

const Hero = () => {
  return (
    <section className="max-container flex flex-col gap-2 md:gap-4 py-4 px-2 nav-link-outline rounded-3xl m-6 mt-2">
      <div className="relative flex flex-1 flex-col nav-link-outline rounded-2xl gap-4 py-72 lg:py-60 flexCenter md:mx-2">
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-[#9fb2b2] font-extrabold text-center">AI TECH<span className="text-[#d4e20b]">VERSE</span></h1>
        <p className="text-2xl text-[#9fb2b2] lg:text-3xl mx-3 text-center">Talks on cutting edge <span className="text-[#9fb2b2] whitespace-nowrap curved-undeline">AI technologies!</span></p>
        <Image
          src="/ai-techverse/chevron-down.svg"
          alt="Arrow down"
          width={10}
          height={10}
          className="absolute bottom-20 h-5 w-5 animate-pulse self-center"
        />
      </div>
      <div className="relative flex flex-col gap-4 md:mx-2 rounded-3xl">
        <Venue />
        <Register />
      </div>
    </section>
  );
}

export default Hero;
