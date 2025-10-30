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
    <div className="relative bg-neutral-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10 w-full">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="bg-neutral-white/95 py-8 lg:p-10 relative overflow-hidden transition-all duration-500 hover:md:scale-[1.02] hover:md:shadow-lg group w-full">
            {/* Animated Background Glow */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-primary-yellow/5 via-transparent to-primary-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Interconnected Corner Cuts with Animation */}
            <div className="hidden md:block absolute top-0 left-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 -translate-x-4 -translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>
            <div className="hidden md:block absolute bottom-0 right-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 translate-x-4 translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 -translate-x-4 translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>
            <div className="hidden md:block absolute top-0 right-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 translate-x-4 -translate-y-4 transition-all duration-300 group-hover:bg-primary-yellow/90 group-hover:scale-110"></div>

            <div className="relative z-10 flex flex-col items-start justify-start md:items-center md:justify-center">
              {/* Registration Button with Enhanced Animation */}
              <Link
                href={registrationLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-yellow to-primary-yellow/80 text-neutral-navy font-semibold rounded-2xl border border-primary-yellow/30 transition-all duration-300 hover:from-primary-yellow/90 hover:to-primary-yellow/70 overflow-hidden text-lg lg:text-xl hover:md:scale-105 hover:md:shadow-xl"
                aria-disabled={hasEnded}
              >
                {/* Animated Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/20 to-primary-yellow/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  {/* Icon with Enhanced Animation */}
                  <div className="w-6 h-6 flex items-center justify-center">
                    {!hasEnded && (
                      <ExternalLink
                        size={20}
                        className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12"
                      />
                    )}
                  </div>

                  {/* Text with Animation */}
                  <span className="outfit-bold tracking-wide transition-all duration-300 group-hover/btn:tracking-wider">
                    {hasEnded ? "Registration Closed" : buttonText}
                  </span>

                  {/* Enhanced Animated Dot */}
                  {!hasEnded && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse opacity-60 group-hover/btn:opacity-100 group-hover/btn:scale-125 transition-all duration-300"></div>
                  )}
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>

              {!disableCodeOfConduct && (
                <div className="mt-6 transition-all duration-300 group-hover:translate-y-1">
                  <CodeOfConduct />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
