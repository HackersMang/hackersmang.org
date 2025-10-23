export default function CreativeElements() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center lg:ml-16 mt-8 lg:mt-0">
            {/* Interactive Tech Universe */}
            <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
                
                {/* Animated Background Orbits - Top Left on Large Screens */}
                <div className="absolute top-0 -left-1/4 md:-top-1/4 md:-left-1/2 w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full">
                    {/* Outer Orbit */}
                    <div className="absolute top-1/2 left-1/2 lg:top-0 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none w-80 h-80 lg:w-96 lg:h-96 border border-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full animate-spin" style={{ animationDuration: '25s' }}>
                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-primary to-primary-yellow rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
                    </div>

                    {/* Middle Orbit */}
                    <div className="absolute top-1/2 left-1/2 lg:top-0 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none w-60 h-60 lg:w-72 lg:h-72 border border-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
                        <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-gradient-to-r from-primary-yellow to-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
                    </div>

                    {/* Inner Orbit */}
                    <div className="absolute top-1/2 left-1/2 lg:top-0 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none w-40 h-40 lg:w-48 lg:h-48 border border-gradient-to-r from-primary/50 via-primary/70 to-primary/50 rounded-full animate-spin" style={{ animationDuration: '12s' }}>
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-primary to-primary-yellow rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
                    </div>
                </div>

                {/* Modern Floating Tech Elements */}
                <div className="absolute top-6 left-6 group">
                    <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 text-neutral-navy px-4 py-2 rounded-2xl text-sm font-semibold border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            AI & ML
                        </div>
                    </div>
                </div>

                <div className="absolute top-6 right-6 group">
                    <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 text-neutral-navy px-4 py-2 rounded-2xl text-sm font-semibold border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            Lightning Talks
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 group">
                    <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 text-neutral-navy px-4 py-2 rounded-2xl text-sm font-semibold border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                            Workshops
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 right-6 group">
                    <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 text-neutral-navy px-4 py-2 rounded-2xl text-sm font-semibold border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                            Live Demos
                        </div>
                    </div>
                </div>

                {/* Central Interactive Brand Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                    <div className="bg-gradient-to-br from-primary-yellow/30 to-primary-yellow/10 text-neutral-navy p-6 rounded-3xl text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 cursor-pointer z-50 border border-primary-yellow/40">
                        <div className="text-lg font-bold outfit-extra-bold mb-1">HackersMang</div>
                        <div className="text-xs text-neutral-navy/70 outfit-extra-light">Community</div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-primary-yellow rounded-full"></div>
                    </div>
                </div>

                {/* Additional Floating Elements */}
                <div className="hidden md:block absolute top-1/3 left-0 transform -translate-x-1/2 group">
                    <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 text-neutral-navy px-3 py-2 rounded-xl text-xs font-semibold border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                            Tech Talks
                        </div>
                    </div>
                </div>

                <div className="hidden md:block absolute bottom-1/3 right-0 transform translate-x-1/2 group">
                    <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 text-neutral-navy px-3 py-2 rounded-xl text-xs font-semibold border border-primary-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                            Events
                        </div>
                    </div>
                </div>

                {/* Enhanced Floating Particles */}
                <div className="absolute top-8 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping shadow-sm" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-8 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary-yellow to-primary rounded-full animate-ping shadow-sm" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping shadow-sm" style={{ animationDelay: '1.3s' }}></div>
                <div className="absolute bottom-8 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary-yellow to-primary rounded-full animate-ping shadow-sm" style={{ animationDelay: '1.9s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary-yellow rounded-full animate-ping shadow-sm" style={{ animationDelay: '2.3s' }}></div>

                {/* Subtle Geometric Shapes */}
                <div className="absolute top-1/4 right-12 w-4 h-4 bg-gradient-to-br from-primary-yellow/40 to-primary/40 rounded-sm transform rotate-45 animate-pulse shadow-sm" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-12 w-3 h-3 bg-gradient-to-br from-primary/40 to-primary-yellow/40 rounded-full animate-ping shadow-sm" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-8 w-6 h-1.5 bg-gradient-to-r from-primary-yellow/40 to-primary/40 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-1/2 right-8 w-1.5 h-6 bg-gradient-to-b from-primary/40 to-primary-yellow/40 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.8s' }}></div>
            </div>
        </div>
    )
}