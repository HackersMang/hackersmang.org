import React from 'react'
import Link from 'next/link'
import { ResourceListProps } from '@/lib/types'
import ResourceList from './ResourceList'

const Resources: React.FC<ResourceListProps> = ({ resources }) => {
  // Return null if there are no resources
  if (!resources.length) return null

  return (
    <section className="relative bg-primary-yellow/70 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-left lg:text-center mb-8 lg:mb-12 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
          <span className="text-xl lg:text-2xl font-bold outfit-extra-light text-neutral-navy tracking-tight">
            Event Resources
          </span>
          <h3 className="text-2xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy mb-4 lg:mb-6 tracking-tight">
            Access presentations and materials from our speakers
          </h3>
          <p className="text-lg lg:text-xl text-neutral-navy/80 outfit-extra-light leading-relaxed max-w-4xl">
            All resources are free to download and use in accordance with our <Link href="/cofc" passHref target="_blank" className="text-neutral-navy hover:text-neutral-navy/80 hover:underline transition-colors font-semibold">Code of Conduct</Link>.
          </p>
        </div>
        
        <ResourceList resources={resources} />
      </div>
    </section>
  )
}

export default Resources
