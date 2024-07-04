import About from "./About";
import Events from "./Events";
import EventDeatils from "./EventDeatils";

export const Hero = () => {
    return (
        <section className="lg:grid lg:grid-cols-8 gap-1 md:gap-4 rounded-xl outline outline-1 outline-[#2b2828] mx-4 my-2 mb-8 lg:mx-6  min-h-[600px] max-h-[800px]">
            <About />
            <Events />
            <EventDeatils />
        </section>
    );
};

export default Hero;
