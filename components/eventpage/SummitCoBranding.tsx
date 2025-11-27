import Image from 'next/image';
import React from 'react';
import { SummitAffiliationConfig } from '@/lib/types';

interface SummitCoBrandingProps {
    config: SummitAffiliationConfig;
}

const SummitCoBranding: React.FC<SummitCoBrandingProps> = ({ config }) => {
    if (!config.isEnabled) {
        return null;
    }

    const defaultTagline = "Official Pre-Summit Event of the India - AI Impact Summit 2026";

    return (
        <div className="relative w-full mb-6 lg:mb-8">
            <div className="bg-neutral-white p-0 md:p-6 lg:p-8 rounded-2xl relative overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="bg-neutral-white rounded-xl p-4">
                        <Image
                            src="/ai-impact-summit-2026/logo.png"
                            alt={`${config.summitName} Logo`}
                            width={680}
                            height={272}
                            className="object-contain w-[240px] sm:w-[260px] lg:w-[340px] h-auto"
                            priority
                            quality={100}
                            sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 340px"
                        />
                    </div>
                    <h2 className="text-xl md:text-2xl text-neutral-navy outfit-bold mb-1">
                        {config.tagline || defaultTagline}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SummitCoBranding;

