"use client";

import Particles from "@/components/magicui/particles";

const ParticlesDemo = () => {
  const color = "#d4e20b";
  return (
      <Particles
        className="absolute inset-3"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
  );
};

export default ParticlesDemo;
