import React from 'react';

interface ImpactStat {
    value: string;
    label: string;
    description?: string;
}

interface CommunityImpactProps {
    title?: string;
    subtitle?: string;
    stats?: ImpactStat[];
    columns?: 1 | 2 | 3 | 4;
    backgroundColor?: string;
    className?: string;
}

const defaultStats: ImpactStat[] = [
    { value: '12+', label: 'Events Hosted' },
    { value: '50+', label: 'Speakers' },
    { value: '500+', label: 'Active Members' },
];

const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export default function CommunityImpact({
    title = "Community Impact",
    subtitle,
    stats = defaultStats,
    columns = 3,
    backgroundColor = "bg-primary-yellow/70",
    className = "",
}: CommunityImpactProps) {
    return (
        <div className={`${backgroundColor} relative py-20 lg:py-32 overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-5 lg:px-12 text-left md:text-center flex flex-col items-start md:items-center justify-center gap-4 lg:gap-8">
                <h3 className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-lg lg:text-xl text-neutral-navy/80 outfit-extra-light max-w-3xl">
                        {subtitle}
                    </p>
                )}
                <div className={`grid ${columnClasses[columns]} gap-8 lg:gap-12`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="text-start md:text-center group">
                            <div className="text-5xl lg:text-6xl outfit-extra-bold text-neutral-navy mb-4 transition-all duration-300 group-hover:scale-105">
                                {stat.value}
                            </div>
                            <div className="text-lg lg:text-xl outfit-extra-light text-neutral-navy">
                                {stat.label}
                            </div>
                            {stat.description && (
                                <div className="text-sm lg:text-base outfit-extra-light text-neutral-navy/70 mt-2">
                                    {stat.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}