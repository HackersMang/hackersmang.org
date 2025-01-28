import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center mt-2 mb-4 px-4">
      <div className="shadow-lg px-4 lg:px-8">
        <h3 className="text-xl lg:text-2xl font-light text-primary mt-4">RSVP Route</h3>

        <p className="text-lg text-neutral leading-relaxed m-2">
          This is your chance to learn from and get inspired by tech enthusiasts. 🌟
        </p>

        <Link href="https://www.tickettailor.com/events/hackerspacemangaluru/1551279" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 text-center hover:text-secondary bg-primary hover:bg-primary/90 p-4 rounded-sm">
          <span className="text-lg text-black">Click here to register</span>
          <ExternalLink size={24} className="text-black" />
          </Link>
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral leading-relaxed">
            Please read <Link href="https://github.com/HackerspaceMangaluru/code-of-conduct/blob/main/coc.md" passHref target="_blank" className="font-bold underline">
              Code of Conduct
            </Link> before submitting registration form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
