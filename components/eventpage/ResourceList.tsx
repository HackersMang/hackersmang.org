import Link from "next/link"
import { FileText, ExternalLink, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceListProps } from "@/lib/types"

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  return (
    <div className="grid gap-3 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <Card key={resource.title} className="bg-[#1d1d1c] border-zinc-800">
          <CardHeader className="lg:min-h-32">
            <div>
              <CardTitle className="text-secondary text-base md:text-xl font-bold">{resource.title}</CardTitle>
              <CardDescription className="text-neutral mt-2">
                Presented by {resource.speaker}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-2 pt-0 lg:p-6 lg:pt-0">
            <div className="space-y-2">
              {resource.resources.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start border-neutral/40 hover:bg-neutral/40 text-neutral"
                  asChild
                >
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.type === "presentation" && <FileText className="mr-2 h-4 w-4 text-neutral" />}
                    {item.type === "code" && <Code className="mr-2 h-4 w-4 text-neutral" />}
                    {item.type === "external" && <ExternalLink className="mr-2 h-4 w-4 text-neutral" />}
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ResourceList
