import { ComingSoonProps } from '@/lib/types'
import React from 'react'

const ComingSoon = ({ title, message }: ComingSoonProps): JSX.Element | null => {

    return (
        <section className="relative bg-primary-yellow/70 py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm outfit-extra-light text-neutral-navy font-medium">
                            Coming Soon
                        </span>
                    </div>
                    
                    <div className="max-w-4xl w-full">
                        <h3 className="text-2xl lg:text-3xl text-neutral-navy outfit-extra-bold mb-6 tracking-tight">{title}</h3>

                        <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 backdrop-blur-sm text-neutral-navy p-8 rounded-2xl border border-primary-yellow/30">
                            <p className="text-lg text-neutral-navy/80 leading-relaxed outfit-extra-light">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon
