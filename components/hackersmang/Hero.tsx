import { WordFadeIn } from "@/components/magicui/word-fade-in";
import { ImageGallary } from "./ImageGallary";

export const Hero = () => {
    return (
        <section className="h-screen flex flex-col m-2 mt-1 lg:m-6 lg:mt-2 p-0 outline outline-[1.5px]">
            <p className="m-3 text-base text-center font-bold outfit-extra-light justify-between items-center">
                A VIBRANT COMMUNITY OF TECH ENTHUSIASTS
            </p>
            <h1 className="text-[2.5rem] md:text-7xl lg:text-[8.5rem] text-center mt-auto mb-2 lg:mb-0 outfit-black">HACKERSPACE MANGALURU</h1>
        </section>
    );
};

export default Hero;
