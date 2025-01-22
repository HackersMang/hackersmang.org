import Link from 'next/link';
import React from 'react';

const CallForSpeaker = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-2 px-4">
            <div className="shadow-lg px-4 lg:p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Call For Speakers</h3>
                <p className="text-lg text-neutral leading-relaxed mb-6">
                    We are looking for:
                </p>
                <ol className="text-left text-secondary text-lg space-y-4 list-decimal ml-6">
                    <li><span className="font-bold text-secondary">Lightning Talks</span> – Short and impactful presentations.</li>
                    <li><span className="font-bold text-secondary">Talks with Demos</span> – Share research, innovative projects, or practical demos.</li>
                    <li><span className="font-bold text-secondary">Workshops</span> – Hands-on sessions to teach skills and engage participants.</li>
                </ol>
                <p className="text-lg text-neutral leading-relaxed mt-6">
                    This is your chance to inspire and share your knowledge with the tech community. 🌟
                </p>
                <Link href="https://sessionize.com/techmang/" passHref
                    className="inline-block bg-primary text-black font-semibold py-2 px-6 mt-6 rounded-full hover:bg-primary-dark transition"
                    target="_blank"
                    rel="noopener noreferrer" >
                    🔥 Submit Your Proposal Here
                </Link>
            </div>
        </div>
    );
};

export default CallForSpeaker;
