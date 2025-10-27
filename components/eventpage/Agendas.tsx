import { User } from "lucide-react";

const Agendas = ({ speakers }: { speakers: any[] }): JSX.Element => {

    return (
        <section className="relative bg-neutral-white py-20 lg:py-32 lg:pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section - Matching ScheduleWithRegister.tsx */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        Event Schedule
                    </span>
                    <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                        Tech Talks [Web, AI, IOT]
                    </h3>
                </div>

                <div className="w-full space-y-8 lg:space-y-12">
                    {speakers.map((speaker, idx) => (
                        <div key={idx} className="w-full bg-neutral-white/95 pt-4 lg:pt-8 border-t border-neutral-navy/30 transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                                {/* Left Side - Content */}
                                <div className="flex-1 w-full lg:w-auto">
                                    {/* Session Number Badge */}
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-sm font-mono text-neutral-navy/90 outfit-extra-light bg-primary-yellow/10 px-3 py-1 rounded-full">
                                            [ Session {idx + 1} ]
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl lg:text-2xl font-bold text-neutral-navy mb-4 tracking-wide outfit-extra-bold">
                                        {speaker.topic}
                                    </h4>

                                    {/* Speaker Info */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <User size={16} className="text-primary" />
                                        <span className="text-sm lg:text-base text-neutral-navy/70 outfit-extra-light">
                                            {speaker.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Agendas
