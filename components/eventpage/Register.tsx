import { CodeOfConduct } from "@/components/eventpage/CodeOfConduct";
import { RegisterProps } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Register = ({ registrationLink, registrationStartOn, registrationEndOn }: RegisterProps): JSX.Element | null => {
  // Convert registration dates to Date objects
  const now = new Date();
  const hasStarted = now >= (registrationStartOn ?? 0);
  const hasEnded = now > (registrationEndOn ?? 0);

  // Render only if registration has started and the link exists
  if (!hasStarted || !registrationLink) return null;

  return (
    <div className="w-full flex flex-col items-center justify-center text-center mt-2 mb-4 lg:mb-6 px-4">
      <div className="shadow-lg px-4 lg:px-8 py-6 rounded-lg">
        <h3 className="text-xl lg:text-2xl font-light text-primary mt-4">RSVP Route</h3>

        <p className="text-lg text-neutral leading-relaxed mt-2">
          This is your chance to learn from and get inspired by tech enthusiasts. 🌟
        </p>

        <Link
          href={registrationLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg font-semibold rounded-sm transition-all
            bg-primary hover:bg-primary/90"
          aria-disabled={hasEnded}
        >
          <span className="text-black">{hasEnded ? "Registration Closed" : "Click here to register"}</span>
          {!hasEnded && <ExternalLink size={24} className="text-black" />}
        </Link>

        <CodeOfConduct />
      </div>
    </div>
  );
};

export default Register;
