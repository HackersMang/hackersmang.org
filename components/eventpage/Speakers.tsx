import Image from "next/image";
import Link from "next/link";

const Speakers = ({ speakers }: { speakers: any[] }): JSX.Element => {
    // Sorting the speakers array by name without mutating the original array
    const sortedSpeakers = [...speakers].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <section className="w-full flex flex-col items-center justify-center mt-8 lg:my-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm outfit-extra-light text-neutral-navy font-medium">
                    Our Speakers
                </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-8">Speakers</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {sortedSpeakers.map((speaker, index) => (
                    <div key={speaker.id ?? index} className="group bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 backdrop-blur-sm text-neutral-navy p-6 rounded-2xl border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <Image 
                                    src={speaker.image} 
                                    alt={speaker.name} 
                                    width={120} 
                                    height={120} 
                                    className="w-24 h-24 rounded-full border-4 border-primary-yellow/30 group-hover:border-primary-yellow/60 transition-all duration-300" 
                                />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold outfit-extra-bold">
                                    {speaker.socialLinks ? (
                                        <Link 
                                            href={speaker.socialLinks} 
                                            rel="noopener noreferrer" 
                                            target="_blank" 
                                            className="text-neutral-navy hover:text-primary transition-colors"
                                        >
                                            {speaker.name}
                                        </Link>
                                    ) : (
                                        <span className="text-neutral-navy">{speaker.name}</span>
                                    )}
                                </h4>
                                
                                {speaker.company && (
                                    <p className="text-sm text-neutral-navy/70 outfit-extra-light">
                                        {speaker.company}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Speakers;
