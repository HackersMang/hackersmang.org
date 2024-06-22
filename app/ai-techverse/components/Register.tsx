import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

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
        <a href="https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7" target="_blank" rel="noopener noreferrer" className="relative register-button-inner-shadow inline-flex items-center justify-center p-4 overflow-hidden pencil-studio italic text-3xl font-extrabold tracking-tighter bg-[#d4e20b] [&_li]:text-black rounded-2xl w-full h-full group view">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1d1d1c] rounded-full group-hover:w-full group-hover:h-[32rem]"></span>
          <span className="relative tracking-wide text-black group-hover:text-[#d4e20b]">Lock in your spot!</span>
        </a>
      </div>
    </div>
  );
};

export default Register;
