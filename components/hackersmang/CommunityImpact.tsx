export default function CommunityImpact() {
    return (
        <div className="bg-primary-yellow/70 relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 text-left md:text-center flex flex-col items-start md:items-center justify-center gap-4 lg:gap-8">
                <h3 className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
                    Community Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="text-start md:text-center">
                        <div className="text-5xl lg:text-6xl outfit-extra-bold text-neutral-navy mb-4">500+</div>
                        <div className="text-lg lg:text-xl outfit-extra-light text-neutral-navy">Active Members</div>
                    </div>
                    <div className="text-start md:text-center">
                        <div className="text-5xl lg:text-6xl outfit-extra-bold text-neutral-navy mb-4">5+</div>
                        <div className="text-lg lg:text-xl outfit-extra-light text-neutral-navy">Events Hosted</div>
                    </div>
                    <div className="text-start md:text-center">
                        <div className="text-5xl lg:text-6xl outfit-extra-bold text-neutral-navy mb-4">100+</div>
                        <div className="text-lg lg:text-xl outfit-extra-light text-neutral-navy">Speakers</div>
                    </div>
                </div>
            </div>
        </div>
    )
}