import React from 'react';

// Types for dynamic configuration
interface FloatingElement {
    id: string;
    label: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center';
    size?: 'small' | 'medium' | 'large';
    animationDelay?: string;
    href?: string;
}

interface OrbitConfig {
    size: number;
    duration: string;
    direction?: 'normal' | 'reverse';
    dotSize: 'small' | 'medium' | 'large';
    dotColor: 'primary' | 'secondary' | 'mixed';
}

interface CreativeElementsProps {
    // Main content
    title?: string;
    subtitle?: string;
    
    // Floating elements
    floatingElements?: FloatingElement[];
    
    // Orbit configuration
    orbits?: OrbitConfig[];
    
    // Display options
    showOrbits?: boolean;
    showParticles?: boolean;
    showGeometricShapes?: boolean;
    
    // Styling
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

// Default configurations
const defaultFloatingElements: FloatingElement[] = [
    { id: 'ai-ml', label: 'AI & ML', position: 'top-left', animationDelay: '0s' },
    { id: 'lightning-talks', label: 'Lightning Talks', position: 'top-right', animationDelay: '0.5s' },
    { id: 'workshops', label: 'Workshops', position: 'bottom-left', animationDelay: '1s' },
    { id: 'live-demos', label: 'Live Demos', position: 'bottom-right', animationDelay: '1.5s' },
    { id: 'tech-talks', label: 'Tech Talks', position: 'left-center', size: 'small', animationDelay: '2s' },
    { id: 'events', label: 'Events', position: 'right-center', size: 'small', animationDelay: '2.5s' },
];

const defaultOrbits: OrbitConfig[] = [
    { size: 96, duration: '25s', direction: 'normal', dotSize: 'large', dotColor: 'mixed' },
    { size: 72, duration: '18s', direction: 'reverse', dotSize: 'medium', dotColor: 'mixed' },
    { size: 48, duration: '12s', direction: 'normal', dotSize: 'small', dotColor: 'mixed' },
];

const sizeConfig = {
    small: { container: 'w-64 h-64', lg: 'lg:w-80 lg:h-80' },
    medium: { container: 'w-80 h-80', lg: 'lg:w-[420px] lg:h-[420px]' },
    large: { container: 'w-96 h-96', lg: 'lg:w-[500px] lg:h-[500px]' },
};

export default function CreativeElements({
    title = "HackersMang",
    subtitle = "Community",
    floatingElements = defaultFloatingElements,
    orbits = defaultOrbits,
    showOrbits = true,
    showParticles = true,
    showGeometricShapes = true,
    size = 'medium',
    className = "",
}: CreativeElementsProps) {
    const sizeClasses = sizeConfig[size];

    const getPositionClasses = (position: FloatingElement['position']) => {
        const positions = {
            'top-left': 'top-6 left-6',
            'top-right': 'top-6 right-6',
            'bottom-left': 'bottom-6 left-6',
            'bottom-right': 'bottom-6 right-6',
            'top-center': 'top-6 left-1/2 transform -translate-x-1/2',
            'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2',
            'left-center': 'top-1/3 left-0 transform -translate-x-1/2',
            'right-center': 'bottom-1/3 right-0 transform translate-x-1/2',
        };
        return positions[position];
    };

    const getSizeClasses = (elementSize?: string) => {
        const sizes = {
            small: 'px-3 py-2 rounded-xl text-xs',
            medium: 'px-4 py-2 rounded-2xl text-sm',
            large: 'px-6 py-3 rounded-2xl text-base',
        };
        return sizes[elementSize as keyof typeof sizes] || sizes.medium;
    };

    const getDotSizeClasses = (dotSize: string) => {
        const sizes = {
            small: 'w-1.5 h-1.5',
            medium: 'w-2 h-2',
            large: 'w-3 h-3',
        };
        return sizes[dotSize as keyof typeof sizes] || sizes.medium;
    };

    const getDotColorClasses = (dotColor: string) => {
        const colors = {
            primary: 'bg-gradient-to-r from-neutral-navy to-primary-yellow',
            secondary: 'bg-gradient-to-r from-primary-yellow to-neutral-navy',
            mixed: 'bg-gradient-to-r from-neutral-navy to-primary-yellow',
        };
        return colors[dotColor as keyof typeof colors] || colors.mixed;
    };

    return (
        <div className={`relative z-10 flex flex-col items-center justify-center lg:ml-16 mt-8 lg:mt-0 ${className}`}>
            {/* Interactive Tech Universe */}
            <div className={`relative ${sizeClasses.container} ${sizeClasses.lg}`}>
                
                {/* Animated Background Orbits */}
                {showOrbits && (
                    <div className="absolute top-0 -left-1/4 md:-top-1/4 md:-left-1/2 w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full">
                        {orbits.map((orbit, index) => (
                            <div
                                key={index}
                                className={`absolute top-1/2 left-1/2 lg:top-0 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none w-${orbit.size} h-${orbit.size} lg:w-${orbit.size} lg:h-${orbit.size} border border-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full animate-spin`}
                                style={{ 
                                    animationDuration: orbit.duration,
                                    animationDirection: orbit.direction || 'normal'
                                }}
                            >
                                <div className={`absolute top-0 left-1/2 ${getDotSizeClasses(orbit.dotSize)} ${getDotColorClasses(orbit.dotColor)} rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg`}></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Dynamic Floating Tech Elements */}
                {floatingElements.map((element, index) => (
                    <div key={element.id} className={`absolute ${getPositionClasses(element.position)} group`}>
                        <div className={`bg-gradient-to-br from-primary-yellow/70 to-primary-yellow/20 text-neutral-navy ${getSizeClasses(element.size)} font-semibold border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default`}>
                            {element.href ? (
                                <a href={element.href} className="flex items-center gap-2">
                                    <div className={`${getDotSizeClasses(element.size || 'medium')} bg-neutral-navy rounded-full animate-pulse`} style={{ animationDelay: element.animationDelay }}></div>
                                    {element.label}
                                </a>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className={`${getDotSizeClasses(element.size || 'medium')} bg-neutral-navy rounded-full animate-pulse`} style={{ animationDelay: element.animationDelay }}></div>
                                    {element.label}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Central Interactive Brand Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                    <div className="bg-gradient-to-br from-primary-yellow/70 to-primary-yellow/20 text-neutral-navy p-6 rounded-3xl text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 cursor-default z-50 border border-primary-yellow/40">
                        <div className="text-lg font-bold outfit-extra-bold mb-1">{title}</div>
                        <div className="text-xs text-neutral-navy/70 outfit-extra-light">{subtitle}</div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-primary-yellow rounded-full"></div>
                    </div>
                </div>

                {/* Enhanced Floating Particles */}
                {showParticles && (
                    <>
                        <div className="absolute top-8 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping shadow-sm" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute top-8 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary-yellow to-primary rounded-full animate-ping shadow-sm" style={{ animationDelay: '0.9s' }}></div>
                        <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping shadow-sm" style={{ animationDelay: '1.3s' }}></div>
                        <div className="absolute bottom-8 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary-yellow to-primary rounded-full animate-ping shadow-sm" style={{ animationDelay: '1.9s' }}></div>
                        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping shadow-sm" style={{ animationDelay: '2.3s' }}></div>
                    </>
                )}

                {/* Subtle Geometric Shapes */}
                {showGeometricShapes && (
                    <>
                        <div className="absolute top-1/4 right-12 w-4 h-4 bg-gradient-to-br from-primary-yellow/40 to-primary/40 rounded-sm transform rotate-45 animate-pulse shadow-sm" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-1/4 left-12 w-3 h-3 bg-gradient-to-br from-primary/40 to-primary-yellow/40 rounded-full animate-ping shadow-sm" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute top-1/2 left-8 w-6 h-1.5 bg-gradient-to-r from-primary-yellow/40 to-primary/40 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '1.5s' }}></div>
                        <div className="absolute bottom-1/2 right-8 w-1.5 h-6 bg-gradient-to-b from-primary/40 to-primary-yellow/40 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.8s' }}></div>
                    </>
                )}
            </div>
        </div>
    );
}