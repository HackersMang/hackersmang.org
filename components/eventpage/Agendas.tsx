import { User } from "lucide-react";

const Agendas = ({ speakers }: { speakers: any[] }): JSX.Element => {

    return (
        <section className="flex flex-col md:gap-4 py-4 px-4 lg:mx-6 my-4 items-center justify-center">
            <div className="text-xl lg:text-2xl font-light text-primary outfit-extra-light">
                Agenda
            </div>
            {speakers.map((speaker, idx) => (
                <div className="flex flex-col rounded-lg w-full overflow-hidden p-4 md:p-8 gap-1 my-1 bg-[#1d1d1c]" key={idx}>
                    <span className="text-lg md:text-2xl lg:text-3xl whitespace-pre-line">{speaker.topic}</span>
                    <div className="flex items-center gap-1">
                        <User size={14} className="text-neutral" />
                        <span className="text-sm md:text-xl text-gray-30 text-neutral">{speaker.name}</span>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Agendas
