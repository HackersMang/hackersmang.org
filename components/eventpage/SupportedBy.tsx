import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Partner } from '@/lib/types';

interface SupportedByProps {
    partners: Partner[];
}

const SupportedBy: React.FC<SupportedByProps> = ({ partners }) => {
    if (!partners || partners.length === 0) {
        return null;
    }

    return (
        <section className="relative bg-neutral-white py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="text-left lg:text-center mb-12 lg:mb-16 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
                    <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                        Supported by
                    </span>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {partners.map((partner, index) => (
                        <div
                            key={`${partner.label}-${partner.logoPath}`}
                            className="relative bg-secondary-yellow/30 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group border border-primary-yellow/20"
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-yellow/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-yellow/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                                {/* Label */}
                                <div className="w-full text-center">
                                    <span className="text-lg lg:text-xl font-semibold text-neutral-navy outfit-extra-bold tracking-tight">
                                        {partner.label}
                                    </span>
                                </div>

                                {/* Logo Container */}
                                {partner.url ? (
                                    <Link
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-neutral-white rounded-2xl p-6 lg:p-8 shadow-lg border border-primary-yellow/30 transition-transform duration-300 group-hover:shadow-xl w-full flex items-center justify-center min-h-[180px] hover:scale-105 cursor-pointer"
                                    >
                                        <Image
                                            src={partner.logoPath}
                                            alt={partner.alt}
                                            width={400}
                                            height={200}
                                            className="object-contain w-full h-auto max-w-[280px] lg:max-w-[320px]"
                                            priority={index < 2}
                                            quality={100}
                                            sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                                        />
                                    </Link>
                                ) : (
                                    <div className="bg-neutral-white rounded-2xl p-6 lg:p-8 shadow-lg border border-primary-yellow/30 transition-transform duration-300 group-hover:shadow-xl w-full flex items-center justify-center min-h-[180px]">
                                        <Image
                                            src={partner.logoPath}
                                            alt={partner.alt}
                                            width={400}
                                            height={200}
                                            className="object-contain w-full h-auto max-w-[280px] lg:max-w-[320px]"
                                            priority={index < 2}
                                            quality={100}
                                            sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Corner Accents */}
                            <div className="hidden md:block absolute top-0 left-0 w-6 h-6 bg-secondary-yellow transform rotate-45 -translate-x-3 -translate-y-3 transition-all duration-300 group-hover:scale-110 opacity-60"></div>
                            <div className="hidden md:block absolute bottom-0 right-0 w-6 h-6 bg-secondary-yellow transform rotate-45 translate-x-3 translate-y-3 transition-all duration-300 group-hover:scale-110 opacity-60"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportedBy;
