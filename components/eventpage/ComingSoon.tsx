import { ComingSoonProps } from '@/lib/types'
import React from 'react'

const ComingSoon = ({ title, message }: ComingSoonProps): JSX.Element | null => {

    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-2 mb-4 lg:mb-6 px-4">
            <div className="shadow-lg px-4 lg:px-8 py-6 rounded-lg">
                <h3 className="text-xl lg:text-2xl font-light text-primary mt-4">{title}</h3>

                <p className="text-lg text-neutral leading-relaxed mt-2 bg-primary/10 p-4 rounded-lg">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default ComingSoon
