import Link from 'next/link';
import React from 'react';

const SprintToImagine: React.FC = () => {
    const colleges = [
        {
            name: "Canara Engineering College",
            date: "19th November",
            dateShort: "Nov 19"
        },
        {
            name: "AJ Institute of Engineering and Technology",
            date: "21st November",
            dateShort: "Nov 21"
        },
        {
            name: "Shri Madhwa Vadiraja Institute of Technology and Management",
            date: "27th November",
            dateShort: "Nov 27"
        }
    ];

    return (
        <section className="relative bg-secondary-yellow py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        Pre-Event Workshops
                    </span>
                    <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
                        Sprint to Imagine Cup 2026
                    </h3>
                    <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed max-w-4xl">
                        Building the next generation of AI innovators across Mangaluru and Udupi&apos;s engineering colleges
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Side - Main Content */}
                    <div className="relative h-full">
                        <div className="bg-neutral-white/95 p-8 lg:p-12 rounded-3xl border border-primary-yellow/30 relative overflow-hidden h-full">
                            <div className="relative z-10">
                                <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed mb-6">
                                    In the run-up to <span className="font-semibold text-neutral-navy">#HMNov25</span>, we conducted &quot;<Link href="https://learn.microsoft.com/en-us/training/student-hub/" target="_blank" rel="noopener noreferrer" className="text-neutral-navy hover:underline transition-colors font-semibold">Sprint to Imagine</Link>&quot; workshops across three colleges in the Mangaluru and Udupi districts, helping students to compete in the global <Link href="https://imaginecup.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-navy hover:underline transition-colors font-semibold">Microsoft Imagine Cup 2026</Link>.
                                </p>

                                <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed mb-6">
                                    Students learned to build their very first <span className="font-semibold text-neutral-navy">Microsoft Foundry Agent Service</span>—Microsoft&apos;s trusted cloud platform that enables you to design, customize, and manage AI at scale with advanced models and enterprise security. The energy was electric – <span className="font-semibold text-neutral-navy">future AI founders in the making</span>!
                                </p>
                                <Link
                                    href="https://learn.microsoft.com/en-us/training/student-hub/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-neutral-navy hover:text-neutral-navy transition-colors font-semibold outfit-extra-light underline"
                                >
                                    <span>Learn more about Sprint to Imagine Cup</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Participating Colleges */}
                    <div className="relative h-full">
                        <div className="bg-neutral-white/95 p-8 lg:p-12 rounded-3xl border border-primary-yellow/30 relative overflow-hidden h-full">
                            <div className="relative z-10">
                                <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-6 tracking-tight">
                                    Participating Colleges
                                </h3>

                                <p className="text-base text-neutral-navy outfit-extra-light leading-relaxed mb-6">
                                    Grateful to the following colleges for hosting the “Build your code-first agent with Azure AI Foundry” workshops:
                                </p>

                                <div className="space-y-6">
                                    {colleges.map((college, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                <svg className="w-4 h-4 text-neutral-navy" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-neutral-navy outfit-extra-bold mb-1">
                                                    {college.name}
                                                </h4>
                                                <p className="text-neutral-navy outfit-extra-light leading-relaxed">
                                                    {college.date}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SprintToImagine;

