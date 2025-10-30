import Link from 'next/link'
import React from 'react'

export const CodeOfConduct = () => {
    return (
        <div className="text-center">
            <p className="text-sm text-neutral-navy outfit-extra-light leading-relaxed">
                Please review{" "}
                <Link href="/cofc" target="_blank" className="font-bold underline">
                    Code of Conduct
                </Link>{" "}
                before submitting the form.
            </p>
        </div>
    )
}
