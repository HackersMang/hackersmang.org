import About from "./About";
import Events from "./Events";
import EventDeatils from "./EventDeatils";
import Cursor from "@/app/ai-techverse/components/Cursor";

export const Hero = () => {
    return (
        <section className="grid grid-cols-4 lg:grid-cols-8 gap-1 md:gap-4 rounded-xl outline outline-1 outline-[#2b2828] mx-4 my-2 min-h-[600px] max-h-[800px]">
            <Cursor />
            <About/>
            <Events/>
            <EventDeatils/>
        </section>
    );
};

export default Hero;
