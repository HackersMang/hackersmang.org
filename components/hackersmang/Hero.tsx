import React from 'react'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col m-2 mt-20 lg:m-6 lg:mt-[6.5rem] p-0 outline outline-[1.5px]">
      <div className="flex flex-col justify-between h-full">
        <p className="m-3 text-base text-center font-bold outfit-extra-light">
          A VIBRANT COMMUNITY OF TECH ENTHUSIASTS
        </p>
        <h1 className="text-[2.5rem] md:text-7xl lg:text-[8.5rem] text-center mt-auto mb-2 lg:mb-0 outfit-black">
          HACKERSPACE MANGALURU
        </h1>
      </div>
    </section>
  )
}