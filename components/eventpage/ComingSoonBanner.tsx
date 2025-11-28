import React from 'react';

interface ComingSoonBannerProps {
    message?: string;
    className?: string;
}

export default function ComingSoonBanner({
    message = "More sessions coming soon",
    className = "",
}: ComingSoonBannerProps) {
    return (
        <div className={`w-full flex items-center ${className}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary-yellow rounded-full border border-primary-yellow/30">
                <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse"></div>
                <span className="text-sm lg:text-base text-neutral-navy outfit-extra-light">
                    {message}
                </span>
            </div>
        </div>
    );
}

