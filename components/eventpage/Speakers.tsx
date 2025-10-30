import Image from "next/image";
import Link from "next/link";

const Speakers = ({ speakers }: { speakers: any[] }): JSX.Element => {
    // Sorting the speakers array by name without mutating the original array
    const sortedSpeakers = [...speakers].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <section className="relative bg-secondary-yellow py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section - Matching Resources.tsx */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        Our Speakers
                    </span>
                    <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                        Meet the experts
                    </h3>
                    <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed max-w-4xl">
                        Learn from industry professionals and thought leaders who are passionate about sharing their knowledge and experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {sortedSpeakers.map((speaker, index) => (
                        <div key={speaker.id ?? index} className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <Image 
                                        src={speaker.image} 
                                        alt={speaker.name} 
                                        width={120} 
                                        height={120} 
                                        className="w-24 h-24 rounded-full border-4 border-primary-yellow/30 group-hover:border-primary-yellow/60 transition-all duration-300" 
                                    />
                                </div>
                                
                                <div className="space-y-3">
                                    <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy tracking-tight">
                                        {speaker.socialLinks ? (
                                            <Link 
                                                href={speaker.socialLinks} 
                                                rel="noopener noreferrer" 
                                                target="_blank" 
                                                className="text-neutral-navy hover:underline transition-colors"
                                            >
                                                {speaker.name}
                                            </Link>
                                        ) : (
                                            <span className="text-neutral-navy">{speaker.name}</span>
                                        )}
                                    </h4>
                                    
                                    {speaker.company && (
                                        <p className="text-neutral-navy leading-relaxed outfit-extra-light">
                                            {speaker.company}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Speakers;
