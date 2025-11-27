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

                        <div className="relative z-10 flex flex-col items-start justify-start md:items-center md:justify-center w-fit mx-auto">
                            <Link href={config.summitWebsiteUrl} target="_blank" rel="noopener noreferrer" className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary-green to-primary-green/80 text-neutral-white font-semibold rounded-2xl border border-primary-green/30 transition-all duration-300 hover:from-primary-green/90 hover:to-primary-green/70 overflow-hidden text-lg lg:text-xl hover:scale-105 hover:shadow-xl">
                                <ExternalLink
                                    size={20}
                                    className="transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12 hidden md:block"
                                />
                                <span className="outfit-bold tracking-wide transition-all duration-300 group-hover/btn:tracking-wider">
                                    Learn More About {config.summitName}
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SummitCoBranding;

