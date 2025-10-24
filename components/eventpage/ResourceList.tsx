import Link from "next/link"
import { FileText, ExternalLink, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceListProps } from "@/lib/types"

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {resources.map((resource) => (
        <div key={resource.title} className="relative bg-neutral-white/95 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:scale-105 group">
          {/* Interconnected Corner Cut */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 -translate-x-4 -translate-y-4"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 translate-x-4 translate-y-4"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 -translate-x-4 translate-y-4"></div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-primary-yellow/70 transform rotate-45 translate-x-4 -translate-y-4"></div>
          
          <div className="relative z-10">
            {/* Title */}
            <h4 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy mb-4 tracking-tight">
              {resource.title}
            </h4>
            
            {/* Speaker */}
            <p className="text-neutral-navy/80 leading-relaxed outfit-extra-light mb-6">
              Presented by {resource.speaker}
            </p>
            
            {/* Resources */}
            <div className="space-y-3">
              {resource.resources.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 w-full p-4 bg-primary-yellow/10 hover:bg-primary-yellow/20 text-neutral-navy rounded-xl border border-primary-yellow/30 hover:border-primary-yellow/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    {item.type === "presentation" && <FileText className="h-5 w-5 text-neutral-navy" />}
                    {item.type === "code" && <Code className="h-5 w-5 text-neutral-navy" />}
                    {item.type === "external" && <ExternalLink className="h-5 w-5 text-neutral-navy" />}
                  </div>
                  <span className="text-sm font-medium outfit-extra-light flex-1 text-left">
                    {item.title}
                  </span>
                  <ExternalLink className="h-4 w-4 text-neutral-navy opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResourceList
