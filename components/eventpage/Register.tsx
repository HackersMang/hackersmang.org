import { CodeOfConduct } from "@/components/eventpage/CodeOfConduct";
import { RegisterProps } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ComingSoon from "./ComingSoon";

const Register = ({ registrationLink, registrationStartOn, registrationEndOn, buttonText, disableCodeOfConduct }: RegisterProps): JSX.Element | null => {
  // Convert registration dates to Date objects
  const now = new Date();
  const hasStarted = now >= (registrationStartOn ?? 0);
  const hasEnded = now.getTime() > ((registrationEndOn instanceof Date ? registrationEndOn.getTime() : registrationEndOn ?? 0) + 24 * 60 * 60 * 1000);

  if (!buttonText) {
    buttonText = "Click here to register";
  }

  // Return null if registration has not started or the link does not exist
  if (!hasStarted) return null;

  // Return a ComingSoon component if registration has started but the link does not
  if (hasStarted && !registrationLink) {
    return (
      <ComingSoon title="RSVP Route" message="Registration link will be available soon. Stay tuned! 🌟" />
    );
  }

  // Return the Register component if registration has started and the link exists
  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-4">
      <div className="shadow-lg py-6 rounded-lg w-full">
        <h3 className="text-xl lg:text-2xl font-light text-primary mb-4">RSVP Route</h3>

        {/* <p className="text-lg text-neutral leading-relaxed mt-2">
          This is your chance to learn from and get inspired by tech enthusiasts. 🌟
        </p> */}

        <Link
          href={registrationLink ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full p-4 text-center text-lg font-semibold rounded-sm transition-all
            bg-primary hover:bg-primary/90"
          aria-disabled={hasEnded}
        >
          <span className="text-black">{hasEnded ? "Registration Closed" : buttonText}</span>
          {!hasEnded && <ExternalLink size={24} className="text-black" />}
        </Link>

        {!disableCodeOfConduct && <CodeOfConduct />}
      </div>
    </div>
  );
};

export default Register;
