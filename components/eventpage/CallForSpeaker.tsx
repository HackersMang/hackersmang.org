import { CodeOfConduct } from '@/components/eventpage/CodeOfConduct';
import { RegisterProps } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import ComingSoon from './ComingSoon';
import { ExternalLink } from 'lucide-react';

const CallForSpeaker = ({ registrationLink, registrationStartOn, registrationEndOn }: RegisterProps): JSX.Element | null => {
    // Convert registration dates to Date objects
    const now = new Date();
    const hasStarted = now >= (registrationStartOn ?? 0);
    const hasEnded = now.getTime() > ((registrationEndOn instanceof Date ? registrationEndOn.getTime() : registrationEndOn ?? 0) + 24 * 60 * 60 * 1000);

    // Return null if registration has not started or the link does not exist
    if (!hasStarted || !registrationLink || hasEnded) return null;

    // Return a ComingSoon component if registration has started but the link does not exist.
    if (hasStarted && !registrationLink) {
        return (
            <ComingSoon title="Call For Speakers" message="CFA link will be available soon. Stay tuned! 🌟" />
        );
    }

    // Return the Register component if registration has started and the link exists
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-2 px-4">
            <div className="shadow-lg px-4 lg:px-8">
                <h3 className="text-xl lg:text-2xl font-light text-primary mt-4">Call For Speakers</h3>
                <p className="text-lg text-neutral leading-relaxed mb-2">
                    We are looking for:
                </p>
                <ol className="text-left text-secondary text-lg space-y-2 list-decimal ml-6">
                    <li><span className="outfit-semibold text-secondary">Lightning Talks</span> – Short and impactful presentations.</li>
                    <li><span className="outfit-semibold text-secondary">Talks with Demos</span> – Share research, innovative projects, or practical demos.</li>
                    <li><span className="outfit-semibold text-secondary">Workshops</span> – Hands-on sessions to teach skills and engage participants.</li>
                </ol>
                <p className="text-lg text-neutral leading-relaxed mt-6 mb-4">
                    This is your chance to inspire and share your knowledge with the tech community. 🌟
                </p>
                {/* <Link href={registrationLink?.href} passHref
                    className="inline-block bg-primary text-black font-semibold py-2 px-6 m-4 rounded-full hover:bg-primary-dark transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔥 Submit Your Proposal Here
                </Link> */}
                <Link
                    href={registrationLink ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 text-center text-lg font-semibold rounded-sm transition-all
                            bg-primary hover:bg-primary/90"
                    aria-disabled={hasEnded}
                >
                    <span className="text-black">{hasEnded ? "Registration Closed" : "Click here to submit your proposal"}</span>
                    {!hasEnded && <ExternalLink size={24} className="text-black" />}
                </Link>

                <CodeOfConduct />
            </div>
        </div>
    );
};

export default CallForSpeaker;
