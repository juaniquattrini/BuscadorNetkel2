import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Country } from "@/types"

interface CountryCardProps {
  country: Country
  className?: string
}

export function CountryCard({ country, className }: CountryCardProps) {
  return (
    <Link to={`/country/${country.code}`}>
      <div 
        className={cn(
          "group relative overflow-hidden rounded-lg border bg-card p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-105",
          className
        )}
      >
        <div className="flex items-center space-x-4">
          <span className="text-4xl">{country.flag}</span>
          <div>
            <h3 className="font-semibold text-card-foreground">{country.name}</h3>
            <p className="text-sm text-muted-foreground">ML{country.code}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}