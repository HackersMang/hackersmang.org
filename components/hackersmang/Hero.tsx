import Image from "next/image"

export const Hero = () => {
    return (
        <section className="min-h-screen w-screen flex flex-col gap-2 md:gap-4 overflow-hidden">
            
            <div className="flex items-start justify-center flex-1 m-4">
                <Image src="/hackersmang-logo.svg" alt="hackersmang-logo" className="max-w-full max-h-full object-contain" />
            </div>

        </section>
    )
}

export default Hero;