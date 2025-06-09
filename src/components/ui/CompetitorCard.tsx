import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Competitor } from "@/types"

interface CompetitorCardProps {
  competitor: Competitor
  country: string
  className?: string
}

export function CompetitorCard({ competitor, country, className }: CompetitorCardProps) {
  return (
    <Link to={`/search/${country}/${competitor.name.toLowerCase()}`}>
      <div 
        className={cn(
          "group relative overflow-hidden rounded-lg border bg-card p-4 cursor-pointer transition-all hover:shadow-lg hover:scale-105 h-24 flex items-center justify-center",
          className
        )}
      >
        <div className="text-center">
          <h3 className="font-semibold text-card-foreground text-sm">{competitor.name}</h3>
        </div>
      </div>
    </Link>
  )
}