import { WordFadeIn } from "@/components/magicui/word-fade-in";

export const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-between m-2 mt-1 lg:m-6 lg:mt-2 p-0 outline outline-[1.5px]">
            <p className="m-3 text-base text-center font-bold outfit-extra-light">
                A VIBRANT COMMUNITY OF TECH ENTHUSIASTS
            </p>
            
            <WordFadeIn words="H A C K E R S M A N G" className="text-[2.5rem] md:text-7xl lg:text-[11.5rem] text-center mt-auto mb-2 lg:mb-0 outfit-black -space-x-2 lg:-space-x-9" delay={0.08} />
        </section>
    );
};

export default Hero;
