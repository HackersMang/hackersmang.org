import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ShineBorder from "@/components/magicui/shine-border";

const Register = () => {

  return (
    <div className="lg:flex-1 nav-link-outline rounded-2xl md:col-span-2 md:grid md:grid-cols-2 w-full text-left">
      <div className="col-span-2 rounded-t-3xl pt-4 mx-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-[auto_1fr] items-center gap-1">
          <span className="text-sm">Register</span>
          <img
            src="/ai-techverse/register.svg"
            alt="Share Icon"
            width={10}
            className="buttonIcon justify-self-start h-3.5 w-3.5 animate-pulse"
          />
        </div>
        <h3 className="text-2xl text-[#d4e20b]">RSVP Route</h3>
      </div>
      <div className="col-span-2 mt-2">
        <VelocityScroll
          text="Tech Event Registration Open."
          default_velocity={3}
          className="text-center font-light text-3xl md:text-5xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:leading-[5rem]"
        />
      </div>
      <div className="col-span-2 m-2">
        <a href="https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7" target="_blank" rel="noopener noreferrer" className="view">
          <ShineBorder
            className="group text-center text-2xl pencil-studio italic w-full bg-black hover:bg-[#d4e20b]"
            color={["#d4e20b", "#9fb2b2", "#FFBE7B"]}
          >
            Lock in your spot!
          </ShineBorder>
        </a>
      </div>
    </div>
  );
};

export default Register;
