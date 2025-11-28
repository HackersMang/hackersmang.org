import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SummitAffiliationConfig } from '@/lib/types';
import { ExternalLink } from 'lucide-react';

interface SummitCoBrandingProps {
    config: SummitAffiliationConfig;
}

const SummitCoBranding: React.FC<SummitCoBrandingProps> = ({ config }) => {
    if (!config.isEnabled) {
        return null;
    }

    return (
        <div className="relative w-full mb-6 lg:mb-8">
            {/* Main Container with Gradient Background */}
            <div className="relative bg-secondary-yellow p-6 md:p-8 lg:p-10 rounded-3xl overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col items-center justify-center gap-6 lg:gap-8">
                    {/* Summit Logo */}
                    <div className="bg-neutral-white rounded-2xl p-6 lg:p-8 shadow-lg border border-primary-yellow/30 transition-transform duration-300 hover:scale-105">
                        <Image
                            src="/ai-impact-summit-2026/logo.png"
                            alt={`${config.summitName} Logo`}
                            width={680}
                            height={272}
                            className="object-contain w-[200px] sm:w-[240px] md:w-[280px] lg:w-[360px] h-auto"
                            priority
                            quality={100}
                            sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 360px"
                        />
                    </div>

                    {/* Main Tagline */}
                    <div className="text-center space-y-4 max-w-4xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-neutral-navy outfit-bold leading-tight tracking-tight">
                            {config.tagline}
                        </h2>
                    </div>

                    {/* Motto Section */}
                    <div className="w-full max-w-3xl pt-4 border-t border-neutral-navy/10">
                        <div className="flex flex-col items-center justify-center gap-3 text-center">
                            {/* Devanagari Motto */}
                            <p className="text-2xl sm:text-3xl md:text-4xl text-neutral-navy outfit-extra-bold leading-relaxed">
                                सर्वजन हिताय । सर्वजन सुखाय
                            </p>
                            {/* English Translation */}
                            <p className="text-lg sm:text-xl md:text-2xl text-neutral-navy/80 outfit-extra-light italic">
                                WELFARE FOR ALL • HAPPINESS FOR ALL
                            </p>
                        </div>
                    </div>

                    {/* Call to Action - Summit Website Link */}
                    {config.summitWebsiteUrl && (
                        <Link
                            href={config.summitWebsiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-neutral-navy hover:text-neutral-navy transition-colors font-semibold outfit-extra-light underline"
                        >
                            <span>Learn more about {config.summitName}</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SummitCoBranding;

