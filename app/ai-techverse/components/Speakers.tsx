import Image from "next/image"
import { SPEAKERS } from "@/app/ai-techverse/constants"

const Speakers = () => {
    return (
        <section className="max-container flex flex-col md:gap-4 py-4 px-2 nav-link-outline rounded-3xl mx-6 my-2 items-center justify-center">
            <div className="text-3xl pb-2">
                Our Speakers
            </div>

            {SPEAKERS.map((speaker, index) => (
                <div key={index} className="relative mt-1 bg-[#1d1d1c] lg:hover:bg-[#d4e20b] w-full rounded-2xl flex flex-row text-lg lg:text-3xl hover:text-black items-center group">
                    <div className="hidden lg:block p-8 text-gray-50 lg:group-hover:text-black">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                    </div>
                    <div className="relative lg:hidden lg:absolute lg:top-10 lg:right-80 lg:group-hover:block lg:transform lg:-translate-y-1/2 lg:z-20">
                        <Image src={speaker.image} alt={speaker.name} width={300} height={300} className="w-16 md:p-2 md:w-24 lg:w-72 mx-2 my-1 z-20" />
                    </div>
                    <div className="p-8 flex-grow lg:group-hover:text-black">
                        {speaker.name}
                    </div>
                    <div className="p-8 text-sm md:text-xl text-start ml-auto lg:group-hover:text-black">
                        {speaker.company}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Speakers
