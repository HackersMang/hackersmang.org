import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ShineBorder from "@/components/magicui/shine-border";
import Link from "next/link";
import { REGISTER_LINK } from "../constants";

const Register = () => {
  return (
    <div className="nav-link-outline rounded-2xl w-full flex flex-col items-center justify-center text-center">
      <h3 className="text-2xl text-[#d4e20b] pt-4">RSVP Route</h3>
      <VelocityScroll
        text="Tech Event Registration Open."
        default_velocity={3}
        className="font-light text-3xl md:text-5xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:leading-[5rem]"
      />
      <Link
        href={REGISTER_LINK.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full lg:w-1/2 flex items-center justify-center my-2 lg:mb-4 view"
      >
        <ShineBorder
          className="group m-2 text-3xl pencil-studio italic bg-black hover:bg-[#d4e20b] w-full"
          color={["#d4e20b", "#9fb2b2", "#FFBE7B"]}
        >
          Click here to buy tickets
        </ShineBorder>
      </Link>
    </div>
  );
};

export default Register;
