"use client";

import Register from "./Register";
import Venue from "./Venue";

const Hero = () => {
  return (
    <section className="max-container flex flex-col gap-2 md:gap-4 py-4 px-2 nav-link-outline rounded-3xl m-6 mt-2">
      <div className="relative flex flex-1 flex-col nav-link-outline rounded-2xl gap-4 py-64 lg:py-48 flexCenter md:mx-2">
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-[#9fb2b2] font-extrabold text-center">AI TECH<span className="text-[#d4e20b]">VERSE</span></h1>
        <p className="text-2xl text-[#9fb2b2] lg:text-3xl mx-3 text-center">Discover, innovate, and connect on <span className="text-[#9fb2b2] whitespace-nowrap curved-undeline">July 7th, 2024!</span></p>
      </div>
      <div className="relative flex flex-1 flex-col gap-4 md:mx-2 md:grid md:grid-cols-2 lg:flex lg:flex-row rounded-3xl">
        <Venue />
        <Register />
      </div>
    </section>
  );
}

export default Hero;
