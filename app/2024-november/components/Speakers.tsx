import Image from "next/image"
import { SPEAKERS } from "@/app/2024-november/constants"
import Link from "next/link"

const Speakers = () => {
    // Sorting the speakers array by name
    const sortedSpeakers = [...SPEAKERS].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <section className="flex flex-col md:gap-4 py-4 px-4 nav-link-outline mx-6 my-4 items-center justify-center">
            <div className="text-3xl pb-2">
                Speakers
            </div>

            {sortedSpeakers.map((speaker, index) => (
                <div key={index} className="relative mt-1 p-2 bg-[#1d1d1c] lg:hover:bg-[#d4e20b] w-full flex flex-row gap-2 hover:text-black items-center group">
                    <div className="hidden lg:block p-8 text-gray-50 lg:group-hover:text-black text-lg lg:text-3xl">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                    </div>
                    <div className="relative p-1 lg:hidden lg:absolute lg:top-10 lg:right-80 lg:group-hover:block lg:transform lg:-translate-y-1/2 lg:z-20">
                        <Image src={speaker.image} alt={speaker.name} width={300} height={300} className="w-16 md:w-24 lg:w-72 rounded-xl lg:rounded-full outline outline-2 outline-[#2b2828] lg:outline-[#d4e20b]" />
                    </div>
                    <div className="flex flex-grow flex-col lg:flex-row w-full lg:w-auto lg:items-center">
                        <div className="flex-1 text-lg md:text-2xl lg:text-3xl lg:group-hover:text-black">
                            <Link href={speaker.socialLinks} rel="noopener noreferrer" target="_blank" className="hover:underline" >{speaker.name}</Link>
                        </div>
                        <div className="flex-1 text-sm md:text-xl text-start lg:text-end lg:mx-4 lg:ml-auto text-gray-30 lg:group-hover:text-black">
                            {speaker.company}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Speakers
