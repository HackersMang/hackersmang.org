import { SPEAKERS } from "@/app/ai-techverse/constants"

const Agendas = () => {
    return (
        <section className="max-container flex flex-col md:gap-4 py-4 px-2 nav-link-outline rounded-3xl mx-6 my-6 items-center justify-center">
            <div className="text-3xl">
                Agenda
            </div>
            {SPEAKERS.map((item, idx) => (
                <div className="flex flex-col w-full overflow-hidden p-4 md:p-8 gap-1 my-1 bg-[#1d1d1c] rounded-xl" key={idx}>
                    <span className="text-lg md:text-2xl lg:text-3xl whitespace-pre-line">{item.topic}</span>
                    <p className="text-sm md:text-xl text-gray-30 ">
                        {item.name}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Agendas
