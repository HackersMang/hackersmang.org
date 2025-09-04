import React from 'react'
import Link from 'next/link'
import { ResourceListProps } from '@/lib/types'
import ResourceList from './ResourceList'

const Resources: React.FC<ResourceListProps> = ({ resources }) => {
  // Return null if there are no resources
  if (!resources.length) return null

  return (
    <section className="flex flex-col px-2 pt-2 lg:px-4 lg:py-4 items-center justify-center w-full">
      <h3 className="text-xl lg:text-2xl text-primary mt-4 mb-2">Event Resources</h3>
      <div className="mx-6 lg:mx-0">
        <p className="w-full max-w-screen-md text-lg md:text-xl text-center leading-relaxed mb-6 text-neutral">
          Access presentations and additional materials from our speakers. All resources are free to download and use in accordance with our <Link href="/cofc" passHref target="_blank" className="underline">Code of Conduct</Link>.
        </p>
      </div>
      <ResourceList resources={resources} />
    </section>
  )
}

export default Resources
