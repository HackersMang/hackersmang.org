import { CodeOfConduct } from '@/components/eventpage/CodeOfConduct';
import { RegisterProps } from '@/lib/types';
import Link from 'next/link';
import React from 'react';

const CallForSpeaker = ({ registrationLink, registrationStartOn, registrationEndOn }: RegisterProps): JSX.Element | null => {
      // Convert registration dates to Date objects
    const now = new Date();
    const hasStarted = now >= (registrationStartOn ?? 0);
    const hasEnded = now > (registrationEndOn ?? 0);

      // Render only if registration has started and the link exists
    if (!hasStarted || !registrationLink || hasEnded) return null;

    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-2 lg:mb-6 px-4">
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
                {/* <Link href={registrationLink?.href} passHref */}
                <div
                    className="inline-block bg-primary text-black font-semibold py-2 px-6 mt-6 rounded-full hover:bg-primary-dark transition"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    >
                    {/* 🔥 Submit Your Proposal Here */}
                    Coming Soon!
                {/* </Link> */}
                </div>
                
                {/* <CodeOfConduct /> */}
            </div>
        </div>
    );
};

export default CallForSpeaker;
