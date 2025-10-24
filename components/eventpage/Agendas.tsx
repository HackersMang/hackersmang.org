import { User } from "lucide-react";

const Agendas = ({ speakers }: { speakers: any[] }): JSX.Element => {

    return (
        <section className="w-full flex flex-col items-center justify-center mt-8 lg:my-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm outfit-extra-light text-neutral-navy font-medium">
                    Event Agenda
                </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-8">Agenda</h3>

            <div className="w-full max-w-4xl space-y-4">
                {speakers.map((speaker, idx) => (
                    <div key={idx} className="group bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 backdrop-blur-sm text-neutral-navy p-6 rounded-2xl border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {idx + 1}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg lg:text-xl font-semibold outfit-extra-bold text-neutral-navy mb-2 leading-relaxed">
                                    {speaker.topic}
                                </h4>
                                <div className="flex items-center gap-2">
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
        </section>
    )
}

export default Agendas
