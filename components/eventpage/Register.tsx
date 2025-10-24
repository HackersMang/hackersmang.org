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
    <section className="relative bg-primary-yellow/70 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm outfit-extra-light text-neutral-navy font-medium">
              Registration
            </span>
          </div>
          
          <div className="max-w-4xl w-full">
            <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-6 tracking-tight">RSVP Route</h3>

            <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 backdrop-blur-sm text-neutral-navy p-8 rounded-2xl border border-primary-yellow/30">
              <Link
                href={registrationLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 text-neutral-navy font-semibold rounded-2xl border border-primary-yellow/30 transition-all duration-300 hover:from-primary-yellow/90 hover:to-primary-yellow/70 overflow-hidden text-lg lg:text-xl"
                aria-disabled={hasEnded}
              >
                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  {/* Icon */}
                  <div className="w-6 h-6 flex items-center justify-center">
                    {!hasEnded && (
                      <ExternalLink 
                        size={20} 
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                      />
                    )}
                  </div>
                  
                  {/* Text */}
                  <span className="outfit-bold tracking-wide">
                    {hasEnded ? "Registration Closed" : buttonText}
                  </span>
                  
                  {/* Animated Dot */}
                  {!hasEnded && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>
              </Link>

              {!disableCodeOfConduct && <CodeOfConduct />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
